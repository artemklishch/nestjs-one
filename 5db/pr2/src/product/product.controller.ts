import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {
  @Post('create') // route - product/create
  async create(@Body() dto: Omit<ProductModel, '_id'>) {
    // Omit - метод тайпскрипта, первый аргумент - модель, второй - конкретные поля, которые мы хотим исключить
    // Pick - обратная сторона к методу  Omit
  }

  @Get(':id') // route - product/:id
  async get(@Param('id') id: string) {}

  @Delete(':id') // route - product/:id
  async delete(@Param('id') id: string) {}

  @Patch(':id') // route - product/:id
  async patch(@Param('id') id: string, @Body() dto: ProductModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {}
}
