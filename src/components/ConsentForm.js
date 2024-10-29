import React, { useEffect, useState, useMemo, useCallback } from "react";
import { CookieBanner } from "./CookieBanner";
import Cookies from "universal-cookie";
import PropTypes from "prop-types";

export function ConsentForm({ color }) {
    const [decisionMade, setDecisionMade] = useState(true); // start with true to avoid flashing
    const cookies = useMemo(() => new Cookies(), []);

    function gtag() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(arguments);
    }

    const sendConsent = useCallback((consent) => {
        gtag('consent', 'default', {
            'ad_storage': consent.ad_storage,
            'analytics_storage': consent.analytics_storage,
            'ad_user_data': consent.ad_user_data,
            'ad_personalization': consent.ad_personalization,
            'functionality_storage': consent.functionality_storage,
            'personalization_storage': consent.personalization_storage,
            'security_storage': consent.security_storage
        });
    }, []);

    useEffect(() => {
        if (cookies.get("CookieBanner") !== undefined) {
            setDecisionMade(true);
        } else {
            setDecisionMade(false);
        }
    }, [cookies, setDecisionMade]);

    const handleDecision = (outcome) => {
        const consent = {
            'ad_storage': outcome,
            'analytics_storage': outcome,
            'ad_user_data': outcome,
            'ad_personalization': outcome,
            'functionality_storage': outcome,
            'personalization_storage': outcome,
            'security_storage': outcome
        };

        cookies.set("CookieBanner", consent, {
            expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            path: "/",
            domain: "bonapartedigital.com"
        });

        sendConsent(consent);
        setDecisionMade(true);
    };

    return (
        decisionMade ? (
            <></>
        ) : (
            <CookieBanner
                color={color}
                header="Permission to analyze?"
                message="We collect cookies to analyze traffic and performance, but never personal data. Do we have your consent to proceed?"
                acceptText="Proceed"
                denyText="Hold Off!"
                onAccept={() => handleDecision("granted")}
                onDeny={() => handleDecision("denied")}
            />
        )
    );
}

ConsentForm.propTypes = {
    color: PropTypes.string.isRequired,
};

ConsentForm.defaultProps = {
    color: "blue",
};