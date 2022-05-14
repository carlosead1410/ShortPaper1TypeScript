import { ObservadorNotificacion } from "./PatronObservador";

class SMS implements ObservadorNotificacion {
    notificar(): void {
       console.log('Notificacion a traves de SMS') 
    }
}


class CorreoElectronico implements ObservadorNotificacion{
    notificar(): void {
        console.log('Notificacion a traves de Correo Electronico')
    }
}

class Llamada implements ObservadorNotificacion{
    notificar(): void {
        console.log('Notificacion a traves de Llamada')
    }
}

class NotificacionPush implements ObservadorNotificacion{
    notificar(): void {
        console.log('Notificacion a traves de Notificacion Push')
    }
}