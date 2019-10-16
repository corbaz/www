# Sitio HTML5-CSS3-Bootstrap 4-Sass-Js-Jquery-Typescript

### HTML5 Boilerplate - JCC Producciones

- https://corbaz.github.io/www/

* JCC Producciones

* julio.corbaz@gmail.com

* +5492235444899

---

### Configurar Proyecto TypeScript con Node.js

https://nodejs.org/es/

npm install npm -g + npm@6.12.0

npm install node -g + node@12.12.0

---

Configuración de un proyecto Node.js generar package.json
npm init -y

Añadir TypeScript
npm install typescript --save-dev

Añadir node.d.ts
npm install @types/node --save-dev

npm install jquery --save

npm install @types/jquery --save-dev

compilación en vivo + ejecución
npm install ts-node --save-dev
npm install nodemon --save-dev

---

package.json
{
"name": "web",
"version": "1.0.0",
"description": "Sitio Web",
"main": "./assets/js/index.js",
"scripts": {
"start": "npm run build",
"build": "tsc -p .",
"build:live": "nodemon --watch 'ts/\*_/_.ts' --exec ts-node ts/index.ts"
},
"author": "JCC Producciones <julio.corbaz@gmail.com>",
"license": "MIT",
"devDependencies": {
"@types/jquery": "^3.3.31",
"@types/node": "^12.11.1",
"@types/nodemon": "^1.19.0",
"nodemon": "^1.19.4",
"ts-node": "^8.4.1",
"typescript": "^3.6.4"
},
"dependencies": {
"jquery": "^3.4.1"
}
}

tsconfig.json
{
"compileOnSave": true,
"compilerOptions": {
"module": "commonjs",
"target": "es6",
"removeComments": false,
"rootDir": "./ts",
"outDir": "./assets/js",
"allowSyntheticDefaultImports": true,
"noImplicitAny": false,
"sourceMap": false,
"lib": ["es2018", "dom", "es6"],
"typeRoots": ["./node_modules/@types" ]
},
"include": ["./**/*"],
"exclude": ["node_modules", ".vscode-test"]
}
