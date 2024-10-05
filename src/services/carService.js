const CarRepository = require('../repositories/carRepository');

class CarService {
  constructor() {
    this.repository = new CarRepository();
    this.repository.loadData();
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id) {
    return await this.repository.findById(id);
  }

  async create(car) {
    const cars = await this.repository.findAll();
    let newId = 1;
    if (cars.length > 0) {
      const lastCar = cars[cars.length - 1];
      newId = lastCar.id + 1;
    }
    car.id = newId;
    cars.push(car);
    await this.repository.saveData(cars);
    return car;
  }

  async update(id, updatedCar) {
    const cars = await this.repository.findAll();
    const carIndex = cars.findIndex((car) => car.id === id);
    if (carIndex >= 0) {
      cars[carIndex] = { ...cars[carIndex], ...updatedCar };
      await this.repository.saveData(cars);
      return cars[carIndex];
    }
    return null;
  }

  async delete(id) {
    const cars = await this.repository.findAll();
    const carIndex = cars.findIndex((car) => car.id === id);
    if (carIndex >= 0) {
      const deletedCar = cars[carIndex];
      cars.splice(carIndex, 1);
      await this.repository.saveData(cars);
      return deletedCar;
    }
    return null;
  }
}

module.exports = CarService;
