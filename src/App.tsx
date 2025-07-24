import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/landing";
import { Login } from "./pages/login";
import { Home } from "./pages/home";

export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
