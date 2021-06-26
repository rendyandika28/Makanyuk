import FavoriteRestaurantIdb from "../../data/favoriterestaurant-idb";
import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="detail-restaurant"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.detailRestaurant(url.id);

    const restaurantContainer = document.getElementById("restaurant");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.getElementById("likeButtonContainer"),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
