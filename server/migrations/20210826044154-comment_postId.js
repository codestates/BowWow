'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     // field 추가
     await queryInterface.addColumn('comments', 'posts_id', Sequelize.INTEGER);

     // foreign key 연결
     await queryInterface.addConstraint('comments', {
       fields: ['posts_id'],
       type: 'foreign key',
       name: 'FK_comments_posts_id',
       references: {
         table: 'posts',
         field: 'id'
       },
       onDelete: 'cascade',
       onUpdate: 'cascade'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('comments', 'FK_comments_posts_id');
    await queryInterface.removeColumn('comments', 'posts_id');
  }
};
