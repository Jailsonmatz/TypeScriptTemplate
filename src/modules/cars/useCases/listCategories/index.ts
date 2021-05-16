import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategories.controller";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

/**
 * Instancia um repositorio e enviar para o
 * useCase(similar ao service, mas so com as regras de negocio)
 * depois instancia o useCase e envia para o controller
 */
const categoriesRepository = CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);

const listController = new ListCategoriesController(listCategoryUseCase);

export { listController };
