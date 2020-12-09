# Node Template

Hey guys! This is a template I made to start up any TS project with node!
Just be sure you have ESLint, Prettier, and editorconfig set on your VS Code ♥️

This template uses `Express`, so I hope this is not an issue for ya. 😜

I'm using 3333 as the port. Who cares, right?
Just run `yarn dev:server` and have the `ts-node-dev` server the same way `nodemon` does and without `tsc` all the time. That's a pain in the ass.

## Yarn

I'm using Yarn here because I do like it more than NPM. If you enjoy wasting time and REALLY would much rather use NPM than Yarn, remove the lock one, `npm i' on it and go for it, baby!

## ESLint

I'm using ESLint on this project.
This project uses:

- Airbnb style guide
- Typescript
- Javascript Modules
- Ignores the extension on importing TS files

Just remember to add this line to correct all the errors on the file on saving 😉

```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

## Prettier

Since I'm using the Airbnb style guide, prettier is quite simple here. Just single quotes and trailing commas. The parenthesis around arrow functions is a personal thing ;D

## editorconfig

You know. If you work in a bigger team, that's necessary. So the twist is:

- trimming white space
- inserting a final newline
- end of the line is an LF, just to have a default value for all OS

## launch.json

This is here for debugging purposes. But it's pretty simple and unnecessary if you like to `console.log` all over the place. I'll not judge you; I already was one of you guys 😉

## TS

I'm using typescript (sorry about that). I feel this is cool. Judge me.
But it's already set to create builds on `./dist` and have the root folder on `./src`. You are welcome 😌

And that's it! Enjoy fellas!!
