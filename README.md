# Basic E-commerce Store Implementation

This project represents a fundamental implementation of an e-commerce store, incorporating user authentication (signup/login), product listing, filtering capabilities (search and category), and a dark/light mode toggle.

**Live Demo:** [https://aakashr11111001111.github.io/Geekster-ReMCT-M4/login.html](https://aakashr11111001111.github.io/Geekster-ReMCT-M4/login.html)

## Features

* **User Authentication:**
    * Signup: New users can create accounts.
    * Login: Existing users can log in with their credentials.
    * *(Note: Authentication data is stored in `localStorage`, which is not secure for production environments.)*
* **Product Listing:**
    * Products are fetched and displayed from the Fake Store API.
* **Filtering:**
    * Products can be filtered by title using the search bar.
    * Products can be filtered by category using the dropdown menu.
    * Products can be filtered based on a minimum and maximum price range.
* **Product Details:**
    * Detailed information for each product can be viewed by clicking the "View Details" button on the product card.
* **Dark/Light Mode:**
    * A button in the page header allows users to switch between dark and light themes.
* **Like Functionality:**
    * Product cards include a like button. *(Note: The actual implementation of data persistence for the like functionality may not be included in this version.)*

## How to Use

1.  **Download the Files:** Download all files (HTML, CSS, JavaScript) from this repository.
2.  **Open the Live Demo:** You can directly access the live demo using the link provided above.
3.  **Alternatively, open `index.html` locally:** If you've downloaded the files, open the `index.html` file in your web browser.

    * If you are a first-time user, you will need to navigate to `signup.html` (either through the live demo or locally) to create an account.
    * After creating an account, you can log in via `login.html`.
    * Upon successful login, you will be redirected to the product listing page (`index.html`).

4.  **Explore the Features:**
    * Use the search bar to search for products by title.
    * Utilize the category dropdown menu to filter products by category.
    * Use the minimum and maximum price input fields to filter products by price range.
    * Click the "View Details" button on a product card to view its details.
    * Click the button in the header to toggle between dark and light modes.

## Limitations

* **Security:** User authentication data is stored in `localStorage`, which is insecure for sensitive information. Production applications should use server-side authentication and a database.
* **Scalability:** `localStorage` is only suitable for small amounts of data and will not scale for a large user base.
* **Error Handling:** The code includes basic error handling, but it can be further improved.
* **Like Functionality:** Actual data persistence for the like functionality may not be implemented.

## Future Improvements

* Implement server-side authentication and database integration.
* Add advanced filtering and sorting options.
* Develop cart functionality.
* Implement order processing.
* Enhance error handling and user feedback mechanisms.
* Improve responsive design for various screen sizes.

## Author

Aakash Rathore
