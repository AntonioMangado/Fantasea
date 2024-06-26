# DISCLAIMER - ONGOING REWORK
I'm working on a rework of the app to make it more modern looking, with a whole redo of styles and some functionality. Work is a bit halted now due to lack of time, but not abandoned. The changes can be seen in the pictures below. CHANGES ARE NOT DEPLOYED YET.
 
# Welcome to Fantasea. :books:
The aim of this app is to replicate a book management and tracker app like GoodReads with the sole emphasis being placed on fantasy books. As of now, the app is in it very first development stages and contains a VERY limited selection of books, but the goal is to work with a wide corpus of fantasy books, ranging from children fantasy to dark fantasy, and many more.

:arrow_right: [Click here to take a look at it!](https://fantaseafront.onrender.com/) (Deployed version currently not working and abandoned, now working on a newer version):arrow_left:

## Technologies used:
Since this is a fullstack app, a wide pletora of frameworks and libraries were used to build both the front end and back end. The core ones are:
- HTML/CSS
- JavaScript
- React.js
- Node.js
- Express.js
- MongoDB
- JWT
- Sass



## Main functionalities:
1. JWT Authentication.
   The app lets you browse the book collection without the need to login. However, should you want to save books in your toread, reading, and read lists, authentication with JWT is supported (although it doesn't work as intended at the moment).
   
   ### Old version
   ![authentication-image](./readme_assets/ssautentication.png)

   ### New version
   ![authentication-image](./readme_assets/loginSS.png)
   ![authentication-image](./readme_assets/loginSS2.png)

3. Search and detailed view.
   Upon search, a list of cards will be generated each containing a book cover, title, author, and year. Upon click, the user will be redirected to their detailed view with a more extensive description, and options to save the books in different reading lists.
   ### Old version
   ![authentication-image](./readme_assets/sssearch.png)

   ### New version
   ![authentication-image](./readme_assets/homeSS.png)
   ![authentication-image](./readme_assets/homeSS2.png)

## Next steps:
- Adding a My Profile section, which allows an user view with access to their saved books.
- Enlarge the corpi of fantasy books in the database.
- Adding styles to render a webapp with a modern yet classic personality. (In progress)

## Contributing:
Should you feel inclined to contribute to this project in any way or manner, please feel free to do so. Any help, in the form of code or ideas, will be warmly welcome. Follow the steps below to seed you db and get the project going.

### Steps to replicate the db after cloning the project:
1. Create your db on Mongo Atlas.
2. Input your db URI in your .env following the .env.example.
3. Run 'npm run populatedb'
4. Your db has been populated with 38 fantasy books!
