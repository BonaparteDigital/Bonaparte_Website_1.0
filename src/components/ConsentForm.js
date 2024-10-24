import React, { useEffect, useState, useMemo, useCallback } from "react"
import { CookieBanner } from "./CookieBanner"
import Cookies from "universal-cookie"
import PropTypes from "prop-types"

export function ConsentForm({ color }) {
    const [decisionMade, setDecisionMade] = useState(false) // start with true to avoid flashing
    const cookies = useMemo(() => new Cookies(), []);

    function gtag() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(arguments);
    }

    const sendConsent = useCallback((consent) => {
        gtag('consent', 'default', consent);
    }, []);

    useEffect(() => {
        if (cookies.get("CookieBanner") !== undefined) {
            setDecisionMade(true)
        } else {
            setDecisionMade(false)
        }
    }, [cookies, setDecisionMade, sendConsent])

    const handleDecision = (outcome) => {
        const consent = {
            'ad_storage': outcome,
            'analytics_storage': outcome,
            'ad_user_data': outcome,
            'ad_personalization': outcome,
        }

        cookies.set("CookieBanner", consent, {
            expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            path: "/",
            domain: "bonapartedigital.com"
        })

        sendConsent(consent)
        setDecisionMade(true)
    }

    return (
        decisionMade ? (
            <></>
        ) : (
            <FloatingBanner
                color={color}
                header="Consent Header"
                message="Consent message"
                acceptText="Yes"
                denyText="No"
                onAccept={
                    () => {
                        handleDecision("granted")
                    }
                }
                onDeny={
                    () => {
                        handleDecision("denied")
                    }
                } />
        )
    )
}

ConsentForm.propTypes = {
    color: PropTypes.string.isRequired,
}

ConsentForm.defaultProps = {
    color: "blue",
}