# E2E testing with Playwright

![testing](./src/testing.gif)

## Getting Started

copy environment variables from `.env.example` to a new file in your root directory called `.env`\
run `npm i`
then run `npx playwright install` to install playwright's supported browsers

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npx playwright test`

Launches the playwright test runner in `headless` mode. \
Open `playwright.config.js` and change `headless: false` to run in 'headed' mode to see browser actions.\
Alternatively, you can add this flag to your test command `npx playwright test --headed`

To update image snapshots run this: `npx playwright test --update-snapshots`

Note: any screenshots you make in headed vs headless mode will have conflicts when comparing them back. It's typically best practice to run all your screenshot tests in headless mode.

### Optional Workshop Tasks

- Go to [this form](https://forms.gle/qZhJr2wH6ixwovbS6), fill out your answers, take a screenshot, click submit, `waitForNavigation` and then take another screenshot of the completed page
- Try adding playwright to one of your apps, use [Playwright Docs](https://playwright.dev/docs/intro) to get started
- Make tests to click on each button and take a screen shot of each background change
- Make a test that the above with no repeating code
- Visit any site, find a dropdown, select and option, take a screenshot
- Visit any site, click through five pages, take a screenshot of each page, verify the url on each page

### Helpful links

[Playwright Docs](https://playwright.dev/docs/intro)\
[Headless Recorder Chrome Extension](https://chrome.google.com/webstore/detail/headless-recorder/djeegiggegleadkkbgopoonhjimgehda)

### Mikey Contact Links

[My super cool dev site](https://michaelromay.dev)\
Where I work: [Niche.com](https://niche.com)\
[LinkedIn](https://www.linkedin.com/in/michaelromay)\
[SynthLibraryPortland](https://synthlibraryportland.com)\
[whateverSpace](http://whateverspace.org)
