export interface IMessageProcessorConstructor {
    new (messagesMark: string): IMessageProcessor;
}

export default interface IMessageProcessor {
    processMessage(message: string): string;
}