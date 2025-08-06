import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./Pages/home/Home"
import { List } from "./Pages/list/List";
import { Hotel } from "./Pages/hotel/Hotel";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
