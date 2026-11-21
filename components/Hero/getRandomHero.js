const response = await fetch(
    "https://www.dota2.com/datafeed/herolist?language=russian"
);

const data = await response.json();
let heroes = data.result.data.heroes
heroes = heroes.map(o => o.name_loc)

export default function getRandomHero(array, howmany = 1, alwaysArray = false) {
    const result = []
    for (let i = 0; i < howmany; i++) {
        result.push(array[Math.floor(Math.random() * array.length)])
    }
    if (result.length == 1 && alwaysArray == false) {return result[0]}
    return result
}

export {heroes}