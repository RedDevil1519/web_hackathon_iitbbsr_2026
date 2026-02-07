# Cosmic Watch

A real-time space visualization app with a 3D Earth scene, near-Earth asteroid data from NASA, and live chat.

## Tech stack

- **Frontend:** React, Three.js (React Three Fiber), Vite, Socket.io client
- **Backend:** Node.js, Express, Socket.io, MongoDB, NASA NEO API
- **Infra:** Docker, Docker Compose

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop/) and Docker Compose (or use `docker compose`)

## Quick start (Docker)

```bash
docker compose up --build
```

- **Frontend:** http://localhost:3000  
- **Backend API:** http://localhost:5000  
- **MongoDB:** localhost:27017  

## Run locally (without Docker)

### Backend

```bash
cd backend
npm install
```

Create a `.env` file (see `backend/.env.txt` for reference) with:

- `MONGO_URI` – MongoDB connection string (e.g. `mongodb://localhost:27017/cosmic`)
- `NASA_KEY` – [NASA API key](https://api.nasa.gov/) (optional; demo key may have limits)

Then:

```bash
npm run start
# or: node server.js
```

### Frontend

```bash
cd frontend
npm install
npm run build   # production build
npm run dev     # if you add a "dev" script with Vite
```

Serve the built files from `frontend/dist` or run with a dev server.

### MongoDB

Run MongoDB locally on port 27017, or use a cloud instance and set `MONGO_URI` in the backend `.env`.

## Environment variables

| Variable    | Description                    | Default (Docker)              |
|------------|--------------------------------|-------------------------------|
| `MONGO_URI`| MongoDB connection string      | `mongodb://mongo:27017/cosmic`|
| `NASA_KEY` | NASA API key for NEO feed      | `demo` (rate-limited)         |

## CI/CD

GitHub Actions runs on every push and pull request to `main`/`master`: it builds the Docker images and starts the stack. See [.github/workflows/ci.yml](.github/workflows/ci.yml).

## License

MIT
