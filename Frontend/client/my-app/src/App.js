import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Carousel from 'react-simply-carousel';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import CthulhuShort from './short_descriptions/CthulhuShort';
import CthulhuShortForSelf from './short_description_for_each_page/CthulhuShortForSelf';
import CthulhuLong from './long_descriptions/CthulhuLong';

import ClassicShort from './short_descriptions/ClassicShort';
import ClassicShortForSelf from './short_description_for_each_page/ClassicShortForSelf';
import ClassicLong from './long_descriptions/ClassicLong';


function App() {

  const [appState, setAppState] = useState([]);
  const [cardsCthulhu, setCardsCthulhu] = useState([]);
  const [cardsClassic, setCardsClassic] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    }
  }

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/munchkin-types`;
    axios.get(apiUrl).then((resp) => {
      console.log(resp.data);
      const allMunchkins = resp.data;
      setAppState(allMunchkins);
    });
  }, []);

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/munchkin-card/Cthulhu`;
    axios.get(apiUrl).then((resp) => {
      console.log(resp.data);
      const allCards = resp.data;
      setCardsCthulhu(allCards);
    });
  }, []);

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/munchkin-card/Classic`;
    axios.get(apiUrl).then((resp) => {
      console.log('')
      console.log(resp.data);
      const allCards = resp.data;
      setCardsClassic(allCards);
    });
  }, []);

  // state = {
  //   activeSlideIndex: 0,
  // };

  // setActiveSlideIndex = (newActiveSlideIndex) => {
  //   this.setState({
  //     activeSlideIndex: newActiveSlideIndex,
  //   });
  // };

  const [activeSlide, setActiveSlide] = useState(0);

  if (!appState || appState.length === 0) return <p>Нет данных.</p>
  return (
    <Router>
      <Routes>
        {/* <div className="App"> */}
        <Route path="/" element={
          <div>
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


                      <div className="u-align-center u-container-style u-layout-cell  u-white u-layout-cell-2 center-div">


                        {/* TABLE WITH MUCHKIN TYPES */}
                        {/* <tr key={appState.munchkins.id}> */}
                        <table>
                          <tbody>
                            {appState.map((munchkin) => (
                              <tr key={munchkin._id}>

                                <td>
                                  {console.log(process.env.PUBLIC_URL + '/' + munchkin.typeMunchkin)}
                                  <div
                                    className="u-align-center u-container-layout u-container-layout-2"
                                    src="">
                                    <div className="u-border-2 u-border-grey-75 u-container-style u-product u-radius-26 u-shape-round u-product-1">
                                      <div className="u-container-layout u-container-layout-3">
                                        <img
                                          className="u-image u-image-default u-image-1"
                                          src={process.env.PUBLIC_URL + '/munchkins_type_pictures/' + munchkin.typeMunchkin + '.jpg'}
                                          data-image-width={1147}
                                          data-image-height={856}
                                        />
                                        {
                                          (() => {
                                            console.log(munchkin.typeMunchkin);
                                            switch (String(munchkin.typeMunchkin)) {
                                              case 'Cthulhu': return <CthulhuShort />;
                                              case 'Classic': return <ClassicShort />;
                                              default: return <p>No data</p>;
                                            }
                                          })()}
                                      </div>


                                    </div>

                                    <div className="u-absolute-hcenter u-border-3 u-border-grey-dark-1 u-line u-line-horizontal u-line-1" />
                                  </div>
                                  {/* </tr> */}

                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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

          </div>} />
        <Route path="/cthulhu" element={
          <div>
            { }
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
                <h2 className="u-text u-text-1">&nbsp;<Link to="/">Настольные игры</Link></h2>
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


                      <div className="u-container-style u-layout-cell u-white u-layout-cell-2 center-div">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div className='carousel-div'>
                                  <Carousel
                                    // activeSlideIndex={activeSlide}
                                    // onRequestChange={setActiveSlide}
                                    // itemsToShow={1}
                                    // itemsToScroll={1}
                                    // ssr={true} // means to render carousel on server-side.
                                    // infinite={true}
                                    // responsive={responsive}
                                    autoPlay={false}
                                    showThumbs={false}
                                  >
                                    {cardsCthulhu.map((card) => (
                                      <div
                                        key={card._id}
                                      >
                                        <img
                                          className="u-image u-image-default u-image-2"
                                          src={process.env.PUBLIC_URL + '/cards/' + card.cardNameRus + '.jpg'}
                                        // data-image-width={600}
                                        // data-image-height={800}
                                        />
                                      </div>
                                    ))}
                                  </Carousel>
                                </div>
                              </td>
                              <td>
                                <CthulhuShortForSelf />
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}><CthulhuLong /></td>

                            </tr>
                          </tbody>
                        </table>
                        {"\n"}




                        {/* <CthulhuShort /> */}
                        {/* <p>HERE</p>

                        <p>HERE2</p> */}




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

          </div>} />
        <Route path="/classic" element={
          <div>
            { }
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
                <h2 className="u-text u-text-1">&nbsp;<Link to="/">Настольные игры</Link></h2>
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


                      <div className="u-container-style u-layout-cell u-white u-layout-cell-2 center-div">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div className='carousel-div'>
                                  <Carousel
                                    // activeSlideIndex={activeSlide}
                                    // onRequestChange={setActiveSlide}
                                    // itemsToShow={1}
                                    // itemsToScroll={1}
                                    // responsive={responsive}
                                    autoPlay={false}
                                    showThumbs={false}
                                  >
                                    {cardsClassic.map((card) => (
                                      <div
                                        key={card._id}
                                      >
                                        <img
                                          className="u-image u-image-default u-image-2"
                                          src={process.env.PUBLIC_URL + '/cards/' + card.cardNameRus + '.jpg'}
                                        // data-image-width={600}
                                        // data-image-height={800}
                                        />
                                      </div>
                                    ))}
                                  </Carousel>
                                </div>
                              </td>
                              <td>
                                <ClassicShortForSelf />
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}><ClassicLong /></td>

                            </tr>
                          </tbody>
                        </table>
                        {"\n"}




                        {/* <CthulhuShort /> */}
                        {/* <p>HERE</p>

                        <p>HERE2</p> */}




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

          </div>} />
      </Routes>
    </Router>
  );
}

export default App;
