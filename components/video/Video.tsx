'use client'
import { useEffect, useRef, useState } from "react"
import { iVideo } from "./interface"
import { IconFullscreen, IconPause, IconPlay } from "@/icon"
import { ConvertSecondToTime } from "@/config"


export default function VideoC(p: iVideo) {
    const videoref = useRef<HTMLVideoElement>(null)
    const [cur, SetCur] = useState(0)
    const [duration, SetDuration] = useState(0)
    const [currentTime, SetCurrentTime] = useState(0)
    const [isplay, SetIsPlay] = useState(false)
    const [isFullscreen, SetIsFullscreen] = useState(false)
    const ev = (e: KeyboardEvent) => {
        if (videoref.current) {

            switch (e.key) {
                case 'ArrowRight':
                    videoref.current.currentTime += 5
                    break;
                case 'ArrowLeft':
                    videoref.current.currentTime -= 5
                    break;
                default:
                    break;
            }
        }
    }
    useEffect(() => {
        const f = async () => {
            var video = document.getElementById('video') as HTMLVideoElement;

            if (video == undefined) {
                return
            }

            if (Hls.isSupported()) {
                var hls = new Hls();
                hls.loadSource(p.link_m3u8);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    video.play()
                    video.ontimeupdate = (e) => {
                        SetCur((video.currentTime / video.duration) * 100)
                        SetCurrentTime(video.currentTime)
                        SetDuration(video.duration)
                    }
                });
            }
            // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
            // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
            // This is using the built-in support of the plain video element, without using hls.js.
            else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = p.link_m3u8;

            }
        }
        f()
        window.addEventListener("keydown", ev, true)
        return () => {
            window.removeEventListener("keydown", ev, true)
        }
    }, [p.link_m3u8])
    return (
        <div className="flex justify-center w-full " id="f">
            <div className={`${isFullscreen ? "w-full" : "w-[70%]"} h-max relative `}>
                <video id="video" onClick={() => {
                    let vi = videoref.current
                    if (vi) {
                        vi.paused ? SetIsPlay(true) : SetIsPlay(false)
                        vi.paused ? vi.play() : vi.pause()
                    }
                }
                } ref={videoref} className="w-full h-auto">

                </video>
                <div className="bottom-0 absolute  left-0 w-full items-center">
                    <div className={`w-full h-2 bg-[#ffffff] flex-1`}>
                        <div style={{ backgroundColor: "red", width: cur, height: "100%" }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <button className="mr-4" onClick={(e) => {
                                e.stopPropagation()

                                let vi = videoref.current
                                if (vi) {
                                    vi.paused ? SetIsPlay(true) : SetIsPlay(false)
                                    vi.paused ? vi.play() : vi.pause()
                                }
                            }}>{!isplay ? <IconPlay className="" /> : <IconPause className="" />}
                            </button>
                            <div className="mx-2">{ConvertSecondToTime(currentTime)}</div>/
                            <div className="mx-2">{ConvertSecondToTime(duration)}</div>
                        </div>
                        <div>
                            <button onClick={() => {
                                let r = document.getElementById("f")
                                if (r) {
                                    if (isFullscreen) {
                                        document.exitFullscreen()
                                        SetIsFullscreen(false)
                                    } else {
                                        r.requestFullscreen()
                                        SetIsFullscreen(true)
                                    }
                                }
                            }}><IconFullscreen className="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// onClick={() => {

// }} onKeyDown={(e) => {
//     if (videoref.current) {

//         switch (e.key) {
//             case 'ArrowRight':
//                 videoref.current.currentTime += 5
//                 break;
//             case 'ArrowLeft':
//                 videoref.current.currentTime -= 5
//                 break;
//             default:
//                 break;
//         }
//     }
// }} 