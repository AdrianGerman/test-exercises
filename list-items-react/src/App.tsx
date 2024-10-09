import "./App.css"

function App() {
  return (
    <>
      <aside>
        <h1>Prueba de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form action="">
          <label htmlFor="">
            Elemento a introducir:{"   "}
            <input
              type="text"
              name="item"
              required
              placeholder="Practicar ingles..."
            />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>
        <ul>
          <li>Videojuegos</li>
          <li>Libros</li>
          <li>Películas</li>
          <li>Series</li>
          <li>Dibujar</li>
        </ul>
      </section>
    </>
  )
}

export default App
