import { Body, Controller, Post, Get, UseGuards, Param } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDTO } from './dto/create-publication.dto';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { UserRequest } from '../auth/decorators/user.decorator';
import { User } from 'src/user/entity/User';

@Controller('publication')
export class PublicationController {
  constructor(
    private readonly publicationService: PublicationService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  createPost(@Body() body: CreatePublicationDTO, @UserRequest() user: User) {
    return this.publicationService.createPublication({...body, userId: user.id});
  }

  @UseGuards(AuthGuard)
  @Get(':userId')
  getAllPublicationsByUserId(@Param('userId') userId: string) {
    const publications = this.publicationService.getAllPublicationsByUserId(+userId);
    return { publications };
  }
}