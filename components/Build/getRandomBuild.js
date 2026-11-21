const response = await fetch(
    "https://raw.githubusercontent.com/odota/dotaconstants/master/build/items.json"
);

const data = await response.json();

let items = [...Object.values(data)]
items = items.filter(o => o.cost > 2250)
items = items.map(o => o.dname)
items = items.filter(name => name !== undefined)
export {items}

export default function getRandomBuild (array, howmany = 1, buildLength = 6) {
    const builds = []

    for (let i = 0; i < howmany; i++) {   
        const build = []
        while (build.length < buildLength) {
            const randomIndex = Math.floor(Math.random() * array.length);
            if(build.includes(array[randomIndex])) {continue}
            build.push(array[randomIndex]);
        }
        builds.push(build)
    }
    if (builds.length == 1) {return builds[0]}
    return builds
}