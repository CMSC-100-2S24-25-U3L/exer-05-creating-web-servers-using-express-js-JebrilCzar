import express from "express";
import { appendFileSync } from "node:fs";
import { readFileSync } from "node:fs";

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`<h2>Hello!</h2>`);
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});

app.get("/show-book", (req, res) => {
  var books = readFileSync("./books.txt", "utf-8");
  var books_instance = books.split("\n");
  res.send(books_instance);
  //   for (let i = 0; i < books_instance.length; i++) {
  //     var attributes = books_instance[i].split(",");
  //     if ((attributes[3] = "978-0-7475-3269-9")) {
  //       res.send(books_instance[i]);
  //     }
  //   }
});

// app.post("/submit-data", (req, res) => {
//   res.send("Received a POST request" + req.body.name);
// });

app.post("/add-book", (req, res) => {
  const success = { success: false };
  if (
    (req.body.Book != "") &
    (req.body.ISBN != "") &
    (req.body.Author != "") &
    (req.body.Year != "")
  ) {
    try {
      appendFileSync(
        "books.txt",
        req.body.Book +
          "," +
          req.body.ISBN +
          "," +
          req.body.Author +
          "," +
          req.body.Year +
          "\n"
      );
      success.success = true;
      res.send(success);
    } catch (err) {
      /* Handle the error */
    }
  } else {
    res.send(success);
  }
});
