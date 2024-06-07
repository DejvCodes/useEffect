import { useState, useEffect } from "react"

const App = () => {
  const URL = "http://api.open-notify.org/iss-now.json"

  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [urlMap, setUrlMap] = useState("")

  const getCoordinates = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    setLatitude(data["iss_position"]["latitude"])
    setLongitude(data["iss_position"]["longitude"])

    const iss_Long = data["iss_position"]["longitude"]
    const iss_Lat = data["iss_position"]["latitude"]
    setUrlMap(`https://mapy.cz/zakladni?x=${iss_Long}&y=${iss_Lat}&z=8`)
  }

  useEffect(() => {
    getCoordinates()
  }, [])

  return (
    <div>
      <h1>API</h1>
      <h2>Zeměpisná šířka</h2>
      <p>{latitude}</p> <br/>
      <h2>Zeměpisná délka</h2>
      <p>{longitude}</p> <br/>
      <a href={urlMap}>Pozice ISS v mapách</a>
    </div>
  )
}

export default App