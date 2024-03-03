import { Restaurent } from "./restaurent";
import { SessionStatus } from "./sessionStatus";
import { User } from "./user";

export class Session {

    sessionStatus: SessionStatus;

    users: User[];

    restaurant: Restaurent;
}