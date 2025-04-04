import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { DashboardLayout } from "./layout/dashboard";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
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
