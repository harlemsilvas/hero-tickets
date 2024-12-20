import { Event } from "../entities/Events";
import { EventRepository } from "../repositories/EventRepository";

class EventUseCase {
  constructor(private eventRepository: EventRepository) {}
  
  async create(eventData: Event) {
    const result = await this.eventRepository.add(eventData);
    return result;
  }
}
export { EventUseCase };
