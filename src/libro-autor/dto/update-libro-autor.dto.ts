import { PartialType } from '@nestjs/mapped-types';
import { CreateLibroAutorDto } from './create-libro-autor.dto';

export class UpdateLibroAutorDto extends PartialType(CreateLibroAutorDto) {}
