import BaseRepository from "./baseRepository.js";
import { User } from "../models/User.js";
class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  // Additional user-specific methods can be added here
  validate(data) {
    return data.name.toLowerCase() === "admin";
  }
}

export default UserRepository;
