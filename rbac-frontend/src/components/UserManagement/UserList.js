import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import UserForm from "./UserForm"; // Import UserForm

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Hardcoded users
const initialUsers = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com", role: "Editor", status: "Inactive" },
  { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", role: "Viewer", status: "Active" },
  { id: 4, name: "Diana Prince", email: "diana.prince@example.com", role: "Admin", status: "Active" },
  { id: 5, name: "Ethan Hunt", email: "ethan.hunt@example.com", role: "Editor", status: "Active" },
  { id: 6, name: "Fiona Gallagher", email: "fiona.gallagher@example.com", role: "Viewer", status: "Inactive" },
  { id: 7, name: "George Clark", email: "george.clark@example.com", role: "Editor", status: "Active" },
];

const UserList = () => {
  const [users, setUsers] = useState(initialUsers);
  const [open, setOpen] = useState(false); // For dialog visibility

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleAddUser = (newUser) => {
    setUsers((prev) => [...prev, { ...newUser, id: prev.length + 1 }]);
    setOpen(false); // Close dialog after adding
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add User
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1100 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell>{user.name}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>{user.role}</StyledTableCell>
                <StyledTableCell>{user.status}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => alert(`Edit user: ${user.name}`)}
                    style={{ marginRight: "8px" }}
                  >
                    Edit
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <UserForm onAddUser={handleAddUser} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserList;
