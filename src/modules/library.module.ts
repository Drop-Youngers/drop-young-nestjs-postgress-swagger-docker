import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryController } from 'src/controllers/library.controller';
import { Book } from 'src/entities/book.entity';
import { LibraryService } from 'src/services/library.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [LibraryService],
  controllers: [LibraryController],
})
export class LibraryModule {}
