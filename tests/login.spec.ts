import { test, expect } from "@playwright/test";

test.describe("Aldi Login flow (UI + form kitöltés)", () => {
  const baseURL = "https://new.aldi.us";
  const email = "mate.dohos@gmail.com";
  const password = "AldiPw01@";

  test("navigate to login page and fill input - without login ", async ({ page }) => {
    // becasuse of Anti-Robot Verification the whole login process automation is not possible.

    // 1. Home page
    await page.goto(baseURL);

    // 2. Log in button
    await page.getByText("Log in").click();

    // 3. Navigate to login page
    await page.waitForURL(/.*login.*/);

    // 4. Fill email field
    await page.getByLabel("Email Address").fill(email);

    // 5. Fill password field 
    await page.getByPlaceholder("Your password").fill(password);

    // 6. Check Anti-Robot Verification is visible
    await expect(page.getByText("Anti-Robot Verification")).toBeVisible();

    // 7. Stop the process 
    await page.pause();
  });
});
