import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";

export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
