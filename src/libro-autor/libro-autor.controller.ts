import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibroAutorService } from './libro-autor.service';
import { CreateLibroAutorDto } from './dto/create-libro-autor.dto';
import { UpdateLibroAutorDto } from './dto/update-libro-autor.dto';

@Controller('libro-autor')
export class LibroAutorController {
  constructor(private readonly libroAutorService: LibroAutorService) {}

  @Post()
  create(@Body() createLibroAutorDto: CreateLibroAutorDto) {
    return this.libroAutorService.create(createLibroAutorDto);
  }

  @Get()
  findAll() {
    return this.libroAutorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libroAutorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibroAutorDto: UpdateLibroAutorDto) {
    return this.libroAutorService.update(+id, updateLibroAutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libroAutorService.remove(+id);
  }
}
