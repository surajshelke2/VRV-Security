import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const roles = ["Admin", "Editor", "Viewer"];
const statuses = ["Active", "Inactive"];

const UserForm = ({ onAddUser }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: roles[0],
    status: statuses[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      onAddUser(user); // Pass new user back to parent
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={user.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={user.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        type="email"
      />
      <TextField
        select
        label="Role"
        name="role"
        value={user.role}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        {roles.map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Status"
        name="status"
        value={user.status}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        {statuses.map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "16px" }}>
        Add User
      </Button>
    </form>
  );
};

export default UserForm;
