import React, { useEffect, useState } from "react";
// install using command npm i axios
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Pagination from "react-bootstrap/Pagination";
const Dashboard = () => {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://reqres.in/api/users?page=${currentPage}&per_page=6`)
      .then((res) => {
        setApiData(res.data.data);
        setTotalPages(Math.ceil(res.data.total / res.data.per_page));
        setLoading(false);
      })
      .catch((err) => {
        console.log(`Error while fetching the data ${err}`);
        setLoading(false);
      });
  }, [currentPage, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(setSearchTerm(e.target.value));
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // const filteredData = apiData.filter((user) => {
  //   return user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  // })
  const filteredData = apiData.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const dataToDisplay = filteredData.slice(startIndex, endIndex);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className="mb-3">Dashboard</h2>
        <input
          type="text"
          placeholder="search"
          style={{ padding: "10px" }}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Images</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {filteredData
            // .slice((currentPage - 1) * 6, currentPage * 6)
            .map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  style={{ width: "50px", height: "auto" }}
                />
                <td className="buttons">
                  <Button style={{ marginLeft: "0px" }} variant="primary">
                    View
                  </Button>
                  <Button variant="warning">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </>
  );
};

export default Dashboard;
