# E-commerce Catalog API

This repository contains a simple Node.js/Express API implementing an e-commerce catalog with a nested document structure. The project follows a **layered modular architecture** with clear separation of concerns:

1. **Config** - environment and database setup
2. **Models** - Mongoose schemas representing documents
3. **Repositories** - data access layer encapsulating database operations
4. **Services** - business logic and orchestration
5. **Controllers** - HTTP request handling
6. **Routes** - API endpoint definitions
7. **Entry point** - application startup (index.js)

The catalog supports hierarchical categories that may contain subcategories and reference products. This nested structure allows efficient tree traversal and is modelled with recursive references in MongoDB.

## Setup

```bash
# install dependencies
npm install

# copy example environment variables
cp .env.example .env

# run development server
npm run dev
```

Ensure MongoDB is running locally or set `MONGODB_URI` appropriately.

## Sample Usage

### Create a category

```bash
curl -X POST http://localhost:5000/api/categories \
  -H 'Content-Type: application/json' \
  -d '{"name":"Electronics"}'
```

### Create a subcategory

```bash
curl -X POST http://localhost:5000/api/categories \
  -H 'Content-Type: application/json' \
  -d '{"name":"Computers","parentId":"<ElectronicsId>"}'
```

### Fetch category with nested items

```bash
curl http://localhost:5000/api/categories/<ElectronicsId>
```

The response includes populated `subcategories` and `products` arrays.

## Architecture Notes

- **Nested documents:** Categories reference other category documents in `subcategories`. This allows arbitrary depth while keeping each document small and normalized.
- **Layered design:** Each layer depends only on the layer below. Controllers are thin; all business logic resides in services.
- **Modularity:** Adding new features (orders, users, etc.) is straightforward by replicating the folder pattern.
- **Comments:** Code includes comments explaining responsibilities and design choices.

Feel free to extend the schema, add validation, or plug in authentication as needed.
