module.exports = {
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
      // this line is optional and the tilde shortcut
      // will not be used in this tutorial
      '^~/(.*)$': '<rootDir>/$1'
    },
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js'],
  
    collectCoverageFrom: [
      'plugins/**/*.ts',
    ]
}

/* More information about how to configure jest for testing nuxt (specially
** for adding vue test) could be found here => 
** https://github.com/Al-un/learn-nuxt-ts/blob/master/docs/06.test.md */
