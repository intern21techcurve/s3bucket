const express = require("express");

const app = express();

 
require("dotenv").config();
// Load environment variables from .env file using dotenv



const uploadRoutes = require("./Route/route");


 

// Include other middleware and configurations as needed

 

// Include your file upload routes

 

app.use("/api", uploadRoutes);

 

// Start the Express server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}`);

});  