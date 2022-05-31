import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class Cthulhu extends Component {
    render() {
        return (
            <div>
                <h3 className="u-text u-text-2"><Link to="/cthulhu">Манчкин Ктулху</Link></h3>
                <p className="u-text u-text-3">
                    {" "}
                    «Манчкин Ктулху» — это продолжение серии&nbsp;
                    <a href="https://www.mosigra.ru/Face/Show/munchkin/"
                        className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2">
                        Манчкин
                    </a>
                    . Это не дополнение, а отдельная игра, со всеми
                    прелестями Манчкина, а так же с ужасающими монстрами,
                    вдохновлёнными вселенной Лавкрафта.&nbsp;
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
