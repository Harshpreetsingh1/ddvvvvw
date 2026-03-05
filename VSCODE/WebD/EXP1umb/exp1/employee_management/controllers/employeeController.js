import Employee from '../models/Employee.js';

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.render('index', {
      title: 'Employee Management System',
      employees: employees,
      successMessage: req.query.message || null
    });
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).render('error', {
      message: 'Failed to fetch employees',
      errors: [error]
    });
  }
};

const getCreateForm = (req, res) => {
  res.render('create', {
    title: 'Add New Employee'
  });
};

const createEmployee = async (req, res) => {
  try {
    const { name, email, empId, department, designation, salary, phone, address, city, state } = req.body;

    
    const existingEmployee = await Employee.findOne({
      $or: [{ email }, { empId }]
    });

    if (existingEmployee) {
      return res.status(400).render('create', {
        title: 'Add New Employee',
        error: 'Employee with this email or Employee ID already exists'
      });
    }

    const employee = new Employee({
      name,
      email,
      empId,
      department,
      designation,
      salary: salary || 0,
      phone,
      address,
      city,
      state
    });

    await employee.save();
    res.redirect('/?message=Employee added successfully');
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(400).render('create', {
      title: 'Add New Employee',
      error: error.message
    });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).render('error', {
        message: 'Employee not found',
        status: 404
      });
    }

    res.render('show', {
      title: 'Employee Details',
      employee: employee
    });
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).render('error', {
      message: 'Failed to fetch employee details',
      errors: [error]
    });
  }
};

const getEditForm = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).render('error', {
        message: 'Employee not found',
        status: 404
      });
    }

    res.render('edit', {
      title: 'Edit Employee',
      employee: employee
    });
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).render('error', {
      message: 'Failed to fetch employee details',
      errors: [error]
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { name, email, empId, department, designation, salary, phone, address, city, state } = req.body;

    let employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).render('error', {
        message: 'Employee not found',
        status: 404
      });
    }

    
    const duplicateCheck = await Employee.findOne({
      $and: [
        { _id: { $ne: req.params.id } },
        { $or: [{ email }, { empId }] }
      ]
    });

    if (duplicateCheck) {
      return res.status(400).render('edit', {
        title: 'Edit Employee',
        employee: employee,
        error: 'Email or Employee ID already in use by another employee'
      });
    }

    
    employee = Object.assign(employee, {
      name,
      email,
      empId,
      department,
      designation,
      salary: salary || 0,
      phone,
      address,
      city,
      state
    });

    await employee.save();
    res.redirect(`/employees/${employee._id}?message=Employee updated successfully`);
  } catch (error) {
    console.error('Error updating employee:', error);
    const employee = await Employee.findById(req.params.id);
    res.status(400).render('edit', {
      title: 'Edit Employee',
      employee: employee,
      error: error.message
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).render('error', {
        message: 'Employee not found',
        status: 404
      });
    }

    res.redirect('/?message=Employee deleted successfully');
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).render('error', {
      message: 'Failed to delete employee',
      errors: [error]
    });
  }
};

const searchEmployees = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.redirect('/');
    }

    const employees = await Employee.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
        { empId: { $regex: query, $options: 'i' } },
        { department: { $regex: query, $options: 'i' } },
        { designation: { $regex: query, $options: 'i' } }
      ]
    });

    res.render('index', {
      title: 'Search Results',
      employees: employees,
      searchQuery: query
    });
  } catch (error) {
    console.error('Error searching employees:', error);
    res.status(500).render('error', {
      message: 'Search failed',
      errors: [error]
    });
  }
};

export {
  getAllEmployees,
  getCreateForm,
  createEmployee,
  getEmployeeById,
  getEditForm,
  updateEmployee,
  deleteEmployee,
  searchEmployees
};
