import React, { useEffect, useState } from "react";
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
import RoleForm from "./RoleForm"; // Import the form

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

// Hardcoded data
const hardcodedRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
];

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [editingRole, setEditingRole] = useState(null); // Track role being edited
  const [openForm, setOpenForm] = useState(false); // Toggle for modal dialog

  useEffect(() => {
    // Simulate fetching roles
    setRoles(hardcodedRoles);
  }, []);

  const handleSaveRole = (savedRole) => {
    if (savedRole) {
      if (savedRole.id) {
        // Update existing role
        setRoles((prev) =>
          prev.map((role) => (role.id === savedRole.id ? savedRole : role))
        );
      } else {
        // Add new role
        setRoles((prev) => [...prev, { ...savedRole, id: Date.now() }]);
      }
    }
    setOpenForm(false); // Close form after saving
    setEditingRole(null); // Reset editing role
  };

  const handleDelete = (id) => {
    setRoles((prev) => prev.filter((role) => role.id !== id));
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setOpenForm(true);
          setEditingRole(null); // Ensure no role is pre-loaded for "Add"
        }}
        style={{ marginBottom: "16px" }}
      >
        Add Role
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1150 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell align="left">Permissions</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <StyledTableRow key={role.id}>
                <StyledTableCell component="th" scope="row">
                  {role.name}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {role.permissions.join(", ")}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      setOpenForm(true);
                      setEditingRole(role); // Pass role to form for editing
                    }}
                    style={{ marginRight: "8px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(role.id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Role Form */}
      <Dialog open={openForm} onClose={() => setOpenForm(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editingRole ? "Edit Role" : "Add Role"}</DialogTitle>
        <DialogContent>
          <RoleForm role={editingRole} onSave={handleSaveRole} onCancel={() => setOpenForm(false)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForm(false)} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RoleList;
