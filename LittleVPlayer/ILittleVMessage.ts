export interface ILittleVMessage {
  messageID: string;
  sender: string;
  recipient?: string;
  cardId?: number | number[];
  userId?: string;
  stage?: string;
  type:
    'add-user' |
    'remove-user' |
    'start' |
    'end' |
    'send-first-q' |
    'auto-gen-q' |
    'vote';
}