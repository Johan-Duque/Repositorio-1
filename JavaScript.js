let r;
let suma = 1+1;
let resta = (1-1) * (1+1);

// --- Recursividad --- //

if(r == 1) {

    function funcion (msg) {
        try {
            if(msg) console.log("El parametro [" + msg + "] existe"); 
            else throw "El parametro no existe";
        } catch(e) {
            let res = prompt(e + " | Ingrese el parametro: ");   
            funcion(res);
        }
    } 
    funcion();
}

// --- Clausuras --- //

if(r == 2) {

    function funcion2 (msg) {
        return function(){
            document.querySelector(".caja").style.background = msg;
        }
    }    
    
    let Azul = funcion2("blue");
    let Rojo = funcion2("red");
    let Verde = funcion2("green");
    
    let boton_azul = document.getElementById("azul").addEventListener("click", Azul);
    let boton_rojo = document.getElementById("rojo").addEventListener("click", Rojo);
    let boton_verde = document.getElementById("verde").addEventListener("click", Verde);

}

// --- Parametro rest --- //

if(r == 3) {

    function funcion3 () {
        let r, array = [];
        do{
          let elemento = prompt("Ingrese el elemento a ingresar en el array");
          r = prompt("¿Desea ingresar otro elemento? [S]/[N]");
          array.push(elemento + "-");
        } while (r != "n" && r != "N");
        let array_des = "array: ".concat(...array);
        console.log(array_des);
     }
     
    funcion3();

}

// --- Objetos & Funciones Flechas --- // 

if(r == 4) {

    function funcion (msg) {
        try {
            if(msg) console.log("El parametro [" + msg + "] existe"); 
            else throw "El parametro no existe";
        } catch(e) {
            let res = prompt(e + " | Ingrese el parametro: ");   
            funcion(res);
        }
    } 
    
    this.Nombre = "Johan Windows";
    
    const objeto2 = {
        Nombre : "Johan",
        fx: () => {
            return  `El nombre es: ${this.Nombre} `;
        },
        funcion
    }
    
    const prueba = () => {
        this.Nombre = "NOMBRE THIS";
        objeto2.fx();
    }
    
    prueba();
    
    console.log(objeto2.fx())
    objeto2.funcion();

}

// --- objetos & Protos --- // 

if(r == 5) {

    class Objeto {
        constructor(){}
        mensaje(){
            console.log("mensaje");
        }
    }
    
    let obj = new Objeto();
    let arreglo = [];
    arreglo.__proto__ = obj.__proto__;
    arreglo.mensaje();

}

// --- Date --- // 

if(r == 6) {

    function fecha() {
        let data_fecha = new Date();
        return console.log(data_fecha.getSeconds());
    }
    
    setInterval(fecha, 1000);

}

// --- Geolocalizacion --- // 

if(r == 7) {
    const geo = navigator.geolocation;
    
    function coordenadas (ubi) {
        console.log(ubi);
    }
    
    const error = () => console.log(e);
    
    const opc = {
        maximumAge: 0,                   // Cuantas veces se actualiza la dirreccion del cache
        timeout: 3000,                   // Tiempo en mostrar la ubicacion
        enableHightAccuracy: true        // Activa la alta presicion
    }
    
    geo.getCurrentPosition(coordenadas,error, opc);
    geo.watchPosition(coordenadas,error, opc); 
}

// --- History --- //

if(r == 8) {

    console.log(window.history);

    // --- Metodos del history --- //
    
    function opciones () {
        history.back();                            // Regresa a la pagina anterior  
        history.forward();                         // Redirreciona a la pagina posterior
        history.go();                              // 0 o nada refresca la pagina, 1 es forwards() y -1 es back()
        history.pushState("","","?...");           // Agrega informacion de la URL 
        history.replaceState("","","?...");        // Remplaza informacion de la URL
        addEventListener("popstate", (e) => console.log(e.state));
    }

}

// --- File Reader --- // 

