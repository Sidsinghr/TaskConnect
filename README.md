# TaskConnect Web App

## Description
**TaskConnect** is a web application built using Chakra UI, Firebase, and the Razorpay payment gateway. It serves as a platform where users can request services, and workers or fellow university members can take up the tasks provided. This web app complements the TaskConnect mobile app, offering a convenient and accessible way for users to interact and utilize services.

## Features
- **User Registration**: Users can create an account using their email and password.
- **User Authentication**: Secure authentication using Firebase Authentication.
- **Service Requests**: Users can create detailed service requests for the tasks they need help with.
- **Service Listings**: Workers or university members can view available service requests.
- **Worker Selection**: Workers can select and accept service requests.
- **Payment Integration**: Secure and seamless transactions using the Razorpay payment gateway.
- **Real-time Updates**: Both users and workers receive real-time notifications for service requests and updates.
- **User Profiles**: Users can update profile information and view their transaction history.

## Installation
To run the TaskConnect web app locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/TaskConnect.git
    ```
2. Navigate to the project directory:
    ```bash
    cd TaskConnect
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a Firebase project and obtain the necessary credentials (Firebase Web SDK configuration).
5. Create a Razorpay account and obtain the API key and secret.
6. Set up the Firebase and Razorpay credentials in the project.
7. Run the web app:
    ```bash
    npm start
    ```
8. Open your browser and go to `http://localhost:3000` to access the TaskConnect web app.

*Note: Ensure you have Node.js and npm installed on your machine.*

## Technologies Used
- **Chakra UI**: A simple and modular UI component library for React.
- **Firebase**: A comprehensive platform providing tools and services for web and mobile application development.
  - **Firebase Authentication**: Manages user authentication securely.
- **Razorpay**: A leading payment gateway for secure transactions.
- **React**: A JavaScript library for building user interfaces.
- **Google Maps API**: Provides nearby location data for services.
