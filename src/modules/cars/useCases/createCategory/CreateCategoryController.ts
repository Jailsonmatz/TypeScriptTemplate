import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
    handle(request: Request, response: Response): Response {
        try {
            const { name, description } = request.body;

            this.createCategoryUseCase.execute({ name, description });

            return response.status(201).send();
        } catch (error) {
            console.log(error);
            return response.json(error);
        }
    }
}

export { CreateCategoryController };
