# Digital BookShelf (Lab-13.2)

A digital bookshelf created using RESTful API. This API supports creating new book records, viewing the list of all books, finding a specific book by its ID, updating a book's information, and removing a book from the collection.

## Reflections

1. Why is it beneficial to separate your routes, models, and database connection into different directories?
   - Separation of concerns each file has one job.
   - If the database wont connect I know to look in db/connection.js. If a book field is wrong I know to look in models/Book.js I dont have to dig through one giant file.

2. What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?
   - PUT Is like throwing away your whole drawing and handing in a brand new one.
   - PATCH is just erasing part of the drawing editing it and keeping everything else.

3. In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?
   - A simple success response is a good practice not the full deleted object.
   - You shouldnt send back the deleted object bc you can accidentally expose data that should be gone.
