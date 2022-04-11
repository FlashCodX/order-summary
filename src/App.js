import styles from "./styles/App.module.css";

const backgroundImage = require("./assets/background.svg").default;
const ilustration = require("./assets/illustration-hero.svg").default;
const songIcon = require("./assets/icon-music.svg").default;

const {
  app,
  background,
  card,
  banner,
  title,
  description,
  planContainer,
  innerContainer,
  planInfo,
  song,
  changeOption,
  submitBtn,
  cancelBtn,
} = styles;
function App() {
  return (
    <>
      <img className={background} src={backgroundImage} alt="bg" />
      <div className={app}>
        <main className={card}>
          <img src={ilustration} className={banner} alt="banner" />
          <section className={innerContainer}>
            <h1 className={title}>Order Sumary</h1>
            <p className={description}>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>

            <div className={planContainer}>
              <img src={songIcon} className={song} alt="song" />
              <div className={planInfo}>
                <h3>Annual Plan</h3>
                <p>$59.99/year</p>
              </div>
              <a className={changeOption} href="/">
                Change
              </a>
            </div>
            <button className={submitBtn}>Proceed to Payment</button>
            <button className={cancelBtn}>Cancel Order</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
