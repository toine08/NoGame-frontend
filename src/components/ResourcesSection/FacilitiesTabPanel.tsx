import { StyledTabPanel } from './styleds'
import styled from 'styled-components'
import { FacilitiesCostUpgrade, EndTimeCompletion, Points, FacilitiesLevels } from '~/utils/types'
import FacilitiesBox from '../FacilitiesBox'
import RobotImg from '~/assets/facilities/robot_factory.jpg'
import ShipyardImg from '~/assets/facilities/shipyard.jpg'
import ResearchLabImg from '~/assets/facilities/research_lab.jpg'
import NaniteImg from '~/assets/facilities/nanite_factory.jpg'
import { calculEnoughResources } from '~/utils'
import { useState } from 'react'

// const EmptyBox = styled.div`
//   display: flex;
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: #363636;
//   max-width: 200px;
//   height: 150px;
//   border-radius: 5px;
// `

// const EmptyContainer = styled.div`
//   display: flex;
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
// `
interface Props {
  endTimeCompletion?: EndTimeCompletion
  playerResources?: Points
  facilitiesLevels?: FacilitiesLevels
  FacilitiesCostUpgrade?: FacilitiesCostUpgrade
}

export const FacilitiesTabPanel = ({
  endTimeCompletion,
  playerResources,
  facilitiesLevels,
  FacilitiesCostUpgrade,
  ...rest
}: Props) => {
  const [isUpgrading, setIsUpgrading] = useState(false)
  const getEndTime = (resourceId: number) => {
    if (endTimeCompletion?.resourceId === resourceId) {
      if (endTimeCompletion?.timeEnd > 0 && !isUpgrading) {
        setIsUpgrading(true)
      }
      return endTimeCompletion.timeEnd
    }
    return undefined
  }
  return (
    <StyledTabPanel {...rest}>
      <FacilitiesBox
        img={RobotImg}
        title="Robot Factory"
        functionCallName="robot"
        level={facilitiesLevels?.robots}
        time={getEndTime(21)}
        isUpgrading={isUpgrading}
        costUpdate={FacilitiesCostUpgrade?.robots}
        hasEnoughResources={
          playerResources &&
          FacilitiesCostUpgrade &&
          calculEnoughResources(FacilitiesCostUpgrade.robots, playerResources)
        }
      />
      <FacilitiesBox
        img={ShipyardImg}
        title="Shipyard"
        functionCallName="shipyard"
        level={facilitiesLevels?.shipyard}
        time={getEndTime(22)}
        costUpdate={FacilitiesCostUpgrade?.shipyard}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources &&
          FacilitiesCostUpgrade &&
          calculEnoughResources(FacilitiesCostUpgrade.shipyard, playerResources)
        }
      />
      <FacilitiesBox
        img={ResearchLabImg}
        title="Research Lab"
        functionCallName="research"
        level={facilitiesLevels?.lab}
        time={getEndTime(23)}
        costUpdate={FacilitiesCostUpgrade?.lab}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && FacilitiesCostUpgrade && calculEnoughResources(FacilitiesCostUpgrade.lab, playerResources)
        }
      />
      <FacilitiesBox
        img={NaniteImg}
        title="Nanite Factory"
        functionCallName="nanite"
        level={facilitiesLevels?.nanite}
        time={getEndTime(24)}
        costUpdate={FacilitiesCostUpgrade?.nanite}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources &&
          FacilitiesCostUpgrade &&
          calculEnoughResources(FacilitiesCostUpgrade.nanite, playerResources)
        }
      />
    </StyledTabPanel>
  )
}

FacilitiesTabPanel.tabsRole = 'TabPanel'
