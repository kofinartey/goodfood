import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { Dashboard } from "./layout/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<div>Dasboard</div>} />
            <Route path="food-order" element={<div>Food Order</div>} />
            <Route path="manage-menu" element={<div>Manage menu</div>} />
            <Route
              path="customer-review"
              element={<div>Customer Review</div>}
            />
            <Route path="settings" element={<div>Settings</div>} />
            <Route path="payment" element={<div>Payments</div>} />
            <Route path="accounts" element={<div>Accounts</div>} />
            <Route path="help" element={<div>Help</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
