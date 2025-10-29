import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import CardForm from './components/CardForm'



function App() {
  const [count, setCount] = useState(0)
  const [items, setItem] = useState([1,2,3])
  
  
  const aggiungiItem = ()=>{
    const nuovoItem = 4;
    setItem([...items, nuovoItem])    
  }
  
  
  const [cities, setCities] = useState([
    {
      id:1,
      isVisited: true,
      title: "Tokyo",
      imgURL:"https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore quisquam ipsum rerum. Esse, maxime.",
    },
    {
      id:2,
      isVisited: false,
      title: "New York",
      imgURL:"https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore quisquam ipsum rerum. Esse, maxime.",
    },
    {
      id:3,
      isVisited: true,
      title: "Rome",
      imgURL:"https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore quisquam ipsum rerum. Esse, maxime.",
    },
    {
      id:4,
      isVisited: false,
      title: "Paris",
      imgURL:"https://plus.unsplash.com/premium_photo-1718035557075-5111d9d906d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore quisquam ipsum rerum. Esse, maxime.",
    },
  ]);

    const addCity = (city) => {
          setCities([...cities, city])
      }

  return (
    <>
      
      <CardForm addCity={addCity}></CardForm>

      <div className='grid grid-cols-4 gap-5'>
      {cities
      // .filter((city) => city.isVisited)
      .map((city)=> (
        <Card 
          key={city.id}
          title={city.title}
          isVisited={city.isVisited}
          imgURL={city.imgURL}>
            {city.desc}
        </Card>
      ))}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={aggiungiItem}>
          Prova
        </button>
      </div>
    </>
  )
}

export default App
