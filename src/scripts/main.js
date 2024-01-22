import { createPlan } from "./plan.js";

import { createCorn } from "./seeds/corn.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createSoybean } from "./seeds/soybean.js";

const yearlyPlan = createPlan()

const cornSeed = createCorn("Corn", 180, 6)
const asparagusSeed = createAsparagus("Asparagus", 24, 4)
const potatoSeed = createPotato("Potato", 32, 2)
const wheatSeed = createWheat("Wheat", 230, 6)
const sunflowerSeed = createSunflower("Sunflower", 380, 3)
const soybeanSeed = createSoybean("Soybean", 2, 4)

console.log("Welcome to the main module")

console.log(cornSeed, asparagusSeed, potatoSeed, wheatSeed, sunflowerSeed, soybeanSeed)