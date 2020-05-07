import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from 'src/items/items.controller';
import { ItemsService } from 'src/items/items.service';
import { ItemSchema } from 'src/items/schemes/items.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Item', schema: ItemSchema
  }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
