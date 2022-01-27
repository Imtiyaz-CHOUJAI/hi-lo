import { RESTDataSource } from "apollo-datasource-rest";
import { Card, Deck } from "../../types";

class DealerApi extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = "https://deckofcardsapi.com/api/deck/";
  }

  /**
   * Create a new deck
   *
   * @returns Deck
   */
  async deck(): Promise<Deck> {
    const { deck_id: id } = await this.get("/new/shuffle");
    return { id };
  }

  /**
   * Draw a new card from the deck
   *
   * @param id
   * @returns Card
   */
  async draw(id: string): Promise<Card> {
    const { cards } = await this.get(`/${id}/draw/?count=1`);
    let { code, image, value } = cards[0];

    const cardValues: { [k: string]: number } = {
      ACE: 13,
      KING: 12,
      QUEEN: 11,
    };

    value = value in cardValues ? cardValues[value] : Number(value);

    return { code, image, value };
  }
}

export default DealerApi;
