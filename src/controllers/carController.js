const express = require('express');
const CarService = require('../services/carService');

const router = express.Router();
const carService = new CarService();

router.post('/', async (req, res) => {
  try {
    const newCar = req.body;
    const createdCar = await carService.create(newCar);
    res.status(201).json(createdCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const car = await carService.getCar(id);
    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const cars = await carService.getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedCar = req.body;
  try {
    const car = await carService.updateCar(id, updatedCar);
    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await carService.deleteCar(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
