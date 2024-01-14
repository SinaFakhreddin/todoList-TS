import * as Yup from "yup";
import { v4 as uuid } from "uuid";

export const todoSchema = Yup.object({
  id: Yup.string()
    .required()
    .default(() => uuid().slice(0, 7)),
  done: Yup.boolean().default(false),
  todoName: Yup.string().required(),
  endTime: Yup.date().required(),
  startTime: Yup.date()
    .required()
    .default(() => new Date()),
  status: Yup.string().default("idle"),
});
