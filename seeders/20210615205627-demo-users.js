'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
    {
      name: 'Jeremiah Miller',        
      username: 'jeremiah',        
      password: 'asdf',        
      email: 'jeremiah@test.com'            
    },      
    {        
      name: 'Baibhav Kumar',        
      username: 'kumar',        
      password: 'asdf',        
      email: 'kumar@test.com'              
    },      
    {        
      name: 'Pachel Pederson',        
      username: 'pachel',        
      password: 'asdf',        
      email: 'pachel@test.com'             
    },      
    {        
      name: 'Julia Christensen',        
      username: 'julia',        
      password: 'asdf',        
      email: 'julia@test.com'     

      
    
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
   
  }
};
