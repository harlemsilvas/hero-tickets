import request from "supertest";
import { App } from "../app";

const app = new App().app;
describe("Event test", () => {
  it("/POST Event", async () => {
    const event = {
      title: "jorge e Mateus",
      price: [{ sector: "Pista", amount: "20" }],
      description: "Evento descrição",
      city: "Belo Horizonte",
      location: {
        latitude: "-19.8658619",
        longitude: "-43.9737064",
      },
      cupons: [],
      date: new Date(),
      participants: [],
    };
    const response = await request(app)
      .post("/events")
      .field("title", event.title)
      .field("description", event.description)
      .field("city", event.city)
      .field("cupons", event.cupons)
      .field("location[latitude]", event.location.latitude)
      .field("location[longitude]", event.location.longitude)
      .field("price[sector]", event.price[0].sector)
      .field("price[amount]", event.price[1].amount)
      .attach("banner", "/home/harlem/Documentos/img/image.png")
      .attach("flyers", "/home/harlem/Documentos/img/image1.png")
      .attach("flyers", "/home/harlem/Documentos/img/image3.png");

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: "Evento criado com sucesso." });
  });
});
