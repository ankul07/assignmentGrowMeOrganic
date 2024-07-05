import React, { useState, FormEvent } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate, Navigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formValues);
    const { name, phone, email } = formValues;
    if (name == "") {
      alert("name cannot be empty");
    } else if (phone == "") {
      alert("phone cannot be empty");
    } else if (phone.length < 10) {
      alert("phone number cannot be less than 10 digit");
    } else if (phone.length > 10) {
      alert("phone number cannot be greater than 10 digit");
    } else if (email == "") {
      alert("Email can not be blank");
    } else if (!email.includes("@")) {
      alert("Enter a valid email address");
    } else {
      localStorage.setItem("userinfo", JSON.stringify(formValues));

      alert("thanks for filling form");
      navigate("/second");
    }
  };
  const userInfo = localStorage.getItem("userinfo");

  if (userInfo) {
    return <Navigate to="/second" />;
  }

  return (
    <Container
      sx={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography
          sx={{
            fontSize: "2rem",
          }}
          variant="h3"
          component="h2"
        >
          Information Form
        </Typography>
        <div>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            value={formValues.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button
            sx={{
              textAlign: "center",
              marginLeft: ".5rem",
            }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default HomePage;
