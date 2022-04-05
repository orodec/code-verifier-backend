
### Dependencies

    - express 
        Allows you to create a backend application, using javaScript or TypeScript.
    - dotenv
        to have an environment file with environment variables such as port
        works with an .env file that is best not uploaded to github.
    - nodemon
        Automatic restart server when it changes or have internal errors.

### Dev Dependencies

    - concurrently --> is a package which can run multiple npm scripts simultaneously.
    - webpack --> is a build solution,  It takes modules, whether that’s a custom file that we created 
      or something that was installed through NPM, and converts these modules to static assets.
    - eslint --> rules for clean code
    - jest --> for test code
    - server --> for serve test coverage on web

### Scripts de npm

    - start: npx nodemon index.js
            server start automatic thanks npx nodemon (npx make reference to internal dependencie of the proyect not general intalling)
    - "build": "npx tsc" --> start tsc tranpile
    - "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js" --> start tsc build when poyect    change and restart the server

### Environment variables

    - PORT = 8000
    -

### Notes
    - npm -D --> this parameter install dependecie how dev dependencie
    - npm i -D typescript @types/espress @types/node  --> install typescript for our proyect
    - npx tsc --init --> make initial file config for typeScript tsconfig.json
