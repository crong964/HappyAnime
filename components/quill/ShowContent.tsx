"use client"
import { useEffect } from "react";

export default function ShowContent(p: { content: string }) {

    useEffect(() => {
        const s = async () => {
            const Quill = await import("quill")

            const fontSizeArr = ['8px', '9px', '10px', '12px', '14px', '16px', '20px', '24px', '32px', '42px', '54px', '68px', '84px', '98px'];

            var Size = Quill.default.import('attributors/style/size') as any
            Size.whitelist = fontSizeArr


            Quill.default.register(Size, true);
            const q = new Quill.default("#editor")
            q.clipboard.dangerouslyPasteHTML(p.content, "api")
            q.enable(false)
        }
        s()
        return () => {

        };
    }, [p]);
    return <>
        <div className="hidden" dangerouslySetInnerHTML={{ __html: p.content.replaceAll("&nbsp;", ' ') }}>
        </div><div id="editor">

        </div>
    </>
}