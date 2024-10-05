const fs = require('fs');
const path = require('path');

class CarRepository {
  constructor() {
    this.filePath = path.join(__dirname, '../../data/cars.json');
    this.cars = [];
    this.loadData();
  }

  async loadData() {
    if (fs.existsSync(this.filePath)) {
      const data = await fs.promises.readFile(this.filePath, 'utf8');
      this.cars = JSON.parse(data);
    }
  }

  async saveData(cars) {
    await fs.promises.writeFile(this.filePath, JSON.stringify(cars, null, 2));
  }

  async findAll() {
    return this.cars;
  }

  async findById(id) {
    return this.cars.find((car) => car.id === id);
  }
}

module.exports = CarRepository;
