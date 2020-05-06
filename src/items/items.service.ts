import { Injectable } from '@nestjs/common';
import { IItem } from 'src/items/interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: IItem[] = [
    {
      id: '12312312321',
      description: 'Example description',
      name: 'Item one',
      qty: 123123,
    },
    {
      id: '3333333',
      description: 'Example description',
      name: 'Item two',
      qty: 4,
    },
  ];

  findAll(): IItem[] {
    return this.items;
  }

  findOne(id: string): IItem {
    return this.items.find(item => item.id === id);
  }
}
