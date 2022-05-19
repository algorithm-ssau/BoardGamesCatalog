import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';

function App() {

  const [appState, setAppState] = useState(
    {
      kekw: null,
    }
  )
  
  useEffect(() => {
    const apiUrl = 'http://localhost:5500/';
    axios.get(apiUrl).then((resp) => {
      //console.log('images/' + appState.kekw);
      setAppState({
        kekw: resp.data
      });
    });
  }, [setAppState]);

 
  return (
    
    <>
    <img src={process.env.PUBLIC_URL +  '/' + appState.kekw}/>
      <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
        <div
          className="menu-collapse"
          style={{ fontSize: "1rem", letterSpacing: 0 }}
        >
          <a
            className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
            href="#"
          >
            <svg className="u-svg-link" viewBox="0 0 24 24">
              <use xlinkHref="#menu-hamburger" />
            </svg>
            <svg
              className="u-svg-content"
              version="1.1"
              id="menu-hamburger"
              viewBox="0 0 16 16"
              x="0px"
              y="0px"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect y={1} width={16} height={2} />
                <rect y={7} width={16} height={2} />
                <rect y={13} width={16} height={2} />
              </g>
            </svg>
          </a>
        </div>
        <div className="u-custom-menu u-nav-container">
          <ul className="u-nav u-unstyled u-nav-1">
            <li className="u-nav-item">
              <a
                className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                href="//Главная.html"
                style={{ padding: "10px 20px" }}
              >
                Главная
              </a>
            </li>
            <li className="u-nav-item">
              <a
                className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                href="//О-нас.html"
                style={{ padding: "10px 20px" }}
              >
                О нас
              </a>
            </li>
            <li className="u-nav-item">
              <a
                className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                href="//Контакты.html"
                style={{ padding: "10px 20px" }}
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="u-custom-menu u-nav-container-collapse">
          <div className=" u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
            <div className="u-inner-container-layout u-sidenav-overflow">
              <div className="u-menu-close" />
              <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link"
                    href="//Главная.html"
                  >
                    Главная
                  </a>
                </li>
                <li className="u-nav-item">
                  <a className="u-button-style u-nav-link" href="//О-нас.html">
                    О нас
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link"
                    href="//Контакты.html"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </nav>
      <section
        className="skrollable u-align-center-lg u-align-center-md u-align-center-xl u-align-left-sm u-align-left-xs u-clearfix u-section-1"
        id="sec-5f29"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h2 className="u-text u-text-1">&nbsp;Настольные игры</h2>
          <div className="u-clearfix u-expanded-width u-gutter-10 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
              <div className="u-align-left u-container-style u-layout-cell u-size-14 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <div className="u-border-2 u-border-grey-75 u-expanded-width u-form u-radius-20 u-form-1">
                      <form
                        action="//publish.nicepage.com/Form/Process"
                        method="POST"
                        className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                        source="email"
                        name="form"
                        style={{ padding: 10 }}
                      >
                        <input
                          type="hidden"
                          id="siteId"
                          name="siteId"
                          defaultValue={1809772}
                        />
                        <input
                          type="hidden"
                          id="pageId"
                          name="pageId"
                          defaultValue={1809782}
                        />
                        <div className="u-form-group u-form-name">
                          <label htmlFor="name-aa34" className="u-label">
                            Поиск
                          </label>
                          <input
                            type="text"
                            placeholder="что хотите найти?"
                            id="name-aa34"
                            name="name"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                            required=""
                          />
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                          <a
                            href="#"
                            className="u-btn u-btn-round u-btn-submit u-button-style u-radius-9"
                          >
                            Найти
                          </a>
                          <input
                            type="submit"
                            defaultValue="submit"
                            className="u-form-control-hidden"
                          />
                        </div>
                        <div className="u-form-send-message u-form-send-success">
                          {" "}
                          Спасибо! Ваше сообщение отправлено.{" "}
                        </div>
                        <div className="u-form-send-error u-form-send-message">
                          {" "}
                          Отправка не удалась. Пожалуйста, исправьте ошибки и
                          попробуйте еще раз.{" "}
                        </div>
                        <input
                          type="hidden"
                          defaultValue=""
                          name="recaptchaResponse"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="u-align-left u-container-style u-layout-cell u-size-32 u-white u-layout-cell-2">
                  <div
                    className="u-container-layout u-container-layout-2"
                    src=""
                  >
                   <div className="u-border-2 u-border-grey-75 u-container-style u-product u-radius-26 u-shape-round u-product-1">
                      <div className="u-container-layout u-container-layout-3">
                    <img
                          className="u-image u-image-default u-image-1"
                          src="/images/28d9c796-7499-0266-dda3-b0088adb2828.jpg"
                          alt=""
                          data-image-width={1147}
                          data-image-height={856}
                        />
                    <h3 className="u-text u-text-2">Манчкин Ктулху</h3>
                    <p className="u-text u-text-3">
                          {" "}
                          «Манчкин Ктулху» — это продолжение серии&nbsp;
                          <a
                            href="https://www.mosigra.ru/Face/Show/munchkin/"
                            className="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2"
                          >
                            Манчкин
                          </a>
                          . Это не дополнение, а отдельная игра, со всеми
                          прелестями Манчкина, а так же с ужасающими монстрами,
                          вдохновлёнными вселенной Лавкрафта.&nbsp;
                        </p>
                        <p className="u-text u-text-default u-text-4">
                          Теги:{" "}
                          <span
                            style={{ textDecoration: "underline !important" }}
                            className="u-text-custom-color-1"
                          >
                            Манчкин
                          </span>
                          ,{" "}
                          <span
                            style={{ textDecoration: "underline !important" }}
                            className="u-text-custom-color-1"
                          >
                            для нескольких игроков
                          </span>
                          ,{" "}
                          <span
                            className="u-text-custom-color-1"
                            style={{ textDecoration: "underline !important" }}
                          >
                            карточная
                          </span>
                          ,{" "}
                          <span
                            className="u-text-custom-color-1"
                            style={{ textDecoration: "underline !important" }}
                          >
                            экшн
                          </span>
                          ,{" "}
                          <span
                            className="u-text-custom-color-1"
                            style={{ textDecoration: "underline !important" }}
                          >
                            монстры
                          </span>
                        </p>    
                  </div>
                </div>
                <div className="u-absolute-hcenter u-border-3 u-border-grey-dark-1 u-line u-line-horizontal u-line-1" />
                  </div>
                </div>
                <div className="u-align-left u-container-style u-layout-cell u-size-14 u-layout-cell-3">
                  <div className="u-container-layout u-container-layout-4">
                    <div className="u-expanded-width u-table u-table-responsive u-table-1">
                      <table className="right-table">
                        <colgroup>
                          <col width="100%" />
                        </colgroup>
                        <tbody className="u-table-body">
                          <tr style={{ height: 166 }}>
                            <td>
                              <span style={{ fontSize: "1.875rem" }}>
                                Последние новости
                              </span>
                              <br />
                              Релиз сайта намечен на 2022 год
                              <br />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-align-center u-clearfix u-section-2" id="sec-287a">
        <div className="u-clearfix u-sheet u-sheet-1" />
      </section>
      
    </>
  );
}

export default App;
