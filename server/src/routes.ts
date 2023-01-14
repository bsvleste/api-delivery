import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/accounts/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindDeliveryAvailableController } from "./modules/deliveries/useCases/findDeliveryAvailable/FindDeliveryAvailableController";
import { FindDeliveryAvailableUseCase } from "./modules/deliveries/useCases/findDeliveryAvailable/FindDeliveryAvailableUseCase";
import { AuthenticateDeliverymanController } from "./modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";

const routes = Router();
const createClientController = new  CreateClientController()
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const findDeliveryAvailableController = new FindDeliveryAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();

routes.post('/client',createClientController.handle)
routes.post('/deliveryman',createDeliverymanController.handle)

routes.post('/delivery',ensureAuthenticateClient, createDeliveryController.handle)
routes.put('/delivery/updateDeliveryman/:id',ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
routes.get('/delivery/available',ensureAuthenticateDeliveryman, findDeliveryAvailableController.handle)


routes.post('/client/auth',authenticateClientController.handle)
routes.post('/deliveryman/auth', authenticateDeliverymanController.handle)

export {routes}