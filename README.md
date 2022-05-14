# ShortPaper1 - Typescript

## Características del Repositrorio
### Este es el repositorio de Typescript del primer shortpaper de la Materia de Desarrollo del Software.
Elaborado por: Subgrupo 1 - Code Rebels 
- Carlos Arriaga
- Christian Sanchez
- Tadeo Vazquez


### Requerimientos
- Debe tener instalado nodejs y typescript en su computadora antes de ejecutar el proyecto


### Aportes Significativos

|   Integrante               |    Commit|
| :------------: | ------------ |
|  Carlos Arriaga | 1. Creando el Repositorio de Typescript  </br>  2. Creando Las clases Observadores(auditoria) e HistoriaMedica. </br> 3. Caso de uso Suscribirse al Sistema de telemedicina. </br> 4. Caso de uso Suscripcion por diferentes medios de Pago. </br> 5. Caso de Uso Solicitar Cita con suscripccion activa y con suscripccion cancelada/bloqueada|
|   Christian Sanchez |  1. Se creo el Modulo Cita, con las clases Cita, Telemedicina y Presencial </br>  2. Se creo Modulo de Historia Medica con las clases Registro Medico, Historial Medico </br> 3. Creacion del Modulo Notificaciones utilizando el Patron Observador </br> 4. Modificado los .js del modulo Patron Observador Auditoria. </br> 5. Caso de uso agendarCitaDoctor </br> 6. Caso de uso proceso completo de suscripcion, solicitud, agendar y respuesta de cita|
|   Tadeo Vazquez|  1.Creando las clases [Doctor, Ubicacion, Cardiologo, Pediatra, Neurologo y BuscarDoctores] y las interfaces [Especialidad y Nombrable]</br>|


<hr>

### Explicacion para probar el proyecto
Al hacer un <span style="color:#FF9999;">git clone</span> del proyecto, se podra observar que se descargo un archivo llamado <span style="color:#710077;">"main.ts"</span> que es el archivo que tiene todas las funciones de las simulaciones de los casos de uso.
Por Ejemplo: 
  
  1. `cu_suscripccionPaciente();`
Esta funcion representa la simulacion de cuando un Paciente se suscribe al sistema a traves de un metodo de pago que el haya elegido.

  2. `cu_suscripccionPacienteTDC();`
Esta funcion representa la simulacion de cuando un Paciente se suscribe al mediante otro metodo de Pago, que en este caso es TDC, podra ver las diferencias de cuando se suscribe con Paypal.

  3.  `cu_solicitarCitaActiva();`
Esta funcion representa la simulacion del proceso en el que el paciente solicita una cita al doctor y su suscripccion esta activa en el sistema, Deberia observar como mensaje lo siguiente: "El Paciente si puede solicitar la cita ya que esta suscrito al sistema" </br>
Este metodo **NO** agenda la cita.

  4. `cu_solicitarCitaCancelada();`
Esta funcion representa la simulacion del proceso en el que el paciente solicita una cita al doctor y su suscripccion esta **CANCELADA/BLOQUEADA** en el sistema, Deberia observar que al solicitar la cita se dispara una excepccion en el sistema que dice lo siguiente: <span style="color:red;">"El Paciente no tiene una suscripccion activa al sistema, NO podra solicitar citas"</span></br>
Este metodo **NO** agenda la cita.

  5. `cu_agendarCita();`
Esta funcion representa la simulacion del proceso en el que el doctor agenda la cita con el paciente, es decir, crea la cita (con status pendiente) y le añade a la cita el paciente, el paciente manda su respuesta de la cita (status = Aceptada o Rechazada) y se actualiza el status de la cita.


  6. `cu_procesoCompletoCita();`
Esta funcion representa la simulacion del proceso completo en el que un Paciente se suscribe al sistema, solicita una cita, se verifica su status de suscripccion, el doctor agenda la cita (La crea con un status = pendiente), el paciente acepta la cita (cambia el status de cita a aceptada y se le agrega el paciente a la cita).

Si desea probar un caso de uso en especifico usted debe descomentar la linea de codigo donde se llama a la funcion de ese caso de uso y ejecutar el proyecto con los siguientes comandos: