import React, { useState, useEffect } from "react";

export default function ProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = (scrollY / (docHeight - winHeight)) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="timeline-container">
            <div
                className="progress-bar"
                style={{
                    width: `${scrollProgress}%`,
                    height: "5px",
                    backgroundColor: "#1c5d34",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    zIndex: "1000"
                }}
            ></div>
        </div>
    );
}