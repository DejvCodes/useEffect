import { useState } from "react"
import Book from "./components/Book"

// Ukaž a skryj
const App = () => {
  const [show, setShow] = useState(false)

  return <div>
    <button onClick={() => {setShow(!show)}}>Ukaž / Skryj</button>
    {show && <Book />}
  </div>
}

export default App