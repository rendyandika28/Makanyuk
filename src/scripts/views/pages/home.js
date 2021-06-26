import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <div class="jumbotron">
        <picture>
            <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
            <img 
                class="lazyload"
                data-src='./images/hero-image_2-large.jpg' 
                alt="hero image poster"></img>
        
        </picture>
        <p class="description">Temukan selera makananmu hari ini di <span>Makanyuk</span></p>
    </div>
    <article>
        <h2>Explore Restaurant</h2>
        <div id="restaurants-container" class="restaurants-container">
        </div>
    </article>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const { restaurants } = await RestaurantSource.getAllRestaurants();
    const container = document.getElementById("restaurants-container");
    restaurants.forEach((restaurant) => {
      container.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
