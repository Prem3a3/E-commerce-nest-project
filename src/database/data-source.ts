import { DataSource, DataSourceOptions } from 'typeorm'

export { DataSource, DataSourceOptions } from 'typeorm'
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: 'postgres',
    password: 'root123',
    database: 'e-commerce',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: [],
    logging: true,
    synchronize: false
}
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;