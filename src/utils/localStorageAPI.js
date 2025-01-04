const STORAGE_KEY = 'employees';

export const getEmployees = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addEmployee = (employee) => {
  const employees = getEmployees();
  employees.push(employee);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
};

export const updateEmployee = (id, updatedEmployee) => {
  const employees = getEmployees();
  const index = employees.findIndex((emp) => emp.id === id);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...updatedEmployee };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  }
};

export const deleteEmployee = (id) => {
  const employees = getEmployees().filter((emp) => emp.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
};
