const { test, expect } = require('@playwright/test');

test('Get Marvel Characters', async ({ request, baseURL }) => {
  const _response = await request.get(
    `${process.env.COMIC_URL}/v1/public/characters?ts=${process.env.TS}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}&limit=${process.env.LIMIT}`
  );
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  expect(_response.body()).not.toBe.null;
  //expect(_response.body().data.limit).toBeGreaterThan('1');
  const responseBody = JSON.parse(await _response.text());
  expect(responseBody.data.limit).toEqual(100);
  expect(responseBody.data.limit).toBeGreaterThan(1);
  // expect(responseBody.data).not.toBeEmpty();
});
