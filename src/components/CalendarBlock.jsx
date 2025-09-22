import { motion } from "framer-motion";

export default function CalendarBlock() {
    const days = [
        "", "", "1", "2", "3", "4", "5",
        "6", "7", "8", "9", "10", "11", "12",
        "13", "14", "15", "16", "17", "18", "19",
        "20", "21", "22", "23", "24", "25", "26",
        "27", "28", "29", "30", "31"
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // задержка между элементами
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            className="ivent_calendar_section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="ivent_calendar_title">Той салтанаты:</div>
            <div className="ivent_calendar_date">
                25 қазан 2025 жылы<br />сағат 18:00-де
            </div>

            <div className="calendar">
                <div className="calendar-header">
                    <span>Қазан 2025</span>
                </div>

                <motion.div className="calendar-grid" variants={container}>
                    {["Дс", "Сс", "Ср", "Бс", "Жм", "Сб", "Жс"].map((d, i) => (
                        <div key={i} className="day-name">{d}</div>
                    ))}

                    {days.map((day, i) => (
                        <motion.div
                            key={i}
                            className={`day ${day === "25" ? "highlight" : ""}`}
                            variants={item}
                        >
                            {day}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
