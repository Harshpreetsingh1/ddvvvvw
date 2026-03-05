# Architecture Overview

This document explains the design and structure of the **e-commerce catalog** project. The goal is to provide clarity on how the code is organized, why each layer exists, and how the system models a nested document catalog using MongoDB.

---

## ✅ Layered Modular Architecture

The application is split into distinct layers. Each layer has a single responsibility and only depends on the layer immediately below it. This pattern:

- encourages separation of concerns
- makes individual pieces easier to test and maintain
- allows teams to work in parallel
- simplifies future refactoring or technology swaps

### 1. **Config**
- Location: `src/config/`
- Purpose: set up environment-specific configuration (e.g. database connection).
- Example: `db.js` establishes the connection to MongoDB.

### 2. **Models**
- Location: `src/models/`
- Purpose: define the shape of data using Mongoose schemas.
- Contains: `Category.js`, `Product.js`, etc.
- Note: Category uses recursive references (`subcategories`) to build trees.

### 3. **Repositories**
- Location: `src/repositories/`
- Purpose: provide a data access layer. All database operations go through here.
- Benefits: Abstracts database driver, easing testing and potential migration.
- Example methods: `create`, `findById`, `update`, `list`, etc.

### 4. **Services**
- Location: `src/services/`
- Purpose: implement business logic and orchestrate repository calls.
- Keeps controllers thin; enforces rules like preventing circular category links.
- Example: linking a child category to a parent when creating a new record.

### 5. **Controllers**
- Location: `src/controllers/`
- Purpose: handle HTTP requests/responses, call appropriate service methods, apply basic error handling.

### 6. **Routes**
- Location: `src/routes/`
- Purpose: define Express routers mapping URLs to controller methods (e.g. `/api/categories`).

### 7. **Entry Point**
- `index.js` at project root
- Purpose: initialize environment, connect to DB, setup middleware, mount routes, start server.

---

## 🌳 Nested Document Structure

The catalog supports hierarchical categories (e.g., Electronics > Computers > Laptops).

- **Category Schema**: each category document stores an array of `subcategories` (ObjectId references to other categories) and `products`.  This allows:
  - efficient retrieval of a category along with its immediate children (`populate` is used).
  - arbitrary depth without embedding entire subtrees (avoids document size limits).

- When creating a category with a `parentId`, the service updates the parent’s `subcategories` array.

- Products are stored in their own collection and referenced from categories. This normalization simplifies product updates.

---

## 🎯 Key Principles

- **Modularity**: Each file/module has a focused purpose. Modules communicate through well-defined interfaces.
- **Class-based organization**: Services, repositories, and controllers are implemented as classes to group related methods and make mocking/testing straightforward.
- **Extensibility**: Adding new features (orders, users, etc.) follows the same folder pattern; you don’t need to change unrelated code.
- **Commenting**: Important design decisions and layer responsibilities are documented inline for maintainers and students alike.

---

## 🛠️ Development Notes

- To run the project locally, use `npm install` and `npm run dev` (requires MongoDB).
- Environment variables are managed with `dotenv`; see `.env.example`.
- Tests are not included now but would target services and repositories using mocks.
