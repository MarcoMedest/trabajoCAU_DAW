var oCAU=new CAU();

datosIniciales();


// Listados


document.getElementById("mostrarListadoUsuario").addEventListener("click",fMostrarListadoUsuario,false);

// por boton
document.getElementById("mostrarListadoIncidencia").addEventListener("click",fMostrarListadoIncidencia,false);

function datosIniciales() {
	oCAU.altaUsuario(new Usuario("12312312F","Alberto","Gómez Gómez","swqds 71"));
	oCAU.altaUsuario(new Usuario("47586921G","María","Jiménez Jiménez","fsdfe 42"));
	oCAU.altaUsuario(new Usuario("28591456Y","Jesús","Castañas Castañas","dsadasdas 43"));

	oCAU.altaAgente(new Agente("12342312F","Mario","Alonso Marr","Duwsasd 70",1));
	oCAU.altaAgente(new Agente("47586924G","Juan Carlos","Riririri","DDdidii º0",4));
	oCAU.altaAgente(new Agente("47586941G","Isabel","Compass","Bibilsa",1));
	oCAU.altaAgente(new Agente("47583921G","Maria","Renerene","Buho 1",15));

	//oCAU.altaIncidencia(new Leve("a","12312312F","47586924G","120","yes", "Constipado","2020-03-12","True"));
	//oCAU.altaIncidencia(new Grave("b","47586921G","47586924G","150","no","Atropello de coche", "2020-03-12","2"));
	//oCAU.altaIncidencia(new Leve("c","28591456Y","47583921G","200","no","Corte", "2020-03-12","False"));
	oCAU.altaIncidencia(new Leve("111111","546813A","AAAAAA","12/02/2020"));
	oCAU.altaIncidencia(new Leve("2222222","546813B","BBBBBB","11/02/2020"));
	oCAU.altaIncidencia(new Leve("333333","546813C","CCCCCCC","10/02/2020"));
	oCAU.altaIncidencia(new Grave("444444","546813F","FFFFFF","1","9/02/2020"));
	oCAU.altaIncidencia(new Grave("555555","546813H","HHHHHH","2","8/02/2020"));
	oCAU.altaIncidencia(new Grave("666666","546813I","IIIIII","3","7/02/2020"));


}


function ocultarFormularios(){
	document.getElementById("bienvenida").classList.add('d-none');
	document.getElementById("divAltaUsuario").classList.add('d-none');
	document.getElementById("divAltaAgente").classList.add('d-none');
	document.getElementById("divAltaIncidencia").classList.add('d-none');
	document.getElementById("divAltaConver").classList.add('d-none');
	document.getElementById("divFiltroIncidencia").classList.add('d-none');
}

function seleccionadoGraveNivel(tipo){
	if(tipo=="grave")
	  document.getElementById("graveNivel").style.display = "flex";

	if(tipo=="leve")
	  document.getElementById("graveNivel").style.display="none";
	
	}

	document.getElementById("rbtNivel-0").addEventListener("click",function(){seleccionadoGraveNivel('grave')},false);
	document.getElementById("rbtNivel-1").addEventListener("click",function(){seleccionadoGraveNivel('leve')},false);


function fOcultarTablasListado(){
    document.getElementById("tabla").style.display = "none";
    
}

// Mostfrar formulario
document.getElementById("logoBienvenida").addEventListener("click",function(){mostrarFrm('bienvenida')},false);
document.getElementById("aAltaUsuario").addEventListener("click",function(){mostrarFrm('divAltaUsuario')},false);
document.getElementById("aAltaAgente").addEventListener("click",function(){mostrarFrm('divAltaAgente')},false);
document.getElementById("aAltaIncidencia").addEventListener("click",function(){mostrarFrm('divAltaIncidencia')},false);
document.getElementById("aAltaConversacion").addEventListener("click",function(){mostrarFrm('divAltaConver')},false);
document.getElementById("mostrarListadoFiltro").addEventListener("click",function(){mostrarFrm('divFiltroIncidencia')},false);
document.getElementById("btnAltaUsuario").addEventListener("click",altaUsuario,false);
document.getElementById("btnAltaAgente").addEventListener("click",altaAgente,false);
document.getElementById("btnAltaIncidencia").addEventListener("click",altaIncidencia,false);
document.getElementById("btnAltaConver").addEventListener("click",altaConver,false);

