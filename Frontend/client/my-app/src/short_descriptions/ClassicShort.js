import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class Cthulhu extends Component {
    render() {
        return (
            <div>
                <h3 className="u-text u-text-2"><Link to="/classic">Манчкин</Link></h3>
                <p className="u-text u-text-3">
                    {" "}
                    «Манчкин» — это первая и главная игра в серии Манчкин.
                    Сделаная в шуточном стиле и пародирует настольные ролевые игры.
                    Здесь не надо читать громоздкие правила или долго думать над дальнейшими действиями, 
                    как гласит девиз Манчкина: Мочи монстров, Хапай сокровища, Подставляй друзей!
                </p>
                <p className="u-text u-text-default u-text-4">
                    Теги:{" "}
                    <span style={{ textDecoration: "underline !important" }} className="u-text-custom-color-1">
                        Манчкин
                    </span>
                    ,{" "}
                    <span style={{ textDecoration: "underline !important" }} className="u-text-custom-color-1">
                        для нескольких игроков
                    </span>
                    ,{" "}
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        карточная
                    </span>
                    ,{" "}
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        экшн
                    </span>
                    ,{" "}
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        приключения
                    </span>
                    ,{" "}
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        фентези
                    </span>
                </p>
            </div>
        )
    }
}
