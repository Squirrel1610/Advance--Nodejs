const Page = require("./helpers/page");

let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto("http://localhost:3000");
});

afterEach(async () => {
  await page.closeBrowser();
});

test("When sign in, show log out button and the header has the correct text", async () => {
  await page.login();

  const logoutText = await page.getContentsOf('a[href="/auth/logout"]');
  expect(logoutText ).toBe("Logout");
  const headerText = await page.getContentsOf("a.brand-logo");
  expect(headerText).toBe("Blogster");
});


