'use client'
import { useEffect, useRef } from "react"
import { iVideo } from "./interface"


export default function VideoC(p: iVideo) {
    const videoref = useRef<HTMLVideoElement>(null)
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
    }, [p.link_m3u8])
    return (
        <div onClick={() => {

        }} onKeyDown={(e) => {
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
        }} className="w-full h-max relative ">
            <video id="video" controls ref={videoref} className="w-full h-auto ">

            </video>

        </div>
    )
}
