'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     // field 추가
     await queryInterface.addColumn('comments', 'user_id', Sequelize.INTEGER);

     // foreign key 연결
     await queryInterface.addConstraint('comments', {
       fields: ['user_id'],
       type: 'foreign key',
       name: 'FK_comments_user_id',
       references: {
         table: 'users',
         field: 'id'
       },
       onDelete: 'cascade',
       onUpdate: 'cascade'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('comments', 'FK_comments_user_id');
    await queryInterface.removeColumn('comments', 'user_id');
  }
};
