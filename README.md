# React Web App with Generative AI

A web application developed using **React** and **Node.js**, integrating **Google Generative AI** for real-time query answering. This app enhances user interaction by dynamically providing intelligent responses, all within a secure, fast, and responsive interface.

## Features

- **Generative AI Integration**:  
  Integrated **Google Generative AI** to provide real-time, context-aware responses to user queries.

- **Dynamic Query Handling**:  
  A React-based front-end where users can input queries and receive AI-generated responses dynamically.

- **Security**:  
  Utilized **DOMPurify** and **Marked** libraries to sanitize and render AI-generated responses, ensuring protection against XSS attacks and maintaining content integrity.

- **Robust Backend Architecture**:  
  Designed an efficient server architecture using **Express** and **body-parser** to handle asynchronous API requests and real-time data processing.

## Technologies Used

- **Frontend**:
  - **React**: JavaScript library for building user interfaces.
  - **DOMPurify**: Used for sanitizing HTML to prevent cross-site scripting (XSS) attacks.
  - **Marked**: A low-level markdown compiler used for rendering AI-generated responses.

- **Backend**:
  - **Node.js**: A JavaScript runtime built on Chrome's V8 engine.
  - **Express**: Minimalist web framework for building the backend server.
  - **body-parser**: Middleware to handle incoming request bodies in JSON format.

- **AI Integration**:
  - **Google Generative AI**: Integrated to answer user queries in real-time by generating meaningful responses.