// Mostrar listados 

    function fMostrarListadoUsuario(){
        ocultarFormularios();
        document.getElementById("tabla").style.display = "table";
        fVaciarTabla();
        let tablaAMostrar = oCAU.listadoUsuarios();
        document.getElementById("tabla").append(tablaAMostrar);
    }

    function fMostrarListadoIncidencia(){
        ocultarFormularios();
        document.getElementById("tabla").style.display = "table";
        fVaciarTabla();
		
		if (document.getElementById("rbtNivel-01").checked)
			{
				nivel = true;
				let tablaAMostrar = oCAU.listadoIncidenciasGrave();
				document.getElementById("tabla").append(tablaAMostrar);
			}
		else
			{
				let tablaAMostrar = oCAU.listadoIncidenciasLeve();
				document.getElementById("tabla").append(tablaAMostrar);
			}
		
    }



function formTipo(){
	let x = document.getElementById("tipo").value;

	switch(x){
		case "Seleccione un tipo....":
		document.getElementById("leve").style.display = "none";
		document.getElementById("grave").style.display = "none";
		document.getElementById("puntos").style.display = "none";
		break;
		
		case "Leve":
		document.getElementById("leve").style.display = "block";
		document.getElementById("grave").style.display = "none";
		document.getElementById("puntos").style.display = "none";
		break;

		case "Grave":
		document.getElementById("grave").style.display = "block";
		document.getElementById("leve").style.display = "none";
		document.getElementById("puntos").style.display = "block";
		break;

		default:
		document.getElementById("leve").style.display = "none";
		document.getElementById("grave").style.display = "none";
		document.getElementById("puntos").style.display = "none";
		break;
	}

}


function mostrarFrm(idCapa){
	
	ocultarFormularios();
	fOcultarTablasListado();
	document.getElementById(idCapa).classList.remove('d-none');
	
		if (idCapa == "divAltaIncidencia"){
       // inicializarFrmAltaIncidenciaUsuario();
		// inicializarFrmAltaIncidenciaAgente();
	}
	inicializarFrmAltaIncidenciaUsuario();
	inicializarfrmAltaConverUsuario();
	inicializarfrmAltaConverAgente();
}

function altaUsuario(){
	
	fOcultarTablasListado();
	
	let sNif = frmAltaUsuario.txtNIF.value.trim();
	let sNombre = frmAltaUsuario.txtNombre.value.trim();
	let sApellidos = frmAltaUsuario.txtApellidos.value.trim();
	let sDireccion = frmAltaUsuario.txtDireccion.value.trim();

	if (document.frmAltaUsuario.txtNIF.value.length==0)
	{
			alert("Tiene que escribir su nif")
			document.frmAltaUsuario.txtNIF.focus()	
	}
		else if (document.frmAltaUsuario.txtNombre.value.length==0)
		{
      		alert("Tiene que escribir su nombre")
      		document.frmAltaUsuario.txtNombre.focus()
		}
		
		else if (document.frmAltaUsuario.txtApellidos.value.length==0)
	{
      		alert("Tiene que escribir sus apellidos")
      		document.frmAltaUsuario.txtApellidos.focus()

   	} 
	else if (document.frmAltaUsuario.txtDireccion.value.length==0)
	{
      		alert("Tiene que escribir su dirección")
      		document.frmAltaUsuario.txtDireccion.focus()
   	}
	else
	{
	mensaje(oCAU.altaUsuario(new Usuario(sNif,sNombre,sApellidos,sDireccion)));
    frmAltaUsuario.reset();
	}

}

