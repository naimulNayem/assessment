import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.models';
import { Movie, MovieDocument } from './movie.models';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
    @InjectModel('movie') private readonly movieModel: Model<MovieDocument>,
  ) {}

  // create a new user
  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  // get all users
  async getAllUsers() {
    return this.userModel
      .find({})
      .then((user) => {
        return user;
      })
      .catch((err) => console.log(err));
  }

  // update user
  async updateUser(id, data): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  // delete a user
  async deleteUser(id) {
    return this.userModel.findByIdAndRemove(id);
  }

  // create a new movie
  async createMovie(movie: Movie): Promise<Movie> {
    const newMovie = new this.movieModel(movie);
    return newMovie.save();
  }

  // get all movies
  async getAllMovies() {
    return this.movieModel
      .find({})
      .then((movie) => {
        return movie;
      })
      .catch((err) => console.log(err));
  }
}
