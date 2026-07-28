/*======================================================
        GEOPORTAL OESTE MACHALA
======================================================*/


//==============================
// MOSTRAR / OCULTAR DASHBOARD
//==============================

function toggleDashboard(){

    document
    .getElementById("dashboard")
    .classList
    .toggle("oculto");

}



//==============================
// DATOS GENERALES
//==============================

const datos={

area:"432.78 ha",

poblacion:1026,

manzanas:332,

densidad:(1026/432.78).toFixed(2),

usoSuelo:[

916078.02,
312719.63,
100040.05,
97277.69,
615111.00,
2286616.60

],

equipamientos:{

radio:"600 - 1000 m",

cobertura:"72.83 %",

manzanas:"272"

},

areasVerdes:{

valor:"94.81",

area:"97,277.69 m²",

superavit:"88,043.69 m² (8.80 ha)"

},

riesgo:{

manzanas:0,

habitantes:0,

area:"0 m²"

}

};




//==============================
// CARGAR DATOS
//==============================

window.onload=function(){



document.getElementById("txtArea").innerHTML=datos.area;

document.getElementById("txtPoblacion").innerHTML=datos.poblacion;

document.getElementById("txtManzanas").innerHTML=datos.manzanas;

document.getElementById("txtDensidad").innerHTML=datos.densidad+" hab/ha";



document.getElementById("equipRadio").innerHTML=datos.equipamientos.radio;

document.getElementById("equipCobertura").innerHTML=datos.equipamientos.cobertura;

document.getElementById("equipManzanas").innerHTML=datos.equipamientos.manzanas;



document.getElementById("greenValue").innerHTML=datos.areasVerdes.valor;

document.getElementById("greenArea").innerHTML=datos.areasVerdes.area;

document.getElementById("greenDeficit").innerHTML=datos.areasVerdes.superavit;



document.getElementById("riskM").innerHTML=datos.riesgo.manzanas;

document.getElementById("riskH").innerHTML=datos.riesgo.habitantes;

document.getElementById("riskA").innerHTML=datos.riesgo.area;



crearGrafico();

};




//==============================
// GRAFICO
//==============================

function crearGrafico(){



new Chart(

document.getElementById("usoSueloChart"),

{

type:"doughnut",

data:{

labels:[

"Residencial",

"Comercial",

"Equipamiento",

"Áreas Verdes",

"Red Vial",

"Vacante"

],

datasets:[{

data:datos.usoSuelo,

backgroundColor:[

"#1565C0",

"#EF6C00",

"#8E24AA",

"#43A047",

"#546E7A",

"#90A4AE"

],

borderWidth:1

}]

},

options:{

responsive:true,

plugins:{

legend:{

position:"bottom"

}

}

}

});

}
