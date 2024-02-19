import { Container, Button } from "react-bootstrap";
import Result from "./components/Game";

function App() {
  const customBtn = {
    bacgroundColor: "grey",
    border: "none",
    color: "black",
    fontSize: "19px",
    padding: "15px 30px",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "7px",
    display: "block",
    margin: "16px auto",
  };
  const sayHello = () => alert("Hello World !");
  return (
    <Container>
      <Result />

      <Button variant="warning" onClick={sayHello} style={customBtn}>
        Say Hello !
      </Button>
    </Container>
  );
}

export default App;
