<h1>&lt;Avatar/&gt;</h1>

<!-- <img alt="react-hot-avatars - Try it out" src="https://github.com/igaimerca/react-hot-avatars/raw/main/assets/banner.png"/> -->
<img alt="react-hot-avatars - Try it out" src="https://i.imgur.com/8BTaD0B.png"/>

<div align="center">
    <img src="https://img.shields.io/npm/dm/react-hot-avatars.svg" alt="npm downloads" />
    <img src="https://img.shields.io/npm/v/react-hot-avatars.svg" alt="NPM Version" />
</a>
</div>
<br />
<div align="center"><h2>The Best React Avatars in Town.</h2></div>
<h5 align="center"> Lightweight, customizable and beautiful by default.</h4>
<br />
<div align="center">
<a href="https://react-hot-avatars.vercel.app">Website</a> 
<span> · </span>
<a href="https://www.npmjs.com/package/react-hot-avatars">npm</a> 
</div>

<div align="center">
  <small>Cooked by <a href="https://twitter.com/aimeigirimpuhwe">Aime</a> and  <a href="https://twitter.com/gasaroLeila/">Leila</a> 👨‍🍳</small>
</div>

<br />

## Install

### With [NPM](https://www.npmjs.com/):

```js
npm install react-hot-avatars
```

### With [Yarn](https://yarnpkg.com/):

```sh
yarn add react-hot-avatars
```

## Getting Started

1. Import the <code>Avatar</code> component from <code>react-hot-avatars</code>:

   ```js
   import Avatar from 'react-hot-avatars';
   ```

2. Start using it!

   Example

   ```jsx
   <Avatar name="john doe" size="300" rounded />
   ```

   ```jsx
   <Avatar name="_Leila" size="200" />
   ```

A React Component using `react-hot-avatars`

```jsx
import Avatar from 'react-hot-avatars';

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

# Request a feature

If you feel like you are missing a cool feature in our package,
here are few steps to follow for you to request an new feature

- Create an issue [here](https://github.com/igaimerca/react-hot-avatars/issues/new)
- Add title of of the issue, eg: `requesting an active badge feature`
- In your description try to add clear explanation about your feature with an image attached if possible.

## Contributing

Hello there :wave:, We're very happy you want to contribute to this project. But be sure to follow the Contribution guide && code of conduct before submitting your contribution:blush: .

### Start contributing

To contribute follow these simple steps :smiley:

1. Fork the repo and create your branch from main.
2. Create a new issue
3. Commit changes to your branch..
4. Create pull request :tada:

#### Make sure to make a good branch name

Your branch should be name like `your_name/issue_fix`. <br />
For example: `gasaroleila/avatar-style`

#### Issues

- If you spot a problem, search if an issue already exists in the [search the issue tracker](https://github.com/igaimerca/react-hot-avatars/issues). If a related issue doesn't exist, you can open a new issue using a relevant issue form.
- If you want to simply solve issues, Find one to solve in the [existing issues](https://github.com/igaimerca/react-hot-avatars/issues)

## Maintainers

- [@igaimerca](https://github.com/igaimerca)
- [@gasaroleila](https://github.com/gasaroleila)

## License

[MIT License](http://opensource.org/licenses/MIT)
