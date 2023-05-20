# REST API Example

This is a simple example of a REST API built with Node.js, Express, TypeScript, Prisma, SQLite, and Docker.

## Technologies Used

- [Node.js](https://nodejs.org/): A JavaScript runtime that allows us to run JavaScript code outside the browser.
- [Express](https://expressjs.com/): A fast and minimalist web application framework for Node.js.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [Prisma](https://www.prisma.io/): An open-source database toolkit that simplifies database access with type-safe queries.
- [SQLite](https://www.sqlite.org/): A lightweight and self-contained database engine.
- [Docker](https://www.docker.com/): A platform for building, shipping, and running applications in containers.

## Prerequisites

- Node.js: [Install Node.js](https://nodejs.org/en/download/)
- Docker: [Install Docker](https://www.docker.com/get-started)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-repo.git
```

2. Navigate to the project directory:

```bash
cd your-repo
```

3. Install the dependencies:

```bash
yarn install
```

4. Start the database:

```bash
npx prisma migrate dev
```

5. Start the server in development mode with docker:

```bash
yarn run-api
```
