import { useState } from "react"
import "./App.css"

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`
  timestamp: number
  text: string
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Videojuegos"
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Libros"
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Películas"
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Música"
  }
]

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const input = elements.namedItem("item")
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now()
    }

    setItems((prevItem) => {
      return [...prevItem, newItem]
    })
    input.value = ""
  }

  return (
    <main>
      <aside>
        <h1>Prueba de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit}>
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
          {items.map((item) => {
            return <li key={item.id}>{item.text}</li>
          })}
        </ul>
      </section>
    </main>
  )
}

export default App
