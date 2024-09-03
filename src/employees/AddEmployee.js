import React from "react";

export default function AddEmployee() {
  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Agregar Empleado</h3>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required={true}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Departamento
          </label>
          <input
            type="texto"
            className="form-control"
            id="department"
            name="department"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            Salario
          </label>
          <input
            type="number"
            step="any"
            className="form-control"
            id="salary"
            name="salary"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning btn-sm me-3">
            Agregar
          </button>
          <a href="/" className="btn btn-danger btn-sm">
            Regresar
          </a>
        </div>
      </form>
    </div>
  );
}
