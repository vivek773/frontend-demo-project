import React, { createContext, useState, useContext, useEffect } from 'react';
import { getEmployees } from '../utils/localStorageAPI';

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => useContext(EmployeeContext);
