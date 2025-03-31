
let sliderInterval;

function detenerSlider() {
    if (sliderInterval) {
        clearInterval(sliderInterval); 
        sliderInterval = null;
    }
}

function iniciarSlider(idZona, titulo, descripcion) {
    let imagenElement = document.getElementById("infoImagen");
    let tituloElement = document.getElementById("infoTitulo");
    let textoElement = document.getElementById("infoTexto");

    detenerSlider();

    tituloElement.textContent = titulo;
    textoElement.innerHTML = descripcion;

    let index = 0;
}


document.addEventListener("DOMContentLoaded", function () {
    let mapa = document.getElementById("mapaSVG");
    if (mapa) {
        mapa.style.opacity = "1";
        mapa.style.visibility = "visible";
    }
});

document.getElementById("prefix__Espacio_deportivo_1").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Espacio_deportivo_1", "ESPACIO DEPORTIVO 1", "Campo de fútbol equipado con césped sintético de última generación, diseñado para partidos y entrenamientos. Cuenta con iluminación nocturna, gradas y señalización para garantizar una experiencia deportiva óptima.");
});

document.getElementById("prefix__Espacio_deportivo_2").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Espacio_deportivo_2", "ESPACIO DEPORTIVO 2", "Pista de atletismo de superficie especializada, ideal para carreras de velocidad y resistencia. Incluye zonas de calentamiento y un circuito multifuncional para diversas disciplinas.");
});

document.getElementById("prefix__Laboratorios").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Laboratorios", "LABORATORIOS", "Áreas equipadas con tecnología avanzada para la experimentación y el aprendizaje práctico. Espacios diseñados para fomentar la investigación y el desarrollo en diversas ramas del conocimiento.");
});

document.getElementById("prefix__Baño_hombres").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Baño_hombres", "BAÑO HOMBRES", "Instalaciones higiénicas modernas con mantenimiento constante. Cuentan con accesibilidad y comodidades para brindar un servicio adecuado a la comunidad universitaria.");
});

document.getElementById("prefix__Baño_Mujeres").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Baño_Mujeres", "BAÑO MUJERES", "Instalaciones higiénicas modernas con mantenimiento constante. Cuentan con accesibilidad y comodidades para brindar un servicio adecuado a la comunidad universitaria.");
});

document.getElementById("prefix__Coordinacion").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Coordinacion", "COORDINACIÓN", "Oficina de gestión académica donde los estudiantes y docentes pueden realizar consultas, trámites administrativos y recibir asesoramiento institucional.");
});

document.getElementById("prefix__Bilblioteca").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Bilblioteca", "BIBLIOTECA", "Centro de recursos académicos con una amplia colección de libros, revistas y material digital. Cuenta con espacios para lectura, estudio y acceso a bases de datos especializadas.");
});

document.getElementById("prefix__Cantina").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Cantina", "RESTAURANTE UNIVERSITARIO", "Espacio gastronómico con variedad de opciones de comida a precios accesibles. Diseñado para la comodidad de estudiantes y personal, promoviendo una alimentación equilibrada dentro del campus.");
});

document.getElementById("prefix__Aulas").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Aulas", "BLOQUE DE AULAS", "Salones de clase equipados con tecnología moderna, iluminación adecuada y mobiliario ergonómico para garantizar un entorno de aprendizaje cómodo y funcional.");
});

document.getElementById("prefix__Aula_Magna").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Aula_Magna", "AULA MAGNA", "Auditorio con capacidad para grandes eventos académicos, conferencias y actividades culturales. Cuenta con tecnología audiovisual avanzada y un diseño que optimiza la acústica.");
});

document.getElementById("prefix__Calistenia").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Calistenia", "CALISTENIA", "Área al aire libre con equipamiento especializado para entrenamientos de fuerza y resistencia, ideal para quienes practican ejercicios con el propio peso corporal.");
});

document.getElementById("prefix__Comedor_y_Sala_de_estudio").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Comedor_y_Sala_de_estudio", "COMEDOR Y SALA DE ESTUDIO", "Espacio multifuncional que ofrece un comedor con opciones saludables y un ambiente de estudio tranquilo, equipado con mobiliario cómodo y acceso a recursos académicos.");
});

document.getElementById("prefix__Mesa_de_Entrada").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Mesa_de_Entrada", "MESA DE ENTRADA", "Punto de atención administrativa donde se gestionan solicitudes, trámites y documentación institucional para estudiantes y personal universitario.");
});

document.getElementById("prefix__Poliplaza1").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Poliplaza1", "POLIPLAZA 1", "Área verde con bancas y espacios de recreación, ideal para el descanso, la socialización y la realización de eventos culturales dentro del campus.");
});

document.getElementById("prefix__Estacionamientos_principal").addEventListener("mouseover", function () {
    iniciarSlider("prefix__Estacionamientos_principal", "ESTACIONAMIENTO PRINCIPAL", "Zona de aparcamiento con capacidad para estudiantes, docentes y visitantes. Cuenta con seguridad y señalización para garantizar un flujo vehicular ordenado.");
});
