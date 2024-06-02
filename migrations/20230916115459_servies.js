exports.up = function (knex) {
    return knex.schema.createTable('servies', (t) => {
      t.increments();
      t.bigInteger('category_id').unsigned().references('id').inTable('Categories').notNullable();
      t.string('service_name').notNullable().unique();
      t.float('mrp').defaultTo(0);
      t.enu('type', ['normal', 'vip', ], { useNative: false }).defaultTo('servies');
      t.text('description');
      t.enu('active_status', ['active', 'inactive', 'deleted', 'hidden'], { useNative: false }).defaultTo('active');
      t.bigInteger('added_by').unsigned().references('id').inTable('Users').nullable();
      t.timestamp('created_at');
      t.timestamp('updated_at');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('servies');
  };