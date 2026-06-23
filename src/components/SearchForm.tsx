import { Form } from "react-router"

export default function SearchForm() {
  return (
    <>
      {/*action sirve para enviar el fomulario al path requerido y el metodo get sirve para quien y cuando se utilize este componente, traiga informacion, 
      entonces cuando haga click , El componente <Form> se da cuenta de que es una petición GET. Toma el atributo name de tu input (title)
      y el valor que el usuario escribió , ejemplo title:"Camisa"
      React Router junta esos datos y actualiza la barra de direcciones de tu navegador. La URL pasa de ser tusitio.com/ a ser:

      tusitio.com/?title=Camisa.
      */}
      <Form 
        action="/" 
        method="get" 
        style={{ 
          display: 'flex', 
          gap: '8px', 
          alignItems: 'center', 
          fontFamily: 'sans-serif',
          padding: '10px'
        }}
      >
        <label htmlFor="busqueda">Busqueda</label>
        <input 
          type="text" 
          name="title" 
          id="busqueda" 
          placeholder="Ej. Camisa..." 
        />
        <button type="submit">Buscar</button>
      </Form>
    </>
  )
}