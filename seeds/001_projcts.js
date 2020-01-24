
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: 'Great Idea',
      description: 'First project ever at Lambda School',
      completed: false
    },
    {
      name: 'Fun Bus',
      description: 'Travel agency kind of project, also at Lambda School',
      completed: false
    },
    {
      name: 'Rick and Morty API',
      description: 'Single Page application challenge utilizing ReactJS',
      completed: false
    }
  ])
};
