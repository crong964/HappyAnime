'use client'

import { BigVolumeIcon } from "@/icon/BigVolumeIcon";
import { MediumVolumeIcon } from "@/icon/MediumVolumeIcon";
import { MuteVolumeIcon } from "@/icon/MuteVolumeIcon";
import { SmallVolumeIcon } from "@/icon/SmallVolumeIcon";
import React, { useEffect, useState } from "react";

interface iVolume {
    value: number;
}
export default function Volume(p: { vo: number, onChange(n: number): void }) {
    useEffect(() => {
        const handle = (e: WheelEvent) => {
            e.preventDefault()
            var cur = e.deltaY;
            var o = 4;
            if (cur < 0) {
                if (p.vo >= 100) {
                    return;
                }
                p.onChange(p.vo + o);
            } else {
                if (p.vo > 0) {
                    p.onChange(p.vo - o);
                }
            }
        }
        const f = document.getElementById("f")
        if (f) {
            f.addEventListener("wheel", handle, { passive: false })
        }

        return () => {
            f?.removeEventListener("wheel", handle)
        };
    }, [p]);
    return (
        <div
            id="f"
            className="flex f items-center cursor-pointer space-x-2 border-2 border-black hover:border-gray-400 p-2 rounded-xl"
        >
            <button>
                <VolumeCase value={p.vo} />
            </button>
            <input
                onChange={(e) => {
                    p.onChange(parseInt(e.currentTarget.value));
                }}
                type="range"
                value={p.vo}
                max={100}
                step={1}
                className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-2"
            />
        </div>
    )
}
export function VolumeCase(p: iVolume) {
    return (
        <>
            <MuteVolume value={p.value} />
            <SmallVolume value={p.value} />
            <MediumVolume value={p.value} />
            <BigVolume value={p.value} />
        </>
    );
}

function MuteVolume(p: iVolume) {
    return (
        <>
            {p.value <= 0 ? <MuteVolumeIcon className="fill-white size-4" /> : <></>}
        </>
    );
}

function SmallVolume(p: iVolume) {
    return (
        <>
            {1 <= p.value && p.value < 33 ? (
                <SmallVolumeIcon className="fill-white size-4" />
            ) : (
                <></>
            )}
        </>
    );
}
function MediumVolume(p: iVolume) {
    return (
        <>
            {33 <= p.value && p.value < 66 ? (
                <MediumVolumeIcon className="fill-white size-4" />
            ) : (
                <></>
            )}
        </>
    );
}
function BigVolume(p: iVolume) {
    return (
        <>
            {66 <= p.value ? <BigVolumeIcon className="fill-white size-4" /> : <></>}
        </>
    );
}
