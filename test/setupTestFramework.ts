/* eslint-disable import/no-default-export, @typescript-eslint/no-var-requires */

// import '@testing-library/jest-native/extend-expect';

// global.fetch = require('jest-fetch-mock');
// global.WebSocket = require('ws');

import 'react-native-gesture-handler/jestSetup'
import fetchMock from 'jest-fetch-mock'

// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock')

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {}

//   return Reanimated
// })

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

// @ts-ignore mocking
global.fetch = fetchMock
