// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }

// Your code here:
const booksArray = [];

const book1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
    language: "English",
    description:
      "One of Hemingway's most famous works, it tells the story of Santiago...",
  },
};

const book2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leigh Gallagher",
  details: {
    language: "English",
    description:
      "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
  },
};

const book3 = {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
    language: "English",
    description: "Educated is an account of the struggle for self-invention...",
  },
};

const book4 = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
    description:
      "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
  },
};

booksArray.push(book1, book2, book3, book4);

console.log(booksArray[0].title);

// Iteration 2 | Book Details
function getBookDetails(book) {
  // Your code here:
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

getBookDetails(booksArray[0]);

// Iteration 3 | Delete Language
// Your code here:

for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.language;
}

console.log(booksArray);

// Iteration 4 | Estimated Reading Time
// Your code here:

for (let i = 0; i < booksArray.length; i++) {
  let readingMinutes = (booksArray[i].pages * 500) / 90;
  booksArray[i].readingTime = Math.ceil(readingMinutes);
}

console.log(booksArray);

// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
  "J. K. Rowling": [
    ["Harry Potter and the Philosopher's Stone", 223],
    ["Harry Potter and the Chamber of Secrets", 251],
    ["Harry Potter and the Prisoner of Azkaban", 317],
    ["Harry Potter and the Goblet of Fire", 636],
  ],
  "Neal Stephenson": [
    ["Cryptonomicon", 928],
    ["Anathem", 1008],
    ["Fall; or, Dodge in Hell", 896],
  ],
  "Malcolm Gladwell": [
    ["Outliers", 320],
    ["Blink", 287],
  ],
};

function booksByAuthor(dictionary) {
  // Your code here:
  let dictionaryNew = [];
  for (let auth in dictionary) {
    let arrAuth = dictionary[auth];
    arrAuth.forEach((element) => {
      dictionaryNew.push({
        title: element[0],
        pages: element[1],
        author: auth,
      });
    });
  }
  return dictionaryNew;
};

let newDictionary = booksByAuthor(dictionary);

console.log(newDictionary[0].pages + newDictionary[1].pages);

// // Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArr) {
  // Your code here:
  let averagePages = 0;
  for (let i = 0; i < booksArr.length; i++) {
    averagePages += booksArr[i].pages / booksArr.length;
  }
  console.log(averagePages);
  return averagePages;
}

averagePageCount(newDictionary);
