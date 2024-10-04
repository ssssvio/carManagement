const GetCarUsecase = require('../usecases/get-car.usecase');
const PostCarUsecase = require('../usecases/post-car.usecase');
const UpdateCarUseCase = require('../usecases/put-car.usecase');
const DeleteCarUsecase = require('../usecases/delete-car.usecase');
const GetAllCarsUsecase = require('../usecases/get-all-cars.usecase');

class CarService {
  createCar(car) {
    return PostCarUsecase.execute(car);
  }

  getCarById(id) {
    return GetCarUsecase.execute(id);
  }

  GetAllCars() {
    return GetAllCarsUsecase.execute();
  }

  updateCar(id, updatedCar) {
    return UpdateCarUseCase.execute(id, updatedCar);
  }

  deleteCar(id) {
    return DeleteCarUsecase.execute(id);
  }
}

module.exports = new CarService();
