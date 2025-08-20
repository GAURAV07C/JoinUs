import express from "express";
import cors from "cors"; // Import cors
const app = express();

app.use(
  cors({
    origin: "http://localhost:3003", // replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
import routes from "./routes";
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
