import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from 'src/items/dto/create-item.dto';
import { IItem } from 'src/items/interfaces/item.interface';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemsModel: Model<IItem>) {}

  async findAll(): Promise<IItem[]> {
    return this.itemsModel.find();
  }

  async findOne(id: string): Promise<IItem> {
    return this.itemsModel.findOne({ _id: id });
  }

  async create(item: CreateItemDto): Promise<IItem> {
    const newItem = new this.itemsModel(item);
    return newItem.save();
  }

  async delete(id: string): Promise<IItem> {
    return this.itemsModel.findByIdAndRemove(id);
  }

  async update(id: string, item: CreateItemDto): Promise<IItem> {
    return this.itemsModel.findByIdAndUpdate(id, item, { new: true });
  }
}
