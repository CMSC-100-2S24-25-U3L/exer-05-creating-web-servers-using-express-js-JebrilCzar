import needle from "needle";
import { readFileSync } from "node:fs";

needle.post(
  "http://localhost:3000/add-book",
  {
    Book: "Harry Potter and the Chamber of Secrets",
    ISBN: "0-7474-3849-2",
    Author: "J.K Rowling",
    Year: 1997,
  },
  (err, res) => {
    console.log(res.body);
  }
);

needle.post(
  "http://localhost:3000/add-book",
  {
    Book: "Harry Potter and the Philosophers Stone",
    ISBN: "978-0-7475-3269-9",
    Author: "J.K Rowling",
    Year: 1997,
  },
  (err, res) => {
    console.log(res.body);
  }
);

needle.post(
  "http://localhost:3000/add-book",
  {
    Book: "The Little Prince",
    ISBN: "978-0156012195",
    Author: "Antoine Saint-Exupery",
    Year: 1943,
  },
  (err, res) => {
    console.log(res.body);
  }
);

// const books = readFileSync("./books.txt", "utf-8");
// const books_instance = books.split("\n");

// for (let i = 0; i < books_instance.length; i++) {
//   var attributes = books_instance[i].split(",");
//   if ((attributes[2] = "J.K Rowling")) {
//     console.log(books_instance[i]);
//   }
// }
//console.log(page.length);
//console.log(page);