if(r == 9) {

    /*const input = document.getElementById("input");
    const container = document.querySelector(".container");
    
    input.addEventListener("change", (e) => {
        //leer(input.files[0]);   
        leer(e.target.files);
    
        let files = e.target.files;
    
        for(let i = 0; i < files.length; i++){
            const reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.addEventListener("load", (e) => {
                let img =  `<img src="${e.currentTarget.result}"></img>`;
                container.innerHTML += img;
            });
        }
    }) */
    
    function leer (ar) {
        for(let i = 0; i < ar.length; i++){
            const reader = new FileReader();
            reader.readAsText(ar[i]);
            reader.addEventListener("load", (e) => console.log(e));
        }
    }

}

// --- Reader --- // 

if(r == 10) {

    const caja = document.querySelector(".caja");

    caja.addEventListener("dragover", (e) => {
         e.preventDefault();
    });

    caja.addEventListener("drop", (e) => {
        e.preventDefault();
        let file = e.dataTransfer.files[0];
        validar_archivo3(file);
        if(res == 2) caja.style.background =  `blue`; 
        else caja.style.background =  `red`; 
    });

  function validar_archivo1(ar){
     const reader = new FileReader();
     const div = document.getElementById("contenido");
     try {     
        reader.readAsText(ar);
        reader.addEventListener("load", (e) => div.innerHTML += e.currentTarget.result);
      } catch(e){
        reader.readAsDataURL(ar);
        reader.addEventListener("load", (e) => caja.style.background = "blue");
     }
 }

  function validar_archivo2(ar){
    const reader = new FileReader();
    const div = document.getElementById("contenido");
    try {     
        reader.readAsDataURL(ar);
        reader.addEventListener("load", (e) => {
            let url = URL.createObjectURL(ar);
            let img = document.createElement("img");
            img.setAttribute("src",url);
            div.appendChild(img);
        });
    } catch(e){
        reader.readAsDataURL(ar);
        reader.addEventListener("load", (e) => caja.style.background = "blue");
    }
 }

  function validar_archivo3(ar){
    const reader = new FileReader();
    const div = document.getElementById("contenido");
    try {     
        reader.readAsArrayBuffer(ar);
        reader.addEventListener("progress", (e) => {
            let carga = Math.round(e.loaded / ar.size * 100);
            console.log(carga);
        })
        reader.addEventListener("load", (e) => {
            let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: `video/mp4`})
            let url = URL.createObjectURL(video);
            let img = document.createElement("VIDEO");
            img.setAttribute("src",url);
            div.appendChild(img);
        });
    } catch(e){
        reader.readAsDataURL(ar);
        reader.addEventListener("load", (e) => caja.style.background = "blue");
    }
 }

}

// --- IndexeDB --- // 

