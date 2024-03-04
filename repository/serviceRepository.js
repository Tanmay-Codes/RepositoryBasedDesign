import BaseRepository from "./baseRepository.js";
import { Service } from "../models/Service.js";

class ServiceRepository extends BaseRepository {
  constructor() {
    super(Service);
  }

  // Additional service-specific methods can be added here
}

export default ServiceRepository;
