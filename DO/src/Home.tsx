import DO from "./images/do_logo.png";
import { Link } from "react-router-dom";
export default function Home(): any {
  document.title = "D.O | Deocleciano De Oliveira";
  return (
    <>
      <div className="h-base-container">
        <header className="h-header">
          <div className="h-logo-container">
            <img src={DO} alt="D.O logo" id="h-logo" />
          </div>
          <div className="h-top-container">
            <h1 id="h-titulo">D.O</h1>
            <h2 id="h-subtitulo">EM Deocleciano De Oliveira</h2>
          </div>
          <div className="h-msg-container">
            <h3 id="h-msg">A 100 anos preparando para o...</h3>
            <h4 id="h-msg-part">Futuro!</h4>
          </div>
          <main className="h-main">
            <div className="h-main-container">
              <p id="h-about">
                Seja bem-vindo ao site oficial da escola Municipal Deocleciano
                De Oliveira! Para entrar no site (de verdade) clique no botão
                abaixo
              </p>
              <div className="h-button-container">
                <Link to="/app" id="h-button">
                  Clique aqui!
                </Link>
              </div>
            </div>
          </main>
        </header>
        <p>
          <a href="https://github.com/schweinsteiger-f/">
            schweinsteiger-f© "All rights reserved"
          </a>
        </p>
      </div>
    </>
  );
}
