export interface PlainMessageData {
  id: number;
  code: string;
  nickname: string;
  text: string;
  createdAt: string;
}

export default class Message {
  constructor(
    public readonly id: number,
    public readonly code: string,
    public readonly nickname: string,
    public readonly text: string,
    public readonly createdAt: Date
  ) {}

  public static createFromPlain(data: PlainMessageData): Message {
    return new Message(
      data.id,
      data.code,
      data.nickname,
      data.text,
      new Date(data.createdAt)
    );
  }
}
