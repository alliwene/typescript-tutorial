import express from "express";
import remindersRouter from "./routers/reminders";

const PORT = 8000;
const app = express();

app.use(express.json())
app.use('/reminders', remindersRouter)

app.get("/", (req, res) => {
  res.send("Testing!!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
