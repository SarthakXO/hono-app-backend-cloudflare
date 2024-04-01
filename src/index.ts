import { Hono } from "hono";

const app = new Hono();

//creating a AUTH middleware

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    //do validation
    await next();
  } else {
    return c.json({ message: "wrong user" });
  }
});

app.post("/", async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header);
  console.log(c.req.query);
  return c.json({ message: "Hello Hono!" });
});

export default app;
