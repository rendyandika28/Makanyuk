import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantSource {
  static async getAllRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANTS);
    const responseJson = response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;
