/*
 * @Author: Prawee Wongsa prawee.w@integra8t.com 
 * @Date: 2017-12-17 00:35:07 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2017-12-17 04:00:20
 */
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ silent: true, path: `${process.env.PWD}/.env` });

const db = new Sequelize(
    process.env.MYSQL_DBNAME, 
    process.env.MYSQL_USERNAME, 
    process.env.MYSQL_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

export default db;
