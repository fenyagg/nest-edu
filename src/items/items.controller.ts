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
  findAll(): IItem[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): IItem | void {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `created ${createItemDto.name} ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `deleted ${id}`;
  }

  @Put(':id')
  update(@Body() createItemDto: CreateItemDto, @Param('id') id): string {
    return `updated ${id} ${createItemDto.name}`;
  }
}
