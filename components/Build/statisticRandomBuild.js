import getRandomBuild, { items } from "./getRandomBuild.js"

export default function statisticRandomBuild (array, howmany = 1, buildLength = 6) {
    array = [...new Set(array)]
    const statsItems = {}
    array.forEach(name => statsItems[name] = 0)
    getRandomBuild(array, howmany, buildLength).forEach(build => build.forEach(function (name) {
        statsItems[name] += 1
    }))
    return statsItems
}