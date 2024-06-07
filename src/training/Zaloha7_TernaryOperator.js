// Ternární operátor
const App = () => {
  const error = false

  return <div>
    {error ? <p>Chyba</p> : <div>
      <h2>Obsah stránky</h2>
      <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Voluptatem, molestias?
      </p>
    </div>}
  </div>
}

export default App