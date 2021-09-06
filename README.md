# @programic/eslint-config-vue

[![npm version](https://badge.fury.io/js/%40programic%2Feslint-config-vue.svg)](http://badge.fury.io/js/@programic/eslint-config-vue)

This package provides Programic's EcmaScript + Vue 2 .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our EcmaScript and Vue 2 rules.

1. Install `@programic/eslint-config-vue` as a dev dependency in your project with npm or yarn:

  ```sh
  npm install @programic/eslint-config-vue --save-dev
  ```
  ```sh
  yarn add @programic/eslint-config-vue --dev
  ```

2. Install the correct versions of each peer dependency, which are listed by the command:

  ```sh
  npm info "@programic/eslint-config-vue@latest" peerDependencies
  ```

<details>
  <summary>Want to see shortcuts on how to do this? Click here!</summary>

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev @programic/eslint-config-vue
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "@programic/eslint-config-vue@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.


  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=@programic/eslint-config-vue;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev @programic/eslint-config-vue eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev @programic/eslint-config-vue
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev @programic/eslint-config-vue eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```
</details>

3. Add `"@programic/eslint-config-vue"` to `extends` in your .eslintrc.

4. Add a lint script to your package.json: `eslint . --ext .js,.jsx,.vue` so you can run `npm run lint` or `yarn lint`. The `.` can be replaced with the path to your files. Replace the lint script if it already exists.
