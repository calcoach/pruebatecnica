import React from "react";
import "./styles/ItemUsers.css";

class ItemUser extends React.Component {
  state = {};
  //const {name, country, email} = this.props;

  render() {
    const {name, country, email, telefono} = this.props.objeto;

    return (
      <div className="details">
            <p>
                <strong>Nombre: </strong> {name}
            </p>
            <p>
                <strong>Titulo Academico: </strong> {country}
            </p>
            <p>
                <strong>Correo: </strong> {email}
            </p>

            {
              telefono && <p><strong>Telefono: </strong> {telefono} </p>
            }
            

            {
              this.props.enableButton && <button>Haz clic</button>
            }
            


      </div>
    );
  }
}

export default ItemUser;
