exports.up = function (knex) {
  return knex.schema.createTable('Users', (t) => {
    t.increments();
    t.string('name');
    t.string('email').unique();
    t.string('password');
    t.string('phone');
    t.enu('role', ['admin', 'user'], {
      useNative: false,
    });
    t.enu('active_status', ['active', 'inactive', 'deleted', 'hidden'], { useNative: false }).defaultTo('active');
    t.dateTime('created_at');
    t.dateTime('updated_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('Users');
};