if(r == 11) {

    // --- Codigo HTML --- //

    /* <div class="container_1">
        <input type="text" id="nombre" placeholder="Agregar nombre">
        <button id="add">Añadir</button>
    </div>

    <div class="container_2">
    </div> */

    const IDBRequest = indexedDB.open("Servidor", 1);

    IDBRequest.addEventListener("upgradeneeded", () => {
        const db = IDBRequest.result;
        db.createObjectStore("ID", {
            autoIncrement: true
        });
    })
    
    IDBRequest.addEventListener("success", () => console.log("Funciono correctamente"));
    IDBRequest.addEventListener("error", () => console.error("Fallo erroneamente"));
    
    function añadir_obj (objeto) {
        /*const db = IDBRequest.result;
        const IDBtransaction = db.transaction("ID", "readwrite");
        const ObjectStore = IDBtransaction.objectStore("ID");
        ObjectStore.add(objeto);
        IDBtransaction.addEventListener("complete", () => console.log("Agregado correctamente"));*/
        const data = data_f("Agregado correctamente", "readwrite");
        data.add(objeto);
    }
    
    function modificar_obj (objeto, key) {
        /*const db = IDBRequest.result;
        const IDBtransaction = db.transaction("ID", "readwrite");
        const ObjectStore = IDBtransaction.objectStore("ID");
        ObjectStore.put(key, objeto);
        IDBtransaction.addEventListener("complete", () => console.log("Modificado correctamente"));*/
        const data = data_f("Agregado correctamente", "readwrite");
        data.put(key, objeto);
    }
    
    function leer_obj () {
        
        const data = data_f("Agregado correctamente", "readonly");
        const fragmento = document.createDocumentFragment();
        document.querySelector(".container_2").innerHTML = "";
    
        const cursor = data.openCursor(); 
        cursor.addEventListener("success", () => {
            if(cursor.result) {
                let elemento = crear_div(cursor.result.key, cursor.result.value);
                fragmento.appendChild(elemento);
                console.log(cursor.result.value);
                cursor.result.continue();
            } else {
                document.querySelector(".container_2").appendChild(fragmento);
                console.log("Se leyeron los objetos correctamente");
            }
        })
    }
    
    function eliminar_obj (key) {
        /* const db = IDBRequest.result;
        const IDBtransaction = db.transaction("ID", "readwrite");
        const ObjectStore = IDBtransaction.objectStore("ID"); */
        const data = data_f("Eliminado correctamente", "readwrite");
        data.delete(key);
    }
    
    const data_f = (msg, modo) => {
        const db = IDBRequest.result;
        const IDBtransaction = db.transaction("ID", modo);
        const ObjectStore = IDBtransaction.objectStore("ID");
        IDBtransaction.addEventListener("complete", () => console.log(msg));
        return ObjectStore;
    }
    
    function crear_div (key, name) {
        const contenedor = document.querySelector(".container_2");
    
        const div = document.createElement("div");
        const div_op = document.createElement("div");
        const h2 = document.createElement("h2");
        const boton1 = document.createElement("button");
        const boton2 = document.createElement("button");
    
        boton1.innerHTML = "Guardar";
        boton2.innerHTML = "Eliminar";
    
        h2.innerHTML = name.nombre;
        h2.setAttribute("contenteditable", "true");
        h2.setAttribute("spellcheck","false");
    
        div_op.appendChild(boton1);
        div_op.appendChild(boton2);
    
        div.appendChild(h2);
        div.appendChild(div_op);
    
        boton1.addEventListener("click", () => {
            modificar_obj(key, {nombre: h2.textContent});
        });
    
        boton2.addEventListener("click", () => {
            eliminar_obj(key);
            document.querySelector(".container_2").removeChild(div);
        })
    
        contenedor.appendChild(div);    
        return div;
    }
    
    const boton = document.getElementById("add");
    boton.addEventListener("click", () => {
        let nombre = document.getElementById("nombre").value;
        if(nombre.length > 0) {
            añadir_obj({nombre});
            leer_obj();
        }
    })

}

// --- MatchMedia --- //

if(r == 12) {
    // HTML:  <div class="caja"><span>Caja</span></div>

    const media = matchMedia("(max-width: 500px)");
    console.log(media);
    
    let acumulador = 0;
    
    media.addEventListener("change", () => {
        if(acumulador == 0) {
            document.querySelector(".caja").style.background = "red";
            acumulador++;
        } else {
            document.querySelector(".caja").style.background = "rgb(5, 147, 255)";
            acumulador = 0;
        } 
    });
}

// --- Observer --- //

if(r == 13) {

    const caja = document.querySelectorAll(".caja");

    function Verificar (array_cajas) {
        for(let i of array_cajas) {
            if(i.isIntersecting) console.log("Estas viendo la " + i.target.textContent);
        }
    }
    
    const observador = new IntersectionObserver(Verificar);
    
    for(let i of caja) {
        observador.observe(i);
    }

}

// --- Lazy Load --- //

