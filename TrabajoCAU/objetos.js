//clase DGT - nueva forma
class CAU {
  constructor(){
	this.usuarios=[];
	this.agentes=[];
	this.incidencias=[];
	this.conversaciones=[];
	
	this.leves=[];
	this.graves=[];
  }

  //metodos
  altaUsuario(oUsuario){
  	//no puede haber dos Usuarios con el mismo nif
    var resultado="El Usuario ya existe.";
	let niff = document.getElementById("txtNIF");

	if (this.buscarUsuario(oUsuario.nif)==null) {
        this.usuarios.push(oUsuario);
        resultado="Usuario dado de alta.";
    }
        return resultado;
  	//devuelve string
  }
  

  


  altaAgente(oAgente){
  	//no puede haber dos Agentes con el mismo nif
    var resultado="El nif del Agente ya existe.";
    if (this.buscarAgente(oAgente.nif)==null) {
        this.agentes.push(oAgente);
        resultado="Agente dado de alta.";
    }
        return resultado;
  	//devuelve string
  }

  buscarUsuario(sNif){
  	var oUsuario = null;
    var array=this.usuarios.filter(Usuario => Usuario.nif == sNif);
    if (array.length>0)
        oUsuario=array[0];
    return oUsuario;
  	//devuelve oUsuario si está o nulo si no está en la tabla
  }

  buscarAgente(sNif){
  	var oAgente = null;
    var array=this.agentes.filter(Agente => Agente.nif == sNif);
    if (array.length>0)
        oAgente=array[0];
    return oAgente;
  	//devuelve oAgente si está o nulo si no está en la tabla
  }

  buscarIncidencia(sId){
  	var oIncidencia=null;
  	var array=this.incidencias.filter(Incidencia => Incidencia.id == sId);
  	if(array.length>0)
  		oIncidencia=array[0];
  	return oIncidencia;
  	//devuelve oIncidencia si está o nulo si no está en la tabla
  }
  
    buscarConversacion(sId){
  	var oConversacion=null;
  	var array=this.conversaciones.filter(Conversacion => Conversacion.id == sId);
  	if(array.length>0)
  		oConversacion=array[0];
  	return oConversacion;
  	//devuelve oConversacion si está o nulo si no está en la tabla
  }
  


//  Incidencia(sID,sNifUsuario,sNifAgente,sImporte,bPagada,sDescripcion,dFecha){
	altaIncidencia(oIncidencia){
  	//devuelve string
  	 var resultado="El id de la Incidencia ya existe.";
	 if (this.buscarIncidencia(oIncidencia.id)==null) {
        this.incidencias.push(oIncidencia);
		// this.Incidencias.push(new Incidencia(sID,sNifUsuario,sDescripcion,dFecha));
        resultado="Incidencia dado de alta.";
		}	
	return resultado;
	}
	
