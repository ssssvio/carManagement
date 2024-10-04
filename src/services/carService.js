const CarRepository = require('../repositories/carRepository');
const carRepository = new CarRepository();

class CarService {
  create(car) {
    return carRepository.create(car);
  }

  getCar(id) {
    return carRepository.findById(id);
  }

  getAllCars() {
    return carRepository.findAll();
  }

  updateCar(id, updatedCar) {
    return carRepository.update(id, updatedCar);
  }

  deleteCar(id) {
    return carRepository.delete(id);
  }
}

module.exports = CarService;
