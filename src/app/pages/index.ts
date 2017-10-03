import { TransactionModule } from './transaction/transaction.module';
import { HomeModule } from "./home/home.module";

export const APP_CONTAINER_MODULES = [
  TransactionModule,
  HomeModule
];
