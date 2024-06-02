exports.up = function (knex) {
    return knex.schema.createTable('Categories', (t) => {
      t.increments();
      t.string('category_name').notNullable().unique();
      t.text('description');
      t.enu('active_status', ['active', 'inactive', 'deleted', 'hidden'], { useNative: false }).defaultTo('active');
      t.bigInteger('added_by').unsigned().references('id').inTable('Users').nullable();
      t.dateTime('created_at');
      t.dateTime('updated_at');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('Categories');
  };