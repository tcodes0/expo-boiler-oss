import { FruitCard } from '@expoBoiler/app/src/components/FruitCard'
import { Text } from '@expoBoiler/app/src/components/Text'
import { colors } from '@expoBoiler/app/src/ui'
import * as ui from '@expoBoiler/app/src/ui'
import { Fruits } from '@expoBoiler/utils'
import * as React from 'react'
import { Appearance } from 'react-native'
import styled from 'styled-components/native'
import { Space } from './Space'

const Fruit = styled(Text)`
  font-size: ${ui.wpx(5)};
  text-align: left;
`
interface PublicProps {
  item: Fruits
}

type Props = PublicProps

const ResultListItemComponent: React.FC<Props> = ({ item }) => {
  const scheme = Appearance.getColorScheme()
  let theme: typeof colors.dark
  if (scheme) {
    theme = colors[scheme]
  } else {
    theme = colors.light
  }

  return (
    <>
      <FruitCard
        style={{
          flex: undefined,
          maxHeight: ui.h(27),
          borderWidth: 2,
          borderColor: theme.correct,
        }}
      >
        <Fruit>{item}</Fruit>
      </FruitCard>
      <Space height={5} />
    </>
  )
}

export const ResultListItem = ResultListItemComponent as React.FC<PublicProps>
