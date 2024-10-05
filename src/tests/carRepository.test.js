const assert = require('assert');
const CarRepository = require('../repositories/carRepository');

describe('CarRepository', () => {
  let carRepo;

  before(async () => {
    carRepo = new CarRepository();

    await carRepo.loadData();
  });

  it('should create a new car', async () => {
    const car = await carRepo.create({
      placa: 'ABC-1212',
      chassi: '12345999999632144',
      renavam: '654327565651',
      modelo: 'Corolla Cross',
      marca: 'Toyota',
      ano: 2023,
    });
    assert.strictEqual(car.id, 1);
  });

  it('should find a car by id', async () => {
    const createdCar = await carRepo.create({
      placa: 'ABC-1234',
      chassi: '12345123333369172',
      renavam: '654321999967',
      modelo: 'Cybertruck',
      marca: 'Tesla',
      ano: 2024,
    });

    const car = await carRepo.findById(createdCar.id);
    assert.strictEqual(car.placa, 'ABC-1234');
  });

  it('should update a car', async () => {
    const createdCar = await carRepo.create({
      placa: 'DEF-5678',
      chassi: '78912391818828228',
      renavam: '32198182927',
      modelo: 'Corolla Cross',
      marca: 'Honda',
      ano: 2022,
    });

    const updatedCar = await carRepo.update(createdCar.id, {
      modelo: 'Civic',
    });
    assert.strictEqual(updatedCar.modelo, 'Civic');
  });

  it('should delete a car', async () => {
    const createdCar = await carRepo.create({
      placa: 'GHI-91011',
      chassi: '45678967677277227',
      renavam: '65498723314',
      modelo: 'Nivus',
      marca: 'Volkswagen',
      ano: 2023,
    });

    const deletedCar = await carRepo.delete(createdCar.id);
    assert.strictEqual(deletedCar.id, createdCar.id);

    const carAfterDelete = await carRepo.findById(createdCar.id);
    assert.strictEqual(carAfterDelete, undefined);
  });
});
