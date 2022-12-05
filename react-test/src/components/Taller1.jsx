import React from "react";
import "./styles/Taller1.css";
import image from "./assets/image.jpg";
import correo from "./assets/correo.png";
import telefono from "./assets/telefono.png";
import candado from "./assets/candado.png";
import hombre from "./assets/hombre.png";
import lista from "./assets/lista.png"
import mapa from "./assets/mapa.png"
import logo from "./assets/logo.svg"

class Taller extends React.Component {
  state = {};

  render() {
    // const { name, country, email } = this.props.objeto;

    return (
      <div className="card">
        <img src={image} className="App-logo" alt="John" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="div">
          <p className="email">My email address is</p>
          <p className="title">jenny.jenkins@example.com</p>
          <a className="a" href="#">
            <img src={hombre}></img>
          </a>
          <a className="a" href="#">
            <img src={correo}></img>
          </a>
          <a className="a" href="#">
            <img src={lista}></img>
          </a>
          <a className="a" href="#">
            <img src={mapa}></img>
          </a>
          <a className="a" href="#">
            <img src={telefono}></img>
          </a>
          <a className="a" href="#">
            <img src={candado}></img>
          </a>
          
        </div>
      </div>
    );
  }
}

export default Taller;
