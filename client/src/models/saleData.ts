export type SaleData = {
  content: [
    {
      id: number;
      sellerName: string;
      visited: number;
      deals: number;
      amount: number;
      date: string;
    }
  ];
  totalElements: number;
};
