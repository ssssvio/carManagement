const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../../data/cars.json');

export class CarRepository {
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
}
