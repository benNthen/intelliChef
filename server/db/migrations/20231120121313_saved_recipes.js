/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('saved_recipes', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.specificType('recipe_ids', 'integer[]')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('saved_recipes')

}
