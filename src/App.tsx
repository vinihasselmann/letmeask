import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";
import {AuthcontextProvider} from './context/AuthContext'


function App() {
   return (
    <BrowserRouter>
        <AuthcontextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />
            <Route path="/rooms/:id" element={<Room />} />
            <Route path="/admin/rooms/:id" element={<AdminRoom />} />
          </Routes>
        </AuthcontextProvider>
    </BrowserRouter>
  );
}

export default App;

