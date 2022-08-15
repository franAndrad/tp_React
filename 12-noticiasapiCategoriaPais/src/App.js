import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <header className="text-center py-2 border">
        <h1>Noticias</h1>
      </header>
      <main className="my-4">
        <Formulario></Formulario>
      </main>
    </div>
  );
}

export default App;
