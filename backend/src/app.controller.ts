import { UserUpdateDTO } from './userUpdate.dto';
import { User } from './user.models';
import { Movie } from './movie.models';
import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto: User) {
    Logger.log(userDto);
    return this.appService.createUser(userDto);
  }

  @Get()
  getAllUsers() {
    return this.appService.getAllUsers();
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateData: UserUpdateDTO,
  ): Promise<User> {
    return this.appService.updateUser(id, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }

  @Post('movie')
  async createMovie(@Body() movieDto: Movie) {
    Logger.log(movieDto);
    return this.appService.createMovie(movieDto);
  }

  @Get('movie')
  getAllMovies() {
    return this.appService.getAllMovies();
  }
}
