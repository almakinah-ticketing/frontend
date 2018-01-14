import { Authorization } from './Authorization';

export const Attendee = Authorization(['attendee']);
export const Admin = Authorization(['admin']);
export const AuthenticatedUser = Authorization(['attendee', 'admin']);