import { UserSchema } from './user.models';
import { MovieSchema } from './movie.models';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test_db'),
    MongooseModule.forFeature([
      { name: 'user', schema: UserSchema },
      { name: 'movie', schema: MovieSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
