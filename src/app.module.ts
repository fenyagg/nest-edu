import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

const environment = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ItemsModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_WRITE_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