	altaConver(oConversacion){
	var resultado="El id de la Conversacion ya existe.";
	 if (this.buscarConversacion(oConversacion.id)==null) {
        this.conversaciones.push(oConversacion);
		// this.Incidencias.push(new Incidencia(sID,sNifUsuario,sNifAgente,sImporte,bPagada,sDescripcion,dFecha));
        resultado="Conversacion dado de alta.";
		}	
	return resultado;
	}
	
	
listadoUsuarios(){
	let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
    celda.textContent = "NIF Usuario";
    celda = fila.insertCell(-1);
    celda.textContent = "Nombre";
    celda = fila.insertCell(-1);
    celda.textContent = "Apellidos";
    celda = fila.insertCell(-1);
    celda.textContent = "Direccion";
	celda = fila.insertCell(-1);

    let cuerpito = document.createElement("tbody");

     for(var i=0; i< this.usuarios.length; i++){
       cuerpito.append(this.usuarios[i].toHTMLrow());
    }
    return cuerpito;
}

listadoAgentes(){
	let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
    celda.textContent = "NIF Agente";
    celda = fila.insertCell(-1);
    celda.textContent = "Nombre";
    celda = fila.insertCell(-1);
    celda.textContent = "Apellidos";
    celda = fila.insertCell(-1);
    celda.textContent = "Direccion";
	celda = fila.insertCell(-1);
    celda.textContent = "Puesto";

    let cuerpito = document.createElement("tbody");

     for(let i=0; i< this.Agentes.length; i++){
       cuerpito.append(this.Agentes[i].toHTMLrow());
    }
    return cuerpito;
  }


listadoIncidenciasLeve(){
	
	let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
    celda.textContent = "ID";
    celda = fila.insertCell(-1);
    celda.textContent = "NIF USUARIO";
    celda = fila.insertCell(-1);
    celda.textContent = "Descripcion";
    celda = fila.insertCell(-1);
    celda.textContent = "Fecha";
	celda = fila.insertCell(-1);

    let cuerpito = document.createElement("tbody");

     for(let i=0; i< this.incidencias.length; i++){
		 if(this.incidencias[i].nivel==null)
       		cuerpito.append(this.incidencias[i].toHTMLrow());
    }
    return cuerpito;
  	
  }
  
  
 listadoIncidenciasGrave(){
  		let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
    celda.textContent = "ID";
    celda = fila.insertCell(-1);
    celda.textContent = "NIF USUARIO";
    celda = fila.insertCell(-1);
    celda.textContent = "Descripcion";
    celda = fila.insertCell(-1);
	celda.textContent = "Nivel";
    celda = fila.insertCell(-1);
    celda.textContent = "Fecha";
	celda = fila.insertCell(-1);

    let cuerpito = document.createElement("tbody");

     for(var i=0; i< this.incidencias.length; i++){
		 if(this.incidencias[i].nivel!=null)
       		cuerpito.append(this.incidencias[i].toHTMLrow());
    }
    return cuerpito;
  }
  
  
  
listarIncidencias(idIncidencia){
	let cadena;
	cadena="<h1>Listado Incidencia</h1><table class='table table-hover table-bordered table-striped'>";
	cadena+="<thead class='thead-dark'><th>IDIncidencia</th><th>NIFUsuario</th><th>NIFAgente</th><th>Importe</th><th>Pagado</th><th>Descripcion</th><th>Fecha</th><th>Bonificada/Puntos</th></thead>";
	

	for(let i=0;i<this.Incidencias.length;i++)
	{
		let id = this.Incidencias[i].id;
		if(id == idIncidencia)
		{
			cadena+="<tr>";
			cadena+=this.Incidencias[i].toHTMLrow("extra");
			cadena+="</tr>";

		}
		if(this.buscarIncidencia(idIncidencia)==null)
			{
				alert("No hay registrada ninguna Incidencia con ese ID.");
			}
	}
	cadena+="</table>";
	cadena+="<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>";
	cadena+="<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'></script>";
	return cadena;
	}
	

listadoIncidenciaFechas(dtDesde,dtHasta){
	let cadena;
		cadena="<h3>Listado Incidencias puestas desde "+dtDesde+" hasta "+dtHasta+"</h3>";
		cadena+="<table class='table table-hover table-bordered table-striped'>";
		cadena+="<thead class='thead-dark'><th>IDIncidencia</th><th>NIFUsuario</th><th>NIFAgente</th><th>Importe</th><th>Pagado</th><th>Descripcion</th><th>Fecha</th><th>Bonificada/Puntos</th></thead>";

		let aIncidencias = [];

		let d1 = dtDesde.split("/");
		let d2 = dtHasta.split("/");

		for (let i = 0; i < this.Incidencias.length; i++){
			let c = this.Incidencias[i].fecha.split("/");
			let from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
			let to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
			let check = new Date(c[2], parseInt(c[1])-1, c[0]);

			if (check >= from && check <= to){
				aIncidencias.push(this.Incidencias[i]);
			}
		}

		aIncidencias.sort((a,b) => (a.fecha > b.fecha) ? -1 : ((b.fecha > a.fecha) ? 1 : 0));

		for (let i = 0; i < aIncidencias.length; i++) {
			cadena+="<tr>";
			//cadena+=aIncidencia[i].toHTMLrow("extra");
			cadena+="<td>"+this.aIncidencias[i].id+"</td>";
			cadena+="<td>"+this.aIncidencias[i].Usuario+"</td>";
			cadena+="<td>"+this.aIncidencias[i].Agente+"</td>";
			cadena+="<td>"+this.aIncidencias[i].importe+"  €</td>";
			cadena+="<td>"+this.aIncidencias[i].pagada+"</td>";
			cadena+="<td>"+this.aIncidencias[i].descripcion+" €</td>";
			cadena+="<td>"+this.aIncidencias[i].fecha+"</td>";
			cadena+="<td>"+this.aIncidencias[i].bonificada/puntos+"</td>";
			//cadena+=aIncidencias[i].toHTMLrow("otra");
			cadena+="</tr>";
		}

		cadena+="</table>";
		cadena+="<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>";
		cadena+="<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'></script>";

		
		return cadena;
	}

listadoIncidenciaAgente(){
	let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
	let numero = 0;
	
    celda.textContent = "NIF Agente";
    celda = fila.insertCell(-1);
	celda.textContent = "Nombre";
    celda = fila.insertCell(-1);
	celda.textContent = "Apellidos";
    celda = fila.insertCell(-1);
	celda.textContent = "Puesto";
    celda = fila.insertCell(-1);
	celda.textContent = "Nº Incidencias";
    celda = fila.insertCell(-1);

    let cuerpito = document.createElement("tbody");

     for(var i=0; i< this.Agentes.length; i++){
		cuerpito.append(this.Agentes[i].toHTMLrow2());
		}
		return cuerpito;
	}	

}

