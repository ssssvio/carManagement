const CarRepository = require('../repositories/carRepository');

class GetAllCarsUseCase {
  constructor(carRepository) {
    this.carRepository = carRepository;
  }

  execute() {
    return this.carRepository.findAll();
  }
}

module.exports = new GetAllCarsUseCase(new CarRepository());
