module.exports = {
    //Config jest to use jsdom test enviroment. By default it uses node env.
    testEnvironment: 'jsdom',
    //Configuration for files or diffrent types should be trasformed before included in test
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    // Jest configuration for handling static files iamges, css etc
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/__mocks__/fileMock.js'
    }
}
