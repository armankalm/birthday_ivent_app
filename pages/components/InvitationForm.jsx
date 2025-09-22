import { useEffect, useState } from "react";

export default function InvitationForm() {
    const [attendance, setAttendance] = useState("");
    const [guestName, setGuestName] = useState("қонақ");
    const [isSubmitting, setIsSubmitting] = useState(false); // состояние для блокировки кнопки
    const [isSubmitted, setIsSubmitted] = useState(false); // состояние после успешного сохранения

    useEffect(() => {
        if (typeof window !== "undefined") {
            const queryParams = new URLSearchParams(window.location.search);
            const name = queryParams.get("name") || "қонақ";
            setGuestName(formatName(name));
        }
    }, []);

    const formatName = (name) => {
        if (!name) return "";
        return name
            .split(" ")
            .map((word) =>
                word
                    .split("-")
                    .map(
                        (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
                    )
                    .join("-")
            )
            .join(" ");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!attendance) {
            alert("Өтінеміз, таңдауыңызды көрсетіңіз!");
            return;
        }

        setIsSubmitting(true); // блокируем кнопку

        const payload = {
            name: guestName,
            attendance: attendance,
        };

        try {
            const res = await fetch("/api/save", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-Type": "application/json" },
            });

            const result = await res.json();
            console.log("Google Script response:", result);

            if (result.ok) {
                setIsSubmitted(true); // помечаем как успешно отправлено
            } else {
                alert("Қате! Кейінірек көріңіз.");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Қате! Кейінірек көріңіз.");
        } finally {
            setIsSubmitting(false); // разблокируем кнопку, если нужно
        }
    };

    return (
        <form className="ivent_form" onSubmit={handleSubmit}>
            <div className="checkbox_group">
                <label>
                    <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        checked={attendance === "yes"}
                        onChange={(e) => setAttendance(e.target.value)}
                        disabled={isSubmitting || isSubmitted} // блокировка выбора
                    />
                    Иә
                </label>
                <label>
                    <input
                        type="radio"
                        name="attendance"
                        value="no"
                        checked={attendance === "no"}
                        onChange={(e) => setAttendance(e.target.value)}
                        disabled={isSubmitting || isSubmitted}
                    />
                    Жоқ
                </label>
            </div>

            {!isSubmitted && (
                <button
                    type="submit"
                    className="ivent_button"
                    disabled={isSubmitting} // блокировка кнопки
                >
                    {isSubmitting ? "Жіберілуде..." : "Жіберу"}
                </button>
            )}

            {isSubmitted && <p style={{textAlign:"center"}}>Сіздің жауабыңыз жазылды. Рахмет!</p>}
        </form>
    );
}
