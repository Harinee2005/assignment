# UserInfo App with Theme Toggle, Search, Sorting, and Pagination

This project is a **User Information App** built using **React**. It fetches user data from an external API (`https://jsonplaceholder.typicode.com/users`) and displays detailed user information when a user card is clicked. The app supports **light and dark themes** using a context-based approach. Additionally, it includes:  
- **Search Feature** for quickly finding user data.  
- **Sorting Feature** to organize user information efficiently.  
- **Pagination** for a better user experience when handling large data sets.

---

## **Table of Contents**
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [How to Use](#how-to-use)

---

### **Features**
1. **Dynamic Theme Switching**  
   Users can toggle between **light** and **dark** themes.
   - Theme persistence is managed with `useContext` and `ThemeContext`.

2. **Routing for Dynamic User Details**  
   - `Home` page displays a list of user cards.
   - Clicking on a user card navigates to `/user-id` displaying detailed user information.

3. **Data Fetching from External API**  
   - User data is fetched from `https://jsonplaceholder.typicode.com/users`.

4. **Search Functionality**  
   - Users can search for specific user names or details.

5. **Sorting**  
   - Sort user data by various criteria, such as name or email.

6. **Pagination**  
   - Users can navigate between pages when viewing large amounts of data.

7. **Responsive User Interface**  
   - Uses styled components for dynamic styling based on the selected theme.

8. **Loader and Error Handling**  
   - Displays a loader during data fetching.
   - Shows an error message if data retrieval fails.

---

### **Setup Instructions**

1. **Clone the Repository**  
2. **Install Dependencies**
   ```bash 
   npm install 
   npm start 
   ``` 
### **Project Structure**

1. **App.js:** Main application component with theme management and routing setup.
2. **Header.js:** Navigation bar component with theme toggle button.
3. **Home.js:** Displays a list of user cards with search, sorting, and pagination features.
4. **UserDetail.js:** Fetches and displays detailed user information.
5. **ThemeContext.js:** Context for managing theme state.
6. **styledComponents.js:** Contains styled-component definitions

### **Dependencies** 

1. "react-icons": "^5.4.0",
2. "react-loader-spinner": "^6.1.6",
3. "react-router-dom": "^6.28.2",
4. "styled-components": "^6.1.14"

### **How to Use it** 

- Open the app in your browser after running it.
- Use the search bar to find specific users quickly.
- Use the sorting options to reorder the user list.
- Navigate between pages using pagination controls.
- Click on any user card to view detailed information.
- Toggle between light and dark themes using the button on the navigation bar.
