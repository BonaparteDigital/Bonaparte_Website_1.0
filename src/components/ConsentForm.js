import React, { useEffect, useState, useMemo, useCallback } from "react";
import { CookieBanner } from "./CookieBanner";

export function ConsentForm() {

    const isBrowser = typeof window !== "undefined";

    // Evita crashes en SSR
    const [decisionMade, setDecisionMade] = useState(true);

    // Cookies solo existe en browser
    const cookies = useMemo(() => {
        if (!isBrowser) return null;
        const Cookies = require("universal-cookie");
        return new Cookies();
    }, [isBrowser]);

    // gtag solo en browser
    const gtag = useCallback(function () {
        if (!isBrowser) return;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(arguments);
    }, [isBrowser]);

    const sendConsent = useCallback(
        (consent) => {
            if (!isBrowser) return;
            gtag("consent", "default", consent);
        },
        [gtag, isBrowser]
    );

    useEffect(() => {
        if (!isBrowser || !cookies) return;

        if (cookies.get("CookieBanner") !== undefined) {
            setDecisionMade(true);
        } else {
            setDecisionMade(false);
        }
    }, [cookies, isBrowser]);

    const handleDecision = (outcome) => {
        if (!isBrowser || !cookies) return;

        const consent = {
            ad_storage: outcome,
            analytics_storage: outcome,
            ad_user_data: outcome,
            ad_personalization: outcome,
            functionality_storage: outcome,
            personalization_storage: outcome,
            security_storage: outcome,
        };

        cookies.set("CookieBanner", consent, {
            expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            path: "/",
            domain: "bonapartedigital.com",
        });

        sendConsent(consent);
        setDecisionMade(true);
    };

    // SSR: no mostrar nada
    if (!isBrowser) return <></>;

    return decisionMade ? (
        <></>
    ) : (
        <CookieBanner
            header="Permission to analyze?"
            message="We collect cookies to analyze traffic and performance, but never personal data. Do we have your consent to proceed?"
            acceptText="Proceed"
            denyText="Hold Off!"
            onAccept={() => handleDecision("granted")}
            onDeny={() => handleDecision("denied")}
        />
    );
}