// Define the async function to fetch and display user data
async function fetchUserData() {
   // API URL
   const apiUrl = 'https://jsonplaceholder.typicode.com/users';

   // Select the data container
   const dataContainer = document.getElementById('api-data');

   try {
       // Fetch the user data from the API
       const response = await fetch(apiUrl);

       // Check if the response is OK (status code 200-299)
       if (!response.ok) {
           throw new Error("Failed to fetch user data");
       }

       // Parse the response as JSON
       const users = await response.json();

       // Clear the loading message
       dataContainer.innerHTML = '';

       // Create and append the user list
       const userList = document.createElement('ul');
       users.forEach(function (user) {
           const li = document.createElement('li');
           li.textContent = user.name; // Set the text content to the user's name
           userList.append(li); // Append <li> to <ul>
       });

       dataContainer.append(userList); // Append <ul> to the container
   } catch (error) {
       // Handle errors by showing a failure message
       dataContainer.innerHTML = ''; // Clear existing content
       dataContainer.textContent = 'Failed to load user data.'; // Error message
       console.error(error); // Log the error for debugging
   }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
