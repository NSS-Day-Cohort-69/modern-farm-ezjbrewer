import { createPlan } from "./plan.js";

import { plantSeeds } from "./tractor.js";

import { harvestPlants } from "./harvester.js";

const yearlyPlan = createPlan()

const plantedSeeds = plantSeeds(yearlyPlan)

const harvestedCrops = harvestPlants(plantedSeeds)




console.log("Welcome to the main module")

console.log(plantedSeeds)
console.log(harvestedCrops)