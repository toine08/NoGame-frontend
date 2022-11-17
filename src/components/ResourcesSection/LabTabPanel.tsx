import { StyledTabPanel } from './styleds'
import { useState } from 'react'
import { TechCostUpgrade, EndTechCompletion, Points, TechLevels } from '~/utils/types'
import ResearchBox from '../ResearchBox'
import { calculEnoughResources } from '~/utils'
import ArmourImg from '~/assets/research_lab/armour_tech.jpg'
import AstrophysicsImg from '~/assets/research_lab/astrophysics.jpg'
import CombustionImg from '~/assets/research_lab/combustion_drive.jpg'
import ComputerImg from '~/assets/research_lab/computer_tech.jpg'
import EnergyImg from '~/assets/research_lab/energy_tech.jpg'
import EspionageImg from '~/assets/research_lab/espionage_tech.jpg'
import HyperspaceDriveImg from '~/assets/research_lab/hyperspace_drive.jpg'
import HyperspaceTechImg from '~/assets/research_lab/hyperspace_tech.jpg'
import ImpulseImg from '~/assets/research_lab/impulse_drive.jpg'
import IonImg from '~/assets/research_lab/ion_tech.jpg'
import LaserImg from '~/assets/research_lab/laser_tech.jpg'
import PlasmaImg from '~/assets/research_lab/plasma_tech.jpg'
import ShieldingImg from '~/assets/research_lab/shielding_tech.jpg'
import WeaponsImg from '~/assets/research_lab/weapons_tech.jpg'

interface Props {
  endTechCompletion?: EndTechCompletion
  playerResources?: Points
  techLevels?: TechLevels
  TechCostUpgrade?: TechCostUpgrade
}

export const ResearchTabPanel = ({
  endTechCompletion,
  playerResources,
  techLevels,
  TechCostUpgrade,
  ...rest
}: Props) => {
  const [isUpgrading, setIsUpgrading] = useState(false)
  const getEndTime = (techId: number) => {
    if (endTechCompletion?.techId === techId) {
      if (endTechCompletion?.timeEnd > 0 && !isUpgrading) {
        setIsUpgrading(true)
      }

      return endTechCompletion.timeEnd
    }
    return undefined
  }
  return (
    <StyledTabPanel {...rest}>
      <ResearchBox
        img={ArmourImg}
        title="Armour Tech"
        functionCallName="armourTech"
        level={techLevels?.armour}
        time={getEndTime(11)}
        costUpdate={TechCostUpgrade?.armour}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.armour, playerResources)
        }
      />
      <ResearchBox
        img={AstrophysicsImg}
        title="Astrophysics"
        functionCallName="astrophysics"
        level={techLevels?.astrophysics}
        time={getEndTime(12)}
        costUpdate={TechCostUpgrade?.astrophysics}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.astrophysics, playerResources)
        }
      />
      <ResearchBox
        img={CombustionImg}
        title="Combustion Drive"
        functionCallName="combustionDrive"
        level={techLevels?.combustion}
        time={getEndTime(13)}
        costUpdate={TechCostUpgrade?.combustion}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.combustion, playerResources)
        }
      />
      <ResearchBox
        img={ComputerImg}
        title="Computer Tech"
        functionCallName="computerTech"
        level={techLevels?.computer}
        time={getEndTime(14)}
        costUpdate={TechCostUpgrade?.computer}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.computer, playerResources)
        }
      />
      <ResearchBox
        img={EnergyImg}
        title="Energy Tech"
        functionCallName="energyTech"
        level={techLevels?.energy}
        time={getEndTime(15)}
        costUpdate={TechCostUpgrade?.energy}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.energy, playerResources)
        }
      />
      <ResearchBox
        img={EspionageImg}
        title="Espionage Tech"
        functionCallName="espionageTech"
        level={techLevels?.espionage}
        time={getEndTime(16)}
        costUpdate={TechCostUpgrade?.espionage}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.espionage, playerResources)
        }
      />
      <ResearchBox
        img={HyperspaceDriveImg}
        title="Hyperspace Drive"
        functionCallName="hyperspaceDrive"
        level={techLevels?.hyperspaceDrive}
        time={getEndTime(17)}
        costUpdate={TechCostUpgrade?.hyperspaceDrive}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.hyperspaceDrive, playerResources)
        }
      />
      <ResearchBox
        img={HyperspaceTechImg}
        title="Hyperspace Tech"
        functionCallName="hyperspaceTech"
        level={techLevels?.hyperspaceTech}
        time={getEndTime(18)}
        costUpdate={TechCostUpgrade?.hyperspaceTech}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.hyperspaceTech, playerResources)
        }
      />
      <ResearchBox
        img={ImpulseImg}
        title="Impulse Drive"
        functionCallName="impulseDrive"
        level={techLevels?.impulse}
        time={getEndTime(19)}
        costUpdate={TechCostUpgrade?.impulse}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.impulse, playerResources)
        }
      />
      <ResearchBox
        img={IonImg}
        title="Ion Tech"
        functionCallName="ionTech"
        level={techLevels?.ion}
        time={getEndTime(20)}
        costUpdate={TechCostUpgrade?.ion}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.ion, playerResources)
        }
      />
      <ResearchBox
        img={LaserImg}
        title="Laser Tech"
        functionCallName="laserTech"
        level={techLevels?.laser}
        time={getEndTime(21)}
        costUpdate={TechCostUpgrade?.laser}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.laser, playerResources)
        }
      />
      <ResearchBox
        img={PlasmaImg}
        title="Plasma Tech"
        functionCallName="plasmaTech"
        level={techLevels?.plasma}
        time={getEndTime(22)}
        costUpdate={TechCostUpgrade?.plasma}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.plasma, playerResources)
        }
      />
      <ResearchBox
        img={ShieldingImg}
        title="Shielding Tech"
        functionCallName="shieldingTech"
        level={techLevels?.shielding}
        time={getEndTime(23)}
        costUpdate={TechCostUpgrade?.shielding}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.shielding, playerResources)
        }
      />
      <ResearchBox
        img={WeaponsImg}
        title="Weapons Tech"
        functionCallName="weaponsTech"
        level={techLevels?.weapons}
        time={getEndTime(24)}
        costUpdate={TechCostUpgrade?.weapons}
        isUpgrading={isUpgrading}
        hasEnoughResources={
          playerResources && TechCostUpgrade && calculEnoughResources(TechCostUpgrade.weapons, playerResources)
        }
      />
    </StyledTabPanel>
  )
}

ResearchTabPanel.tabsRole = 'TabPanel'
