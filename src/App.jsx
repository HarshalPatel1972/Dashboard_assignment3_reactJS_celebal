import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Import the new page components
import Ecommerce from "./layouts/pages/Ecommerce";
import Orders from "./layouts/pages/Orders";
import Calendar from "./layouts/pages/Calender"; // spelling must match the filename
import Kanban from "./layouts/pages/Kanban";
import Editor from "./layouts/pages/Editor";
import ColorPicker from "./layouts/pages/ColorPicker";
import Line from "./layouts/pages/Line";
import Area from "./layouts/pages/Area";
import Bar from "./layouts/pages/Bar";
import Pie from "./layouts/pages/Pie";
import Financial from "./layouts/pages/Financial";
import ColorMapping from "./layouts/pages/ColorMapping";
import Pyramid from "./layouts/pages/Pyramid";
import Employees from "./layouts/pages/Employees";
import Customers from "./layouts/pages/Customers";

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
          <Route path="employees" element={<Employees />} />
          <Route path="customers" element={<Customers />} />
          <Route path="kanban" element={<Kanban />} />
          <Route path="editor" element={<Editor />} />
          <Route path="color-picker" element={<ColorPicker />} />
          <Route path="line" element={<Line />} />
          <Route path="area" element={<Area />} />
          <Route path="bar" element={<Bar />} />
          <Route path="pie" element={<Pie />} />
          <Route path="financial" element={<Financial />} />
          <Route path="color-mapping" element={<ColorMapping />} />
          <Route path="pyramid" element={<Pyramid />} />
          {/* ... and so on for all sidebar links */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
