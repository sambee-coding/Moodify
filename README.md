# Moodify
# Node.js + Express + MongoDB Backend

A minimal setup to get an Express server running with MongoDB, hot reloading, and ESLint rules configured out of the box.

## Official Plugins & Tools

Two popular options for running your backend dev server with auto-restart:

- **[Nodemon](https://nodemon.io/)** — watches for file changes and automatically restarts the server
- **[tsx](https://github.com/privatenumber/tsx)** — runs TypeScript files directly with hot reloading support

## Dependencies

```bash
npm install express mongoose dotenv cors
npm install -D nodemon eslint
```

## Project Structure

```
├── src/
│   ├── routes/        # API route handlers
│   ├── controllers/   # Business logic
│   ├── middleware/     # Custom middleware
│   ├── models/        # Mongoose models
│   ├── config/        # Database connection
│   └── index.js       # Entry point
├── .eslintrc.js
├── .env
└── package.json
```

## Database Connection

Create a `src/config/db.js` file:

```js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_secret_key
NODE_ENV=development
```

## Sample Mongoose Model

```js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
```

## Getting Started

```bash
npm install
npm run dev
```

Add the following scripts to your `package.json`:

```json
"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js"
}
```

## ESLint Configuration

For production applications, it is recommended to use TypeScript with type-aware lint rules. Check out [typescript-eslint](https://typescript-eslint.io/) for guidance on integrating TypeScript into your project.
