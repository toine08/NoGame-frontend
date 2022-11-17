import { StyledTabPanel } from './styleds'
import { useState } from 'react'
import { FleetCost, EndShipsCompletion, Points, FleetLevels } from '~/utils/types'
import ShipyardBox from '../ShipyardBox'
import { calculEnoughResources } from '~/utils'
import BattleshipImg from '~/assets/shipyard/battleship.jpg'
import CruiserImg from '~/assets/shipyard/cruiser.jpg'
import ProbeImg from '~/assets/shipyard/espionage_probe.jpg'
import CargoImg from '~/assets/shipyard/light_cargo.jpg'
import FighterImg from '~/assets/shipyard/light_fighter.jpg'
import RecyclerImg from '~/assets/shipyard/recycler.jpg'
import SatelliteImg from '~/assets/shipyard/solar_satellite.jpg'
import { createContext } from 'vm'

interface Props {
  endShipsCompletion?: EndShipsCompletion
  playerResources?: Points
  fleetLevels?: FleetLevels
  FleetCost?: FleetCost
}

export const ShipyardTabPanel = ({ endShipsCompletion, playerResources, fleetLevels, FleetCost, ...rest }: Props) => {
  const [isUpgrading, setIsUpgrading] = useState(false)
  const getEndTime = (shipId: number) => {
    if (endShipsCompletion?.shipId === shipId) {
      if (endShipsCompletion?.timeEnd > 0 && !isUpgrading) {
        setIsUpgrading(true)
      }
      return endShipsCompletion.timeEnd
    }
    return undefined
  }

  return (
    <StyledTabPanel {...rest}>
      <ShipyardBox
        img={CargoImg}
        title="Light Cargo"
        functionCallName="cargoShip"
        level={fleetLevels?.cargo}
        time={getEndTime(31)}
        isUpgrading={isUpgrading}
        costUpdate={FleetCost?.cargo}
        hasEnoughResources={playerResources && FleetCost && calculEnoughResources(FleetCost.cargo, playerResources)}
      />
      <ShipyardBox
        img={ProbeImg}
        title="Espionage Probe"
        functionCallName="espionageProbe"
        level={fleetLevels?.probe}
        time={getEndTime(33)}
        costUpdate={FleetCost?.probe}
        isUpgrading={isUpgrading}
        hasEnoughResources={playerResources && FleetCost && calculEnoughResources(FleetCost.probe, playerResources)}
      />
      <ShipyardBox
        img={SatelliteImg}
        title="Solar Satellite"
        functionCallName="solarSatellite"
        level={fleetLevels?.satellite}
        time={getEndTime(34)}
        costUpdate={FleetCost?.satellite}
        isUpgrading={isUpgrading}
        hasEnoughResources={playerResources && FleetCost && calculEnoughResources(FleetCost.satellite, playerResources)}
      />
      <ShipyardBox
        img={FighterImg}
        title="Light Fighter"
        functionCallName="lightFighter"
        level={fleetLevels?.fighter}
        time={getEndTime(35)}
        costUpdate={FleetCost?.fighter}
        isUpgrading={isUpgrading}
        hasEnoughResources={playerResources && FleetCost && calculEnoughResources(FleetCost.fighter, playerResources)}
      />
      <ShipyardBox
        img={RecyclerImg}
        title="Recycler"
        functionCallName="recyclerShip"
        level={fleetLevels?.recycler}
        time={getEndTime(32)}
        costUpdate={FleetCost?.recycler}
        isUpgrading={isUpgrading}
        hasEnoughResources={playerResources && FleetCost && calculEnoughResources(FleetCost.recycler, playerResources)}
      />
      <ShipyardBox
        img={CruiserImg}
        title="Cruiser"
        functionCallName="cruiser"
        level={fleetLevels?.cruiser}
        time={getEndTime(36)}
        costUpdate={FleetCost?.cruiser}
        isUpgrading={isUpgrading}
        hasEnoughResources={playerResources && FleetCost && calculEnoughResources(FleetCost.cruiser, playerResources)}
      />
      <ShipyardBox
        img={BattleshipImg}
        title="Battle Ship"
        functionCallName="battleShip"
        level={fleetLevels?.battleship}
        time={getEndTime(37)}
        costUpdate={FleetCost?.battleship}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && FleetCost && calculEnoughResources(FleetCost.battleship, playerResources)
        }
      />
    </StyledTabPanel>
  )
}

ShipyardTabPanel.tabsRole = 'TabPanel'
