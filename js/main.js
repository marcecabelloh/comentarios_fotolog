/*aquí va tu código*/
//Seguí el ejemplo creado por Ale en clases, preguntando llegué a incluir el llamado de la función imprimir() en las funciones init y guardarDatos 
//pues antes el js no corría

function init(){
	var button = document.getElementById("boton-guardar");
	button.addEventListener("click", guardarDatos);
	imprimir();	
}

init();

function guardarDatos(){
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;

	localStorage.setItem(clave, valor);

	imprimir();	
}

function imprimir(){

	var contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";//limpiar los input apenas se vuelva a cargar la página PERO NO LIMPIA LOS INPUT 

	//seguí lo que Ale hizo en clases. Creó un for para que iteren los comentarios que ingresen los usuarios utilizando localStorage
	for(var i = 0; i < localStorage.length; i++){
		var kei = localStorage.key(i);
		var valuee = localStorage.getItem(kei);
			
		//creo un div, un h3 para el nombre y un parrafo para el comentario
		var resultado=document.createElement("div");
		var parrUno=document.createElement("h3");
		var parrDos=document.createElement("p");
		
		resultado.setAttribute("id", "caja-comentarios");//creo un id para mi div, asi lo puedo llamar más fácil des´pués y darle el color que yo quiera
		parrUno.classList.add("nombre");//necesario classlist para q se ordene como una lista primero nombre y luego el comentario, así no queda todo junto
		parrDos.classList.add("comentario");

		var parrafoNombre = document.createTextNode( " " + kei);//me permite imprimir el nombre y el mensaje, llamo a kei y valuee que manejan el localStorage
		var parrafoMensaje = document.createTextNode(valuee);


		parrUno.appendChild(parrafoNombre);//parruno tiene como hijo a parrafoNombre
		parrDos.appendChild(parrafoMensaje);//parrDos tiene como hijo a parrafoMensaje
		resultado.appendChild(parrUno);//resultado tiene como hijo a parruno
		resultado.appendChild(parrDos);//resultado(div creado en DOM) tiene como hijo a parrdos
		contenedor.appendChild(resultado);//contenedor (div creado en html y llamamos con su div) tiene como hijo a resultado
	}
}


//siguiendo los pasos de antes me guié para limpiar los comentarios dejados en fotolog
var buttonClean = document.getElementById("boton-limpiar");//llamo al id de mi boton limpiar
buttonClean.addEventListener("click", clean);//le agrego un escuchador para que accione la funcion clean

//la funcioón clean llama al contenedor padre para q se limpie 
function clean(){
	var contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "";
}

//a traves del método clear se limpia el almacenamiento generado por el localStorage luego llamo a imprimir la función de arriba q se encarga de crear div y parrafos e imprimir la info
function limpiar(){//limpia en aplication
	localStorage.clear();
	imprimir();
}

