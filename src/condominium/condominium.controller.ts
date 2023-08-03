import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ResultDto } from 'src/dto/result.dto';
import { CondominiumService } from './condominium.service';
import { CreateCondominiumDto } from './dto/create-condominium.dto';
import { UpdateCondominiumDto } from './dto/update-condominium.dto';
import { Condominium } from './entities/condominium.entity';

//* O modulo controller serve para fazer a comunicação com o modulo service
//* O modulo controller serve para fazer a comunicação com o modulo repository
//* O modulo controller serve para fazer a comunicação com o modulo dto
//* O modulo controller serve para fazer a comunicação com o modulo entity
//* O modulo controller serve para fazer a comunicação com o modulo schema
//* O modulo controller serve para fazer a comunicação com o modulo interface
//* Esse modulo serve somente para chamar as rotas e passar os dados para o modulo service
@Controller('condominio')
export class CondominiumController {
  constructor(private readonly condominiumService: CondominiumService) { }

  @Post()
  create(
    @Body() createCondominiumDto: CreateCondominiumDto,
  ): Promise<ResultDto> {
    return this.condominiumService.create(createCondominiumDto);
  }

  @Get()
  findAll() {
    return this.condominiumService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.condominiumService.findOne(id);
  }

  @Get('code/:code')
  findCondominiumByCode(@Param('code') code: string) {
    return this.condominiumService.findCondominiumByCode(code);
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateCondominiumDto: UpdateCondominiumDto,
  ) {
    return this.condominiumService.update(id, updateCondominiumDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.condominiumService.remove(id);
  }
}
