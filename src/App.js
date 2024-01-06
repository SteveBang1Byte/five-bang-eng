import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Lesson from "./pages/Lesson/Lesson";
import Discussion from "./pages/Discussion/Discussion";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        
        <Route path="/lesson" element={<Lesson />} />

        <Route path="/discussion" element={<Discussion />} />
      </Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
