export class HistorialMedico{
    lista = ['Registro 1', 'Registro 2', 'Registro 3', 'Registro 4'];
    mostrarRegistro():void{
        console.log("****   SU HISTORIAL MEDICO    ****\n");
        this.lista.forEach(e => {
            console.log(e);
        });;
        console.log("\n");
    }

    agregarRegistro(a):void{
        this.lista.push(a);
    }
    
}