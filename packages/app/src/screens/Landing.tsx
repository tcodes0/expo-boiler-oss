import { Background } from '@expoBoiler/app/src/components/Background'
import { BaseLayout } from '@expoBoiler/app/src/components/BaseLayout'
import { Button } from '@expoBoiler/app/src/components/Button'
import { Space } from '@expoBoiler/app/src/components/Space'
import { Text } from '@expoBoiler/app/src/components/Text'
import { useConfig } from '@expoBoiler/app/src/hooks/useConfig'
import { action } from '@expoBoiler/app/src/store/slices/questions'
import * as ui from '@expoBoiler/app/src/ui'
import { RootNavigatorKeys } from '@expoBoiler/utils'
import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'

const Wrapper = styled(BaseLayout)`
  justify-content: flex-start;
  /* align-items: flex-start; */
`
const H1 = styled(Text)`
  font-size: ${ui.wpx(6)};
  font-family: ${ui.fontFamily['600']};
  color: ${p => p.theme.notImportantBackground2};
  margin-left: ${ui.wpx(5)};
  background-color: ${p => p.theme.background};
`

const Body = styled(Text)`
  font-size: ${ui.wpx(8.2)};
  text-align: left;
  margin-left: ${ui.wpx(5)};
  background-color: ${p => p.theme.background};
`

interface PublicProps {}

interface Props extends PublicProps, StackScreenProps<RootNavigatorKeys, 'NotFound'> {}

const LandingScreen: React.FC<Props> = ({ navigation }) => {
  const {
    /* access config here */
  } = useConfig()
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Background />
      <Space height={5} />
      <H1>This is a managed expo app boilerplate</H1>
      <Space height={15} />
      <Body>See Readme.md for features</Body>
      <Space height={22} />
      <Button
        style={{ position: 'absolute', bottom: ui.h(7) }}
        onPress={() => {
          navigation.push('Screen')
        }}
        title="Next screen"
      />
    </Wrapper>
  )
}

export const Landing = LandingScreen as React.FC<PublicProps>
