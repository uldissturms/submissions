# EE - Grocery List

Problem description: https://equalexperts.github.io/ee-tech-interviews-uk/grocery-list-problem.html

Version: `04fa1404c2b3b7be0e5909d4ba93d1332bc76e98`

Time take: more than half a day - wanted to play around with yarn 2 - a lot of issues to investigate and solve / deprioritise

## Using

- `yarn bootstrap` - install web package dependencies (hack for now as it creates it's own yarn space)
- `yarn test` - runs all unit tests
- `yarn start` - starts api and web
- `yarn start:api` - starts api
- `yarn start:web` - starts web
- `yarn test:ui` - runs all UI tests

## Languages / Frameworks

- Yarn 2
- TypeScript
- GraphQL
- Apollo Server
- React
- Jest
- Cypress

## UX

- some styles from - https://github.com/EqualExperts/ee-uxforms-theme
- EqualExperts color pallete and logo copied from - https://www.equalexperts.com/

## Steps that went into creating the app

### yarn

```sh
yarn set version berry
yarn init
```

### graphql (https://www.apollographql.com/docs/apollo-server/getting-started/)

`
yarn add apollo-server graphql # apply temp fix from https://github.com/apollographql/apollo-tooling/issues/1680`

### react

```sh
npx create-react-app web --typescript
```

### storybooks

```sh
npx -p @storybook/cli sb init # does not work with yarn 2 out of the box just yet - https://github.com/storybookjs/storybook/issues/9527 and https://github.com/storybookjs/storybook/issues/10078
```

## Tools

### vs code

```sh
yarn pnpify --sdk # and follow instructions from https://yarnpkg.com/advanced/editor-sdks to set TypeScript to workspace version
```

`go to definition` will not work out of box until [issue](https://github.com/microsoft/vscode/issues/75559) is resolved. https://yarnpkg.com/advanced/editor-sdks#caveat offers a workaround.

### schema generation

- https://github.com/dotansimha/graphql-code-generator - dependencies misconfigured, not compatible with PnP without hacks
- https://github.com/apollographql/apollo-tooling - broken
