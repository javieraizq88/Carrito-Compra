Para ejecutar el programa se deben ejecutar los siguientes instrucciones:

1) descargar archivo zip de repositorio:
    https://github.com/javieraizq88/Carrito-Compra

2) descomprimir el archivo

3) abrir carpeta en visual studio code o programa similar (por ejemplo Windows Visual Studio, Vscode, Atom)

4) abrir la terminal

5) ejecutar: (duración entre 2 a 3 minutos aprox)
    npm install 

6) al terminal la instalación, ejecutar 
    npm run start



La arquitectura:
- aplicación responsiva puede visualizarse en grandes pantallas, tablet y celulares
- Cree un javascript para almacenar la información la base de datos. Una para los hoteles (data.js) y otra para las notificaciones (datamsg.js)
- HOME muestra el nombre de usuario según name del state. Abajo, muestra los hoteles disponibles segun la base de datos importada. 
- Cada card de cada hotel tiene un boton que despliega un modal con la información del hotel, foto y ubicación.
- a mano derecha del home se muestran las notificaciones: fecha de entrega, nombre de quién lo envía, mensaje corto y al hacer click en "leer" se redirecciona a la pagina de las notificaciones que muestra los mensajes completos segun id del mensaje.
- el dashboard tiene activado el icono de mensaje para poder leerlos y el de buscar para buscar hoteles.
- en el componente de buscar, solo se necesita escribir el hotel que busca y se filtrarán los resultados
- el sidebar tiene activado el icono de home para volver.

Lenguajes y tecnologías utilizadas:
- React.Js
- HTML 
- CSS
- Javascript
- Bootstrap
