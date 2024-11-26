import { DataSource } from "typeorm";
import { Categoria } from "./entities/categoria.entity";
import { Inject } from "@nestjs/common";

export const categoriaProviders={
    provide:'CATEGORIA_REPOSITORY',
    useFactory: (DataSource:DataSource)=>DataSource.getRepository(Categoria),
    Inject:['DATABASE_CONNECTION_POSTGRE']
}