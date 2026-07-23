import { Link } from "react-router-dom";
export default function Error() {
  document.title = "Erro 404 - Page Not Found";
  return (
    <>
      <div className="e-base-container">
        <header className="e-header">
          <div className="e-top-container">
            <h1 id="e-titulo">Erro 404</h1>
            <h2 id="e-subtitulo">Page Not Found</h2>
            <h3>
              O React não encontrou esta pagina tente mudar a{" "}
              <strong>Url</strong> ou{" "}
              <strong>
                volte para a <Link to="/">pagina inicial</Link>
              </strong>
              !
            </h3>
          </div>
        </header>
        <footer>
          <p>Schweinsteiger-F</p>
        </footer>
      </div>
    </>
  );
}
