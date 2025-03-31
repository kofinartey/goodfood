import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { Dashboard } from "./layout/dashboard";

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<div>Home</div>} />
 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
