import { createConnection, Connection } from 'typeorm';

export async function createDBConnection(): Promise<Connection> {
  const { NODE_ENV, MYSQL_HOST, MYSQL_TIMEZONE, MYSQL_DB, MYSQL_USER, MYSQL_PASS, MYSQL_PORT = '3306' } = process.env;
  const isDev = NODE_ENV === 'development';
  return await createConnection({
    type: 'mysql',
    host: MYSQL_HOST,
    port: parseInt(MYSQL_PORT, 10),
    timezone: MYSQL_TIMEZONE,
    username: MYSQL_USER,
    password: MYSQL_PASS,
    database: MYSQL_DB,
    logging: isDev ? 'all' : false,
  });
}
