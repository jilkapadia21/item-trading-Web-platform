const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "your_mysql_host",
  user: "your_mysql_username",
  password: "your_mysql_password",
  database: "your_mysql_database",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// Middleware to serve static files (CSS, JS, images, etc.)
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Search route (Example: handle the search functionality)
app.get("/search", (req, res) => {
  const searchQuery = req.query.q; // Get the search query from the URL parameter 'q'

  // Add your logic here to perform the search in the MySQL database
  const sqlQuery = "SELECT * FROM products WHERE name LIKE ?";
  const searchValue = `%${searchQuery}%`;

  connection.query(sqlQuery, [searchValue], (err, results) => {
    if (err) {
      console.error("Error executing MySQL query:", err);
      return;
    }

    // Process the search results and send them as a response
    res.send(results);
  });
});

// Product description route (Example: handle product description page)
app.get("/Product_Description", (req, res) => {
  // Add your logic here to fetch product details based on the request and send the product description page
  res.send("Product Description Page");
});

// Handle other routes (if required)
// ...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
