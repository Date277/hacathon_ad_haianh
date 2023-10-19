import mysql2, { PoolOptions, Pool } from "mysql2";

const databaseConfig: PoolOptions = {
  database: "quiz_ts",
  port: 3306,
  user: "root",
  password: "haianh123",
  host: "localhost",
};

const database: Pool = mysql2.createPool(databaseConfig);

export default database.promise();
