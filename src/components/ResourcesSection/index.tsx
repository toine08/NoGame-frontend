import { FC, useEffect, useMemo } from 'react'
import { RowCentered } from '~/components/Row'
import { ResourcesTabList, ResourcesTabs, ResourceTab } from './styleds'
import { ResourcesIcon } from '~/components/Icons/Resources'
import { FacilitiesIcon } from '~/components/Icons/Facilities'
import { ResearchIcon } from '~/components/Icons/Research'
import { ShipyardIcon } from '~/components/Icons/Shipyard'
import { ResourceTabPanel } from './ResourceTabPanel'
import { FacilitiesTabPanel } from './FacilitiesTabPanel'
import { useStarknet, useStarknetCall } from '@starknet-react/core'
import { useGameContract } from '~/hooks/game'
import { differenceInMinutes, fromUnixTime } from 'date-fns'
import { dataToNumber, E18ToNumber, numberWithCommas } from '~/utils'
import { ResearchTabPanel } from '~/components/ResourcesSection/LabTabPanel'
import { ShipyardTabPanel } from '~/components/ResourcesSection/ShipyardTabPanel'
import { EmptyTabPanel } from './EmptyTabPanel'

export const ResourcesSection: FC = () => {
  const { account } = useStarknet()
  const { contract: gameContract } = useGameContract()

  const { data: resourcesAvailable } = useStarknetCall({
    contract: gameContract,
    method: 'getResourcesAvailable',
    args: [account],
  })

  const { data: timeCompletion } = useStarknetCall({
    contract: gameContract,
    method: 'getBuildingQueStatus',
    args: [account],
  })

  const { data: resourcesUpgradesCost } = useStarknetCall({
    contract: gameContract,
    method: 'getResourcesUpgradeCost',
    args: [account],
  })

  const { data: buildingsLevels } = useStarknetCall({
    contract: gameContract,
    method: 'getResourcesBuildingsLevels',
    args: [account],
  })

  const { data: facilitiesUpgradesCost } = useStarknetCall({
    contract: gameContract,
    method: 'getFacilitiesUpgradeCost',
    args: [account],
  })

  const { data: structuresLevels } = useStarknetCall({
    contract: gameContract,
    method: 'getFacilitiesLevels',
    args: [account],
  })

  const { data: shipsLevels } = useStarknetCall({
    contract: gameContract,
    method: 'getFleetLevels',
    args: [account],
  })

  const { data: shipsCost } = useStarknetCall({
    contract: gameContract,
    method: 'getShipsCost',
    args: [],
  })

  const { data: shipsCompletion } = useStarknetCall({
    contract: gameContract,
    method: 'getShipyardQueStatus',
    args: [account],
  })

  const { data: techUpgradesCost } = useStarknetCall({
    contract: gameContract,
    method: 'getTechUpgradeCost',
    args: [account],
  })

  const { data: technologiesLevels } = useStarknetCall({
    contract: gameContract,
    method: 'getTechLevels',
    args: [account],
  })

  const { data: techCompletion } = useStarknetCall({
    contract: gameContract,
    method: 'getResearchQueStatus',
    args: [account],
  })

  const endTimeCompletion = useMemo(() => {
    if (timeCompletion) {
      const end = fromUnixTime(dataToNumber(timeCompletion['status'].lock_end))
      const timeDifferenceInMinutes = differenceInMinutes(end, new Date())

      return {
        resourceId: dataToNumber(timeCompletion['status'].building_id),
        timeEnd: timeDifferenceInMinutes > 0 ? timeDifferenceInMinutes : 0,
      }
    }
  }, [timeCompletion])

  const playerResources = useMemo(() => {
    if (resourcesAvailable) {
      return {
        metal: E18ToNumber(resourcesAvailable['metal']),
        crystal: E18ToNumber(resourcesAvailable['crystal']),
        deuterium: E18ToNumber(resourcesAvailable['deuterium']),
        energy: E18ToNumber(resourcesAvailable['energy']),
      }
    }
  }, [resourcesAvailable])

  const resourceLevels = useMemo(() => {
    if (buildingsLevels) {
      return {
        metal: dataToNumber(buildingsLevels['metal_mine']),
        crystal: dataToNumber(buildingsLevels['crystal_mine']),
        deuterium: dataToNumber(buildingsLevels['deuterium_mine']),
        solarPlant: dataToNumber(buildingsLevels['solar_plant']),
      }
    }
  }, [buildingsLevels])

  const resourceCostUpgrade = useMemo(() => {
    if (resourcesUpgradesCost) {
      return {
        metal: {
          metal: dataToNumber(resourcesUpgradesCost['metal_mine'].metal),
          crystal: dataToNumber(resourcesUpgradesCost['metal_mine'].crystal),
          deuterium: dataToNumber(resourcesUpgradesCost['metal_mine'].deuterium),
          energy: dataToNumber(resourcesUpgradesCost['metal_mine'].energy_cost),
        },
        crystal: {
          metal: dataToNumber(resourcesUpgradesCost['crystal_mine'].metal),
          crystal: dataToNumber(resourcesUpgradesCost['crystal_mine'].crystal),
          deuterium: dataToNumber(resourcesUpgradesCost['crystal_mine'].deuterium),
          energy: dataToNumber(resourcesUpgradesCost['crystal_mine'].energy_cost),
        },
        deuterium: {
          metal: dataToNumber(resourcesUpgradesCost['deuterium_mine'].metal),
          crystal: dataToNumber(resourcesUpgradesCost['deuterium_mine'].crystal),
          deuterium: dataToNumber(resourcesUpgradesCost['deuterium_mine'].deuterium),
          energy: dataToNumber(resourcesUpgradesCost['deuterium_mine'].energy_cost),
        },
        solarPlant: {
          metal: dataToNumber(resourcesUpgradesCost['solar_plant'].metal),
          crystal: dataToNumber(resourcesUpgradesCost['solar_plant'].crystal),
          deuterium: dataToNumber(resourcesUpgradesCost['solar_plant'].deuterium),
          energy: dataToNumber(resourcesUpgradesCost['solar_plant'].energy_cost),
        },
      }
    }
  }, [resourcesUpgradesCost])

  const facilitiesLevels = useMemo(() => {
    if (structuresLevels) {
      return {
        robots: dataToNumber(structuresLevels['robot_factory']),
        shipyard: dataToNumber(structuresLevels['shipyard']),
        lab: dataToNumber(structuresLevels['research_lab']),
        nanite: dataToNumber(structuresLevels['nanite_factory']),
      }
    }
  }, [structuresLevels])

  const facilitiesCostUpgrade = useMemo(() => {
    if (facilitiesUpgradesCost) {
      return {
        robots: {
          metal: dataToNumber(facilitiesUpgradesCost['robot_factory'].metal),
          crystal: dataToNumber(facilitiesUpgradesCost['robot_factory'].crystal),
          deuterium: dataToNumber(facilitiesUpgradesCost['robot_factory'].deuterium),
        },
        shipyard: {
          metal: dataToNumber(facilitiesUpgradesCost['shipyard'].metal),
          crystal: dataToNumber(facilitiesUpgradesCost['shipyard'].crystal),
          deuterium: dataToNumber(facilitiesUpgradesCost['shipyard'].deuterium),
        },
        lab: {
          metal: dataToNumber(facilitiesUpgradesCost['research_lab'].metal),
          crystal: dataToNumber(facilitiesUpgradesCost['research_lab'].crystal),
          deuterium: dataToNumber(facilitiesUpgradesCost['research_lab'].deuterium),
        },
        nanite: {
          metal: dataToNumber(facilitiesUpgradesCost['nanite_factory'].metal),
          crystal: dataToNumber(facilitiesUpgradesCost['nanite_factory'].crystal),
          deuterium: dataToNumber(facilitiesUpgradesCost['nanite_factory'].deuterium),
        },
      }
    }
  }, [facilitiesUpgradesCost])

  const endShipsCompletion = useMemo(() => {
    if (shipsCompletion) {
      const end = fromUnixTime(dataToNumber(shipsCompletion['status'].lock_end))
      const timeDifferenceInMinutes = differenceInMinutes(end, new Date())
      return {
        shipId: dataToNumber(shipsCompletion['status'].ship_id),
        units: dataToNumber(shipsCompletion['status'].units),
        timeEnd: timeDifferenceInMinutes > 0 ? timeDifferenceInMinutes : 0,
      }
    }
  }, [shipsCompletion])

  const fleetLevels = useMemo(() => {
    if (shipsLevels) {
      return {
        cargo: dataToNumber(shipsLevels['result'].cargo),
        recycler: dataToNumber(shipsLevels['result'].recycler),
        probe: dataToNumber(shipsLevels['result'].espionage_probe),
        satellite: dataToNumber(shipsLevels['result'].solar_satellite),
        fighter: dataToNumber(shipsLevels['result'].light_fighter),
        cruiser: dataToNumber(shipsLevels['result'].cruiser),
        battleship: dataToNumber(shipsLevels['result'].battle_ship),
      }
    }
  }, [shipsLevels])

  const fleetCost = useMemo(() => {
    if (shipsCost) {
      return {
        cargo: {
          metal: dataToNumber(shipsCost['cargo'].metal),
          crystal: dataToNumber(shipsCost['cargo'].crystal),
          deuterium: dataToNumber(shipsCost['cargo'].deuterium),
        },
        recycler: {
          metal: dataToNumber(shipsCost['recycler'].metal),
          crystal: dataToNumber(shipsCost['recycler'].crystal),
          deuterium: dataToNumber(shipsCost['recycler'].deuterium),
        },
        probe: {
          metal: dataToNumber(shipsCost['espionage_probe'].metal),
          crystal: dataToNumber(shipsCost['espionage_probe'].crystal),
          deuterium: dataToNumber(shipsCost['espionage_probe'].deuterium),
        },
        satellite: {
          metal: dataToNumber(shipsCost['solar_satellite'].metal),
          crystal: dataToNumber(shipsCost['solar_satellite'].crystal),
          deuterium: dataToNumber(shipsCost['solar_satellite'].deuterium),
        },
        fighter: {
          metal: dataToNumber(shipsCost['light_fighter'].metal),
          crystal: dataToNumber(shipsCost['light_fighter'].crystal),
          deuterium: dataToNumber(shipsCost['light_fighter'].deuterium),
        },
        cruiser: {
          metal: dataToNumber(shipsCost['cruiser'].metal),
          crystal: dataToNumber(shipsCost['cruiser'].crystal),
          deuterium: dataToNumber(shipsCost['cruiser'].deuterium),
        },
        battleship: {
          metal: dataToNumber(shipsCost['battleship'].metal),
          crystal: dataToNumber(shipsCost['battleship'].crystal),
          deuterium: dataToNumber(shipsCost['battleship'].deuterium),
        },
      }
    }
  }, [shipsCost])

  const techLevels = useMemo(() => {
    if (technologiesLevels) {
      return {
        armour: dataToNumber(technologiesLevels['result'].armour_tech),
        astrophysics: dataToNumber(technologiesLevels['result'].astrophysics),
        combustion: dataToNumber(technologiesLevels['result'].combustion_drive),
        computer: dataToNumber(technologiesLevels['result'].computer_tech),
        energy: dataToNumber(technologiesLevels['result'].energy_tech),
        espionage: dataToNumber(technologiesLevels['result'].espionage_tech),
        hyperspaceDrive: dataToNumber(technologiesLevels['result'].hyperspace_drive),
        hyperspaceTech: dataToNumber(technologiesLevels['result'].hyperspace_tech),
        impulse: dataToNumber(technologiesLevels['result'].impulse_drive),
        ion: dataToNumber(technologiesLevels['result'].ion_tech),
        laser: dataToNumber(technologiesLevels['result'].laser_tech),
        plasma: dataToNumber(technologiesLevels['result'].plasma_tech),
        shielding: dataToNumber(technologiesLevels['result'].shielding_tech),
        weapons: dataToNumber(technologiesLevels['result'].weapons_tech),
      }
    }
  }, [technologiesLevels])

  const techCostUpgrade = useMemo(() => {
    if (techUpgradesCost) {
      return {
        armour: {
          metal: dataToNumber(techUpgradesCost['armour_tech'].metal),
          crystal: dataToNumber(techUpgradesCost['armour_tech'].crystal),
          deuterium: dataToNumber(techUpgradesCost['armour_tech'].deuterium),
        },
        astrophysics: {
          metal: dataToNumber(techUpgradesCost['astrophysics'].metal),
          crystal: dataToNumber(techUpgradesCost['astrophysics'].crystal),
          deuterium: dataToNumber(techUpgradesCost['astrophysics'].deuterium),
        },
        combustion: {
          metal: dataToNumber(techUpgradesCost['combustion_drive'].metal),
          crystal: dataToNumber(techUpgradesCost['combustion_drive'].crystal),
          deuterium: dataToNumber(techUpgradesCost['combustion_drive'].deuterium),
        },
        computer: {
          metal: dataToNumber(techUpgradesCost['computer_tech'].metal),
          crystal: dataToNumber(techUpgradesCost['computer_tech'].crystal),
          deuterium: dataToNumber(techUpgradesCost['computer_tech'].deuterium),
        },
        energy: {
          metal: dataToNumber(techUpgradesCost['energy_tech'].metal),
          crystal: dataToNumber(techUpgradesCost['energy_tech'].crystal),
          deuterium: dataToNumber(techUpgradesCost['energy_tech'].deuterium),
        },
        espionage: {
          metal: dataToNumber(techUpgradesCost['espionage_tech'].metal),
          crystal: dataToNumber(techUpgradesCost['espionage_tech'].crystal),
          deuterium: dataToNumber(techUpgradesCost['espionage_tech'].deuterium),
        },
        hyperspaceDrive: {
          metal: dataToNumber(techUpgradesCost['hyperspace_drive'].metal),
          crystal: dataToNumber(techUpgradesCost['hyperspace_drive'].crystal),
          deuterium: dataToNumber(techUpgradesCost['hyperspace_drive'].deuterium),
        },
        hyperspaceTech: {
          metal: dataToNumber(techUpgradesCost['hyperspace_tech'].metal),
          crystal: dataToNumber(techUpgradesCost['hyperspace_tech'].crystal),
          deuterium: dataToNumber(techUpgradesCost['hyperspace_tech'].deuterium),
        },
        impulse: {
          metal: dataToNumber(techUpgradesCost['impulse_drive'].metal),
          crystal: dataToNumber(techUpgradesCost['impulse_drive'].crystal),
          deuterium: dataToNumber(techUpgradesCost['impulse_drive'].deuterium),
        },
        ion: {
          metal: dataToNumber(techUpgradesCost['ion_tech'].metal),
          crystal: dataToNumber(techUpgradesCost['ion_tech'].crystal),
          deuterium: dataToNumber(techUpgradesCost['ion_tech'].deuterium),
        },
        laser: {
          metal: dataToNumber(techUpgradesCost['laser_tech'].metal),
          crystal: dataToNumber(techUpgradesCost['laser_tech'].crystal),
          deuterium: dataToNumber(techUpgradesCost['laser_tech'].deuterium),
        },
        plasma: {
          metal: dataToNumber(techUpgradesCost['plasma_tech'].metal),
          crystal: dataToNumber(techUpgradesCost['plasma_tech'].crystal),
          deuterium: dataToNumber(techUpgradesCost['plasma_tech'].deuterium),
        },
        shielding: {
          metal: dataToNumber(techUpgradesCost['shielding_tech'].metal),
          crystal: dataToNumber(techUpgradesCost['shielding_tech'].crystal),
          deuterium: dataToNumber(techUpgradesCost['shielding_tech'].deuterium),
        },
        weapons: {
          metal: dataToNumber(techUpgradesCost['weapons_tech'].metal),
          crystal: dataToNumber(techUpgradesCost['weapons_tech'].crystal),
          deuterium: dataToNumber(techUpgradesCost['weapons_tech'].deuterium),
        },
      }
    }
  }, [techUpgradesCost])

  const endTechCompletion = useMemo(() => {
    if (techCompletion) {
      const end = fromUnixTime(dataToNumber(techCompletion['status'].lock_end))
      const timeDifferenceInMinutes = differenceInMinutes(end, new Date())

      return {
        techId: dataToNumber(techCompletion['status'].tech_id),
        timeEnd: timeDifferenceInMinutes > 0 ? timeDifferenceInMinutes : 0,
      }
    }
  }, [techCompletion])

  return (
    <ResourcesTabs>
      <ResourcesTabList>
        <ResourceTab>
          <RowCentered gap={'8px'}>
            <ResourcesIcon /> Resources
          </RowCentered>
        </ResourceTab>
        <ResourceTab>
          <RowCentered gap={'8px'}>
            <FacilitiesIcon /> Facilites
          </RowCentered>
        </ResourceTab>
        <ResourceTab>
          <RowCentered gap={'8px'}>
            <ResearchIcon /> Shipyard
          </RowCentered>
        </ResourceTab>
        <ResourceTab>
          <RowCentered gap={'8px'}>
            <ShipyardIcon /> Research
          </RowCentered>
        </ResourceTab>
        <ResourceTab>
          <RowCentered gap={'8px'}>
            <ResourcesIcon />
            Fleet Movement
          </RowCentered>
        </ResourceTab>
      </ResourcesTabList>

      <ResourceTabPanel
        endTimeCompletion={endTimeCompletion}
        playerResources={playerResources}
        resourceLevels={resourceLevels}
        ResourcesCostUpgrade={resourceCostUpgrade}
      />
      <FacilitiesTabPanel
        endTimeCompletion={endTimeCompletion}
        playerResources={playerResources}
        facilitiesLevels={facilitiesLevels}
        FacilitiesCostUpgrade={facilitiesCostUpgrade}
      />
      <ShipyardTabPanel
        endShipsCompletion={endShipsCompletion}
        playerResources={playerResources}
        fleetLevels={fleetLevels}
        FleetCost={fleetCost}
      />
      <ResearchTabPanel
        endTechCompletion={endTechCompletion}
        playerResources={playerResources}
        techLevels={techLevels}
        TechCostUpgrade={techCostUpgrade}
      />
      <EmptyTabPanel />
    </ResourcesTabs>
  )
}
