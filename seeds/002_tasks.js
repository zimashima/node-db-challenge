exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      description: 'Description of task one',
      notes: 'do not forget task one',
      completed: false,
      projectId: 1
    },
    {
      description: 'Description of task two',
      notes: 'do not forget task two,too',
      completed: false,
      projectId: 1
    },
    {
      description: 'Description of task three',
      notes: 'do not forget task 3',
      completed: false,
      projectId: 2
    },
    {
      description: 'Description of task four',
      notes: 'do not 4get task four',
      completed: false,
      projectId: 2
    },
    {
      description: 'Description of task five',
      notes: 'do not forget task five',
      completed: false,
      projectId: 3
    },
    {
      description: 'Description of task six',
      notes: 'do not forget task sixxx',
      completed: false,
      projectId: 3
    }
  ])
};
