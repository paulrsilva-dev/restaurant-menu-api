
# Menu Management API

This project provides a GraphQL API for managing menus and their items. You can query and modify menu data using GraphQL queries and mutations.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies:

   ```bash
   npm install
   ```

### Starting the Server

To start the server, run the following command:

```bash
npm run start
```

This will start the server and allow you to make GraphQL queries and mutations.

## How GraphQL Queries and Mutations Work

### Queries

A **query** is used to retrieve data from the server. In this project, you can use the following queries:

- **`getMenuByCategory(category: String!)`:** Retrieves a menu by its category. You must provide a valid category string to retrieve the menu.
- **`getMenus`:** Retrieves all available menus.

Example query to get a menu by category:

```graphql
query {
  getMenuByCategory(category: "Desserts") {
    category
    items {
      name
      price
      description
    }
  }
}
```

### Mutations

A **mutation** is used to modify data on the server, such as creating, updating, or deleting menus.

- **`createMenu(category: String!, items: [MenuItemInput!]!)`:** Creates a new menu with a category and a list of items.
- **`updateMenu(category: String!, items: [MenuItemInput!]!)`:** Updates an existing menu by providing a new set of items.
- **`deleteMenu(category: String!)`:** Deletes a menu by its category.

Example mutation to create a new menu:

```graphql
mutation {
  createMenu(category: "Beverages", items: [
    { name: "Coffee", price: 2.5, description: "Freshly brewed coffee", availability: true },
    { name: "Tea", price: 1.8, description: "Herbal tea", availability: true }
  ]) {
    category
    items {
      name
      price
      description
    }
  }
}
```

### Input Type: `MenuItemInput`

When creating or updating a menu, you need to provide data for each menu item in the form of a `MenuItemInput`. This input type includes:

- `name`: Name of the menu item (required).
- `description`: Description of the menu item (optional).
- `price`: Price of the menu item (required).
- `availability`: Availability of the menu item (required, default is true).

## License

This project is licensed under the MIT License.
