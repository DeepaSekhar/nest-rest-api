import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto'
import { Mongoose } from 'mongoose'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'
import { ItemSchema } from './schemas/items.schema';

@Controller('items')
export class ItemsController {
    [x: string]: any;
    constructor(private readonly itemsService: ItemsService) { }
    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll()

    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);

    }
    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto)
    }

    @Delete(':id')
    async delete(id: string): Promise<Item> {
        return await this.itemsService.delete(id);

    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {

        return this.itemsService.update(id, updateItemDto);

    }

}
