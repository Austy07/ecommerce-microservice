import {Publisher, Subjects, TicketCreatedEvent} from '@austy07/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;

}
