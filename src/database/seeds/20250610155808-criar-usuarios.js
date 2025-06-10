const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Aleut',
          email: 'aleut1@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'croween',
          email: 'croween1@gmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'bandu',
          email: 'bandu1@gmail.com',
          password_hash: await bcryptjs.hash('12323', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async () => {
  },
};
