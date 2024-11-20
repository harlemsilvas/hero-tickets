import { NextFunction, Request, Response } from "express";
import { EventUseCase } from "../useCases/EventUseCase";
import { Event } from "../entities/Events";

class EventController {
  constructor(private eventUseCase: EventUseCase) {}
  async create(request: Request, response: Response, next: NextFunction) {
    let eventData: Event = request.body;
    console.log(
      "🚀 ~ file: EventController.ts:9 ~ EventController ~ create ~ eventData:",
      eventData
    );
    try {
      await this.eventUseCase.create(eventData);
      return response
        .status(201)
        .json({ message: "Evento criado com sucesso." });
    } catch (error) {
      next(error);
    }
  }
}
export { EventController };
