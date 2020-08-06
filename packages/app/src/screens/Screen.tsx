import { Background } from '@expoBoiler/app/src/components/Background'
import { BaseLayout } from '@expoBoiler/app/src/components/BaseLayout'
import { Button } from '@expoBoiler/app/src/components/Button'
import { ResultListItem } from '@expoBoiler/app/src/components/ResultListItem'
import { Space } from '@expoBoiler/app/src/components/Space'
import { Text } from '@expoBoiler/app/src/components/Text'
import { useConfig } from '@expoBoiler/app/src/hooks/useConfig'
import { useTopLevelDataContext } from '@expoBoiler/app/src/hooks/useQuestionsNetworkContext'
import { select, action } from '@expoBoiler/app/src/store/slices/questions'
import { State } from '@expoBoiler/app/src/store/store'
import * as ui from '@expoBoiler/app/src/ui'
import { RootNavigatorKeys, TypedFunction, Fruits } from '@expoBoiler/utils'
import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

const Wrapper = styled(BaseLayout)`
  justify-content: flex-end;
  align-items: flex-start;
`
const ButtonWrapper = styled.View`
  width: 100%;
  align-items: center;
`
const BoldText = styled(Text)`
  font-size: ${ui.wpx(6)};
  font-family: ${ui.fontFamily['600']};
  color: ${p => p.theme.notImportantBackground2};
`
const SmallText = styled(Text)`
  font-family: ${ui.fontFamily['300']};
  font-size: ${ui.wpx(4.5)};
  color: ${p => p.theme.notImportantBackground1};
`

interface PublicProps {
  category: string
  question: string
  current: number
  onAnswer: TypedFunction<[boolean], void>
}

interface Props extends PublicProps, StackScreenProps<RootNavigatorKeys, 'NotFound'> {}

const ScreenScreen: React.FC<Props> = ({ navigation }) => {
  const {
    /* access config here */
  } = useConfig()
  const dispatch = useDispatch()
  const data = useTopLevelDataContext()
  const fruits = useSelector<State, State['list']['fruits']>(select.fruits)

  const handleAdd = React.useCallback(() => {
    dispatch(action.addFruit(Fruits.avocado))
  }, [dispatch])
  const handleRemove = React.useCallback(() => {
    dispatch(action.removeFruit(Fruits.avocado))
  }, [dispatch])

  return (
    <Wrapper>
      <Space height={5} />
      <Background />
      <BoldText>Your screen</BoldText>
      <SmallText>here&#39;s a list of fruits</SmallText>
      <Space height={5} />
      <FlatList
        contentContainerStyle={{ alignItems: 'flex-start', paddingRight: 10 }}
        data={fruits}
        renderItem={ResultListItem}
        keyExtractor={(fruit, index) => `${fruit}-${index}`}
      />
      <Space height={2} />
      <ButtonWrapper>
        <Button style={{ width: ui.w(62) }} title="Add 'Avocado'" onPress={handleAdd} />
      </ButtonWrapper>
      <Space height={2} />
      <ButtonWrapper>
        <Button style={{ width: ui.w(62) }} title="remove 'Avocado'" onPress={handleRemove} />
      </ButtonWrapper>
      <Space height={3} />
    </Wrapper>
  )
}

export const Screen = ScreenScreen as React.FC<PublicProps>
