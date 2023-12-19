 # Welcome to Fantasea. :books:
The aim of this app is to replicate a book management and tracker app like GoodReads with the sole emphasis being placed on fantasy books. As of now, the app is in it very first development stages and contains a VERY limited selection of books, but the goal is to work with a wide corpus of fantasy books, ranging from children fantasy to dark fantasy, and many more.

:arrow_right: [Click here to take a look at it!](https://fantaseafront.onrender.com/) :arrow_left:

## Technologies used.
Since this is a fullstack app, a wide pletora of frameworks and libraries were used to build both the front end and back end. The core ones are:
- HTML/CSS
- JavaScript
- React.js
- Node.js
- Express.js
- MongoDB
- JWT
- Sass

## Main functionalities.
1. JWT Authentication.
   The app lets you browse the book collection without the need to login. However, should you want to save books in your toread, reading, and read lists, authentication with JWT is supported (although it doesn't work as intended at the moment).

2. Search and detailed view.
   Upon search, a list of cards will be generated each containing a book cover, title, author, and year. Upon click, the user will be redirected to their detailed view with a more extensive description, and options to save the books in different reading lists.

Steps to replicate the db after cloning the project:
1. Create your db on Mongo Atlas.
2. Input your db URI in your .env following the .env.example.
3. Run 'npm run populatedb'
4. Your db has been populated with 38 fantasy books!
