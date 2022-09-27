import React, { useRef } from 'react'
import axios from 'axios'

export const Ejercicio67 = () => {

    const titleHtml = useRef<HTMLInputElement>(null)
    const messageHtml = useRef<HTMLInputElement>(null)

    const sendPush =  (e: any) => {
        e.preventDefault();
        console.log(titleHtml.current!.value, messageHtml.current!.value)
        const title: string = titleHtml.current!.value
        const message: string = messageHtml.current!.value
        axios.post('http://localhost:8000/custom', { title, message })
    }

  return (
    <div>
      <h1>Ejercicio Sesiones 6 y 7</h1>
      <form onSubmit={sendPush}>
        <input type='text' id='title' placeholder='titulo' ref={titleHtml} />
        <input type='text' id='message' placeholder='mensaje' ref={messageHtml} />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
