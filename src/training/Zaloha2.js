import { useState, useEffect } from "react"

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const sizeControl = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    console.log("Já jsem useEffect");
    window.addEventListener("resize", sizeControl)
    // CleanUp function
    return () => {
      console.log("Já jsem cleanUp function")
      window.removeEventListener("resize", sizeControl)
    }
  })

  return (
    <div>
      <h1>Šířka okna</h1>
      <h2>{windowSize}</h2>
    </div>
  )
}

export default App