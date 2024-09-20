import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { Form } from "./pages/Form";
function App(){

  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUs />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App;