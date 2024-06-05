import Homepage from './Pages/Homepage'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css'



function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
