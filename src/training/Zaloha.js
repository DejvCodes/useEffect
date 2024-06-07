import { useState, useEffect } from "react"

const App = () => {
  const [value, setValue] = useState(0)
  const [test, setTest] = useState(0)

  useEffect(() => {
    const button = document.querySelector(".btn")

    if (value === 0) {
      button.textContent = `Klikni`
    } else {
      button.textContent = `Klik č. ${value}`
    }
    console.log("První useEffect - Klikni")
  }, [value])

  useEffect(() => {
    document.title = `Nový titulek ${test}`
    console.log("Druhý useEffect - Klikni")
  }, [test])

  return (
    <div>
      <h1>App</h1>
      <p>{value}</p>  
      <button className="btn" onClick={() => setValue(value + 1)}>Klikni</button>
      <button onClick={() => {setTest(test + 1)}}>Titulek</button>
    </div>
  )
}

export default App