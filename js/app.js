// variables
const formfilter = document.querySelector("#formFilter")
const marca = document.querySelector("#marca");
const serie = document.querySelector("#serie");
const modelo = document.querySelector("#modelo");
const nucleos = document.querySelector("#nucleos");
const frecuenciaBase = document.querySelector("#frecuenciaBase");
const frecuenciaBoots = document.querySelector("#frecuenciaBoots");
const vram = document.querySelector("#vram");
const tdp = document.querySelector("#tdp");
const precio = document.querySelector("#precio");

// contenedor para los resultados
const resultado = document.querySelector("#resultado");

// Generar un objeto con la busqueda
const datosBusqueda = {
    Marca: "",
    Serie: "",
    Modelo: "",
    Nucleos: "",
    Frecuencia_Base: "",
    Frecuencia_Boots: "",
    VRAM: "",
    TDP: "",
    Precio: "",
};

// eventos
document.addEventListener("DOMContentLoaded", () => {
    // Mostrar las graficas al cargar
    mostrarGraficas(graficas);
});

// event listener para los select de busqueda
marca.addEventListener("change", (e) => {
    datosBusqueda.Marca = e.target.value;
    filtrarResultados();
});
serie.addEventListener("change", (e) => {
    datosBusqueda.Serie = e.target.value;
    filtrarResultados();
});
modelo.addEventListener("change", (e) => {
    datosBusqueda.Modelo = e.target.value;
    filtrarResultados();
});
nucleos.addEventListener("change", (e) => {
    datosBusqueda.Nucleos = e.target.value;
    filtrarResultados();
});
frecuenciaBase.addEventListener("change", (e) => {
    datosBusqueda.Frecuencia_Base = e.target.value;
    filtrarResultados();
});
frecuenciaBoots.addEventListener("change", (e) => {
    datosBusqueda.Frecuencia_Boots = e.target.value;
    filtrarResultados();
});
vram.addEventListener("change", (e) => {
    datosBusqueda.VRAM = e.target.value;
    filtrarResultados();
});
tdp.addEventListener("change", (e) => {
    datosBusqueda.TDP = e.target.value;
    filtrarResultados();
});
precio.addEventListener("change", (e) => {
    datosBusqueda.Precio = e.target.value;
    filtrarResultados();
});

// funciones
function mostrarGraficas(graficas) {
    // elimina el html previo
    limpiarHTML();

    graficas.forEach((grafica) => {
        const graficaHTML = document.createElement("tr");

        for (const key in grafica) {
            if (grafica.hasOwnProperty(key)) {
                const cell = document.createElement("td");
                cell.textContent = grafica[key];
                graficaHTML.appendChild(cell);
            }
        }

        resultado.appendChild(graficaHTML);
    });
}

// Limpiar html
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Genera las marcas del select
function llenarSelect() {
    console.log("llenando el select");
}

// función que filtra en base a la búsqueda
function filtrarResultados() {
    const resultado = graficas
        .filter(filtrarMarca)
        .filter(filtrarSerie)
        .filter(filtrarModelo)
        .filter(filtrarNucleos)
        .filter(filtrarFrecuenciaBase)
        .filter(filtrarFrecuenciaBoots)
        .filter(filtrarVRAM)
        .filter(filtrarTDP)
        .filter(filtrarPrecio);

    console.log(resultado);

    if (resultado.length) {
        // Mostrar graficas
        mostrarGraficas(resultado);
    } else {
        noHayResultado();
    }
}

function noHayResultado() {

    limpiarHTML();

    const noHayResultado = document.createElement("tr");
    noHayResultado.classList.add("alert", "alert-warning", "mx-4", "my-3");
    noHayResultado.textContent = "No se encontraron resultados, prueba con nuevos valores";
    formfilter.appendChild(noHayResultado);
}

function filtrarMarca(grafica) {
    const { Marca } = datosBusqueda;
    if (Marca) {
        return grafica.Marca === Marca;
    }
    return grafica;
}

function filtrarSerie(grafica) {
    const { Serie } = datosBusqueda;
    if (Serie) {
        return grafica.Serie === Serie;
    }
    return grafica;
}

function filtrarModelo(grafica) {
    const { Modelo } = datosBusqueda;
    if (Modelo) {
        return grafica.Modelo === Modelo;
    }
    return grafica;
}

function filtrarNucleos(grafica) {
    const { Nucleos } = datosBusqueda;
    if (Nucleos) {
        return grafica.Nucleos === Nucleos;
    }
    return grafica;
}

function filtrarFrecuenciaBase(grafica) {
    const { Frecuencia_Base } = datosBusqueda;
    if (Frecuencia_Base) {
        return grafica.Frecuencia_Base === Frecuencia_Base;
    }
    return grafica;
}

function filtrarFrecuenciaBoots(grafica) {
    const { Frecuencia_Boots } = datosBusqueda;
    if (Frecuencia_Boots) {
        return grafica.Frecuencia_Boots === Frecuencia_Boots;
    }
    return grafica;
}

function filtrarVRAM(grafica) {
    const { VRAM } = datosBusqueda;
    if (VRAM) {
        return grafica.VRAM === VRAM;
    }
    return grafica;
}

function filtrarTDP(grafica) {
    const { TDP } = datosBusqueda;
    if (TDP) {
        return grafica.TDP === TDP;
    }
    return grafica;
}

function filtrarPrecio(grafica) {
    const { Precio } = datosBusqueda;
    if (Precio) {
        return grafica.Precio === parseInt(Precio);
    }
    return grafica;
}
