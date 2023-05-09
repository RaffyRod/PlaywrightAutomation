const { test, expect } = require('@playwright/test');

test('Get Spider-Man Character Comics', async ({ request }) => {
  const _response = await request.get(
    `${process.env.COMIC_URL}/v1/public/characters/${process.env.COMIC_CHARACTER_ID}/comics?ts=${process.env.TS}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}&limit=${process.env.LIMIT}`
  );
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  expect(_response.body()).not.toBe.null;
  const responseBody = JSON.parse(await _response.text());
  expect(responseBody.data.limit).toEqual(100);
});

test('Attempt to Get more  Marvel Characters than allowed limit', async ({ request }) => {
  const _response = await request.get(
    `${process.env.COMIC_URL}/v1/public/characters/${process.env.COMIC_CHARACTER_ID}/comics?ts=${
      process.env.TS
    }&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}&limit=${process.env.LIMIT + 1}`
  );
  expect(_response.ok()).toBeFalsy();
  expect(_response.status()).toBe(409);
  expect(_response.body()).not.toBe.null;
  const responseBody = JSON.parse(await _response.text());
  console.log(responseBody);
  expect(responseBody.status).toEqual('You may not request more than 100 items.');
});

test('Attempt to Get  Marvel Characters, unable to authenticate', async ({ request }) => {
  const _response = await request.get(
    `${process.env.COMIC_URL}/v1/public/characters/${process.env.COMIC_CHARACTER_ID}/comics?apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}&limit=${process.env.LIMIT}`
  );
  expect(_response.ok()).toBeFalsy();
  expect(_response.status()).toBe(409);
  expect(_response.body()).not.toBe.null;
  const responseBody = JSON.parse(await _response.text());
  console.log(responseBody);
  expect(responseBody.message).toEqual('You must provide a timestamp.');
  expect(responseBody.code).toEqual('MissingParameter');
});
