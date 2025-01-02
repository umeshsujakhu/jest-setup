import { Router } from 'express';
import {
    createTodo,
    deleteTodo,
    listTodo,
    updateTodo,
    updateTodoStatus,
  } from "../controllers/TodoController";
  import validate from "../middleware/validate";
  import { todoSchema, updateTodoSchema, updateTodoStatusSchema } from "../schema/TodoSchema";

const router = Router();

router.post("/todo", validate(todoSchema), createTodo);
router.get("/todo", listTodo);
router.put("/todo/:id", validate(updateTodoSchema), updateTodo);
router.patch("/todo/:id/status", validate(updateTodoStatusSchema), updateTodoStatus);
router.delete("/todo/:id", deleteTodo);

export default router;