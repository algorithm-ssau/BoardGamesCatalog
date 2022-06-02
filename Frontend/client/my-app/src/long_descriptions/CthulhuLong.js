import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class Cthulhu extends Component {
    render() {
        return (
            <div className='long-descripton'>
                <p className="u-text u-text-default">Количество игроков от 3 до 6</p>
                <p>Время партии от 30 минут</p>
                <h4>Что поменялось относительно базового Манчина?</h4>
                <ul>
                    <li>Новый антураж в духе мифов Лавкрафта</li>
                    <li>Теперь нет рас</li>
                    <li>Финальный монстр — сам проснувшийся Ктулху!</li>
                    <li>Появился новый класс культистов, сильный своей численностью (и новое условие конца игры, когда все ими становятся)</li>
                </ul>
                <h4>Полезные советы по игре</h4>
                <ol>
                    <li>На ранних стадиях игры(до достижения уровня силы 10 и больше) будет очень полезен класс Монстробой, 
                        который очень поможет против низкоуровневых монстров</li>
                    <li>Если у вас на старте нет хороших карт млм вы проиграли начальный этап и являетесь самым низкоуровневым манчкином, то класс Прфессор вам в помощь</li>
                    <li>Очень сильной комбинацией явояет класс культист + Бесноватый/Бормочущий/Нечестивый/Пенящийся, чтобы получить большой бонус к атаке</li>
                    <li>При этом всегда держите при себе карту Резкий удар по голове, 
                        чтобы в случае чего лишить других возможности победить, или подарить долгожданную победу себе</li>
                </ol>
            </div>
        )
    }
}
