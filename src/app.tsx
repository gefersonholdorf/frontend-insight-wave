import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/landing";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Layout } from "./layout";
import { Dashboard } from "./pages/dashboard";

export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}
