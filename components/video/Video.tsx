'use client'
import { useEffect, useRef, useState } from "react"
import { iVideo } from "./interface"
import { ExitFullscreenIcon, FullscreenIcon, PauseIcon, PlayIcon } from "@/icon"
import { ConvertSecondToTime } from "@/config"
import PipIcon from "@/icon/PipIcon"
import Hls from "hls.js"


export default function VideoC(p: iVideo) {
    const videoref = useRef<HTMLVideoElement>(null)
    const [cur, SetCur] = useState(0)
    const [duration, SetDuration] = useState(0)
    const [currentTime, SetCurrentTime] = useState(0)
    const [loadedTime, SetLoadTime] = useState(0)
    const [isplay, SetIsPlay] = useState(false)
    const [isFullscreen, SetIsFullscreen] = useState(false)
    const [isMouseMove, SetIsMouseMove] = useState(false)
    const [t, SetT] = useState(0)
    const [typeDevice, SetTypeDevice] = useState("")
    const ev = (e: KeyboardEvent) => {
        if (videoref.current) {
            SetIsMouseMove(true)
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
    const rs = (ev: UIEvent) => {
        let d = window.innerWidth
        if (d <= 1024) {
            SetTypeDevice("m")
            return
        }

        SetTypeDevice("p")
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
                hls.on(Hls.Events.MANIFEST_PARSED, function (e) {
                    video.play()
                        .then(() => {
                            SetIsPlay(true)
                        })
                        .catch(() => {
                            SetIsPlay(false)
                        })
                    video.ontimeupdate = (e) => {
                        SetCur((video.currentTime / video.duration) * 100)
                        SetCurrentTime(video.currentTime)
                        SetDuration(video.duration)
                    }


                });
                hls.on(Hls.Events.FRAG_LOADED, (e) => {
                    SetLoadTime(((hls.mainForwardBufferInfo?.end || 0) / video.duration) * 100)

                })

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
        window.addEventListener("resize", rs, true)
        return () => {
            window.removeEventListener("keydown", ev, true)
            window.removeEventListener("resize", rs, true)
        }
    }, [p.link_m3u8])

    useEffect(() => {
        let f = undefined
        if (isMouseMove) {
            f = setTimeout(() => {
                SetIsMouseMove(false)
            }, 2000);
        }

        return () => {
            if (f) {
                clearTimeout(f)
            }
        }

    }, [isMouseMove, t])

    return (
        <div className="flex justify-center w-full " id="f">
            <div onMouseMove={() => {
                SetIsMouseMove(true)
                SetT(Date.now())
            }} onMouseLeave={() => {
                SetIsMouseMove(false)
            }} className={`${isFullscreen ? "h-full w-auto" : "w-full sm:w-[70%] h-auto"}  relative `}>
                <video id="video" controls={typeDevice == "m"} onClick={() => {
                    let vi = videoref.current
                    if (vi) {
                        vi.paused ? SetIsPlay(true) : SetIsPlay(false)
                        vi.paused ? vi.play() : vi.pause()
                    }
                }
                } ref={videoref} className="w-full h-auto">

                </video>

                {isMouseMove ?
                    <>
                        <div className="hidden lg:block top-0 absolute  left-0 w-full items-center bg-[#00000025] px-4">
                            <div className="py-2 font-bold">{p.nameMovie}</div>
                        </div>
                        <div className="hidden lg:block bottom-0 absolute  left-0 w-full items-center bg-[#00000025] px-4">
                            <div onClick={(e) => {
                                let vi = videoref.current
                                const d = e.currentTarget
                                const cur = e.pageX - d.getBoundingClientRect().x
                                if (vi) {
                                    vi.currentTime = vi.duration * (cur / d.clientWidth)
                                }
                            }} className="w-full h-2 hover:h-5 cursor-pointer duration-200 bg-[#ffffff23] flex-1 relative ">
                                <div className="absolute top-0 left-0 z-10" style={{ backgroundColor: "red", width: `${cur}%`, height: "100%" }}></div>
                                <div className="absolute top-0 left-0 z-0 bg-[#ffffff23]" style={{ width: `${loadedTime}%`, height: "100%" }}></div>
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
                                    }}>{!isplay ? <PlayIcon className="" /> : <PauseIcon className="" />}
                                    </button>
                                    <div className="mx-2">{ConvertSecondToTime(currentTime)}</div>/
                                    <div className="mx-2">{ConvertSecondToTime(duration)}</div>
                                    <div>

                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <button className="hidden sm:block" onClick={() => {
                                        let vi = videoref.current
                                        if (!vi) {
                                            return
                                        }
                                        if (document.pictureInPictureElement) {
                                            document.exitPictureInPicture();
                                        } else if (document.pictureInPictureEnabled) {
                                            vi.requestPictureInPicture();
                                        }
                                    }}>
                                        <PipIcon className="" />
                                    </button>
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
                                    }}>
                                        {isFullscreen ?
                                            <ExitFullscreenIcon className="" /> :
                                            <FullscreenIcon className="" />}
                                    </button>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </> :
                    <></>
                }
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