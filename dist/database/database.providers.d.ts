import { DataSource } from 'typeorm';
import { ConfigService } from 'src/config/config.service';
export declare const databaseProvider: {
    provide: string;
    inject: (typeof ConfigService)[];
    useFactory: (config: ConfigService) => Promise<DataSource>;
}[];
