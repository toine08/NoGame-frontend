import { useStarknet } from '@starknet-react/core'
import { useCallback } from 'react'
import { AddTransactionResponse, constants } from 'starknet'
import { useS2MTransactionManager } from '~/providers/transaction'
import { useGameContract } from '../game'

export type ShipType =
  | 'cargoShip'
  | 'recyclerShip'
  | 'espionageProbe'
  | 'solarSatellite'
  | 'lightFighter'
  | 'cruiser'
  | 'battleShip'

export default function useBuildShipStart(shipName: ShipType, quantity: number) {
  const { account } = useStarknet()
  const { contract } = useGameContract()

  const { addTransaction } = useS2MTransactionManager()
  return useCallback(async () => {
    if (!contract || !account) {
      throw new Error('Missing Dependencies')
    }

    return (
      contract
        // TODO: implement form box to get user amuont of ships to build
        .invoke(`${shipName}BuildStart`, [quantity])
        .then((tx: AddTransactionResponse) => {
          console.log('Transaction hash: ', tx.transaction_hash)

          addTransaction({
            status: tx.code,
            transactionHash: tx.transaction_hash,
            address: account,
            summary: `Build ${shipName}`,
          })

          return tx.transaction_hash
        })
        .catch((e) => {
          console.error(e)
        })
    )
  }, [account, addTransaction, contract, quantity])
}
