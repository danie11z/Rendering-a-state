import React, {Component} from "react";

class aboutMe extends Component{
  state = {
    nome: "Daniel",
    idade: 19,
    comida: "Empadão",
    msc: ["Flight 22", "Solita", "la luz"],
  };

  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>
        <ul>
          <li>{this.state.msc[1]}</li>
          <li>{this.state.msc[0]}</li>
          <li>{this.state.msc[2]}</li>
        </ul>
        <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/07/Foto-Apple-Ma%C3%A7a-PNG.png" alt="maçã" />
      </div>
    )
  }
}

export default aboutMe