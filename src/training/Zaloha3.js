import { useState, useEffect } from "react"

const App = () => {
  const [quote, setQuote] = useState("Výchozí text")
  const URL = "https://api.kanye.rest/"

  const getQuote = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    const finalQuote = data["quote"]
    setQuote(finalQuote)
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div>
      <h1>{quote}</h1>
    </div>
  )
}

export default App