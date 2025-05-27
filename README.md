# Portfolio Website

A personal portfolio website built with React and Vite.

## Local Development

1. Clone the repository
2. Install dependencies:
   ```
   cd frontend
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Deployment on Render

This project is configured for deployment on Render.com.

### Automatic Deployment

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use the following settings:
   - Build Command: `cd frontend && npm install && npm run build && cd ../server && npm install`
   - Start Command: `cd server && npm start`
   - Environment: Node
   - Environment Variables: Set `NODE_ENV` to `production`

### Manual Deployment

1. Build the frontend:
   ```
   cd frontend
   npm install
   npm run build
   ```
2. Install server dependencies:
   ```
   cd server
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

## Project Structure

- `/frontend`: React application built with Vite
- `/server`: Express server for production deployment
- `render.yaml`: Configuration for Render deployment 