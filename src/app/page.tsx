import Image from "next/image";

export default function Home() {
  return (
    <div id="site-content">
      <div className="nav-wrapper-wrap">
        <div className="nav-wrapper">
          <nav className="navegation-box">
            <ul className="navegation-box-cont">
              <li>
                {" "}
                <a
                  href="#home"
                  className="navegation-box-cont-i navegation-box-cont-i-a down-line down-line-a nav-box-i-back"
                >
                  {" "}
                  Home
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#about"
                  className="navegation-box-cont-i navegation-box-cont-i-a down-line down-line-a nav-box-i-back"
                >
                  {" "}
                  Sobre
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#skills"
                  className="navegation-box-cont-i navegation-box-cont-i-a down-line down-line-a nav-box-i-back"
                >
                  Habilidades
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#contact"
                  className="navegation-box-cont-i navegation-box-cont-i-ac"
                >
                  Contato
                </a>
              </li>
              <button id="theme-switch" className="navegation-box-cont-i">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z" />
                </svg>
              </button>
            </ul>
          </nav>
        </div>
      </div>

      <main className=" main-cont">
        <Image
          id="home"
          src="/img1.png"
          alt="profile-photo"
          className="profile-photo"
          width={320}
          height={320}
          priority
        />
        <h1 id="home">Seu nome</h1>
        <p className="title-p down-line down-line-a  ">
          {" "}
          Estudante de tecnologia
        </p>
      </main>

      <section id="about" className="about sec-boxes">
        <div className="subtitle-h2-box">
          <h2 className="subtitle  down-line down-line-a"> Sobre mim</h2>
        </div>

        <div className="about-box  subtitle-box">
          <p className="about-box-p  subtitle-box-p">
            {" "}
            Feliperem ipsum dolor sit amet consectetur, adipisicing elit.
            Molestias, tempora ad fuga nisi eaque libero aliquid dolorum dolore
            laborum nulla. Itaque inventore amet non placeat. Id ullam quos
            natus sapiente excepturi, nostrum modi nisi esse earum ipsam
            laboriosam expedita beatae voluptatibus alias inventore magni at!
            Dolorum laborum minus error, animi beatae modi nulla incidunt
            exercitationem tempora sunt quia architecto. Cumque tempora natus
            praesentium laborum similique ex? Quis dicta quasi illum a
            inventore. Totam enim id commodi excepturi vitae voluptate aut sit,
            iste odio aliquid minima optio dolores illum assumenda officiis
            eaque, porro quasi culpa nemo similique obcaecati dicta! Minus,
            sunt?
          </p>
        </div>
      </section>

      <section id="skills" className="skills sec-boxes">
        <div className="subtitle-h2-box">
          <h2 className="subtitle  down-line down-line-a"> Habilidades</h2>
        </div>

        <div className="skills-box  subtitle-box ">
          <p className="skills-box-p   subtitle-box-p">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
            tempora ad fuga nisi eaque libero aliquid dolorum dolore laborum
            nulla. Itaque inventore amet non placeat. Id ullam quos natus
            sapiente excepturi, nostrum modi nisi esse earum ipsam laboriosam
            expedita beatae voluptatibus alias inventore magni at! Dolorum
            laborum minus error, animi beatae modi nulla incidunt exercitationem
            tempora sunt quia architecto. Cumque tempora natus praesentium
            laborum similique ex? Quis dicta quasi illum a inventore. Totam enim
            id commodi excepturi vitae voluptate aut sit, iste odio aliquid
            minima optio dolores illum assumenda officiis eaque, porro quasi
            culpa nemo similique obcaecati dicta! Minus, sunt?
          </p>
        </div>
      </section>

      <section id="contact" className=" sec-boxes">
        <div className="contact">
          <div className="subtitle-h2-box">
            {" "}
            <h2 className="subtitle subtitle-contact  down-line down-line-a">
              {" "}
              Contato
            </h2>
          </div>

          <form
            action="https://formsubmit.co/seu_email"
            method="POST"
            className="form"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className="form-field form-field-s"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-field form-field-s"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Digite sua mensagem"
                rows={6}
                className="form-field"
                required
              ></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://..." />

            <div className="form-group">
              <button type="submit" className="form-btn">
                <div className="text"> Enviar </div>
                <div className="wave"></div>
              </button>{" "}
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer  nav-wrapper nav-wrapper-wrap ">
          {" "}
          <p>
            Meu Github <a href="link"> link do github</a>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}
