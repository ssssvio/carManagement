const CarRepository = require('../repositories/carRepository');

class DeleteCarUseCase {
  constructor(carRepository) {
    this.carRepository = carRepository;
  }

  execute(id) {
    return this.carRepository.delete(id);
  }
}

module.exports = new DeleteCarUseCase(new CarRepository());
