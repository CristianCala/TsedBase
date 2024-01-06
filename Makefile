# Description: Makefile for the backend and frontend

# Variables
NODE_ENV ?= development
PORT ?= 8081
BACKEND_ROUTE ?= ./backend
FRONTEND_ROUTE ?= ./frontend

# Build the backend
backend-install:
	yarn --cwd $(BACKEND_ROUTE) install

backend-build:
	yarn --cwd $(BACKEND_ROUTE) build

# Start the server in normal mode
backend-start:
	yarn --cwd $(BACKEND_ROUTE) start

# Start the server in development mode
backend-dev:
	yarn --cwd $(BACKEND_ROUTE) dev

# Run the tests
backend-test:
	yarn --cwd $(BACKEND_ROUTE) test

# Lint the code
backend-lint:
	yarn --cwd $(BACKEND_ROUTE) run lint

# Run linting and tests
backend-validations:
	yarn --cwd $(BACKEND_ROUTE) run test:lint && yarn --cwd $(BACKEND_ROUTE) run test:unit

# Run coverage tests
backend-coverage:
	yarn --cwd $(BACKEND_ROUTE) run test:coverage

# Create a new migration
migration-create:
	yarn --cwd $(BACKEND_ROUTE) typeorm migration:create $(name) --config ./ormconfig.json

# Run migrations
migration-run:
	yarn --cwd $(BACKEND_ROUTE) typeorm migration:run -d src/datasources/PostgresDatasource

# Revert migrations
migration-revert:
	yarn --cwd $(BACKEND_ROUTE) typeorm migration:revert -d src/datasources/PostgresDatasource

# Frontend commands

# Build the frontend
frontend-install:
	yarn --cwd $(FRONTEND_ROUTE) install

frontend-build:
	yarn --cwd $(FRONTEND_ROUTE) build

# Start the frontend
frontend-start:
	yarn --cwd $(FRONTEND_ROUTE) start

# Start the frontend in development mode
frontend-dev:
	yarn --cwd $(FRONTEND_ROUTE) dev

# Run the tests
frontend-test:
	yarn --cwd $(FRONTEND_ROUTE) test

# Lint the code
frontend-lint:
	yarn --cwd $(FRONTEND_ROUTE) run lint

# Run linting and tests
frontend-validations:
	yarn --cwd $(FRONTEND_ROUTE) run test:lint && yarn --cwd $(FRONTEND_ROUTE) run test:unit

# Run coverage tests
frontend-coverage:
	yarn --cwd $(FRONTEND_ROUTE) run test:coverage


# Docker commands
build:
	docker-compose build

up:
	docker-compose up


# Prepare the environment
aio: backend-install frontend-install build up
