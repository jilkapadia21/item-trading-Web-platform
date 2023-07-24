const express = require("express");
const app = express();
const port = 3000;

// Middleware to serve static files (CSS, JS, images, etc.)
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Search route (Example: handle the search functionality)
app.get("/search", (req, res) => {
  const searchQuery = req.query.q; // Get the search query from the URL parameter 'q'
  // Add your logic here to process the search query and return relevant results
  // For now, let's just send back the search query as a response
  res.send(`You searched for: ${searchQuery}`);
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
