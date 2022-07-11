### Link

`https://www.npmjs.com/package/json-server`

### install

- with npm

  `npm install json-server`

- with yarn

  `yarn add json-server`

### Usage

* 01- Create a file named `db.json` in project root(next to package.json) with this content:

        {
            "superheroes": [
                {
                    "id": 1,
                    "name": "Batman",
                    "alterEgo": "Bruce Wayne"
                },
                {
                    "id": 2,
                    "name": "Superman",
                    "alterEgo": "Clark Kent"
                },
                {
                    "id": 3,
                    "name": "Wonder Woman",
                    "alterEgo": "Princess Diana"
                }
            ]
        }

* 02- Add this line to "scripts" section in `package.json` :

        "serve-json": "json-server --watch db.json --port 4000"

* 03 -Our backend will be available on url: `http://localhost:4000/superheroes` After running this command :
    * yarn serve-json

    