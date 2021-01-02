import express, { Request, Response, Router } from "express";
const router = Router();
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//validator
import { check, validationResult } from "express-validator";

router.get("/", async (req: Request, res: Response) => {
  res.send("yoo");
});

module.exports = router;
