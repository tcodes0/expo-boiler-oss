/* eslint-disable import/no-default-export */

export default () => {
  console.log(`\n# TEST SETUP #`)

  // normalize timezone to UTC
  process.env.TZ = 'UTC'
  // add other envs here
}
