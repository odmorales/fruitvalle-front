export interface Supplier {
  name: string;
  address: string;
  phone: string;
  email: string;
  originPlace?:string;
  status?: boolean;
  bindingDate?: Date;
  terminationDate?: Date;
}
