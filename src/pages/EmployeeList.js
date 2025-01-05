import React, { useState } from 'react';
import { deleteEmployee, getEmployees } from '../utils/localStorageAPI';

const EmployeeList = () => {
  const [employees, setEmployees] = useState(getEmployees());
  const [showPopup, setShowPopup] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const refreshEmployees = () => {
    setEmployees(getEmployees());
  };

  const handleDeleteClick = (employee) => {
    setEmployeeToDelete(employee);
    setShowPopup(true);
  };

  const confirmDelete = () => {
    if (employeeToDelete) {
      deleteEmployee(employeeToDelete?.id);
      refreshEmployees();
      setShowPopup(false);
      setEmployeeToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowPopup(false);
    setEmployeeToDelete(null);
  };

  return (
    <div className="employee-list">
      {employees?.map((emp) => (
        <div key={emp.id} className="employee-card">
          <h3>{emp.firstName} {emp.middleName} {emp.lastName}</h3>
          <p><strong>Email:</strong> {emp.email}</p>
          <p><strong>Phone:</strong> {emp.phoneNumber}</p>
          <p><strong>Designation:</strong> {emp.designation}</p>
          <p><strong>Experience:</strong> {emp.experience} months</p>
          <p><strong>Department:</strong> {emp.department}</p>
          <button className="delete-button" onClick={() => handleDeleteClick(emp)}>Delete</button>
        </div>
      ))}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h4>Are you sure you want to delete {employeeToDelete?.firstName}?</h4>
            <button onClick={confirmDelete}>Confirm</button>
            <button onClick={cancelDelete}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
