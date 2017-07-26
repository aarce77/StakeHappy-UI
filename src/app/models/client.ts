import { ClientContact } from 'app/models/client-contact';

export class Client {
    id : string;
    user_Id: string;
    businessPhone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
    active: string;
    createdDate: string;
    name: string;
    fullAddress: string;
    balance: string;
    contacts: Array<ClientContact>;
    invoices: Array<any>;
}
