# An ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs)

ESLint configuration file containign rules for React and Prettier.

## Install

This package depends on modules defined in peer dependencies section of `package.json`.


Use this command to list them: `npm info "eslint-config-jelly" peerDependencies`.


If you're using **npm 5+** type: `npx install-peerdeps --dev eslint-config-jelly`.

## Usage

After completing [Installation](#install) section you can use this config by specifying `jelly` in the [extends](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your ESLint configuration.

```
{
  "extends": "jelly",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Prettier in VSCode

In case you'd be interested in Prettier integration in VSCode just add this line in `settings.json`:

`"prettier.eslintIntegration": true`

## License

[MIT](LICENSE) © Hubert Siwkin
