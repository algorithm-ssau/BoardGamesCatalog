import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class Cthulhu extends Component {
    render() {
        return (
            <div className='long-descripton'>
                <p className="u-text u-text-default">Количество игроков от 3 до 6</p>
                <p>Время партии от 30 минут</p>
                <p className="u-text u-text-default u-text-4">
                    Теги:{" "}
                    <span style={{ textDecoration: "underline !important" }} className="u-text-custom-color-1">
                        Манчкин, {" "}
                    </span>
                    <span style={{ textDecoration: "underline !important" }} className="u-text-custom-color-1">
                        для нескольких игроков, {" "}
                    </span>
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        карточная, {" "}
                    </span>
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        экшн, {" "}
                    </span>
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        приключения, {" "}
                    </span>
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        фентези, {" "}
                    </span>
                </p>
            </div>
        )
    }
}
