// Short circuit evaluation
const App = () => {
  const value = "david" // 0 a "" je false
  const value2 = 0

  const result1 = value && value2
  // první je true = vrací se druhá hodnota
  // první je false = vrací se první hodnota
  console.log(result1)

  const result2 = value || 888
  // první je true = vrací první hodnotu
  // první je false = vrací druhou hodnotu
  console.log(result2)

  return <div>
      <h1>{value2 && "Defaultní text"}</h1>
      <h1>{value2 || "Defaultní text"}</h1>
  </div>
}

export default App