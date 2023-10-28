import { DataSource, DataSourceOptions } from 'typeorm'

export { DataSource, DataSourceOptions } from 'typeorm'
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root123',
    database: 'e-commerce',
    entities: [],
    migrations: [],
    logging: false,
    synchronize: true
}
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;