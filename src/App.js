import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeesList from "./employees/EmployeesList";
import Navigation from "./template/Navigation";
import AddEmployee from "./employees/AddEmployee";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<EmployeesList />} />
          <Route exact path="/agregar" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
