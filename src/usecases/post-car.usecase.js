const { v4: uuidv4 } = require('uuid');
const CarRepository = require('../repositories/carRepository');
class PostCarUseCase {
  constructor(carRepository) {
    this.carRepository = carRepository;
  }

  execute(car) {
    car.id = uuidv4();
    return this.carRepository.create(car);
  }
}

module.exports = new PostCarUseCase(new CarRepository());
