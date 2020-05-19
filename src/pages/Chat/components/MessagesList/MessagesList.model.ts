import { Message, Partner } from "shared/models";

export interface MessagesListProps {
    messages: Message[],
    // Пока что это поле нужно для changeDetection 
    // чтобы делать скрол вниз (этакий костыль)
    partners: Partner[],
}