import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarLayout from "./Components/common/SidebarLayout";
import ContactsPage from "./pages/ContactsPage";
import DashboardPage from "./pages/DashboardPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
