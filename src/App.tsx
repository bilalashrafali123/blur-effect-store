import "./App.scss";

const App = () => {
  return (
    <div className="glassy-ui">
      <aside className="sidebar">
        <div className="logo">D3®</div>
        <nav className="nav-icons">
          <button className="icon circle">
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
          <button className="icon home">
            <i className="fa-solid fa-house"></i>
          </button>
          <button className="icon reload">
            <i className="fa-solid fa-rotate-right"></i>
          </button>
          <button className="icon settings">
            <i className="fa-solid fa-gear"></i>
          </button>
          <button className="icon power">
            <i className="fa-solid fa-power-off"></i>
          </button>
        </nav>
      </aside>
      <main className="main-content">
        <header className="top-nav">
          <div className="links">
            <a>Moonish</a>
            <a>New In</a>
            <a>Hot Drop</a>
            <a>Collections</a>
          </div>
          <div className="right">
            <button className="lang-icon">Languages: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-solid fa-language"></i></button>
            <button className="login">Log-in / Sign-up</button>
          </div>
        </header>
        <section className="product-section">
          <div className="left-item glass">
            <p className="title">D3 SNEAKERS</p>
            <img src="/src/assets/shoe.jpg" alt="Shoe" />
            <button className="zoom">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </button>
            <p className="refresh">REFRESH</p>
          </div>
          <div className="right-item glass">
            <p className="title">D3 HOODIES</p>
            <img src="/src/assets/hoodie.jpg" alt="Hoodie" className="hoodie" />
            <p className="description">
              JACKET <span>1995</span>
            </p>
            <button className="add">Add to cart &nbsp; <i className="fa-solid fa-cart-shopping"></i></button>
          </div>
        </section>
        <footer className="bottom-banner glass">
          <img src="/src/assets/hoodie.jpg" alt="Set 23" />
          <div className="banner-text">
            <h4>NEW COSMIC©</h4>
            <p>SET 23 →</p>
          </div>
          <button className="arrow-btn">→</button>
        </footer>
      </main>
    </div>
  );
};

export default App;
