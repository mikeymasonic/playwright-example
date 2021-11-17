# Getting Started

copy environment variables from `.env.example` to a new file in your root directory called `.env`\
run `npm i`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4444](http://localhost:4444) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npx playwright test`

Launches the playwright test runner in `headless` mode. \
Open `playwright.config.js` and change `headless: false` to run in 'headed' mode to see browser actions.\
Alternatively, you can add this flag to your test command `npx playwright test --headed`

To update image snapshots run this: `npx playwright test --update-snapshots`

Note: any screenshots you make in headed vs headless mode will have conflicts when comparing them back. It's typically best practice to run all your screenshot tests in headless mode.

### Helpful links

[Playwright Docs](https://playwright.dev/docs/intro)\
[Headless Recorder Chrome Extension](https://chrome.google.com/webstore/detail/headless-recorder/djeegiggegleadkkbgopoonhjimgehda)\

### Mikey Contact Links

[My super cool dev site](https://michaelromay.dev)\
Where I work: [Niche.com](https://niche.com)\
[LinkedIn](https://www.linkedin.com/in/michaelromay)\
[SynthLibraryPortland](https://synthlibraryportland.com)\
[whateverSpace](http://whateverspace.org)
