import React, { useEffect, useRef } from "react";

const MEETING_URL = "https://services.bonapartedigital.com/meetings/bonaparte";
const EMBED_SCRIPT = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

// The scheduler is served from our HubSpot custom domain, so the iframe origin
// is services.bonapartedigital.com — NOT meetings.hubspot.com, which is what
// most published examples check for. Both are accepted so the listener keeps
// working if the custom domain is ever removed.
const ALLOWED_ORIGINS = [
    "https://services.bonapartedigital.com",
    "https://meetings.hubspot.com",
];

/**
 * HubSpot Meetings inline scheduler.
 *
 * Booking completes in the iframe on our own page, which is what makes the
 * conversion trackable — a plain link to the meeting URL navigates away and
 * the conversion is lost.
 *
 * The success message carries only a boolean (`meetingBookSucceeded`); HubSpot
 * does not expose the booker's email here, so this event cannot supply
 * user_data for enhanced conversions.
 */
const MeetingEmbed = () => {
    const hasFired = useRef(false);

    useEffect(() => {
        const handleMessage = (message) => {
            if (!ALLOWED_ORIGINS.includes(message.origin)) return;
            if (!message.data || !message.data.meetingBookSucceeded) return;
            if (hasFired.current) return; // conversion counts once per visit
            hasFired.current = true;

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "schedule_call",
                value: 1800,
                currency: "USD",
            });
        };

        window.addEventListener("message", handleMessage);

        const script = document.createElement("script");
        script.src = EMBED_SCRIPT;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            window.removeEventListener("message", handleMessage);
            script.remove();
        };
    }, []);

    return (
        <div
            className="meetings-iframe-container"
            data-src={`${MEETING_URL}?embed=true`}
        />
    );
};

export default MeetingEmbed;
