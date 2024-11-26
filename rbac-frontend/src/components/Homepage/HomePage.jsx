import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Box,
} from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"; // If using charts

const data = [
  { name: "Users", value: 50 },
  { name: "Roles", value: 10 },
];

const HomePage = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#121212", // Dark background
        color: "#fff", // White text for better contrast
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          marginBottom: 4,
          textAlign: "center",
          padding: 2,
          backgroundColor: "#3f51b5", // Primary color
          color: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h3">VRV Management System</Typography>
      </Box>
      <Typography variant="subtitle1" sx={{ color: "#ccc" }}>
        Manage roles, permissions, and users seamlessly.
      </Typography>

      {/* Statistics */}
      <Grid container spacing={3} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#333" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Total Users
              </Typography>
              <Typography variant="h3" color="primary">
                50
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#333" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Active Users
              </Typography>
              <Typography variant="h3" color="green">
                40
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#333" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Inactive Users
              </Typography>
              <Typography variant="h3" color="#990000">
                10
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#333" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Total Roles
              </Typography>
              <Typography variant="h3" color="secondary">
                10
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ backgroundColor: "#333" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                User Role Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 0 ? "#3f51b5" : "#ff5722"}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Recent Activity
        </Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: "#333", color: "#fff" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}><strong>Action</strong></TableCell>
                <TableCell sx={{ color: "#fff" }}><strong>User/Role</strong></TableCell>
                <TableCell sx={{ color: "#fff" }}><strong>Date</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Added New User</TableCell>
                <TableCell sx={{ color: "#fff" }}>Alice Johnson</TableCell>
                <TableCell sx={{ color: "#fff" }}>2024-11-23</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Updated Role</TableCell>
                <TableCell sx={{ color: "#fff" }}>Admin</TableCell>
                <TableCell sx={{ color: "#fff" }}>2024-11-22</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ textAlign: "right" }}>
        <Button variant="outlined" color="error" size="large">
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
