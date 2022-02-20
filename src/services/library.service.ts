import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findOne(id: string): Promise<Book> {
    return this.bookRepository.findOne(id);
  }

  createBook(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }
}
