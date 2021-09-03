'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     // field 추가
     await queryInterface.addColumn('posts', 'user_id', Sequelize.INTEGER);

     // foreign key 연결
     await queryInterface.addConstraint('posts', {
       fields: ['user_id'],
       type: 'foreign key',
       name: 'FK_posts_user_id',
       references: {
         table: 'users',
         field: 'id'
       },
       onDelete: 'cascade',
       onUpdate: 'cascade'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('posts', 'FK_posts_user_id');
    await queryInterface.removeColumn('posts', 'user_id');
  }
};
