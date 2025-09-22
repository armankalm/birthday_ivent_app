import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

import InvitationStart from "./InvitationStart";
import CalendarBlock from "./CalendarBlock";
import CountdownSection from "./CountdownSection";
import InvitationForm from "./InvitationForm";

export default function ScrollPage() {

// Достаём параметр name из URL
    const queryParams = new URLSearchParams(window.location.search);
    const guestName = queryParams.get("name") || "қонақ";

    // Форматирование имени
    const formatName = (name) => {
        if (!name) return "";

        return name
            .split(" ") // делим по пробелу
            .map((word) =>
                word
                    .split("-") // делим по дефису
                    .map(
                        (part) =>
                            part.charAt(0).toUpperCase() +
                            part.slice(1).toLowerCase()
                    )
                    .join("-")
            )
            .join(" ");
    };

  return (
    <div className="container ">

        <InvitationStart />
        <section className="ivent_text_section">
            <div className="ivent_text">
                Құрметті,
                <br/>
                <span className="ivent_guest_name">{formatName(guestName)}</span>
            </div>
            <div className="ivent_text_2">
                Сіздерді немереміз
                <br/>
                <span className="ivent_name"> Арданның</span>
                <br/>
                1 жас және тұсаукесер
                <br/>
                тойына арналған
                <br/>
                ақ дастарханымыздың
                <br/>
                қадірлі қонағы
                <br/>
                болуға шақырамыз!
            </div>
        </section>
        <img className="one_num_img" src="/assets/1.png" alt=""/>
        <CalendarBlock/>
        <section className="ivent_address_section">
            <div className="ivent_address_title">Мекен-жайымыз:</div>
            <div className="ivent_address_text">
                Кордай ауылы <br/>
                Жибек жолы көшесі <br/>
                "Туран" <br/>
                мейрамханасы<br/>
            </div>
            <div className="ivent_address_img"></div>
        </section>
        <section className="ivent_masters_section">
            <div className="ivent_masters_text">
                <div>
                    Той иелері:
                </div>
                <div>
                    ата - апасы
                    <br/>
                    әке - анасы
                </div>
                <div>
                    Данияр - Бакыт
                    <br/>
                    Арман - Томирис
                </div>

            </div>
            <div className="ivent_masters_img"></div>
        </section>
        <CountdownSection/>
        <section className="ivent_question_section">
            <div className="ivent_question_title">Тойға келесіз бе?</div>
            <div className="ivent_question_block">
                <InvitationForm />
            </div>
            <div className="ivent_footer_text">
                Келіңіздер,<br />тойымыздың <br />қадірлі қонағы<br />болыңыздар!
            </div>
        </section>


    </div>
  );
}
