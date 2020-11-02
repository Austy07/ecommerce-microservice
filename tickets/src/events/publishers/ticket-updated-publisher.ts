import { Publisher, Subjects, TicketUpdatedEvent } from '@austy07/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
