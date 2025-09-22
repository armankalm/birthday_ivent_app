import React, { useState, useRef } from "react";
import MusicCircle from "./MusicCircle";

export default function InvitationStart() {


    return (
        <div className="birthday-wrapper">

            <MusicCircle/>

            {/* Контент */}
            <div className="birthday-content">
                <h1 className="title1">Ардан</h1>
                <h2 className="title2">Тұсаукесер</h2>
                <h3 className="title3">1 жас</h3>
            </div>
        </div>
    );
}
