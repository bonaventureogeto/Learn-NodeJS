// app.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    os.environ.get("MONGODB_URI") || "mongodb://localhost:27017/todos",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define your routes here


// Middleware: body-parser middleware
app.use(express.json());

// importing routes
const todosRouter = require("./routes/todos");

// use routes
app.use("/todos", todosRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
