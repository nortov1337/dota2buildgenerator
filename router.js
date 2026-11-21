import { Router } from "express";

const router = Router()


import getRandomBuild, {items} from "./components/Build/getRandomBuild.js"
import getRandomHero, {heroes} from "./components/Hero/getRandomHero.js"
import statisticRandomHero from "./components/Build/statisticRandomBuild.js";
import statisticRandomBuild from "./components/Build/statisticRandomBuild.js";

router.get("/", (req, res) => {
    const Build = {
        hero: getRandomHero(heroes),
        build: getRandomBuild(items)
    }

    res.json(Build)
})

router.post("/stats/:type", (req, res) => {
    if (req.params.type == "builds") {
        return res.json(statisticRandomBuild(items, req.body.howmany, req.body.length))
    }

    if (req.params.type == "hero") {
        return res.json(statisticRandomHero(heroes, req.body.howmany))
    }
})

export default router