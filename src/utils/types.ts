export interface ResourcesCostUpgrade {
  metal: { metal: any; crystal: any; deuterium: any; energy: any }
  crystal: { metal: any; crystal: any; deuterium: any; energy: any }
  deuterium: { metal: any; crystal: any; deuterium: any; energy: any }
  solarPlant: { metal: any; crystal: any; deuterium: any; energy: any }
}

export interface ResourceLevels {
  metal: number
  crystal: number
  deuterium: number
  solarPlant: number
}

export interface FacilitiesCostUpgrade {
  robots: { metal: any; crystal: any; deuterium: any }
  shipyard: { metal: any; crystal: any; deuterium: any }
  lab: { metal: any; crystal: any; deuterium: any }
  nanite: { metal: any; crystal: any; deuterium: any }
}

export interface FacilitiesLevels {
  robots: number
  shipyard: number
  lab: number
  nanite: number
}

export interface FleetLevels {
  cargo: number
  recycler: number
  probe: number
  satellite: number
  fighter: number
  cruiser: number
  battleship: number
}

export interface FleetCost {
  cargo: { metal: any; crystal: any; deuterium: any }
  recycler: { metal: any; crystal: any; deuterium: any }
  probe: { metal: any; crystal: any; deuterium: any }
  satellite: { metal: any; crystal: any; deuterium: any }
  fighter: { metal: any; crystal: any; deuterium: any }
  cruiser: { metal: any; crystal: any; deuterium: any }
  battleship: { metal: any; crystal: any; deuterium: any }
}

export interface TechCostUpgrade {
  armour: { metal: any; crystal: any; deuterium: any }
  astrophysics: { metal: any; crystal: any; deuterium: any }
  combustion: { metal: any; crystal: any; deuterium: any }
  computer: { metal: any; crystal: any; deuterium: any }
  energy: { metal: any; crystal: any; deuterium: any }
  espionage: { metal: any; crystal: any; deuterium: any }
  hyperspaceDrive: { metal: any; crystal: any; deuterium: any }
  hyperspaceTech: { metal: any; crystal: any; deuterium: any }
  impulse: { metal: any; crystal: any; deuterium: any }
  ion: { metal: any; crystal: any; deuterium: any }
  laser: { metal: any; crystal: any; deuterium: any }
  plasma: { metal: any; crystal: any; deuterium: any }
  shielding: { metal: any; crystal: any; deuterium: any }
  weapons: { metal: any; crystal: any; deuterium: any }
}

export interface TechLevels {
  armour: number
  astrophysics: number
  combustion: number
  computer: number
  energy: number
  espionage: number
  hyperspaceDrive: number
  hyperspaceTech: number
  impulse: number
  ion: number
  laser: number
  plasma: number
  shielding: number
  weapons: number
}

export interface Points {
  metal: number
  crystal: number
  deuterium: number
  energy: number
}

export interface EndTimeCompletion {
  resourceId: number
  timeEnd: number
}

export interface EndShipsCompletion {
  shipId: number
  units: number
  timeEnd: number
}

export interface EndTechCompletion {
  techId: number
  timeEnd: number
}
