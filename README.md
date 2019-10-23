## A simple App which will render the list of components added under a specific folder in your react app and display its contents on click of each item

A simple React App to demonstrate how to read your folders and their files from a front end library like React with using a backend Node layer.
Here we have used preval.macro which creates a wrapper and server layer to create your own node module and read folders and files through it.

## How it Works

![Preval](preval.jpg)

### Getting Started
To get you started you can simply clone the repository:

```
git clone https://github.com/Rajdeepc/read-file-from-react-withour-node.git
```

### Prerequisites
You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

A number of node.js tools is necessary to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from  [http://nodejs.org/](http://nodejs.org/). The tools/modules used in this project are listed in package.json and include express, mongodb and mongoose.

### Installing

and install the dependencies
```
npm install
```

#### Lint & Build

```sh
npm run lint
npm run build
```

### Run in Local

To Run Locally Steps to follow:

```
npm start
```

### Built With

* [React js](https://github.com/facebook/react/)
* [preval.macro](https://github.com/kentcdodds/preval.macro)


## Contributing

### Create a branch

1. `git checkout master` from any folder in your local `https://github.com/Rajdeepc/read-file-from-react-withour-node.git` repository
1. `git pull origin master` to ensure you have the latest main code
1. `git checkout -b the-name-of-my-branch` (replacing `the-name-of-my-branch` with a suitable name) to create a branch

### Make the change

1. Follow the "Running locally" instructions
1. Save the files and check in the browser
  1. Changes to React components in `src` will hot-reload
  1. Changes to markdown files in `content` will hot-reload
  1. If working with plugins, you may need to remove the `.cache` directory and restart the server


### Push it

1. `git add -A && git commit -m "My message"` (replacing `My message` with a commit message, such as `Fixed header logo`) to stage and commit your changes
1. `git push my-fork-name the-name-of-my-branch`
1. Go to the [CodingAssetsCollection](https://github.com/Rajdeepc/read-file-from-react-withour-node.git) and you should see recently pushed branches.
1. Follow GitHub's instructions.
1. If possible, include screenshots of visual changes. A Netlify build will also be automatically created once you make your PR so other people can see your change.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
