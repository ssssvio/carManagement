const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../data/cars.json');

class CarRepository {
  constructor() {
    this.cars = [];
    this.loadData();
  }

  loadData() {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      this.cars = JSON.parse(data) || [];
    }
  }

  saveData() {
    fs.writeFileSync(filePath, JSON.stringify(this.cars, null, 2));
  }

  create(car) {
    this.cars.push(car);
    this.saveData();
    return car;
  }

  findById(id) {
    return this.cars.find((car) => car.id === id);
  }

  findAll() {
    return this.cars;
  }

  update(id, updatedCar) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex >= 0) {
      this.cars[carIndex] = { ...this.cars[carIndex], ...updatedCar };
      this.saveData();
      return this.cars[carIndex];
    }
    return null;
  }

  delete(id) {
    const car = this.findById(id);
    if (car) {
      this.cars = this.cars.filter((car) => car.id !== id);
      this.saveData();
      return car;
    }
    return null;
  }
}

module.exports = CarRepository;
