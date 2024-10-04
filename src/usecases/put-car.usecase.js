const CarRepository = require('../repositories/carRepository');

class UpdateCarUseCase {
  constructor(carRepository) {
    this.carRepository = carRepository;
  }

  execute(id, updatedCar) {
    return this.carRepository.update(id, updatedCar);
  }
}

module.exports = new UpdateCarUseCase(new CarRepository());
