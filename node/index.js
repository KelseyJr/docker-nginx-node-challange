const fastify = require('fastify')({ logger: true })
const { faker } = require('@faker-js/faker');

const dbConfig = {
  host: 'database',
  user: 'root',
  password: 'root',
  database: 'nodedb',
  promise: true,
}

fastify.register(require('@fastify/mysql'), dbConfig)


const createPeopleTable = async () => {
  const connection = await fastify.mysql.getConnection()
  await connection.query(
    `CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
    `
  )
  connection.release()
}


fastify.get('/', async (request, reply) => {
  const randomName = faker.person.fullName();
  const connection = await fastify.mysql.getConnection()
  await connection.query(
    'INSERT INTO people(name) values(?)', [randomName],
  )
  const [response] = await connection.query('SELECT * FROM people')
  connection.release()

  const generateHTMLContent = `<h1>Full Cycle Rocks!</h1>
                               <br>
                               <ul>
                                ${response.map(resp => `<li>${resp.name}</li>`).join('')}
                               </ul>
                              `

  return reply.type('text/html').send(generateHTMLContent)
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
    await createPeopleTable()
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
