# await-bot

Open source communities are always spending days constructing strange project names. This is another stupid example: "*await-bot works a) in time, b) on time.*"
Let us say "in time" (occasional events) and "on time" (timed events) are two features of await-bot.
I will further abbreviate it as `ab`, for the two features itemized by `a` and `b` as above.

**What is this?**
I do not know. Just want to play with Web APIs with javascript async / await something that I do not know again.

## How to

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

## Built With

* **Language**: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Trying to use [ES6](https://www.ecma-international.org/ecma-262/6.0/index.html), run by [Node.js](https://nodejs.org). Especially I would like to try out `async`/`await` patterns.
You might like to checkout the [capability of JavaScript engines with ES6](https://kangax.github.io/compat-table/es6).
* **Web Framework**: [Koa](https://koajs.com) - I was so shocked by what I see running the first sample of Koa, after looking and waiting for something to come out, just nothing, I mean, no banner, no log, ... , and soon amazed by this design.
* **I/O**: [Socket.io](https://socket.io) - Have not started to use it yet. Just planed to have it for Internet I/O.
* **Testing**: [Jest](https://jestjs.io) - Have not have it yet.
* **CI**: [SemaphoreCI](https://semaphoreci.com) - First-look lets me down a bit but it seems it is promising, especially for the 2.0.
* **Deploy**: [Glitch](https://glitch.com) - The feature is awesomely fitting my requirement. I do not need the bot up forever. It can rest and just wake up in time, and on time.

### alternatives

* **Language**: [Typescript](https://www.typescriptlang.org) - it is a promising alternative to me. I am open to other options like [CoffeeScript](https://coffeescript.org), because of my ignorance. [Babel](https://babeljs.io/) may be needed here.

## Contributing

I am trying to use [GitHub flow](https://guides.github.com/introduction/flow) to accept incoming contribution, together with a local branching model like [Git Flow](https://nvie.com/posts/a-successful-git-branching-model).
Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for contributing.

## Versioning

I use [semantic versioning](http://semver.org/). See the [tags on this repository](https://github.com/guoquan/await-bot/tags) for the versions available.

Nothing there? Sure, this is now.

## Authors

[I](https://github.com/guoquan) started the project unconsciously.
Check out the list of [contributors](https://github.com/guoquan/await-bot/graphs/contributors) who participated in this project.

## License

No licensed for now. Maybe [later](https://opensource.org).

## Acknowledgments

Everyone of you.
