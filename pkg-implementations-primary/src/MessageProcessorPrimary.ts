import IMessageProcessor, { IMessageProcessorConstructor } from 'pkg-interfaces/build/index'

class MessageProcessorPrimary {
    private _messageMark: string;

    constructor(messageMark: string) {
        this._messageMark = messageMark;

        this.processMessage = this.processMessage.bind(this);
    }

    processMessage(message: string): string {
        return `${this._messageMark} - your message is: ${message}`.toLocaleLowerCase();
    }
}

function constructMessageProcessor(ctor: IMessageProcessorConstructor, mark: string): IMessageProcessor {
    return new MessageProcessorPrimary(mark);
}

export default function CreateMessageProcessor(): IMessageProcessor {
    return constructMessageProcessor(MessageProcessorPrimary, "[PRIMARY]");
}
