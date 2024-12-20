const Menu = require("../models/Menu");

const resolvers = {
  // Retrieve a single menu by category
  getMenuByCategory: async ({ category }) => {
    try {
      const menu = await Menu.findOne({ category });
      if (!menu) {
        throw new Error(`Menu category "${category}" not found`);
      }
      return menu;
    } catch (err) {
      console.error("Error retrieving menu:", err);
      throw new Error("Error retrieving menu");
    }
  },

  // Retrieve all menus
  getMenus: async () => {
    try {
      const menus = await Menu.find();
      return menus;
    } catch (err) {
      console.error("Error retrieving menus:", err);
      throw new Error("Error retrieving menus");
    }
  },

  // Create a new menu
  createMenu: async ({ category, items }) => {
    try {
      // Create new menu document
      const menu = new Menu({ category, items });
      await menu.save();
      return menu;
    } catch (err) {
      console.error("Error creating menu:", err);
      throw new Error("Error creating menu");
    }
  },

  // Update an existing menu by category
  updateMenu: async ({ category, items }) => {
    try {
      const menu = await Menu.findOneAndUpdate(
        { category }, // Find by category
        { items }, // Update the items
        { new: true } // Return the updated document
      );
      if (!menu) {
        throw new Error(`Menu category "${category}" not found`);
      }
      return menu;
    } catch (err) {
      console.error("Error updating menu:", err);
      throw new Error("Error updating menu");
    }
  },

  // Delete a menu by category
  deleteMenu: async ({ category }) => {
    try {
      const menu = await Menu.findOneAndDelete({ category });
      if (!menu) {
        throw new Error(`Menu category "${category}" not found`);
      }
      return menu;
    } catch (err) {
      console.error("Error deleting menu:", err);
      throw new Error("Error deleting menu");
    }
  },
};

module.exports = resolvers;
