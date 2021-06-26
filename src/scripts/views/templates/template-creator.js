import CONFIG from "../../globals/config";

const createRestaurantCategoriesTemplate = (categories) => {
  let listElement = "";
  categories.forEach((category) => {
    listElement += `<li>${category.name}</li>`;
  });
  return listElement;
};

const createMenusRestaurantTemplate = (menus) => {
  let listElement = "";
  menus.forEach((menu) => {
    listElement += `<li>${menu.name}</li>`;
  });
  return listElement;
};

const createCustomersReviewTemplate = (reviews) => {
  let listElement = "";
  reviews.forEach((review) => {
    listElement += `
      <div class="review-item">
        <h5>${review.name}, <small>${review.date}</small> </h5>
        <p>${review.review}</p>
      </div>
    `;
  });
  return listElement;
};
const createRestaurantItemTemplate = (restaurant) => `
<a href="${`/#/detail/${restaurant.id}`}" class="restaurants-item">
    <div class="restaurants-image">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${
  restaurant.pictureId
}" alt="card-image">
        <div class="restaurants-city">
            <p>Kota ${restaurant.city}</p>
        </div>
    </div>
    <div class="restaurants-desc">
        <h5>Rating: ${restaurant.rating}</h5>
        <h6>${restaurant.name}</h6>
        <p>${restaurant.description}</p>
    </div>
  </a>
`;
const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail-restaurant-image">
      <img class="lazyload" data-src="${`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`}" alt="detail-image" loading="lazy"/>
  </div>
  <h3>${restaurant.name}</h3>
  <h5>Kota ${restaurant.city}</h5>
  <small>${restaurant.address}</small>
  <hr>
  <h5>Rating: ${restaurant.rating}</h5>
  <p class="restaurant-desc">${restaurant.description}</p>
  <hr>
  <div class="menu-category">
    <strong>Menu Category</strong>
    <ul>
      ${createRestaurantCategoriesTemplate(restaurant.categories)}
    </ul>
  </div>
  <div class="menu">
    <div class="food-menu">
      <strong>Food Menu</strong>
      <ul>
        ${createMenusRestaurantTemplate(restaurant.menus.foods)}
      </ul>
    </div>
    <div class="drink-menu">
      <strong>Drink Menu</strong>
      <ul>
        ${createMenusRestaurantTemplate(restaurant.menus.drinks)}
      </ul>
    </div>
  </div>
  <hr>
  <div class="customers-review">
    <strong>Customers Review</strong>
    <div class="customers-review-item">
      ${createCustomersReviewTemplate(restaurant.customerReviews)}
    </div>
  </div>

`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
