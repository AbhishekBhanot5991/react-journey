import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios as usual
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Dashboard.css";
import { toast } from "react-toastify";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    salary: "",
    address: "",
  });

  const [viewEmployee, setViewEmployee] = useState(null);
  const [deleteEmployee, setDeletedEmployee] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if(isLoading){
      // Example API request using the axios instance from axiosConfig.js
      axios
        .get("http://localhost:5000/api/get-employees")
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [isLoading]);

  const handleView = (employee) => {
    // setViewEmployee(employee);
    // axios
    //   .get(`http://localhost:5000/api/get-employee/${employee._id}`)
    //   .then((res) => {
    //     console.log("View Employee Data:", res.data);
    //     setViewEmployee(res.data);
    //     handleShow();
    //   })

    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
    setViewEmployee(employee);
    setFormData({
      name: employee.name,
      phone: employee.phone,
      email: employee.email,
      salary: employee.salary,
      address: employee.address,
      // Set the input fields to disabled
      disabled: true,
    });
    handleShow();
  };
  const handleEdit = () => {
    console.log("You've clicked Edit button!!!");
  };
  const handleDelete = (employee) => {
    axios
      .delete(`http://localhost:5000/api/delete-employee/${employee._id}`)
      .then((res) => {
        console.log("Deleted Employee Data:", res.data);
         // Remove the deleted employee from the users state
         setDeletedEmployee((prevUsers) =>
         prevUsers.filter((user) => user._id !== employee._id)
       );
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if(!viewEmployee){
        const response = await axios.post(
          "http://localhost:5000/api/create-employee",
          formData
        );
        console.log(response.data);
        toast.success("Employee created successfully!! ");
        setShow(false);
        setIsLoading(false);
        // setTimeout(() => {
        //   setUsers(response.data);
        // }, 1000);
      }
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div className="dashboard-container">
      <div className="row m-0">
        <div className="col-lg-8">
          <h1 className="mb-4">Dashboard</h1>
        </div>
        <div className="col-lg-4 text-end">
          <Button variant="primary" onClick={handleShow}>
            + ADD
          </Button>
        </div>
      </div>
      <table className="table-primary w-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.salary}</td>
                <td className="marginRight">
                  <Button variant="primary" onClick={() => handleView(user)}>
                    View
                  </Button>
                  <Button variant="warning" onClick={handleEdit}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(user)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {viewEmployee ? "View Employee" : "Add Employee"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            action=""
            onSubmit={handleSubmit}
            className="row align-items-center dashboard-form"
          >
            <div className="col-lg-6">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                value={formData.name}
                disabled={!!viewEmployee}
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                name="phone"
                onChange={handleInputChange}
                value={formData.phone}
                disabled={!!viewEmployee}
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                disabled={!!viewEmployee}
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="">Salary</label>
              <input
                type="text"
                onChange={handleInputChange}
                name="salary"
                value={formData.salary}
                disabled={!!viewEmployee}
              />
            </div>
            <div className="col-lg-12">
              <label htmlFor="">Address</label>
              <input
                onChange={handleInputChange}
                name="address"
                value={formData.address}
                disabled={!!viewEmployee}
              />
            </div>
            <div className="col-lg-12 text-end mt-3">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Dashboard;
