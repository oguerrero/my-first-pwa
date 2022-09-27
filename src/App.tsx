import React, { useState } from 'react'
import './App.css'
import { Ejercicio67 } from './Ejercicio67'

function App() {
  const initialState: string[] = []

  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState(initialState)

  const addNewItem = () => {
    setItems([...items, newItem])
    setNewItem('')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>** Proyecto PWA - Lista de Compras v2 **</h1>
        <div>
          <Ejercicio67 />
          <input
            placeholder='Item'
            type='text'
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addNewItem()}
            value={newItem}
            style={{ padding: '8px 15px' }}
          />
          <button
            onClick={addNewItem}
            style={{
              marginLeft: '15px',
              background: 'slateblue',
              border: '0',
              borderRadius: '15px',
              padding: '10px 15px',
              color: 'white',
              fontWeight: 'bold'
            }}>
            Añadir
          </button>
        </div>
        <div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App
