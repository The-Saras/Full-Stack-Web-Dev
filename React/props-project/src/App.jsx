import { Card } from '@mui/material'

import './App.css'
import Profile from './Components/Profile'

const USERS = [
  {
    name: "Elon Musk",
    age: 56,
    Company: "Tesla",
    img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
  },
  {
    name: "Bill Gates",
    age: 67,
    Company: "Microsoft",
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQi4a8NzG1ocCbgUUZxxDLocQwDQvhod4gHC3aRRg3juK0LDsZHECn7AwMJq8WUmPFLai9IJhY5YWNLRys"
  },
  {
    name: "Mukesh Ambani",
    age: 66,
    Company: "Reliance",
    img: "https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds"
  },
  {
    name: "Saras Joshi",
    age: 20,
    Company: "Nothing",
    img: "https://avatars.githubusercontent.com/u/63579383?v=4"
  }
]

function App() {


  return (
    <>
      {USERS.map(ele => {
        return (
          <div className='c' style={{ display: "flex", justifyContent: "center", padding: 20 }}>

            <Card varint={"outlined"} style={{ width: 400, padding: 20, }}>  <Profile name={ele.name} age={ele.age} company={ele.Company} img={ele.img}></Profile></Card>
          </div>
        )
      })}
    </>
  )
}

export default App
