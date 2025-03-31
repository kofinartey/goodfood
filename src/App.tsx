import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<div>Home</div>} />
          <Route path="test" element={<div>Test</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
