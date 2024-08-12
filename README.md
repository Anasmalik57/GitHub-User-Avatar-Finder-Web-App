# GitHub User Avatar Finder Web App

## Overview

The GitHub User Avatar Finder Web App is a React-based application that allows users to search for GitHub usernames and display a list of matching usernames along with their avatars. The application uses the GitHub Search API to fetch user data and implements debouncing to enhance performance and avoid excessive API calls.

## Features

- **Search for GitHub Users**: Enter a GitHub username or part of it to find similar usernames.
- **Display Avatars**: View the avatars of the users that match the search query.
- **Debouncing**: Prevent excessive API requests by implementing a custom `useDebounce` hook.

## Tech Stack

- **Frontend**: React, Axios
- **API**: GitHub Search API

## Project Structure

```
src/
├── components/
│   ├── fetchData/
│   │   ├── FetchData.jsx
│   │   └── FetchData.css
│   ├── Search/
│   │   ├── Search.jsx
│   │   └── Search.css
│   └── hooks/
│       └── useDebounce.js
├── App.jsx
├── App.css
└── main.jsx
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Anasmalik57/GitHub-User-Avatar-Finder-Web-App.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd GitHub-User-Avatar-Finder-Web-App
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Run the development server:**

   ```bash
   npm start
   ```

2. **Open your browser and go to `http://localhost:5173` to view the app.**

3. **Enter a GitHub username or part of it in the search box and press "Get Avatar" to see the matching usernames and their avatars.**

## How It Works

- **Debouncing**: The `useDebounce` hook delays updating the state and making API calls until the user has stopped typing for a specified delay (500ms in this case).
- **Fetching Data**: The `FetchData` component queries the GitHub Search API for users matching the search query. It then passes the data to the `Search` component for display.
- **Displaying Results**: The `Search` component renders a list of user avatars and usernames based on the fetched data.

## Files Overview

- `App.jsx`: Main component that renders the `FetchData` component.
- `FetchData.jsx`: Handles API requests and state management for the search query and results.
- `Search.jsx`: Displays the search input and list of user avatars.
- `useDebounce.js`: Custom hook that implements debouncing logic to optimize API requests.
- `FetchData.css` and `Search.css`: CSS files for styling the components.

## Contribution

Feel free to open issues or submit pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.