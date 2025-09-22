// MusicCircle.jsx
import React, {useRef, useState} from "react";

export default function MusicCircle() {
    const text = "Әнді қосу • Әнді қосу • Әнді қосу • ";
    const radius = 50; // радиус окружности
    const chars = text.split("");

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div >
            <audio ref={audioRef} src="/alem_cut.mp3" loop />
            <div className="music-wrapper" onClick={togglePlay}>
                <div className="circle-text spinning">
                    {chars.map((char, i) => (
                        <span
                            key={i}
                            style={{
                                transform: `rotate(${i * (360 / chars.length)}deg) translate(${radius}px)`,
                            }}
                        >
      {char}
    </span>
                    ))}
                </div>

                <img
                    src="/assets/_14.png"
                    alt="music"
                    className="music-icon"
                />
            </div>

        </div>
    );
}
