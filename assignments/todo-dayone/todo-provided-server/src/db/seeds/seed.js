/* eslint-disable camelcase */

exports.seed = async (knex) => {
  await knex('todo').del()
  await knex('todo').insert({
    created_at: '2021-05-04 12:27:20',
    type: 'Marketing',
    is_done: true,
    text: 'La todo 1',
    title: "Ce qu'il faut faire"
  })
  await knex('todo').insert({
    created_at: '2021-05-04 16:27:20',
    type: 'Communication',
    is_done: true,
    text: 'La todo 2',
    title: "Ce qu'il faut faire en plus"
  })
  await knex('todo').insert({
    created_at: '2021-05-05 16:27:20',
    type: 'Tech',
    is_done: true,
    text: 'La todo 3',
    title: "Ce qu'il faut faire en moins"
  })
  await knex('todo').insert({
    created_at: '2021-05-04 16:27:20',
    type: 'RH',
    is_done: true,
    text: 'La todo 4',
    title: 'bla bla bla'
  })
  await knex('todo').insert({
    created_at: '2021-02-04 12:27:20',
    type: 'Marketing',
    is_done: false,
    text: 'La todo 5',
    title: "Ce qu'il faut faire"
  })
  await knex('todo').insert({
    created_at: '2021-10-04 16:27:20',
    type: 'Communication',
    is_done: false,
    text: 'La todo 6',
    title: "Ce qu'il faut faire en plus"
  })
  await knex('todo').insert({
    created_at: '2021-05-08 16:27:20',
    type: 'Tech',
    is_done: false,
    text: 'La todo 7',
    title: "Ce qu'il faut faire en moins"
  })
  await knex('todo').insert({
    created_at: '2021-05-09 16:27:20',
    type: 'RH',
    is_done: false,
    text: 'La todo 8',
    title: 'bla bla bla'
  })
}