var oCAU=new CAU();

Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

//clase Usuario 
class Usuario{
	constructor(sNif,sNombre,sApellidos,sDireccion){
	this.nif=sNif;
	this.nombre=sNombre;
	this.apellidos=sApellidos;
	this.direccion=sDireccion;
	}
	// para hacer listados 
	toHTMLrow(){
        let tr = document.createElement("TR");
        let td1 = document.createElement("TD");
        let td2 = document.createElement("TD");
        let td3 = document.createElement("TD");
        let td4 = document.createElement("TD");
        
        td1.appendChild(document.createTextNode(this.nif));
        td2.appendChild(document.createTextNode(this.nombre));
        td3.appendChild(document.createTextNode(this.apellidos));
        td4.appendChild(document.createTextNode(this.direccion));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        return tr;
	}
	

}
Usuario.prototype.toString=function(){
	//devuelve fila tabla
	var sFila="<tr>";
	sFila+="<td>"+this.nif+"</td>";
	sFila+="<td>"+this.nombre+"</td>";
	sFila+="<td>"+this.apellidos+"</td>";
	sFila+="<td>"+this.direccion+"</td>";
	sFila+="</tr>";
	return sFila;
}

// clase Conversacion 

function Conversacion(sIDConver,sNifUsuarioCon,txtPregunta,sNifAgenteCon,txtRespuesta){
	this.id=sIDConver;
	this.Usuario=sNifUsuarioCon;
	this.pregunta=txtPregunta;
	this.Agente=sNifAgenteCon;
	this.respuesta=txtRespuesta;
}
Conversacion.prototype.toHTMLrow=function(){
	//fila tabla
	var sFila="<tr>";
	sFila+="<td>"+this.id+"</td>";
	sFila+="<td>"+this.Usuario+"</td>";
	sFila+="<td>"+this.pregunta+"</td>";
	sFila+="<td>"+this.Agente+"</td>";
	sFila+="<td>"+this.respuesta+"</td>";
	sFila+="</tr>";
	return sFila;	
}



//clase Incidencia 
function Incidencia(sId,oUsuario,sDescripcion,dFecha){
	this.id=sId;
	this.Usuario=oUsuario;
	this.descripcion=sDescripcion;
	this.fecha=dFecha;
}
Incidencia.prototype.toHTMLrow=function(){
	//fila tabla
	var sFila="<tr>";
	sFila+="<td>"+this.id+"</td>";
	sFila+="<td>"+this.Usuario+"</td>";
	sFila+="<td>"+this.descripcion+"</td>";
	sFila+="<td>"+this.fecha+"</td>";
	sFila+="</tr>";
	return sFila;	
}

// Para el saldo de Usuario

Incidencia.prototype.toHTMLrow2=function(){
	let linea = document.createElement("tr");
	let saldo = 15;

			
			celda = linea.insertCell(-1);
			celda.textContent=this.Usuario;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.bonificada;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.puntos;
			
			celda = linea.insertCell(-1);
			for(let i=0; i<oDGT.Incidencias.length;i++){
				if(this.Usuario == oDGT.Incidencias[i].Usuario)
				{
					saldo = saldo - oDGT.Incidencias[i];
					celda.textContent=saldo;
				}
			}
			return linea;
}

// Para el saldo de puntos

Incidencia.prototype.toHTMLrow3=function(){
	let linea = document.createElement("tr");
			
			
			celda = linea.insertCell(-1);
			celda.textContent=this.Usuario;
			
			
			celda = linea.insertCell(-1);
			celda.textContent=this.puntos;
			
			return linea;
}

