import './App.css';

function App() {
  
  return (
    
    <>
    
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
               
                <div className="u-align-left u-container-style u-layout-cell u-size-32 u-white u-layout-cell-2">
                  <div
                    className="u-container-layout u-container-layout-2"
                    src=""
                  >
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
