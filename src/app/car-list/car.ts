export interface Car {
  brand: string;
  model: string;
  color?: string; // Campo opzionale
  imageUrl: string;
  price: number;
  owner: string;
  plate: string;
  daysSinceLastPayment: number; // Nuovo campo per i giorni dall'ultimo pagamento
}
