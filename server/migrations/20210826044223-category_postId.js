'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     // field 추가
     await queryInterface.addColumn('category_contents', 'posts_id', Sequelize.INTEGER);

     // foreign key 연결
     await queryInterface.addConstraint('category_contents', {
       fields: ['posts_id'],
       type: 'foreign key',
       name: 'FK_category_posts_id',
       references: {
         table: 'posts',
         field: 'id'
       },
       onDelete: 'cascade',
       onUpdate: 'cascade'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('category_contents', 'FK_category_posts_id');
    await queryInterface.removeColumn('category_contents', 'posts_id');
  }
};
