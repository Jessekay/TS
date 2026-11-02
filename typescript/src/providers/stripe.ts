// import { PaymentRequest, PaymentProvider, PaymentResult } from "../shapes"

// export class StripeProvider implements PaymentProvider {
//   readonly name = "stripe";

//   constructor(private apiKey: string) {}

//   async charge(request: PaymentRequest): Promise<PaymentResult> {
//     return {
//       id: "ch_01",
//       status: succeeded,
//       amount:request.amount,
//       createdAt: new Date(),
//     };
//   }

//   async refund(paymentId: string, amount?:number): Promise<PaymentResult> {
//     return {
//       id: "ref_0988",
//       status: succeeded,
      
//     }
//   }
// }