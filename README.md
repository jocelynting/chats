# JS Chat Application

This is a single-page application (SPA) chat platform developed using JavaScript and Express. It supports user authentication, real-time messaging, and additional functionalities such as chat channels and direct messaging (DM).

## Features

### User Authentication:

    •	Users must log in to access the chat.
    •	Persistent sessions allow users to remain logged in across refreshes.
    •	Logout functionality removes the session and updates the active users list.

### Real-Time Messaging:

    •	Users can send and receive messages in real-time.
    •	Updates the list of messages and active users every 5 seconds via polling.

### Chat Channels:

    •	Users can create or join specific channels for group discussions.
    •	Each channel has its own message history.

### Direct Messaging (DM):

    •	Users can send private messages to other logged-in users.
    •	Separate interface for viewing and managing DMs.

### Responsive Design:

    •	User-friendly interface with clear distinctions between messages, channels, and users.
    •	Optimized for desktop viewports without horizontal scrolling.

### Security:

    •	Session-based authentication with sid cookies.
    •	Usernames are validated using an allowlist to ensure secure input.
    •	Empty or invalid messages are rejected with appropriate error handling.

### Error Handling:

    •	Users receive meaningful feedback for unexpected errors (e.g., invalid login, empty message).
    •	Loading indicators are displayed during key operations, such as logging in or fetching updates.
