import Login from "./Components/Login"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Singin from "./Components/register"

function App() {

  return (
    <>
        <div className="w-screen h-screen  flex items-center  justify-center flex-row bg-cyan-100">
          <div className="w-2/4 h-full">logo</div>
          <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login/>} />
            <Route path="singin" element={<Singin />}></Route>
          </Routes>
          </BrowserRouter>
        </div>
    </>
  )
}

export default App
