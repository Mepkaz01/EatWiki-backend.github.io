'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items', [
      {
        itemName: "Backpack, Fits 15 Laptops",
        category: "Men's Accesories",
        price: 20,
        status: "Used",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        userId: 1
      },
      {
        itemName: "White Leather Sofa",
        category: "Furniture",
        price: 100,
        status: "Used",
        description: "Comfortable, reclinable and nice looking",
        image: "https://www.zurifurniture.com/common/images/products/large/luxor_white_sofa_cgi_1.jpg",
        userId: 3
      },
      {
        itemName: "Samsung 30 inch Monitor",
        category: "Electronics",
        price: 120,
        status: "Used",
        description: "Samsung Odyssey G7 26.9 16:9 240 Hz Curved VA G-SYNC HDR Gaming Monitor",
        image: "https://static.bhphoto.com/images/images500x500/samsung_lc27g75tqsnxza_27_c27tg70_gaming_monitor_1593534951_1554563.jpg",
        userId: 2
      },
      {
        itemName: "Mens Cotton Jacket",
        category: "Men's Clothing",
        price: 50,
        status: "New",
        description: "Stylish and suitable for many occasions",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        userId: 1
      },
      {
        itemName: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        category: "Women's Accessories",
        price: 200,
        status: "Used",
        description: "From Legends Collection, orignal price $700. Wear facing inward to be bestowed with love and abundance or outward for protection.",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        userId: 3
      },
      {
        itemName: "Solid Gold Petite Micropave",
        category: "Women's Accessories",
        price: 150,
        status: "New",
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        userId: 4
      },
      {
        itemName: "White Gold Plated Princess",
        category: "Women's Accessories",
        price: 100,
        status: "Used",
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        userId: 4
      },
      {
        itemName: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        category: "Electronics",
        price: 69,
        status: "New",
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        userId: 2
      },
      {
        itemName: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        category: "Electronics",
        price: 100,
        status: "Used",
        description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        userId: 2
      },
      {
        itemName: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
        category: "Electronics",
        price: 1000,
        status: "New",
        description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        userId: 2
      },
      {
        itemName: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        category: "Women's Clothing",
        price: 30,
        status: "New",
        description: "Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience.",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        userId: 4
      },
      {
        itemName: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        category: "Women's Clothing",
        price: 25,
        status: "New",
        description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        userId: 3
      },
      {
        itemName: "Regal Skeleton Queen Costume",
        category: "Women's Clothing",
        price: 100,
        status: "New",
        description: "Rule the kingdom with every last royal bone in that body! Size M",
        image: "https://assets.yandycdn.com/Products/IC_CF11125_2019COSTUMES.jpg?io=1&type=webp&quality=90",
        userId: 3
      },
      {
        itemName: "Julie and Julia: 365 Days, 524 Recipes, 1 Tiny Apartment Kitchen",
        category: "Books",
        price: 4,
        status: "Used",
        description: "Good condition with great recipes",
        image: "https://pictures.abebooks.com/isbn/9780316109697-us.jpg",
        userId: 4
      },
      {
        itemName: "Ps4 Disney Infinity 2.0 Marvel Super Heroes The Avengers Starter Pack",
        category: "Games",
        price: 150,
        status: "Used",
        description: "Great game for true believers",
        image: "https://slowmoose.com/imgs/imagery/4/4897678426148.jpg",
        userId: 1
      },
      {
        itemName: "2017 Ford Raptor",
        category: "Cars",
        price: 50000,
        status: "Used",
        description: "Great condition, Blue, 25k Miles",
        image: "https://cdn11.bigcommerce.com/s-g4hxf75d/images/stencil/608x608/products/2161/20037/Rausch1__30264.1617923445.jpg?c=2",
        userId: 1
      }],
      
      { });     
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
