import { useState } from "react"
import "./App.css"

type ItemId = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id: ItemId
  timestamp: number
  text: string
}

// const INITIAL_ITEMS: Item[] = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Videojuegos"
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Libros"
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Películas"
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Música"
//   }
// ]

function App() {
  const [items, setItems] = useState<Item[]>([])

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
  const createHandleRemoveItem = (id: ItemId) => () => {
    setItems((prevItems) => {
      return prevItems.filter((currentItem) => currentItem.id !== id)
    })
  }

  return (
    <main>
      <aside>
        <h1>Prueba de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} aria-label="Añadir elementos a la lista">
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
        {items.length === 0 ? (
          <p>
            <strong>No hay elementos en la lista</strong>
          </p>
        ) : (
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {item.text}
                  <button onClick={createHandleRemoveItem(item.id)}>
                    Eliminar elemento
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
