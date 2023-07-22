import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Titulos from "./components/Titulos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container className="my-5 mainPage">
        <Titulos modificador="my friend!!"></Titulos>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
