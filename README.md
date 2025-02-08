# BookManagementBackend
**API Design & Endpoints**
1. The backend follows RESTful API design with clear routes for:
2. User Authentication → Register & Login
3. Book Management → Add, Update, Delete, List, and Search Books
4. Borrowing System → Borrow & Return Books
5. Each API follows proper HTTP methods (GET, POST, PUT, DELETE) with structured responses and error handling.

**Database Schema**
1. The project uses MongoDB + Mongoose for storing:
2. Users (with hashed passwords)
3. Books (title, author, genre, etc.)
4. Borrow Records (tracks which user borrowed which books)
5. All relations between collections are properly structured using MongoDB ObjectIDs.

**Security Implementation**
1. User Passwords are securely stored using bcrypt.js.
2. JWT (JSON Web Token) authentication ensures secure API access.
3. Authorization Middleware restricts actions like adding or deleting books.
4. Input validation & error handling prevent API misuse.

**Deployment**
1. Local Deployment → Runs on localhost:3000 (MongoDB locally).
2. Testing with Postman → Verify all API routes before deployment.

**Final Steps**
1. Run the project → Install dependencies and start the server.
2. Test endpoints → Use Postman or cURL to validate API responses.
3. Deploy it → Choose Railway/Render for free hosting.
