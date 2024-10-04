const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../../data/cars.json');

class CarRepository {
  constructor() {
    this.cars = [];
    this.loadData();
  }

  async loadData() {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      this.cars = JSON.parse(data);
    } catch (error) {
      this.cars = [];
    }
  }

  async saveData() {
    await fs.writeFile(filePath, JSON.stringify(this.cars, null, 2));
  }

  async create(car) {
    const lastCar = this.cars[this.cars.length - 1];
    car.id = lastCar ? lastCar.id + 1 : 1;
    this.cars.push(car);
    await this.saveData();
    return car;
  }

  findById(id) {
    return this.cars.find((car) => car.id === id);
  }

  findAll() {
    return this.cars;
  }

  async update(id, updatedCar) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex >= 0) {
      this.cars[carIndex] = { ...this.cars[carIndex], ...updatedCar };
      await this.saveData();
      return this.cars[carIndex];
    }
    return;
  }

  async delete(id) {
    const car = this.findById(id);
    if (car) {
      this.cars = this.cars.filter((car) => car.id !== id);
      await this.saveData();
      return car;
    }
    return;
  }
}

module.exports = CarRepository;
