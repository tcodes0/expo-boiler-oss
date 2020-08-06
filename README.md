# Expo app

> Technical showcase and ts-monorepo boilerplate with yarn workspaces and expo managed react-native app

## Running the app

### Quick setup

use node 10x, 12x, or 14x <br/>
run `yarn` <br/>
run `yarn app:android` or <br/>
run `yarn app:ios`

iOS emulator or android simulator should open automatically

If you have issues see [dev-setup](./packages/docs/dev-setup.md)<br/>
About dark-light mode OS setting see [dark-mode](./packages/docs/dark-mode.md)

## Technical Features overview

| Feature                     | Reasoning                                            |
| --------------------------- | ---------------------------------------------------- |
| Yarn workspaces monorepo    | structure, reusability of previous work              |
| Typescript                  | type-checker, enforced on CI                         |
| Jest                        | unit tests, enforced on CI                           |
| Codecov                     | test coverage, enforced on CI                        |
| Prettier                    | formatting, enforced on commit                       |
| Husky & lint-staged         | commit hook linting                                  |
| Eslint                      | linter, enforced on commit                           |
| Eslint config               | detailed and built from experience                   |
| @expoBoiler/babel package   | isolates babel config for reuse                      |
| @expoBoiler/app package     | isolates react-native & app code                     |
| @expoBoiler/config package  | application configuration, dependency injection      |
| @expoBoiler/docs package    | project documentation                                |
| @expoBoiler/scripts package | shell scripts, including post install                |
| @expoBoiler/utils package   | helpers and types                                    |
| Github workflow             | CI/CD with self cancellation and [skip ci] support   |
| Expo                        | managed workflow                                     |
| Yml config files            | better readability                                   |
| ECMAScript modules          | standard moving forward, enforced by linting         |
| Dark mode auto switch       | good support from react-native, good to have         |
| Style-Components            | leverage css-in-js features, better web interop      |
| Responsiveness              | library provides screen-relative css sizes           |
| Redux                       | latest recommended setup, tried-and-tested solution  |
| React Navigation 5          | latest version react-native navigation solution      |
| Absolute imports            | better to refactor, more maintanable, better modules |
| Data fetching               | SWR library for simplicity and good API              |
| Container/Component pattern | separation of concerns between UI and logic          |
| Componentization            | decouple from design system, re-use                  |
| Design system               | consistent UI with react-native-paper                |
| Unit tests                  | on error-prone or complex pieces of code             |
| Design                      | educated guess                                       |
| Color theme                 | consumed by components, powers dark mode             |
| Navigation transitions      | custom UX                                            |
| Error reporting             | using expo-sentry                                    |

## React features

| Feature             | Reasoning                                    |
| ------------------- | -------------------------------------------- |
| Hooks               | modern React API for logic re-use            |
| Context             | avoid prop-drilling, scalability, simplicity |
| Named components    | names show in debugger                       |
| UseMemo             | memoization of a value                       |
| UseCallback         | memoization of a function                    |
| UseEffect           | run logic inside React component             |
| Eslint-plugin-hooks | avoid bugs with hooks                        |
| Error boundary      | on top level component                       |
