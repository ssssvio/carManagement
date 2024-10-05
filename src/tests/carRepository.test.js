const assert = require('assert');
const CarService = require('../services/carService');
const CarRepository = require('../repositories/carRepository');

describe('CarService', () => {
  let carService;
  let carRepo;

  before(async () => {
    carRepo = new CarRepository();
    carService = new CarService(carRepo);
    await carRepo.loadData();
  });

  it('should create a new car', async () => {
    try {
      const car = await carService.create({
        placa: 'ABC-1212',
        chassi: '12345999999632144',
        renavam: '654327565651',
        modelo: 'Corolla Cross',
        marca: 'Toyota',
        ano: 2023,
      });
      assert.strictEqual(car.id, 1);
    } catch (error) {
      assert.fail(`Error creating car: ${error.message}`);
    }
  });

  it('should find a car by id', async () => {
    try {
      const createdCar = await carService.create({
        placa: 'ABC-1234',
        chassi: '12345123333369172',
        renavam: '654321999967',
        modelo: 'Cybertruck',
        marca: 'Tesla',
        ano: 2024,
      });

      const car = await carService.findById(createdCar.id);
      assert.strictEqual(car.placa, 'ABC-1234');
    } catch (error) {
      assert.fail(`Error finding car: ${error.message}`);
    }
  });

  it('should update a car', async () => {
    try {
      const createdCar = await carService.create({
        placa: 'DEF-5678',
        chassi: '78912391818828228',
        renavam: '32198182927',
        modelo: 'Corolla Cross',
        marca: 'Honda',
        ano: 2022,
      });

      const updatedCar = await carService.update(createdCar.id, {
        modelo: 'Civic',
      });
      assert.strictEqual(updatedCar.modelo, 'Civic');
    } catch (error) {
      assert.fail(`Error updating car: ${error.message}`);
    }
  });

  it('should delete a car', async () => {
    try {
      const createdCar = await carService.create({
        placa: 'GHI-91011',
        chassi: '45678967677277227',
        renavam: '65498723314',
        modelo: 'Nivus',
        marca: 'Volkswagen',
        ano: 2023,
      });

      const deletedCar = await carService.delete(createdCar.id);
      assert.strictEqual(deletedCar.id, createdCar.id);

      const carAfterDelete = await carService.findById(createdCar.id);
      assert.strictEqual(carAfterDelete, undefined);
    } catch (error) {
      assert.fail(`Error deleting car: ${error.message}`);
    }
  });
});
