const express = require("express");
const cors = require("cors");
const app = express();
const getRouter = require("./routes/router");
const PORT = 3000;

// Middleware
app.use(cors()); // Jika Anda menggunakan CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/api", getRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
