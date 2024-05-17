// 1. Arrow Function con parámetros por defecto
const sum = (a = 10, b = 5) => {
    console.log(a + b);
};

// 1.1 Ejecutar sin pasar ningún parámetro
sum(); // Output: 15

// 1.2 Ejecutar pasando un solo parámetro
sum(20); // Output: 25

// 1.3 Ejecutar pasando dos parámetros
sum(20, 30); // Output: 50

// 2. Destructuring de objeto
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
const { title, year } = game;
console.log(title, year);

// 2.2 Destructuring de array
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

// 2.3 Destructuring de función
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'};
};
const { name: animalName, race: animalRace } = animalFunction();
console.log(animalName, animalRace);

// 2.4 Destructuring de objeto anidado
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020]};
const { name: carName, itv: [year1, year2, year3] } = car;
console.log(carName, year1, year2, year3);

// 3. Spread Operator
// Destructuring del objeto car para obtener las variables name e itv

const { name, itv } = car;
// Imprimir las variables
console.log(name, itv[0], year2, year3);



// 4. Map
// 4.1 Devolver un array con los nombres de los usuarios
const userNames = users.map(user => user.name);
console.log(userNames);

// 4.2 Devolver una lista de nombres cambiando los que empiezan con 'A' por 'Anacleto'
const userNamesChanged = users.map(user => {
    if (user.name.startsWith('A')) {
        return 'Anacleto';
    }
    return user.name;
});
console.log(userNamesChanged);

// 4.3 Devolver una lista de nombres con ' (Visitado)' agregado si isVisited es true
const cityNames = cities.map(city => {
    if (city.isVisited) {
        return city.name + ' (Visitado)';
    }
    return city.name;
});
console.log(cityNames);


// 5. Filter
// 5.1 Filtrar edades mayores que 18
const agesOver18 = ages.filter(age => age > 18);
console.log(agesOver18);

// 5.2 Filtrar edades pares
const evenAges = ages.filter(age => age % 2 === 0);
console.log(evenAges);

// 5.3 Filtrar streamers que juegan 'League of Legends'
const lolStreamers = lolStreamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(lolStreamers);

// 5.4 Filtrar streamers cuyo nombre incluya la letra 'u'
const namesWithU = lolStreamers.filter(streamer => streamer.name.includes('u'));
console.log(namesWithU);

// 5.5 Filtrar streamers cuyo juego incluya 'Legends' y cambiar a MAYUSCULAS si edad > 35
const legendsStreamers = lolStreamers.filter(streamer => {
    if (streamer.gameMorePlayed.includes('Legends') && streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        return true;
    }
    return false;
});
console.log(legendsStreamers);

// 5.6 Filtrar streamers por entrada de usuario en input
const input = document.querySelector('input[data-function="toFilterStreamers"]');
input.addEventListener('input', () => {
    const filterText = input.value.toLowerCase();
    const filteredStreamers = lolStreamers.filter(streamer => streamer.name.toLowerCase().includes(filterText));
    console.log(filteredStreamers);
});

// 5.7 Filtrar streamers por entrada de usuario en input y mostrar solo al hacer click
const button = document.querySelector('button[data-function="toShowFilterStreamers"]');
button.addEventListener('click', () => {
    const filterText = input.value.toLowerCase();
    const filteredStreamers = lolStreamers.filter(streamer => streamer.name.toLowerCase().includes(filterText));
    console.log(filteredStreamers);
});


// 6. Find
// 6.1 Encontrar el número 100
const number100 = numbers.find(number => number === 100);
console.log(number100);

// 6.2 Encontrar la película del año 2010
const movie2010 = movies.find(movie => movie.date === 2010);
console.log(movie2010);

// 6.3 Encontrar el alien 'Cucushumushu' y la mutación 'Porompompero' y fusionarlos
const alienWithMutation = aliens.find(alien => alien.name === 'Cucushumushu');
const mutation = mutation.find(mutation => mutation.name === 'Porompompero');

if (alienWithMutation && mutation) {
    const fusedObject = { ...alienWithMutation, mutation: { ...mutation } };
    console.log(fusedObject);
} else {
    console.log('No se encontró el alien o la mutación.');
}


// 7. Reduce
// 7.1 Suma de todas las notas de los exámenes
const totalScore = exams.reduce((accumulator, exam) => accumulator + exam.score, 0);
console.log("Suma total de notas de exámenes:", totalScore);

// 7.2 Suma de las notas de los exámenes de los alumnos aprobados (nota >= 5)
const totalPassedScore = exams.reduce((accumulator, exam) => {
    if (exam.score >= 5) {
        accumulator += exam.score;
    }
    return accumulator;
}, 0);
console.log("Suma total de notas de exámenes aprobados:", totalPassedScore);

// 7.3 Calculando el promedio de las notas de todos los exámenes
const averageScore = totalScore / exams.length;
console.log("Promedio de notas de todos los exámenes:", averageScore);


// 8. Bonus
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
];

// Filtrar los videojuegos por género 'RPG'
const rpgGames = videogames.filter(game => game.genders.includes('RPG'));


