# MY SUPER TYPE SCRIPT SET UP

This is a repository detailing how I set up my type script for quick use.


## INSTALL TYPE SCRIPT GLOBALLY
Sudo npm install -g typescript



## CHECK VERSION OF PACKAGE INSTALLED

tsc --version

## CREATE tsconfig.json FILE

tsc --init
Uncomment outDir, rootDir,  moduleResolution

Create src and build folder for outDir and and outDirDir respectively and reference their locations
in tsconfig.




## INSTALL NECESSARY PACKAGES FOR MY SERVER WITH THE CORRESPONDING TYPE ANNOTATION FILES

npm init && npm i --save ts-node typescript express  @types/express @types/node


## ENTER MY SCRIPT IN THE PACKAGE.JSON FILE

  "scripts": {
    "build": "tsc -p .",
    "start": "node ./build/index.js",
    "dev": "nodemon ./src/index.ts"
  },


### HAPPY HACKING NERDS!