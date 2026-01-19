import { useEffect } from "react";

export default function Calender() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{ background: "#fff" }}>
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/h-kansara106/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ height: "100dvh" }}
            />
        </div>
    )
}