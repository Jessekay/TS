export interface PaymentRequest {
  amount: number;
  customerId: string;
  currency: string;
  description?: string;
}

export interface PaymentResult {
  id: string;
  status: "pending" | "failed" | "pending";
  amount: number;
  createdAt: Date;
}

export interface PaymentProvider {
  readonly name: string;
  charge(request: PaymentRequest): Promise<PaymentResult>
  refund(paymentId: string, amount?: number): Promise<PaymentResult>
}