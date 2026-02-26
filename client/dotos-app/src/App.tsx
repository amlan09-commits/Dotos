import { Route, Routes } from "react-router-dom"
import Homepage from "./components/Homepage.tsx"
import Loginpage from "./components/Loginpage"
import Registerpage from "./components/Registerpage"
import Todospage from "./components/Todospage"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/register' element={<Registerpage/>}/>
      <Route path='/todos' element={<Todospage/>}/>
    </Routes>
  )
}

export default App