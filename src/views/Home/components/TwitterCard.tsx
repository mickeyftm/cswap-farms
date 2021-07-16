import React from 'react'
import { Card, CardBody, Heading, Text } from '@gameswapfinance/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
// eslint-disable-next-line import/no-unresolved
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
// eslint-disable-next-line import/no-unresolved
import useI18n from 'hooks/useI18n'
// eslint-disable-next-line import/no-unresolved
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(10003, 'Newsletter')}
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'Cryptoswap8',
          }}
          options={{
            height: '300',
            chrome: 'noheader, nofooter',
            width: '400',
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
