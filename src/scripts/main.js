import { createPlan } from "./plan.js";

import { usePlants } from "./field.js";

import { plantSeeds } from "./tractor.js";

import { harvestPlants } from "./harvester.js";

import { catalog } from "./catalog.js";

const yearlyPlan = createPlan() // Create plan for crops to grow

plantSeeds(yearlyPlan) // Plant seeds based on created plan

const plantedSeeds = usePlants() // Retrieve list of planted seeds

const harvestedCrops = harvestPlants(plantedSeeds) // Harvest crops based on output parameter. Corn is halved.


const cropList = catalog(harvestedCrops) // Retrieve string for HTML that contains all harvested crops
const parentElement = document.querySelector(".messages") // Target parent element
parentElement.innerHTML = cropList // Render all harvested crops onto browser

