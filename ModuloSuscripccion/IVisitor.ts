
import { Paypal, TDC, MetodoPago, TipoPlan } from "./MetodoPago";
//CREACION DE LA INTERFAZ VISITOR
export interface IVisitor{
    visitTDC(tarjeta:TDC):void;
    visitPAYPAL(paypal: Paypal):void;
}

export class Pago implements IVisitor{
   visitTDC(tarjeta:TDC):void{
      let multiplicador;
      if (tarjeta.modalidad == TipoPlan.anual){
         multiplicador = 10;
      }else{
         multiplicador = 1;
      }
      let precio = 8.99 ;
      console.log(tarjeta);
      console.log("Como su metodo de Pago fue por TDC se hara una recarga de un 5% al monto final\n");
      console.log("El pago por TDC se ha registrado con exito\n");
      console.log(`Monto Pagado: ${precio*multiplicador * 0.05}\n`);
   };

   visitPAYPAL(paypal:Paypal):void{
      let multiplicador;
      if (paypal.modalidad == TipoPlan.anual){
         multiplicador = 10;
      }else{
         multiplicador = 1;
      }
      let precio = 8.99 ;
      console.log(paypal);
      console.log("El Pago por PayPal se ha registrado con exito:\n");
      console.log(`Monto Pagado: ${precio*multiplicador}\n`);

   };

}

