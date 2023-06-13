import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../models/reminders";

const remindersRouter = Router();
const reminders: Reminder[] = []

remindersRouter.get("/", (req, res) => {
  res.json(reminders);
});

remindersRouter.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title)
  reminders.push(reminder)
  res.status(201).json(reminders)
});

export default remindersRouter;
