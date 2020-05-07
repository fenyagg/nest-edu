import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from 'src/items/dto/create-item.dto';
import { IItem } from 'src/items/interfaces/item.interface';
import { ItemsService } from 'src/items/items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<IItem[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<IItem> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<IItem> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<IItem> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(
    @Body() createItemDto: CreateItemDto,
    @Param('id') id,
  ): Promise<IItem> {
    return this.itemsService.update(id, createItemDto);
  }
}
