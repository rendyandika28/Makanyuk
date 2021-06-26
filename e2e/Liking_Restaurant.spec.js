const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/Favorite');
});

Scenario('Liking One Restaurant', async ({ I }) => {
  I.see('You have no favorite restaurants', '.restaurants-container');

  I.amOnPage('/');

  I.seeElement('.restaurants-container a');

  const firstRestaurant = locate('.restaurants-container a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorite');
  I.seeElement('.restaurants-container a');
  const likedRestaurant = locate('.restaurants-container a').first();
  const likedRestaurantTitle = await I.grabTextFrom(likedRestaurant);

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking One Restaurant', async ({ I }) => {
  I.see('You have no favorite restaurants', '.restaurants-container');

  I.amOnPage('/');
  I.seeElement('.restaurants-container a');

  I.click(locate('.restaurants-container a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorite');

  const firstLikedRestaurant = locate('.restaurants-container a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom('.restaurants-container a h6');
  I.click(firstLikedRestaurant);

  I.seeElement('.detail-restaurant');
  const likedRestaurantTitle = await I.grabTextFrom('.detail-restaurant h3');

  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/Favorite');
  I.see('You have no favorite restaurants', '.restaurants-container');
});
