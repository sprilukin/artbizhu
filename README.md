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

## Custom profile
file `.profile.json` if exists may contains active profile options
it has the following syntax:
```
{
  'name': <'development'|'production'>
  'watch': <true|false>
  ... other possible options
}
```
- name - is the name of current active profile. There are two available profile names: `production` and `development`
    - it also could be set through `NODE_ENV` environement variable, for example: `NODE_ENV=production nodemon`
- watch - watch option for webpack

## License
MIT