import { Currency } from './currency';

export interface Country {
    currencies: Currency[];
    name: string;
    capital: string;
}

