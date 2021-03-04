import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "565765",
            name: "item1",
            qty: 100,
            description: "this is item one"
        },
        {
            id: "4354365",
            name: "item two",
            qty: 200,
            description: "this is item two"
        }
    ];
    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id)
    }

}
