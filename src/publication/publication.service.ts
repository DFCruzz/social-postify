import { Injectable } from '@nestjs/common';
import { Publication } from './entity/Publication';
import { CreatePublicationDTO } from './dto/create-publication.dto';

@Injectable()
export class PublicationService {
  publication: Publication[] = [];

  createPublication({image, title, text, dateToPublish, published, socialMedia, userId}: CreatePublicationDTO){
    const post = new Publication(image, title, text, dateToPublish, published, socialMedia, userId)
    return this.publication.push(post)
  }

  getAllPublicationsByUserId(userId: number): Publication[] {
    return this.publication.filter((publication) => publication.userId === userId);
  }
}