// Los tipos de Incidencias 

	// Leve

	function Leve(sId,oUsuario,sDescripcion,dFecha)
	{
		Incidencia.call(this,sId,oUsuario,sDescripcion,dFecha);
	}

	Leve.prototype = Object.create(Incidencia.prototype);
	Leve.prototype.constructor = Leve;

	Leve.prototype.toHTMLrow=function(){
		let tr = document.createElement("TR");
        let td1 = document.createElement("TD");
        let td2 = document.createElement("TD");
        let td3 = document.createElement("TD");
        let td4 = document.createElement("TD");
        
        td1.appendChild(document.createTextNode(this.id));
        td2.appendChild(document.createTextNode(this.Usuario));
        td3.appendChild(document.createTextNode(this.descripcion));
		td4.appendChild(document.createTextNode(this.fecha));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

		return tr;
	}
	

	
	// Grave
	
	function Grave(sId,oUsuarios,sDescripcion,sNivel,dFecha)
	{
		Incidencia.call(this,sId,oUsuarios,sDescripcion,dFecha);
		this.nivel=sNivel;
	}

	Grave.prototype = Object.create(Incidencia.prototype);
	Grave.prototype.constructor = Grave;

	Grave.prototype.toHTMLrow=function(){
		let tr = document.createElement("TR");
        let td1 = document.createElement("TD");
        let td2 = document.createElement("TD");
        let td3 = document.createElement("TD");
        let td4 = document.createElement("TD");
		let td5 = document.createElement("TD");
        
        td1.appendChild(document.createTextNode(this.id));
        td2.appendChild(document.createTextNode(this.Usuario));
        td3.appendChild(document.createTextNode(this.descripcion));
        td4.appendChild(document.createTextNode(this.nivel));
		td5.appendChild(document.createTextNode(this.fecha));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
		tr.appendChild(td5);

		return tr;
	}	





Date.prototype.toString=function(){
	var dia=this.getDate();
	var mes=this.getMonth()+1;
	var anio=this.getFullYear();
	var sCadena=dia+"/"+mes+"/"+anio;
	return sCadena;
}

//clase Agente - antigua forma
class Agente{
		constructor(sNif,sNombre,sApellidos,sDireccion,iPuesto){
		this.nif=sNif;
		this.nombre=sNombre;
		this.apellidos=sApellidos;
		this.direccion=sDireccion;
		this.puesto=iPuesto;
	}
	toHTMLrow(){
		let linea = document.createElement("tr");
			
			let celda = linea.insertCell(-1);
			celda.textContent=this.nif;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.nombre;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.apellidos;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.direccion;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.puesto;
			
			return linea;
	}
	
	// Para el numero de Incidencias
	
	toHTMLrow2(){
		let linea = document.createElement("tr");
		let numero = 0;
		
			let celda = linea.insertCell(-1);
			celda.textContent=this.nif;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.nombre;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.apellidos;

			celda = linea.insertCell(-1);
			celda.textContent=this.puesto;
		
			celda = linea.insertCell(-1);
		
			for(var i=0;i<oDGT.Agentes.length; i++){
				numero=0;
				for(var j=0; j<oDGT.Incidencias.length; j++){
					if(oDGT.Agentes[i].nif == oDGT.Incidencias[j].nif)
						numero=numero+1;
						celda.textContent=numero;
					}
				}
			
			
			


			
			return linea;		
	
	}
	
}
Agente.prototype.toString=function(){
	//fila tabla
	var sFila="<tr>";
	sFila+="<td>"+this.nif+"</td>";
	sFila+="<td>"+this.nombre+"</td>";
	sFila+="<td>"+this.apellidos+"</td>";
	sFila+="<td>"+this.direccion+"</td>";
	sFila+="<td>"+this.puesto+"</td>";
	sFila+="</tr>";
	return sFila;
}

// Listados despegables

  CAU.prototype.getOptionsUsuarios = function(){

	let oOptions = [];

	for(let i=0; i < this.usuarios.length; i++){
		let oOptionUsuario = document.createElement("option");
		oOptionUsuario.value = this.usuarios[i].nif;
		oOptionUsuario.textContent =  this.usuarios[i].nif + " - " + this.usuarios[i].apellidos + ", " + this.usuarios[i].nombre;

		// insertamos el option generado en el array
		oOptions.push(oOptionUsuario);
	}

	return oOptions; // Devolvemos array de options
  }
  
  CAU.prototype.getOptionsAgentes = function(){
	  
	let oOptions = [];
	  
	for(let i=0; i < this.agentes.length; i++){
		let oOptionAgente = document.createElement("option");
		oOptionAgente.value = this.agentes[i].nif;
		oOptionAgente.textContent =  this.agentes[i].nif + " - " + this.agentes[i].apellidos + ", " + this.agentes[i].nombre;

		// insertamos el option generado en el array
		oOptions.push(oOptionAgente);
	}

	return oOptions; // Devolvemos array de options
  }