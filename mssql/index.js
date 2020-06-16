const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'password',
  server: 'localhost',
  database: 'testdb',
  options: {
    enableArithAbort: true
  }
}

const run = async() => {
  try {
    console.log('Connection Opening...');
    const pool = await sql.connection(config);
    const { recordset } = await sql.query`select * from users;`;

    console.log(recordset);
  }catch (err) {
    console.log(err)
  }finally {
    await pool.close();
    console.log('Connection closed');
  }
}

run();