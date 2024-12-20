import { Location } from "./Location";
import { Price } from "./Price";
import { User } from "./User";

class Event {
  constructor(
    public title: string,
    public location: Location,
    public date: Date,
    public description: string,
    public banner: string,
    public categories: string[],
    public flyers: string[],
    public cupons: string[],
    public participants: User[],
    public price: Price[],
    public city: string
  ) {}
}
export { Event };
