import express from "express";
const app = express();

app.get("/", (req) => {
  (req as any).name = "xave";
});

app.listen(3000, () => {
  console.log("started");
});
