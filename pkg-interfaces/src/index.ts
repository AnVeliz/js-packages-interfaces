export default interface IMessageProcessor {
    new (messagesMark: string): IMessageProcessor;

    processMessage(message: string): string;
}