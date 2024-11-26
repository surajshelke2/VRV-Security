import React, { useState } from "react"; // Import React and useState
import Box from "@mui/material/Box"; // Import MUI components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert"; 


const RoleForm = ({ role, onSave }) => {
  const [formData, setFormData] = useState(
    role || { name: "", permissions: [] }
  );
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "permissions") {
      setFormData((prev) => ({
        ...prev,
        permissions: checked
          ? [...prev.permissions, value]
          : prev.permissions.filter((p) => p !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Role name is required.");
      return;
    }
    setError("");

    onSave(formData); // Pass form data back to parent
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        {role ? "Edit Role" : "Add Role"}
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        label="Role Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 3 }}
      />

      <Typography variant="subtitle1" gutterBottom>
        Permissions:
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {["Read", "Write", "Delete"].map((perm) => (
          <Grid item xs={12} sm={4} key={perm}>
            <FormControlLabel
              control={
                <Checkbox
                  name="permissions"
                  value={perm}
                  checked={formData.permissions.includes(perm)}
                  onChange={handleChange}
                />
              }
              label={perm}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Save
        </Button>
        <Button
          type="button"
          variant="outlined"
          color="secondary"
          onClick={() => onSave()} // Call onSave without data to cancel
          fullWidth
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default RoleForm;
