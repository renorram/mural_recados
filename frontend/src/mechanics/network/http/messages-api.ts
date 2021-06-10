import Message, {
  PlainMessageData,
} from "../../../logic/message-board/models/message";
import { MessageCreationData } from "../../../logic/message-board/ducks/message-board-duck";

export default class MessagesApi {
  private static readonly BASE_URL: string = "http://localhost:8080";

  private static readonly MESSAGES_ENDPOINT = "/api/messages";

  private static async requestAPI(
    type: string,
    endpoint: string,
    data?: object
  ) {
    // Default options are marked with *
    const result = await fetch(`${MessagesApi.BASE_URL}${endpoint}`, {
      method: type, // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data ? JSON.stringify(data) : null, // body data type must match "Content-Type" header
    });
    if (result.status < 200 || result.status > 299) {
      let errors = await result.json();
      if (errors.violations) {
        throw errors.violations;
      }

      throw result;
    }

    return result.status === 204 ? result : result.json();
  }

  static async findAll(): Promise<Array<Message>> {
    return MessagesApi.requestAPI("GET", MessagesApi.MESSAGES_ENDPOINT)
      .then((data: PlainMessageData[]) =>
        data.map((item: PlainMessageData) => Message.createFromPlain(item))
      )
      .catch((e) => {
        console.error(e);
        return [];
      });
  }

  static async create(data: MessageCreationData): Promise<Message> {
    return MessagesApi.requestAPI(
      "POST",
      MessagesApi.MESSAGES_ENDPOINT,
      data
    ).then((data: PlainMessageData) => Message.createFromPlain(data));
  }

  static async delete(messageId: number): Promise<boolean> {
    return MessagesApi.requestAPI(
      "DELETE",
      `${MessagesApi.MESSAGES_ENDPOINT}/${messageId}`
    ).then(() => true);
  }
}
