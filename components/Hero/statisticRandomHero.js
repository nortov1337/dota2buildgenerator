import getRandomHero, { heroes } from "./getRandomHero.js"

export default function statisticRandomHero (array, howmany = 1) {
    const statsHero = {}
    array.forEach(name => statsHero[name] = 0)
    getRandomHero(heroes, howmany).forEach(name => statsHero[name] += 1)
    return statsHero
}

console.log(statisticRandomHero(heroes, 100000000))