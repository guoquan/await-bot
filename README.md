# await-bot

Open source communities are always spending days constructing strange project names. This is another stupid example: await-bot works a) in time, b) on time.
let's say "in time" (occasional events) and "on time" (timed events) are two features of await-bot.
I will further abbreviate it as `ab`, for the two features itemized by `a` and `b` as above.

What is this?
I do not know. Just want to play with Web APIs with javascript async / await something that I do not know again.

## how to

### get node

`async`/`await` is supported since `node.js` `7.6`. Get your node prepared. As now, year 2019, it should not be a problem since "LTS" version is `10.16`.

Follow official [website](https://nodejs.org/), or use [nvm](https://github.com/nvm-sh/nvm).

Make sure you have it now
```
node -V
```

### get dependency

It seems npm will come with node automatically. Just get dependency with npm
```
npm install
```


### run bot

Run it with node. You may want to specify a port with environment variable `AB_PORT`, otherwise it goes to default `3000`.
```
node server.js
```

### expect something

Go to your browser and visit `http://localhost:<port>`. Replace `<port>` with port you specify above, or use default `3000`.
Actually I have no idea what to expect from this project. I mean from running the bot. However I do expect any input. I mean, your contribution is welcome.
