# eslint-config-takitotech

## Updating (internal)
After updating package, increment version and run `pnpm publish`.
## Installation
pnpm i -D eslint-config-takitotech

Then use it with one of the following configs by updating the respective eslintrc.js / package.json etc
## Using various configs
Ref: https://eslint.org/docs/latest/developer-guide/shareable-configs
### package-node
Use when create a custom node js package

```
{
	"extends": "eslint-config-package-node"
}
```
or

```
{
	"extends": "package-node"
}
```
