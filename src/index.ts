import "dotenv/config";
import knex, { onDatabaseConnect } from './config/knex';

const main = async () => {
    try { 
        await onDatabaseConnect();
        console.log("Database is Connected");
        //Database is ready
        // const users = await knex('users').select(['username']).where('id', 2).first();
        const users = await knex('users').insert({
            username: "testing",
            password: "testing3",
        },
        "*"
        );
        console.log(users);
    } catch (e) {
        console.log(e)
    }
};

main();

