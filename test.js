import needle from "needle";

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
    Book: "Harry Potter and the Chamber of Secrets",
    ISBN: "",
    Author: "J.K Rowling",
    Year: 1997,
  },
  (err, res) => {
    console.log(res.body);
  }
);
