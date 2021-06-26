import FavoriteRestaurantIdb from "../../data/favoriterestaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
    <article>
        <h2>Favorite Restaurants</h2>
        <div id="restaurants-container" class="restaurants-container">
        </div>
    </article>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.getElementById(
      "restaurants-container",
    );

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML
          += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = 'You have no favorite restaurants';
      restaurantsContainer.style.minHeight = '100vh';
    }
  },
};

export default Favorite;