function altaAgente(){
	
	fOcultarTablasListado();
	
	let sNif = frmAltaAgente.txtNIF.value.trim();
	let sNombre = frmAltaAgente.txtNombre.value.trim();
	let sApellidos = frmAltaAgente.txtApellidos.value.trim();
	let sDireccion = frmAltaAgente.txtDireccion.value.trim();
	let sPuesto = frmAltaAgente.txtPuesto.value.trim();
	
	if (document.frmAltaAgente.txtNIF.value.length==0)
	{
			alert("Tiene que escribir su nif")
			document.frmAltaAgente.txtNIF.focus()	
	}
		else if (document.frmAltaAgente.txtNombre.value.length==0)
		{
      		alert("Tiene que escribir su nombre")
      		document.frmAltaAgente.txtNombre.focus()
		}
		
		else if (document.frmAltaAgente.txtApellidos.value.length==0)
	{
      		alert("Tiene que escribir sus apellidos")
      		document.frmAltaAgente.txtApellidos.focus()

   	} 
	else if (document.frmAltaAgente.txtDireccion.value.length==0)
	{
      		alert("Tiene que escribir su dirección")
      		document.frmAltaAgente.txtDireccion.focus()
   	}
	else if (document.frmAltaAgente.txtPuesto.value.length==0)
	{
      		alert("Tiene que escribir su dirección")
      		document.frmAltaAgente.txtPuesto.focus()
   	}
	else
	{
	    mensaje(oCAU.altaAgente(new Agente(sNif,sNombre,sApellidos,sDireccion,sPuesto)));
    frmAltaAgente.reset();
	}

}

function altaIncidencia(){


	fOcultarTablasListado();
	
	let sID=frmAltaIncidencia.txtID.value.trim();
	let sNifUsuario=frmAltaIncidencia.lstUsuario.value;
	let sDescripcion=frmAltaIncidencia.txtDescripcion.value;
	let sNivel=frmAltaIncidencia.txtGraveNivel.value.trim();
	let nivel;
	let dFecha=frmAltaIncidencia.txtFechaMulta.value.trim();


		if (document.getElementById("rbtNivel-0").checked)
			{
				nivel = true;

			}
		else
			{
				nivel = false;
			}
	
	if (document.frmAltaIncidencia.txtID.value.length==0)
	{
			alert("Tiene que escribir el ID.")
			document.frmAltaAgente.txtNIF.focus()	
	}
		else if (document.frmAltaIncidencia.txtDescripcion.value.length==0)
		{
      		alert("Tiene que escribir una descripcion.")
      		document.frmAltaAgente.txtNombre.focus()
		}
		
		else if (document.frmAltaIncidencia.txtFechaMulta.value.length==0)
		{
      		alert("Tiene que escribir una fecha.")
      		document.frmAltaAgente.txtNombre.focus()
		}
		
		else
		{
	
	
	
		if (nivel) 
		{
			let oIncidencia = new Grave(sID,sNifUsuario,sDescripcion,sNivel,dFecha);
		        					
			mensaje(oCAU.altaIncidencia(oIncidencia));
			frmAltaIncidencia.reset();

					
					//	 }
				// }
		}	
		else
			{

				let oIncidencia = new Leve(sID,sNifUsuario,sDescripcion,dFecha);
		        

				mensaje(oCAU.altaIncidencia(oIncidencia))
				frmAltaIncidencia.reset();
						
						
					}
			
}
	
}

function altaConver(){
	
	fOcultarTablasListado();
	
	let sIDConver = frmAltaConver.IDConver.value.trim();
	let sNifUsuarioCon=frmAltaConver.lstUsuario1.value;
	let sPregunta= frmAltaConver.txtPregunta.value;
	let sNifAgenteCon=frmAltaConver.lstAgente1.value;
	let sRespuesta= frmAltaConver.txtRespuesta.value;
	
	if (document.frmAltaConver.IDConver.value.length==0)
	{
			alert("Tiene que escribir el ID.")
			document.frmAltaAgente.txtNIF.focus()	
	}
		else if (document.frmAltaConver.txtPregunta.value.length==0)
		{
      		alert("Tiene que escribir una pregunta.")
      		document.frmAltaConver.txtPregunta.focus()
		}
		
		else if (document.frmAltaConver.txtRespuesta.value.length==0)
		{
      		alert("Tiene que escribir una respuesta.")
      		document.frmAltaConver.txtRespuesta.focus()
		}
		else
		{
				let oConversacion = new Conversacion (sIDConver,sNifUsuarioCon,sPregunta,sNifAgenteCon,sRespuesta);
	
				mensaje(oCAU.altaConver(oConversacion));
				frmAltaConver.reset();
		}
}


function mensaje(sTexto) {
    alert(sTexto);
}


