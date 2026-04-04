import React, { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (!EMAIL_RE.test(email)) {
            setStatus("invalid");
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch(
                "https://api.hsforms.com/submissions/v3/integration/submit/23706289/3968e95b-0467-46ab-a36f-882ef8f784ab",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        fields: [{ name: "email", value: email }],
                        context: {
                            pageUri: typeof window !== "undefined" ? window.location.href : "bonapartedigital.com",
                            pageName: "Bonaparte",
                        },
                    }),
                }
            );

            if (response.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return <p className="text-olive font-semibold text-sm">You're in. Welcome to the dispatch.</p>;
    }

    return (
        <form className="w-full max-w-sm relative" onSubmit={handleSubmit}>
            <div className="flex items-center py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-olive mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-olive-light"
                    value={email}
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Email"
                    disabled={status === "loading"}
                    required
                />
                <button
                    className="md:inline-block text-md bg-olive text-green px-6 py-2 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5 disabled:opacity-60"
                    type="submit"
                    disabled={status === "loading"}
                >
                    {status === "loading" ? "..." : "Submit"}
                </button>
                <div className="absolute bottom-0 left-0 right-0 border-b border-olive" style={{ marginRight: '100px' }}></div>
            </div>
            {(status === "invalid" || status === "error") && (
                <p className="text-red-400 text-xs mt-1">
                    {status === "invalid" ? "Please enter a valid email address." : "Something went wrong. Please try again."}
                </p>
            )}
        </form>
    );
};

export default Subscribe;
