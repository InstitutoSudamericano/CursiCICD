import { Injectable } from '@nestjs/common';
import { CreateLibroAutorDto } from './dto/create-libro-autor.dto';
import { UpdateLibroAutorDto } from './dto/update-libro-autor.dto';

@Injectable()
export class LibroAutorService {
  create(createLibroAutorDto: CreateLibroAutorDto) {
    return 'This action adds a new libroAutor';
  }

  findAll() {
    return `This action returns all libroAutor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libroAutor`;
  }

  update(id: number, updateLibroAutorDto: UpdateLibroAutorDto) {
    return `This action updates a #${id} libroAutor`;
  }

  remove(id: number) {
    return `This action removes a #${id} libroAutor`;
  }
}
