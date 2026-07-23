import DO from "./images/do_logo.png";
/**
 *
 * The default paga of this website
 */
export default function Home() {
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
        </header>
        <hr id="h-divisoria1" />
        <main className="h-main">
          <div className="h-about-container">
            <h3 id="h-about-container-titulo">Sobre Este Site</h3>
            <h4 id="h-about">
              Este site foi feito por{" "}
              <a href="https://github.com/schweinsteiger-f">Schweinsteiger-F</a>
              <p>
                Olá! Seja bem-vindo ao site oficial da Escola Municipal
                Deocleciano De Oliveira! <br /> Neste site você ira ver tudo
                sobre esta maravilhosa escola e tudo o que ela tem a
                oferecer!'{" "}
              </p>
            </h4>
          </div>
        </main>
      </div>
    </>
  );
}
