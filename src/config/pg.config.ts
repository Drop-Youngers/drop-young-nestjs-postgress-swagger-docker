import { TypeOrmModuleOptions } from '@nestjs/typeorm';

console.log(process.env.POSTGRES_PASSWORD);
console.log(process.env.POSTGRES_USER);
export const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(<string>process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: ['/src/entities/*.entity{.ts,.js}'],
  database: process.env.POSTGRES_DATABASE,
  autoLoadEntities: true,
  synchronize: true,
  migrations: ['dist/src/db/migrations.js'],
  cli: { migrationsDir: 'src/db/migrations' },
};
