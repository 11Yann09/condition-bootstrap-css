import { Component } from "react";
import { Button, Alert } from "react-bootstrap";

class Result extends Component {
  state = {
    name: "Mario",
    winner: false,
  };

  changeStatus = () => this.setState({ winner: !this.state.winner });

  render() {
    //Méthode avec if(){} else{}
    // if (this.state.winner === true) {
    //   return <div>Bravo : {this.state.name}</div>;
    // } else {
    //   return <div>Game Over !</div>;
    // }

    //Méthode avec opérateur conditionnel (ternaire) "?"
    // return this.state.winner ? (
    //   <h1>Bravo : {this.state.name}</h1>
    // ) : (
    //   <h1>Game Over !</h1>
    // );

    const result = this.state.winner ? `Bravo ${this.state.name}` : "Raté !!!";
    const classColor = this.state.winner ? "success" : "danger";

    return (
      <>
        <Alert variant={classColor} className="text-center">
          {result}
        </Alert>

        <Button
          onClick={this.changeStatus}
          variant="success"
          style={{ display: "block", margin: "5px auto" }}
        >
          Change status
        </Button>
      </>
    );
  }
}

export default Result;
