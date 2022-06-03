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

import RiskShort from './short_descriptions/RiskShort';
import RiskShortForSelf from './short_description_for_each_page/RiskShortForSelf';
import RiskLong from './long_descriptions/RiskLong';

import ExplosiveKittensShort from './short_descriptions/ExplosiveKittensShort';
import ExplosiveKittensShortForSelf from './short_description_for_each_page/ExplosiveKittensShortForSelf';
import ExplosiveKittensLong from './long_descriptions/ExplosiveKittensLong';


function App() {

  const [appState, setAppState] = useState([]);
  const [cardsCthulhu, setCardsCthulhu] = useState([]);
  const [cardsClassic, setCardsClassic] = useState([]);
  const [cardsRisk, setCardsRisk] = useState([]);
  const [cardsExplosiveKittens, setCardsExplosiveKittens] = useState([]);

  const [searchText, setStext] = useState(appState);

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

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/munchkin-card/ExplosiveKittens`;
    axios.get(apiUrl).then((resp) => {
      console.log('')
      console.log(resp.data);
      const allCards = resp.data;
      setCardsExplosiveKittens(allCards);
    });
  }, []);

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/munchkin-card/Risk`;
    axios.get(apiUrl).then((resp) => {
      console.log('')
      console.log(resp.data);
      const allCards = resp.data;
      setCardsRisk(allCards);
    });
  }, []);

  function changeSearchText(event) {
    console.log(event)
    setStext(event.target.value)
  }

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Router>
        <div>
          { }
          <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">

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
                            className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                            name="form"
                            style={{ padding: 10 }}
                          >
                            <div className="u-form-group u-form-name">
                              <label htmlFor="name-aa34" className="u-label">
                                Поиск
                              </label>
                              <input
                                type="text"
                                value={searchText}
                                onChange={changeSearchText}
                                placeholder="что хотите найти?"
                                id="name-aa34"
                                name="name"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                                required=""
                              />
                            </div>
                            <div className="u-align-left u-form-group u-form-submit">
                              <button
                                onClick={(event) => {
                                  event.preventDefault()
                                  const apiUrl = `${process.env.REACT_APP_API_URL}/munchkin-types/${searchText}`;
                                  axios.get(apiUrl).then((resp) => {
                                    console.log('alo')
                                    console.log(resp.data);
                                    const allCards = resp.data;
                                    setAppState(allCards);
                                  });
                                }}>
                                Найти
                              </button>

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


                    <Routes>
                      <Route path="/" element={
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
                                                case 'Risk': return <RiskShort />;
                                                case 'ExplosiveKittens': return <ExplosiveKittensShort />;
                                                default: return <p>No data</p>;
                                              }
                                            })()}
                                        </div>


                                      </div>


                                    </div>
                                    {/* </tr> */}

                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      } />
                      <Route path="/cthulhu" element={
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
                        </div>
                      } />
                      <Route path="/classic" element={
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
                        </div>
                      } />
                      <Route path="/risk" element={
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
                                      {cardsRisk.map((card) => (
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
                                  <RiskShortForSelf />
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={2}><RiskLong /></td>

                              </tr>
                            </tbody>
                          </table>
                          {"\n"}
                        </div>
                      } />
                      <Route path='/explosive-kittens' element={
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
                                      {cardsExplosiveKittens.map((card) => (
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
                                  <ExplosiveKittensShortForSelf />
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={2}><ExplosiveKittensLong /></td>

                              </tr>
                            </tbody>
                          </table>
                          {"\n"}
                        </div>
                      } />
                    </Routes>





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
      </Router>
    </>
  );
}

export default App;
