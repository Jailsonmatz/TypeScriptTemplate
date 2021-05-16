import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecifications.controller";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

/**
 * Instancia um repositorio e enviar para o
 * useCase(similar ao service, mas so com as regras de negocio)
 * depois instancia o useCase e envia para o controller
 */
const specificationsRepository = SpecificationsRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationsUseCase(
    specificationsRepository
);

const listController = new ListSpecificationsController(
    listSpecificationUseCase
);

export { listController };
