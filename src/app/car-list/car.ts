export interface Car {
  brand: string;
  model: string;
  imageUrl: string;
  price: number;
  daysSinceLastPayment: number; // Nuovo campo per i giorni dall'ultimo pagamento
}
