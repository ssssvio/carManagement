const CarRepository = require('../repositories/carRepository');

class GetCarUseCase {
  constructor(carRepository) {
    this.carRepository = carRepository;
  }

  execute(id) {
    return this.carRepository.findById(id);
  }
}

module.exports = new GetCarUseCase(new CarRepository());
