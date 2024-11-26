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
    <Box sx={{ padding: 4, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header */}
      
      <Box
        sx={{
          marginBottom: 4,
          textAlign: "center",
          padding: 2,
          backgroundColor: "#3f51b5",
          color: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h3">RBAC Management System</Typography>
      </Box>
      <Typography variant="subtitle1">
          Manage roles, permissions, and users seamlessly.
        </Typography>
      {/* Statistics */}
      <Grid container spacing={3} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
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
          <Card>
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
          <Card>
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
          <Card>
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
          <Card>
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
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Action</strong></TableCell>
                <TableCell><strong>User/Role</strong></TableCell>
                <TableCell><strong>Date</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Added New User</TableCell>
                <TableCell>Alice Johnson</TableCell>
                <TableCell>2024-11-23</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Updated Role</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell>2024-11-22</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ textAlign: "right"}}>
        <Button variant="outlined" color="error" size="large">
          Logout
        </Button>
      </Box>
     
    </Box>
  );
};

export default HomePage;
