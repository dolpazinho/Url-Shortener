import Knex from "knex";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;


// const knex = Knex({
//     client: "postgresql",
//     connection: {
//         host: DB_HOST,
//         port: Number(DB_PORT),
//         user: DB_USER,
//         password: DB_PASSWORD,
//         database: DB_DATABASE
//     },
//     useNullAsDefault: true
// });

const knex = Knex({ 
    client: 'sqlite3',
    connection: {
       filename: "./mydb.sqlite"
    },
    useNullAsDefault: true
}); 

export const onDatabaseConnect = async () => knex.raw("SELECT 1");

export default Knex;