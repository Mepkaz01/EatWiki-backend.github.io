'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
    {
      name: 'Jeremiah Miller',        
      username: 'jmiller',        
      password: 'asdf',        
      email: 'jmillerr@up.com'            
    },      
    {        
      name: 'Baibhav Kumar',        
      username: 'bkumar',        
      password: 'asdf',        
      email: 'bkumar@up.com'              
    },      
    {        
      name: 'Pachel Pederson',        
      username: 'pachel',        
      password: 'asdf',        
      email: 'ppachelr@up.com'             
    },      
    {        
      name: 'Julia Christensen',        
      username: 'julia',        
      password: 'asdf',        
      email: 'cjulia@up.com'     

      
    
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    
  }
};
