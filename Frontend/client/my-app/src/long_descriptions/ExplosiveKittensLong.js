import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class ExplosiveKittensLong extends Component {
    render() {
        return (
            <div className='long-descripton'>
                <p className="u-text u-text-default">Количество игроков – от 2 до 5</p>
                <p>Время игры – от 15 минут</p>
                <p>В свой ход игрок может разыграть карту с руки, а затем должен взять верхнюю карту из колоды. 
                    Если попался взрывной котёнок, то вы тут же выбываете из игры. 
                    Каждый игрок получает на руки по восемь случайных карт, среди которых одна специальная карта "Обезвредь". 
                    С помощью этой карты вы сможете выжить, если вытащите взрывного котика. Это самые ценные карты и их надо набирать побольше!</p>
                <h4>Одна из предложенных стратегий:</h4>
                
                <h5>Стратегия: Выжидание.</h5>
                <ol>
                    <li>Так как ограничение на количество карт в руке нет, то не стоит сразу же использовать активные карты как только их получили.</li>
                    <li>Собирайте комбинации из обычных карт, но их также можно попридержать на конец игры.</li>
                    <li>Действуйте быстро, чтобы ваши оппоненты начали теряться и использовать полезные карты.</li>
                    <li>При перемешивании карт, чаще всего кладите карту «Взрыв» 2-ой сверху.</li>
                    <li>Ценность активных карт (по опросу игроков):</li>
                    <ol>
                        <li>Подглядеть - 1/5</li>
                        <li>Одолжение - 2/5</li>
                        <li>Перемешать - 3/5</li>
                        <li>Пропустить - 4/5</li>
                        <li>Нет - 5/5</li>
                        <li>Атака - 5/5</li>
                    </ol>
                </ol>
            </div>
        )
    }
}
