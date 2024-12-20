const { buildSchema } = require("graphql");

const schema = buildSchema(`
  # Menu Item type that defines the structure of each menu item
  type MenuItem {
    name: String!
    description: String
    price: Float!
    availability: Boolean!
  }

  # Menu type that defines the structure of the menu object returned from queries
  type Menu {
    category: String!
    items: [MenuItem!]!
  }

  # Input type for creating/updating a menu
  input MenuItemInput {
    name: String!
    description: String
    price: Float!
    availability: Boolean!
  }

  # Query
  type Query {
    getMenuByCategory(category: String!): Menu
    getMenus: [Menu]
  }

  # Mutation
  type Mutation {
    createMenu(category: String!, items: [MenuItemInput!]!): Menu
    updateMenu(category: String!, items: [MenuItemInput!]!): Menu
    deleteMenu(category: String!): Menu
  }
`);

module.exports = schema;