function fVaciarTabla(){
    let hijosTabla = document.querySelectorAll('#tabla > *');
    if(hijosTabla.length > 0){
        hijosTabla.forEach(hijo=>{
            hijo.remove();
        })
    }
}

function inicializarFrmAltaIncidenciaUsuario(){

	let oOptionsUsuario = document.querySelectorAll("#lstUsuario option");
	let oSelectUsuario = document.getElementById("lstUsuario");
	
	for(let i=oOptionsUsuario.length-1; i >= 0;i--){
		oSelectUsuario.removeChild(oSelectUsuario.options[i]);
	}

	
	oOptionsUsuario = oCAU.getOptionsUsuarios();

	
	for(let i=0; i < oOptionsUsuario.length;i++){
		document.querySelector("#lstUsuario").appendChild(oOptionsUsuario[i]);
	}

	
	oOptionsUsuario = document.querySelectorAll("#lstUsuarioSeleccionados option");
	
	for(let i=0; i < oOptionsUsuario.length;i++){
		oOptionsUsuario.remove();
	}

}

function inicializarfrmAltaConverUsuario(){

	let oOptionsUsuario = document.querySelectorAll("#lstUsuario1 option");
	let oSelectUsuario = document.getElementById("lstUsuario1");
	
	for(let i=oOptionsUsuario.length-1; i >= 0;i--){
		oSelectUsuario.removeChild(oSelectUsuario.options[i]);
	}

	
	oOptionsUsuario = oCAU.getOptionsUsuarios();

	
	for(let i=0; i < oOptionsUsuario.length;i++){
		document.querySelector("#lstUsuario1").appendChild(oOptionsUsuario[i]);
	}

	
	oOptionsUsuario = document.querySelectorAll("#lstUsuarioSeleccionados option");
	
	for(let i=0; i < oOptionsUsuario.length;i++){
		oOptionsUsuario.remove();
	}

}

function inicializarfrmAltaConverAgente(){
	let oOptionsAgente = document.querySelectorAll("#lstAgente1 option");
	let oSelectAgente = document.getElementById("lstAgente1");
	
	for(let i=oSelectAgente.length-1; i >= 0;i--){
		oSelectAgente.removeChild(oSelectAgente.options[i]);
	}

	
	oOptionsAgente = oCAU.getOptionsAgentes();

	
	for(let i=0; i < oOptionsAgente.length;i++){
		document.querySelector("#lstAgente1").appendChild(oOptionsAgente[i]);
	}

	
	oOptionsAgente = document.querySelectorAll("#lstAgenteSeleccionados option");
	
	for(let i=0; i < oOptionsAgente.length;i++){
		oOptionsAgente.remove();
	}
}

//Validacion de fecha
function formatoFecha(fecha)
	{
    	return fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
    }

//XML
function loadXMLDoc(filename) {
	let xhttp;
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET", filename, false);
	xhttp.send();
	return xhttp.responseXML;
}

function loadXMLDocAsync(filename) {
	let xhttp;
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.addEventListener("readystatechange", () => {
		if (xhttp.readyState == xhttp.DONE) {
			rellenaTabla(xhttp.responseXML);
		}
	});
	xhttp.open("GET", filename, true);
	xhttp.send();
}

document.addEventListener("load", generaTabla());

function generaTabla() {

	let tabla = document.createElement("table");
	tabla.id = "tabla";

	let header = tabla.createTHead();
	let encabezados = header.insertRow(-1);
	let celda = encabezados.insertCell(-1);
	
	loadXMLDocAsync("datos.xml"); // Carga 

}

function rellenaTabla(xml) {
	// Tomar del xml los productos
	let productos = xml.querySelectorAll("producto");

	let cuerpo = document.createElement("tbody");
	for (var i = 0; i < productos.length; i++) {
		let linea = cuerpo.insertRow(-1);
		let celda = linea.insertCell(-1);
		celda.textContent = productos[i].querySelector("nombre").textContent;
		celda = linea.insertCell(-1);
		celda.textContent = productos[i].querySelector("nombre2").textContent;
		celda = linea.insertCell(-1);
		celda.textContent = productos[i].querySelector("precio").textContent;
		celda = linea.insertCell(-1);
	}

	document.querySelector("#tabla").append(cuerpo);
}