import { createPlan } from "./plan.js";

import { usePlants } from "./field.js";

import { harvestPlants } from "./harvester.js";

const yearlyPlan = createPlan()

const plantedSeeds = usePlants()

const harvestedCrops = harvestPlants(plantedSeeds)


console.log(plantedSeeds)
console.log(harvestedCrops)

console.log("Welcome to the main module")

