import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class ClassicShortForSelf extends Component {
    render() {
        return (
            <div>
                <h3 className="u-align-center u-text u-text-1"><Link to="/risk">Риск</Link></h3>
                <p className="u-text u-text-default">
                {" "}
                Риск с момента выхода завоевал сердца многих любителей настольных игр и продолжает это делать и по сей день. 
                Об этом говорят множество вариаций, как карт, так и правил игры. 
                Относительно простые правила и моделирование военной ситуации позволяет наслаждаться тонкостями дипломатии и тактики 
                без разучивания книг с правилами и прочих таблиц.
                </p>
                <p className="u-text u-text-default u-text-4">
                    Теги:{" "}
                    <span style={{ textDecoration: "underline !important" }} className="u-text-custom-color-1">
                        Риск
                    </span>
                    ,{" "}
                    <span style={{ textDecoration: "underline !important" }} className="u-text-custom-color-1">
                        для нескольких игроков
                    </span>
                    ,{" "}
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        стратегия
                    </span>
                    ,{" "}
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        много вариаций
                    </span>
                </p>
            </div>
        )
    }
}
