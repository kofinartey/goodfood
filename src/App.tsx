import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { DashboardLayout } from "./layout/dashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { FoodOrder } from "./pages/FoodOrder";
import { ManageMenu } from "./pages/ManageMenu";
import { CustomerReview } from "./pages/CustomerReview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="food-order" element={<FoodOrder />} />
            <Route path="manage-menu" element={<ManageMenu />} />
            <Route path="customer-review" element={<CustomerReview />} />
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
