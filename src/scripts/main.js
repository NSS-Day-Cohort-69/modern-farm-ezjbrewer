import { createPlan } from "./plan.js";

import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan()

const plantedSeeds = plantSeeds(yearlyPlan)




console.log("Welcome to the main module")


console.log(plantedSeeds)