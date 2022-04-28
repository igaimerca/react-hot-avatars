<h1>&lt;Avatar/&gt;</h1>

<img alt="react-hot-avatar - Try it out" src="https://github.com/igaimerca/react-hot-avatar/raw/main/assets/banner.png"/>

<div align="center">
    <img src="https://img.shields.io/npm/dm/react-hot-avatar.svg" alt="npm downloads" />
    <img src="https://img.shields.io/npm/v/react-hot-avatar.svg" alt="NPM Version" />
</a>
</div>
<br />
<div align="center"><h2>The Best React Avatars in Town.</h2></div>
<h5 align="center"> Lightweight, customizable and beautiful by default.</h4>
<br />
<div align="center">
<a href="https://react-hot-avatar.vercel.app">Website</a> 
<span> · </span>
<a href="https://www.npmjs.com/package/react-hot-avatar">npm</a> 
</div>

<div align="center">
  <sub>Cooked by <a href="https://twitter.com/aimeigirimpuhwe">Aime</a> and  <a href="https://twitter.com/gasaroLeila/">Leila</a> 👨‍🍳</sub>
</div>

<br />

## Install

### With [NPM](https://www.npmjs.com/):

```js
npm install react-hot-avatar
```

### With [Yarn](https://yarnpkg.com/):

```sh
yarn add react-hot-avatar
```

## Getting Started

1. Import the <code>Avatar</code> component from <code>react-hot-avatar</code>:

   ```js
   import Avatar from 'react-hot-avatar';
   ```

2. Start using it!

   Example

    ```jsx
    <Avatar name="john doe" size="300" rounded />
    ```

    ```jsx
    <Avatar name="_Leila" size="200" />
    ```

A React Component using `react-hot-avatar`

```jsx
import Avatar from 'react-hot-avatar';

const App = () => {
  return (
    <>
     <Avatar name="aimed" size="300" />
    <>
  );
};
```

## Supported props

1. name
2. size
3. rounded

##### You can pass anything to generate a unique avatar for

Examples:

```sh
 john doe, john@gmail.com, 😂Joy, etc
```

## Other Options

### Avatar

| Attribute | Options   | Default     | Description                                                                   |
| --------- | --------- | ----------- | ----------------------------------------------------------------------------- |
| `name`    | _string_  | `"default"` | Will be used to generate avatar based on the initials of the person           |
| `size`    | _string_  | `"80"`      | Use values like `"200"`, `"300"`, etc for adjusting the size of the avatar.   |
| `rounded` | _boolean_ | `false`     | Can be `true` or `false` to make the avatar be rounded or not Default `false` |

## Contributing

Coming Soon!

<!-- 1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D -->

## Maintainers

- [@igaimerca](https://github.com/igaimerca)
- [@gasaroleila](https://github.com/gasaroleila)

## License

[MIT License](http://opensource.org/licenses/MIT)
