import React, { useState } from "react";

function UserInfo({ users }) {
  console.log(users);
  const [searchTerm, setSearchTerm] = useState("");
  // const{}
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filterUser = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return (
    <>
      <div className="container">
        <h1 className="title">Search Example</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
          </tr>
        </thead>

        {filterUser.length > 0 && searchTerm ? (
          filterUser.map((user) => {
            const { name, username, email, address } = user;
            const { city, street } = user.address;
            return (
              <tbody key={name}>
                <tr>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>
                    {city} , {street}
                  </td>
                </tr>
              </tbody>
            );
          })
        ) : (
          <tbody>
            <tr>
              {searchTerm ? (
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No users Found
                </td>
              ) : (
                <td colSpan="4" style={{ textAlign: "center" }}>
                 Find User
                </td>
              )}
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
}

export default UserInfo;
