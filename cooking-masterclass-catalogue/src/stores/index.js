import { createStore } from "vuex";

const store = createStore({
  state: {
    courses: [
      {
        id: 1,
        title: "The French Culinary Experience",
        chef: "Chef Alba Dubois",
        price: 89.99,
        available: true,
      },
      {
        id: 2,
        title: "Italian Tastes & Techniques",
        chef: "Chef Maria Rossi",
        price: 79.99,
        available: true,
      },
      {
        id: 3,
        title: "Asian Dining Mastery",
        chef: "Chef Li Wei",
        price: 99.99,
        available: false,
      },
      {
        id: 4,
        title: "Baking & Pastry Arts",
        chef: "Chef Laura Laurent",
        price: 84.99,
        available: true,
      },
      {
        id: 5,
        title: "Mediterranean Experience",
        chef: "Chef Marco Bernini",
        price: 74.99,
        available: true,
      },
      {
        id: 6,
        title: "Sushi & Sashimi Basics",
        chef: "Chef Takeshi Yamamoto",
        price: 94.99,
        available: true,
      },
    ],
    wishlist: [],
  },

  mutations: {
    toggleWishlist(state, courseId) {
      const index = state.wishlist.indexOf(courseId);
      if (index > -1) {
        state.wishlist.splice(index, 1);
      } else {
        state.wishlist.push(courseId);
      }
    },
  },

  actions: {
    toggleWishlist({ commit }, courseId) {
      commit("toggleWishlist", courseId);
    },
  },

  getters: {
    wishlistCount: (state) => state.wishlist.length,
    isInWishlist: (state) => (courseId) => state.wishlist.includes(courseId),
  },
});

export default store;
