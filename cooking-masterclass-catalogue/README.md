# Cooking Masterclass Catalogue

A simple Vue.js single-page application that displays an interactive catalogue of cooking courses. Users can browse courses and save favorites to their wishlist.

## Features

- ✅ Dynamic course catalogue with 6 courses
- ✅ Wishlist functionality with live counter
- ✅ "Sold Out" badge for unavailable courses
- ✅ Responsive design for all devices
- ✅ Clean, minimal interface

## Tech Stack

- Vue 3
- Vuex for state management
- Vite
- CSS3

## Installation

1. **Install dependencies**

   ```bash
   cd cooking-masterclass-catalogue
   npm install
   ```

2. **Start the dev server**

   ```bash
   node node_modules/vite/bin/vite.js
   ```

3. **Open in browser**
   - Navigate to `http://localhost:5174/`

## How to Use

1. Browse the course catalogue
2. Click the "♥ Save" button to add a course to your wishlist
3. The wishlist counter in the header updates in real-time
4. Sold out courses show a "Sold Out" badge and cannot be saved
5. Click "♥ Saved" button again to remove from wishlist