if(r == 14) {

    const contenedor = document.querySelector(".publicaciones");

    function crear_publicacion (titulo, contenido) {

    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const div_inputs = document.createElement("div");
    const input_res = document.createElement("input");
    const input_sub = document.createElement("input");

    div.classList.add("publicacion");
    div_inputs.classList.add("inputs");

    input_res.classList.add("res");
    input_sub.classList.add("sub");

    h3.textContent = titulo;
    p.textContent = contenido;

    input_res.setAttribute("placeholder", "Introduce una respuesta");
    input_sub.setAttribute("placeholder", "Enviar");

    input_res.setAttribute("type", "text");
    input_sub.setAttribute("type", "submit");

    div_inputs.appendChild(input_res);
    div_inputs.appendChild(input_sub);

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(div_inputs);
    
    return div;
}

async function peticion (e) {
    try{
        let peticion = await fetch("info.txt");
        let resultado = await peticion.json();
        const fragmento = document.createDocumentFragment();
        for(let i in resultado) fragmento.appendChild(crear_publicacion(resultado[i].titulo, resultado[i].contenido));
        contenedor.appendChild(fragmento);
        console.log(resultado);
    } catch(e){console.error("URL invalida")}
}

const observer = new IntersectionObserver(cargar_publis);

function cargar_publis (publicaciones) {
    if(publicaciones[0].isIntersecting) peticion_2(2);
}

let contador = 1, validacion = 0;

async function peticion_2 (e) {

    try{
        let peticion = await fetch("info.txt");
        let resultado = await peticion.json();
        const fragmento = document.createDocumentFragment();
        for(let i = 0; i < e; i++){
            let indice = `publicacion${contador}`;
            if(resultado[indice] != undefined) {
                let publicacion = crear_publicacion(resultado[indice].titulo, resultado[indice].contenido);
                fragmento.appendChild(publicacion);
                contador++;
                if(i == e-1) observer.observe(publicacion);
            } else {
                if(validacion == 0) {
                    h3 = document.createElement("h3");
                    h3.textContent = "No hay mas elementos";
                    contenedor.appendChild(h3);
                    validacion++;
                    break;
                }
            }
        } 
        contenedor.appendChild(fragmento);
    } catch(e){console.error("URL invalida")}
}

peticion_2(3);

addEventListener("visibilitychange", (e) => {
    if(e.target.visibilityState) console.log(e.target.visibilityState);
})
}

// --- Memoizer --- //

if(r == 15) {

    let cache_memoizer = [];

    function memoizer (funcion_m) {

        return e => {
            const index = e.toString();
            if(cache_memoizer[index] == undefined) cache_memoizer[index] = funcion_m(e);
            return cache_memoizer[index];
        } 

    }

    function funcion (num) {
        let acumulador = 0, resultado = 0;
        for(let i = 0; i < num; i++){
            for(let j = 10000; j >= 0; j--){
                acumulador++;
                resultado += (acumulador*acumulador)+acumulador;
            }
        }
        return resultado;
    }

    /*const memo = memoizer(funcion);
    const date4 = new Date();
    memo(100000); */

    console.log("Sin memoizer: ");

    const date = new Date();
    funcion(100000);
    console.log("Tiempo de duracion: " + (new Date() - date));

    const date1 = new Date();
    funcion(100000);
    console.log("Tiempo de duracion: " + (new Date() - date1));

    const date2 = new Date();
    funcion(100000);
    console.log("Tiempo de duracion: " + (new Date() - date2));

    // --- memo --- //

    console.log("Con memoizer: ");

    const memo = memoizer(funcion);
    const date4 = new Date();
    memo(100000);
    console.log("Tiempo de duracion: " + (new Date() - date4));

    const date5 = new Date();
    memo(200000);
    console.log("Tiempo de duracion: " + (new Date() - date5));

    const date6 = new Date();
    memo(100000);
    console.log("Tiempo de duracion: " + (new Date() - date6));

}

// --- Cache --- //

if(r == 16) {
    caches.open("Archivos-estaticos").then(cache => {
        cache.add("index.html");
    });
}

function operacion (num1,num2, funcion_cb) {
    setTimeout(() => {
        console.log(funcion_cb(num1,num2))
    }, 2000);
}

operacion(1,5, function(a,b){
    return a+b;
});

async function promesa (num1,num2) {
    return new Promise((resolve, reject) => {

        let resultado = num1 / num2;

        if(isNaN(resultado)) reject("No se puede dividir sobre cero");
        else resolve(resultado);  
    })
}

promesa(10,0).then(res => {
    console.log("Resultado de la division: " + res);
}).catch((e) => console.log(e));
