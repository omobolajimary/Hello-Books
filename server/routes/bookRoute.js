import * as bookController from '../controllers/v1/bookController';
import * as reviewController from '../controllers/v1/reviewController';
import bookExists from '../middlewares/bookExistsMiddleware';
import userExists from '../middlewares/userExistsMiddleware';


const bookRoute = (app) => {
  app.post('/api/v1/books', bookController.addBook);
  app.get('/api/v1/books/:bookId(\\d+)', bookExists,
  bookController.getSingleBook);
  app.put('/api/v1/books/:bookId(\\d+)', bookExists, bookController.modifyBook);
  app.get('/api/v1/books', bookController.getAllBooks);
  app.post('/api/v1/users/:userId(\\d+)/review/:bookId(\\d+)',
  userExists, bookExists, reviewController.addReview);  
};

export default bookRoute;