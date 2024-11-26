import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { Form } from "./pages/Form";
import { Submitted } from "./pages/Submitted";
function App(){

  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUs />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/Submitted" element={<Submitted/>}></Route>
      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App;