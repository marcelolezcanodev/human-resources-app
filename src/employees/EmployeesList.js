import axios from "axios";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function EmployeesList() {
  const urlBase = "http://localhost:8080/hr-app/empleados";
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const response = await axios.get(urlBase);
    console.log("Loading employees result!");
    console.log(response.data);
    setEmployees(response.data);
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Human Resources System</h3>
      </div>

      <table className="table table-striped table-hover aligned-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Employee</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <th scope="row">{employee.employeeId}</th>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>
                <NumericFormat
                  value={employee.salary}
                  displayType={"text"}
                  thousandSeparator=","
                  prefix={"$"}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
