'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items', [
      {
        itemName: "Backpack, Fits 15 Laptops",
        category: "Accesories",
        price: 20,
        status: "used",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        userId: 1
      },
      {
        itemName: "White Leather Sofa",
        category: "Furniture",
        price: 100,
        status: "used",
        description: "Comfortable and reclinable",
        image: "https://www.finallyhomefurnishings.com/v/vspfiles/photos/CM6411WH-S-2T.jpg",
        userId: 2
      },
      {
        itemName: "Samsung 30 inch Monitor",
        category: "Electronics",
        price: 120,
        status: "used",
        description: "Samsung Odyssey G7 26.9 16:9 240 Hz Curved VA G-SYNC HDR Gaming Monitor",
        image: "https://static.bhphoto.com/images/images500x500/samsung_lc27g75tqsnxza_27_c27tg70_gaming_monitor_1593534951_1554563.jpg",
        userId: 3
      }],
      
      { });     
    
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('Items', null, {});
  }
};
