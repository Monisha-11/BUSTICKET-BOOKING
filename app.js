const express = require("express");
const colors = require("colors");
const cors = require('cors');
const dotenv = require('dotenv');
const connection = require("./config/db"); // Correct path to db.js
const { notFound, errorHandler } = require("./middlewares/errorMiddleware"); // Correct path to errorMiddleware.js
const authRouter = require("./routes/authRoute"); // Correct path to authRoute.js
const busRouter = require("./routes/busRoute"); // Correct path to busRoute.js
const bookedRouter = require("./routes/bookedRoute"); // Correct path to bookedRoute.js

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
connection()
app.use(cors());

app.get("/", (req, res) => {
    res.send("Home page");
});

// Use routers (assuming these are defined in your respective route files)
app.use('/api/auth', authRouter);
app.use('/api/bus', busRouter);
app.use('/api/booked', bookedRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, async () => {
    // try {
    //     await connectDB(); // Ensure this function is called correctly
    //     console.log(`Database connected`.cyan.underline);
    // } catch (error) {
    //     console.error(`Database connection error: ${error.message}`.red.bold);
    // }
    console.log(`Server is running on port ${port}`.yellow.bold);
});
