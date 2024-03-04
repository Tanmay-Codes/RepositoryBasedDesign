class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return await this.model.find();
  }

  async getById(id) {
    return await this.model.findById(id);
  }

  async create(data) {
    const newModel = new this.model(data);
    return await newModel.save();
  }

  async update(id, data) {
    return await this.model.findByIdAndUpdate(id, data, { new: true }); // Return updated document
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

export default BaseRepository;
