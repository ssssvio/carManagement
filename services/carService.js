const CarRepository = require('../src/repositories/carRepository');

export class CarService {
  constructor() {
    this.cars = [];
    this.repository = new CarRepository();
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id) {
    return this.repository.findById(id);
  }

  async create(car) {
    let newId = 1;
    if (this.cars.length > 0) {
      const lastCar = this.cars[this.cars.length - 1];
      newId = lastCar.id + 1;
    }
    car.id = newId;
    this.cars.push(car);
    await this.repository.saveData();
    return car;
  }

  async update(id, updatedCar) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex >= 0) {
      this.cars[carIndex] = { ...this.cars[carIndex], ...updatedCar };
      await this.repository.saveData();
      return this.cars[carIndex];
    }
    return null;
  }

  async delete(id) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex >= 0) {
      const deletedCar = this.cars[carIndex];
      this.cars.splice(carIndex, 1);
      await this.repository.saveData();
      return deletedCar;
    }
    return null;
  }
}
