# Handcrafted
An example of web store for handcrafted goods
## Installation
- install [nodejs](https://nodejs.org/en/) (prefer [nvm](https://github.com/creationix/nvm) over other installation options)
- install [mongodb](https://www.mongodb.com/)
- install webpack globally: `npm i webpack -g`
- clone or fork the repository: `git clone <repo-uri>`
- run these commands from the folder with project
    - `npm install`
    - `webpack`
- start mongodb: `mongod`
- start application: `npm start`
- application should be available on http://localhost:3000

 
## Usage
for hot app deployment it's recommended to use `nodemon`:
- `npm i nodemon -g`
- `nodemon`

## Profiles
There are two profiles supported: `development` and `production`.
Each profile has different values for the following properties:
- `watch`
- `port`
- `cache`
- `uglify`
- `localsError`
- `compress`
- `devtool`

`NODE_ENV` environement variable should be used to set desired profile, 
for example: `NODE_ENV=production nodemon`

## Custom profile
- file `.profile.json` if exists may contain replacement for some profile properties
it should has the following syntax:
```
{
  'watch': <true|false>
  ... etc ...
}
```

- each property could be overridden by env variable. see `./profiles/environement.js` for env var names
- profile property lookup is the following:
`env -> <[profile].json | (.profile.json ->  development.json)>`
where \[profile\] resolved from NODE_ENV

## License
MIT