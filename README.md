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
|  Carlos Arriaga |[1. Caso de Uso Suscribirse al Sistema de Telemedicina](https://github.com/carlosead1410/ShortPaper1TypeScript/commit/80d715481a63923fb65b297298ee4e1676aca80b "1. Caso de Uso Suscribirse al Sistema de Telemedicina")</br>[2. Caso de uso Suscripcion por diferentes medios de Pago](https://github.com/carlosead1410/ShortPaper1TypeScript/commit/495d304673f5503f893bbdc38c8a43e3f8fb5f93 "2. Caso de uso Suscripcion por diferentes medios de Pago")</br>[3. Caso de Uso Solicitar Cita con suscripccion activa y con suscripccion cancelada/bloqueada](https://github.com/carlosead1410/ShortPaper1TypeScript/commit/5a201f11534525e4c1f1fc7afcfb23eeb3f03607 "3. Caso de Uso Solicitar Cita con suscripccion activa y con suscripccion cancelada/bloqueada")|
|   Christian Sanchez |[1. Caso de uso agendarCita](https://github.com/carlosead1410/ShortPaper1TypeScript/commit/dc5e4395731e46db344dfd72608bcfb6abace490 "1. Caso de uso agendarCita")</br>[2. Creado el Caso de Uso Consulta Medica](https://github.com/carlosead1410/ShortPaper1TypeScript/commit/cd03563fe4f763c236dd08697017857562e98f5b "3. Creado el Caso de Uso Consulta Medica")</br>[3. Caso de uso proceso completo de suscripcion, solicitud, agendar y respuesta de cita](https://github.com/carlosead1410/ShortPaper1TypeScript/commit/759d5ef6504b138352814fcf5bbeb131914c3530 "3. Caso de uso proceso completo de suscripcion, solicitud, agendar y respuesta de cita")|
|   Tadeo Vazquez| [1. Tadeo implementando sus casos de uso respectivos](https://github.com/carlosead1410/ShortPaper1TypeScript/commit/512610a0e3aa2226d8cc1e0ccbfa392baf5bad53 "Tadeo implementando sus casos de uso respectivos")<br/>[2. TADEO - CASO DE USO: registro medico e historial de pacientes](https://github.com/carlosead1410/ShortPaper1TypeScript/commit/62b44f7bdda0aa9f86dd43ce97098bdeabfa4784 "1. TADEO - CASO DE USO: registro medico e historial de pacientes") </br>[3. TADEO - CASO DE USO: registros de auditoria](https://github.com/carlosead1410/ShortPaper1TypeScript/commit/5124c1182eba85829f824aa1343da91388f84087 "2. TADEO - CASO DE USO: registros de auditoria")|


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
Esta funcion representa la simulacion del proceso en el que el paciente solicita una cita al doctor y su suscripccion esta **CANCELADA/BLOQUEADA** en el sistema, Deberia observar que al solicitar la cita se dispara una excepccion en el sistema que dice lo siguiente: <span style="color:red;">'El Paciente CANCELO su suscripccion al sistema, no podra solicitar citas'</span></br>
Este metodo **NO** agenda la cita.

  5. `cu_agendarCita();`
Esta funcion representa la simulacion del proceso en el que el doctor agenda la cita con el paciente, es decir, crea la cita (con status pendiente) y le añade a la cita el paciente, el paciente manda su respuesta de la cita (status = Aceptada o Rechazada) y se actualiza el status de la cita.

  6. `cu_procesoCompletoCita();`
Esta funcion representa la simulacion del proceso completo en el que un Paciente se suscribe al sistema, solicita una cita, se verifica su status de suscripccion, el doctor agenda la cita (La crea con un status = pendiente), el paciente acepta la cita (cambia el status de cita a aceptada y se le agrega el paciente a la cita).

  7. `cu_consulta();`
Esta funcion representa la simulacion del proceso completo en el que se solicita la cita, el doctor la agenda, el paciente la acepta y por ultimo, el doctor finaliza la cita y gener el registro medico para el paciente on los datos de su especialidad, tambien se genera el registro de auditoria del doctor (indicaria en una primera instancia que creo el Historial medico y despues cre creo un registro medico)

Si desea probar un caso de uso en especifico usted debe descomentar la linea de codigo donde se llama a la funcion de ese caso de uso y ejecutar el proyecto con los siguientes comandos:

Opcion 1:

	tsc -t es5 main.ts
	node main.js

Opcion 2:

	tsc-node main.ts


### Observacion
Los commits que se colocaron en la tabla fueron los ultimos commits con los que se completaron la implementacion de los casos de uso, esos casos de uso fueron implementados en varios commits.