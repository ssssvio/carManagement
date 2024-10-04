const assert = require('assert');
const CarRepository = require('../repositories/carRepository');

describe('CarRepository', () => {
  let carRepo;

  before(() => {
    carRepo = new CarRepository();
  });

  it('should create a new car', async () => {
    const car = await carRepo.create({
      placa: 'ABC-1234',
      chassi: '123456',
      renavam: '654321',
      modelo: 'Model S',
      marca: 'Tesla',
      ano: 2021,
    });
    assert.strictEqual(car.id, 1);
  });

  it('should find a car by id', async () => {
    const car = await carRepo.findById(1);
    assert.strictEqual(car.placa, 'ABC-1234');
  });

  it('should update a car', async () => {
    await carRepo.create({
      placa: 'DEF-5678',
      chassi: '789123',
      renavam: '321987',
      modelo: 'Model 3',
      marca: 'Tesla',
      ano: 2022,
    });

    const updatedCar = await carRepo.update(1, { modelo: 'Model X' });
    assert.strictEqual(updatedCar.modelo, 'Model X');
  });

  it('should delete a car', async () => {
    await carRepo.create({
      placa: 'GHI-91011',
      chassi: '456789',
      renavam: '654987',
      modelo: 'Model Y',
      marca: 'Tesla',
      ano: 2023,
    });

    const deletedCar = await carRepo.delete(1);
    assert.strictEqual(deletedCar.id, 1);

    const carAfterDelete = await carRepo.findById(1);
    assert.strictEqual(carAfterDelete, undefined);
  });
});
