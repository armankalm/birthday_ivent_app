import { useState } from "react";

export default function InvitationForm() {

    const [attendance, setAttendance] = useState("");
    const queryParams = new URLSearchParams(window.location.search);
    const guestName = queryParams.get("name") || "қонақ";


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: guestName, // имя из URL
            attendance: attendance, // "yes" или "no"
        };

        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbwRlHfiWi4Vi0_B7RKaI494iG9qtIOnvsWKn6-5j8bLlDI2nYUROU8qY_vQPhq0oTlq/exec", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await res.json();
            console.log("Google Script response:", result);
            alert("Жауабыңыз жазылды!");
        } catch (err) {
            console.error("Error:", err);
            alert("Қате! Кейінірек көріңіз.");
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
                    />
                    Жоқ
                </label>
            </div>

            <button type="submit" className="ivent_button">Жіберу</button>
        </form>
    );
}
