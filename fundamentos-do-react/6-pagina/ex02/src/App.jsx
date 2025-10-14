import Card from "./components/Card"
import posterImg from "./assets/starwars.jpg"
import posterImg2 from "./assets/starwars2.jpg"
import posterImg3 from "./assets/starwars3.jpg"
import Button from "./components/button"


function App() {
  return (
    <>
      <h1>Exercicío 02</h1>
      <Button text="Ir ao Blog" />
      <Card title = "Pôster: Star War (1977)" posterImg = {posterImg}/>
      <Card title = "Pôster: Empire Stikes Back (1980)" posterImg = {posterImg2}/>
      <Card title = "Pôster: Return of the Jedi (1983)" posterImg = {posterImg3}/>
    </>
  )
}

export default App