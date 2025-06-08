import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Import the new page components
import Ecommerce from "./layouts/pages/Ecommerce";
import Orders from "./layouts/pages/Orders";
import Calendar from "./layouts/pages/Calender"; // spelling must match the filename

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Dashboard Layout Route - Parent Route */}
        <Route path="/" element={<MainLayout />}>
          {/* Nested Routes - These will render inside MainLayout's Outlet */}
          {/* Default page for the dashboard */}
          <Route index element={<Ecommerce />} />{" "}
          {/* Renders Ecommerce at "/" */}
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="orders" element={<Orders />} />
          <Route path="calendar" element={<Calendar />} />
          {/* Add more routes here as we create other pages/apps */}
          {/* Example placeholders for now: */}
          <Route path="employees" element={<h1>Employees Page</h1>} />
          <Route path="customers" element={<h1>Customers Page</h1>} />
          <Route path="kanban" element={<h1>Kanban App</h1>} />
          <Route path="editor" element={<h1>Editor App</h1>} />
          <Route path="color-picker" element={<h1>Color Picker App</h1>} />
          <Route path="line" element={<h1>Line Chart</h1>} />
          {/* ... and so on for all sidebar links */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
