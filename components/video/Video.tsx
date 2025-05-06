'use client'
import { useEffect, useRef, useState } from "react"
import { iVideo } from "./interface"
import { ExitFullscreenIcon, FullscreenIcon, PauseIcon, PlayIcon, SpeedIcon } from "@/icon"
import { ConvertSecondToTime } from "@/config"
import PipIcon from "@/icon/PipIcon"
import Hls from "hls.js"
import { VideoSpeedC } from "."
import Volume from "./Volume"


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
    const [speed, SetSpeed] = useState(1)
    const [volume, SetVolume] = useState(100)
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
        else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = p.link_m3u8;

        }
    }
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
    const rs = (ev: UIEvent) => {
        let d = window.innerWidth
        if (d <= 1024) {
            SetTypeDevice("m")
            return
        }

        SetTypeDevice("p")
    }
    useEffect(() => {
        const historys = JSON.parse(localStorage.getItem("his") || "{}") as {
            [key: string]: iVideo | undefined
        }
        let tem = historys[p.slug]
        if (tem) {
            tem.url = p.url
            tem.time = Date.now() + ""
        } else {
            tem = {
                link_m3u8: p.link_m3u8,
                nameMovie: p.nameMovie, poster_url: p.poster_url, slug: p.slug, thumb_url: p.thumb_url
                , time: "", url: p.url
            }
            tem.time = Date.now() + ""
        }

        historys[p.slug] = tem
        localStorage.setItem("his", JSON.stringify(historys))


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
            }, 3000);
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
                <video id="video" onClick={() => {
                    let vi = videoref.current
                    if (vi && typeDevice == "p") {
                        console.log("vào");

                        vi.paused ? SetIsPlay(true) : SetIsPlay(false)
                        vi.paused ? vi.play() : vi.pause()
                        return
                    }


                }}

                    onTouchStart={() => {
                        SetIsMouseMove(true)
                        SetT(Date.now())
                    }}
                    onDoubleClick={(ev) => {
                        let vi = videoref.current
                        if (!vi) {
                            return
                        }
                        const width = vi.getBoundingClientRect().width
                        const left = vi.getBoundingClientRect().left
                        const x = ev.clientX - left
                        if (x < width / 2) {
                            vi.currentTime -= 10
                        } else {
                            vi.currentTime += 10
                        }


                    }}
                    ref={videoref} className="w-full h-auto">

                </video>

                {isMouseMove ?
                    <>
                        <div className=" top-0 absolute  left-0 w-full items-center bg-[#00000025] px-4">
                            <div className="py-2 font-bold">{p.nameMovie}</div>
                        </div>
                        <div className=" bottom-0 absolute  left-0 w-full items-center bg-[#00000025] px-4">
                            <div onClick={(e) => {
                                let vi = videoref.current
                                const d = e.currentTarget
                                const cur = e.pageX - d.getBoundingClientRect().x
                                if (vi) {
                                    vi.currentTime = vi.duration * (cur / d.clientWidth)
                                }
                            }}
                                className="w-full h-5 lg:h-2 hover:h-5 cursor-pointer duration-500 bg-[#ffffff23] flex-1 relative ">
                                <div className="absolute top-0  z-10" style={{ backgroundColor: "red", width: `${cur}%`, height: "100%" }}></div>
                                <div className="absolute top-0 z-0 bg-[#ffffff23]" style={{ width: `${loadedTime}%`, height: "100%" }}></div>
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
                                    }}>{!isplay ? <PlayIcon className="size-7.5 lg:size-5 hover:scale-150 duration-700" /> :
                                        <PauseIcon className="size-7.5 lg:size-5 hover:scale-150 duration-700" />}
                                    </button>
                                    <Volume onChange={(v) => {
                                        SetVolume(v)
                                        let vi = videoref.current
                                        if (vi) {
                                            vi.volume = v / 100
                                        }
                                    }} vo={volume} />
                                    <div className="mx-2">{ConvertSecondToTime(currentTime)}</div>/
                                    <div className="mx-2">{ConvertSecondToTime(duration)}</div>

                                </div>
                                <div className="flex space-x-6 py-3 items-center">
                                    <VideoSpeedC cur={speed} onchang={(v) => {
                                        let vi = videoref.current
                                        if (!vi) {
                                            return
                                        }
                                        vi.playbackRate = v
                                        SetSpeed(v)
                                    }} />

                                    <button className="hidden lg:block" onClick={() => {
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
                                        <PipIcon className="hover:scale-150 duration-700 cursor-pointer" />
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
                                            <ExitFullscreenIcon className="hover:scale-150 duration-700 size-7.5 lg:size-5 cursor-pointer" /> :
                                            <FullscreenIcon className="hover:scale-150 duration-700 size-7.5 lg:size-5 cursor-pointer" />}
                                    </button>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </> :
                    <></>
                }
            </div>
        </div >
    )
}
