const express = require('express');
const CarRepository = require('../repositories/carRepository');

const router = express.Router();
const carRepo = new CarRepository();

router.get('/', async (req, res) => {
  const cars = carRepo.findAll();
  res.status(200).json(cars);
});

router.get('/:id', async (req, res) => {
  const car = carRepo.findById(Number(req.params.id));
  if (car) {
    res.status(200).json(car);
  } else {
    res.status(404).json({ message: 'Car not found.' });
  }
});

router.post('/', async (req, res) => {
  const newCar = await carRepo.create(req.body);
  res.status(201).json(newCar);
});

router.put('/:id', async (req, res) => {
  const updatedCar = await carRepo.update(Number(req.params.id), req.body);
  if (updatedCar) {
    res.status(200).json(updatedCar);
  } else {
    res.status(404).json({ message: 'Car not found.' });
  }
});

router.delete('/:id', async (req, res) => {
  const deletedCar = await carRepo.delete(Number(req.params.id));
  if (deletedCar) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Car not found.' });
  }
});

module.exports = router;
