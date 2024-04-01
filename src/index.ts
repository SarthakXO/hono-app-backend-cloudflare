import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  const body = c.req.json();
  console.log(body);
  console.log(c.req.header);
  console.log(c.req.query);
  return c.json({ message: "Hello Hono!" });
});

app.post("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
