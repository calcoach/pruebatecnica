import { useState, useEffect } from 'react';

function App() {

  const [articulos, setArticulos] = useState([])
  const [recuperado, setRecuperado] = useState(false)


  function mostrarTabla() {
    return (
      <div>
        <p>Lista de platillos</p>
        <br></br>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre platillo</th>
              <th>Precio</th>
              <th>Ingredientes</th>
              <th>Tiempo Preparación</th>
            </tr>
          </thead>
          <tbody>
            {articulos.map(art => {
              return (
                <tr key={art.idplatillo}>
                  <td>{art.idplatillo}</td>
                  <td>{art.nameplatillo}</td>
                  <td>{art.precio}</td>
                  <td>{art.ingredientes}</td>
                  <td>{art.tiempopreparacion}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br></br>
        <br></br>
        <p>Buscar platillo</p>
        <input type="text" name='buscar_input'></input>
      </div>
    );
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/platillos')
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setArticulos(articulos)
        setRecuperado(true)
      })
  }, [])

  if (recuperado)
    return mostrarTabla()
  else
    return (<div>recuperando datos...</div>)
}

export default App