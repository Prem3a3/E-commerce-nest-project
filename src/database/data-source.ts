import { DataSource, DataSourceOptions } from 'typeorm'

export { DataSource, DataSourceOptions } from 'typeorm'
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: 'postgres',
    password: 'root123',
    database: process.env.DB_DATABASE,
    entities: [],
    migrations: [],
    logging: false,
    synchronize: true
}
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;