const moment = require('moment');
const bcrypt = require('bcrypt');
const { bcryptConfig } = require('../config');

exports.seed = function (knex) {
  console.log('Seeding users table');
  // Create users records
  const password = bcrypt.hashSync('123456', bcryptConfig.hashRound);
  const userRecords = [
    {
      id: 1,
      first_name: 'Admin',
      last_name: ' ',
      phone: '+911231231231',
      email: 'vasim.code@gmail.com',
      password,
      role: 'admin',
      active_status: 'active',
      created_at: moment(),
      updated_at: moment(),
    },
  ];

  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      console.log('Inserting users records');
      return knex('Users').insert(userRecords).then(() => {
        return knex.raw(`SELECT SETVAL('public."Users_id_seq"', COALESCE(MAX("id"), 1) ) FROM public."Users";`);
      })
    })
};
