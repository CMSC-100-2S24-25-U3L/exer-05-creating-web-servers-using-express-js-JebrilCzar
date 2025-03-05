import express from "express";
import { appendFileSync } from "node:fs";
import { readFileSync } from "node:fs";
import { readFile } from "node:fs";

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

app.get("/find-by-author", (req, res) => {
  var books = readFileSync("./books.txt", "utf-8");
  var books_instance = books.split("\n");
  var results =[];
  var results_index=0;
  //length is reduced by 1 since the readfilesync captures one blank instance at the end
  for (let i=0; i<books_instance.length-1; i++){
    var attributes=books_instance[i].split(',');
    //this is the index of author in the attributed array when they are separated by comma
    if(attributes[2]==req.query.author){
      results[results_index]=books_instance[i];
      results_index++;
    }
  }
  res.send(results);
});

app.get("/find-by-isbn-author", (req, res) => {
  var books = readFileSync("./books.txt", "utf-8");
  var books_instance = books.split("\n");
  var results =[];
  var results_index=0;
  //length is reduced by 1 since the readfilesync captures one blank instance at the end
  for (let i=0; i<books_instance.length-1; i++){
    var attributes=books_instance[i].split(',');
    //this is the index of author in the attributed array when they are separated by comma
    if(attributes[2]==req.query.author & attributes[1]==req.query.isbn){
      results[results_index]=books_instance[i];
      results_index++;
    }
  }
  res.send(results);
});


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
