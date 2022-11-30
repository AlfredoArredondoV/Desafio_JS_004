const arregloPropiedades = [
    {
        nombre: "Casa de Campo",
        descripcion: "Un ligar ideal para descansar de la ciudad",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        cuartos: 2,
        metros: 170
    },
    {
        nombre: "Casa de Playa",
        descripcion: "Despierta tus dias oyendo el oceano",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        cuartos: 2,
        metros: 130
    },
    {
        nombre: "Casa en el Centro",
        descripcion: "Tan cerca de tu todo lo que necesitas",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        cuartos: 5,
        metros: 320
    },
    {
        nombre: "Casa Rodante",
        descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        cuartos: 2,
        metros: 150
    },
    {
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        cuartos: 3,
        metros: 200
    },
    {
        nombre: "Mansion",
        descripcion: "Vive una vida lujosa en la mansio de tus sueños",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        cuartos: 5,
        metros: 500
    },
    
];
//funcion que crea tarjeta
const createCards = (nombre, description, img, rooms, metros) => {
    return `
    <div class="card" style="width: 18rem;">
        <img src=${img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">Cuartos: ${rooms} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Metros: ${metros}</p>
            <p class="card-text">${description}</p>
            <a href="#" class="btn btn-primary">Ver más</a>
        </div>
    </div>`;
};
// recorrer arrays con forEach
arregloPropiedades.forEach((property) => {
    document.getElementById("cards").innerHTML += createCards( property.nombre, property.descripcion, property.src, property.cuartos, property.metros );
});
// buscador
document.getElementById("inputButton").addEventListener("click", () => {
    let cantidadCuarto = document.getElementById("inputRoom").value;
    let metroCuadradoMin = document.getElementById("inputMin").value;
    let metroCuadradoMax = document.getElementById("inputMax").value;
    let num = 0;
    if (
        cantidadCuarto.length == 0 ||
        metroCuadradoMin.length == 0 ||
        metroCuadradoMax.length == 0
    ) {
        alert("Faltan campos por llenar");
    } else {
        document.getElementById("cards").innerHTML = "";
        arregloPropiedades.forEach((property) => {
            if ( property.cuartos == cantidadCuarto && property.metros >= metroCuadradoMin && property.metros <= metroCuadradoMax) {
                num++;
                document.getElementById("cards").innerHTML += createCards( property.nombre, property.descripcion, property.src, property.cuartos, property.metros );
            }
        });
        document.getElementById("total").textContent = num;
    }
});