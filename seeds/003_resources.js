exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name: "item 1",
      description: 'Description of item one',
      projectId: 1
    },
    {
      name: "item 2",
      description: 'Description of item two',
      projectId: 1
    },
    {
      name: "item 3",
      description: 'Description of item three',
      projectId: 2
    },
    {
      name: "item 4",
      description: 'Description of item four',
      projectId: 2
    },
    {
      name: "item 5",
      description: 'Description of item five',
      projectId: 3
    },
    {
      name: "item 6",
      description: 'Description of item six',
      projectId: 3
    }
  ])
};
