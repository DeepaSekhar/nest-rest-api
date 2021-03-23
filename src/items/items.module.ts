
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Module } from '@nestjs/common';
import { ItemSchema } from './schemas/items.schema'
import { MongooseModule } from '@nestjs/mongoose'


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
    controllers: [ItemsController],
    providers: [ItemsService],
})
export class ItemsModule { }
