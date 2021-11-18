import { test, expect } from '@playwright/test';

const selectors = {
  appLink({ childNumber }) {
    return `.App-link:nth-child(${childNumber})`
  },
  appLinks: '.App-link',
  appTitle: '.App-title',
  archiveAbout: 'text=About',
}

const url = process.env.ENV_URL

test.describe('main page', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(url);
  });

  test.describe('basic UI checks', () => {
    test('page has correct url', async ({ page }) => {
      await expect(page).toHaveURL(url);
    });

    test('page has correct title', async ({ page }) => {
      const title = page.locator(selectors.appTitle);
      await expect(title).toHaveText('Hello, I am react app, welcome');
    });

    test('page has correct number of links', async ({ page }) => {
      const selectorCount = await page.$$(selectors.appLinks);
      expect(selectorCount.length).toBe(2);
    });

    test('first link on page has correct text', async ({ page }) => {
      await expect(page.locator(selectors.appLinks).first()).toHaveText('link to search engine');
    });

    test('second link on page has correct text', async ({ page }) => {
      const element = await page.$(
        selectors.appLink({ childNumber: 4})
      );
      const content = await element.textContent();
      expect(content).toBe('link to archive.org');
    });

    test('first link on page has correct url', async ({ page }) => {
      const linkHref = await page.getAttribute(
        selectors.appLink({ childNumber: 2}), 
        'href'
        );
      expect(linkHref).toEqual('https://duckduckgo.com');
    });

    test('all links on page have correct urls and text', async ({ page }) => {
      const urls = [
        {
          childNumber: 2,
          url: 'https://duckduckgo.com',
          text: 'link to search engine',
        },
        {
          childNumber: 4,
          url: 'https://archive.org',
          text: 'link to archive.org',
        },
      ];
  
      for (let i = 0; i < urls.length; i++) {
        const element = await page.$(
          selectors.appLink({ childNumber: urls[i].childNumber})
        );
        const content = await element.textContent();
        expect(content).toBe(`${urls[i].text}`);

        const linkHref = await page.getAttribute(
          selectors.appLink({ childNumber: urls[i].childNumber}),
          'href'
        );
        expect(linkHref).toEqual(`${urls[i].url}`);
      }
    });

    test('main page matches snapshot', async ({ page }) => {
      // Compare screenshot with a stored reference.
      expect(await page.screenshot()).toMatchSnapshot('app.png');
    });
  });

  test.describe('links follow outgoing pages', () => {
    test('duckduckgo main page matches screenshot', async ({ page }) => {
      await Promise.all([
        // The promise resolves after navigation has finished
        page.waitForNavigation(),
        // Clicking the link will indirectly cause a navigation
        page.click(selectors.appLink({ childNumber: 2})), 
      ]);

      expect(await page.screenshot()).toMatchSnapshot('duckduck.png');
    });

    test('archive.org main page matches screenshot', async ({ page }) => {
      await Promise.all([
        // The promise resolves after navigation has finished
        page.waitForNavigation(),
        // Clicking the link will indirectly cause a navigation
        page.click(selectors.appLink({ childNumber: 4})), 
      ]);

      expect(await page.screenshot()).toMatchSnapshot('archiveorg.png');
    });

    test('archive.org goes to about link', async ({ page }) => {
      await Promise.all([
        // The promise resolves after navigation has finished
        page.waitForNavigation(),
        // Clicking the link will indirectly cause a navigation
        page.click(selectors.appLink({ childNumber: 4})), 
      ]);

      await page.click(selectors.archiveAbout);
      expect(await page.screenshot()).toMatchSnapshot('archiveorgAbout.png');
    });
  });
});
