import React, { useEffect, useState } from "react";

export default function CountdownSection() {
    const targetDate = new Date("2025-10-25T18:00:00");

    const calculateTimeLeft = () => {
        const difference = targetDate - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="ivent_countdown_section">

            <div className="countdown_title">Тойға дейін:</div>
            <div className="countdown_block">
                <div className="countdown_item">
                    <span>{timeLeft.days}</span>
                    <div>күн</div>
                </div>
                <div className="countdown_item">
                    <span>{timeLeft.hours}</span>
                    <div>сағат</div>
                </div>
                <div className="countdown_item">
                    <span>{timeLeft.minutes}</span>
                    <div>минут</div>
                </div>
                <div className="countdown_item">
                    <span suppressHydrationWarning>{timeLeft.seconds}</span>
                    <div>секунд</div>
                </div>
            </div>
        </section>
    );
}
