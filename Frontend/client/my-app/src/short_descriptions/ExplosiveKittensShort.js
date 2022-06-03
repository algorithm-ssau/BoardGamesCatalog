import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class RiskShort extends Component {
    render() {
        return (
            <div>
                <h3 className="u-text u-text-2"><Link to="/explosive-kittens">Взрывные котята</Link></h3>
                <p className="u-text u-text-3">
                    {" "}
                    «Взрывные котята» — это карточная игра, набравшая свою популярность на «Кикстартере». 
                    Вы тянете карты из колоды, в которой среди прочих карт замешаны взрывные котята — они сразу выкидывают вас из игры. 
                    Все остальные карты помогают избежать встречи с опасными котятами и подставить под удар друзей. 
                    Ваша задача: остаться в игре последним выжившим.
                </p>
                <p className="u-text u-text-default u-text-4">
                Теги:{" "}
                    <span style={{ textDecoration: "underline !important" }} className="u-text-custom-color-1">
                        Котята!
                    </span>
                    ,{" "}
                    <span style={{ textDecoration: "underline !important" }} className="u-text-custom-color-1">
                        карточная
                    </span>
                    ,{" "}
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        быстрая
                    </span>
                    ,{" "}
                    <span className="u-text-custom-color-1" style={{ textDecoration: "underline !important" }}>
                        простые правила
                    </span>
                </p>
            </div>
        )
    }
}
