# Translator Project

## Overview

This is a simple and modern translation tool that allows users to translate text between different languages. The tool uses the Lingva API to provide translations, and it features a clean and user-friendly frontend built with HTML, CSS, and JavaScript.

### Key Features:

-   **Text Translation:** Translate text from one language to another.
-   **Language Selection:** Users can select from a predefined list of languages.
-   **Audio Support:** Listen to the translated text in audio format.
-   **Responsive Design:** Optimized for use on both desktop and mobile devices.

## Tech Stack

-   **Backend:** Node.js with Express.js
-   **Frontend:** HTML, CSS, JavaScript (Tailwind CSS for styling)
-   **API:** Lingva API for translation services

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/) (Node Package Manager)

### Steps to Set Up the Project Locally

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yravnit/Translator_Project.git
    cd Translator_Project
    ```

2. **Install Dependencies:**
   In your terminal, run the following command to install all required dependencies for both the backend and frontend:

    ```bash
    npm install
    ```

3. **Run the Backend Server:**
   Start the backend server using the following command:

    ```bash
    node server.js
    ```

    The server should now be running on `http://localhost:5000`.

4. **Open the Frontend:**
   Open `index.html` in your browser to see the frontend in action. You can either open the file directly from your file system or run a live server with any IDE or use the following command if you have [VS Code](https://code.visualstudio.com/):

    - Install the **Live Server extension** in VS Code.
    - Right-click on the `index.html` file and select **Open with Live Server**.

5. **Test the Translation:**
    - Input text into the source language field.
    - Select a source and target language from the dropdowns.
    - Click **Translate** and view the translated text.

## How It Works

1. **Frontend Interface:** The frontend allows users to input text, select source and target languages, and click the translate button.
2. **Backend Communication:** When the user submits the translation request, the frontend makes a request to the backend API, which processes the translation via the Lingva API.
3. **Displaying Translations:** Once the translation is retrieved, the translated text is displayed on the frontend along with an optional audio pronunciation.

## API Endpoints

### 1. Translation Endpoint

**GET** `/api/v1/:source/:target/:query`

-   **Description:** Translates the given query text from the source language to the target language.
-   **Response:**
    ```json
    {
      "translation": "Translated text here",
      "info": { ... }
    }
    ```

### 2. Audio Endpoint

**GET** `/api/v1/audio/:lang/:query`

-   **Description:** Retrieves the audio pronunciation of the translated text.
-   **Response:**
    ```json
    {
      "audio": [1, 2, 3, 4, ...]
    }
    ```

### 3. Languages Endpoint

**GET** `/api/v1/languages/?:(source|target)`

-   **Description:** Fetches the list of available languages for translation.
-   **Response:**
    ```json
    {
      "languages": [
        { "code": "en", "name": "English" },
        { "code": "es", "name": "Spanish" },
        { "code": "fr", "name": "French" },
        ...
      ]
    }
    ```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add feature'`).
4. Push to your fork (`git push origin feature-name`).
5. Open a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

-   Thanks to [Lingva API](https://github.com/thedaviddelta/lingva-translate) for providing the translation API.
-   Tailwind CSS for the elegant and responsive design.

### How to Use this `README.md` File:

1. **Create a new file named `README.md` in the root of your project.**
2. **Copy the content above.**
3. **Paste the content into the newly created `README.md` file.**
4. **Save the file.**
5. **Push the changes to your GitHub repository.**

This file now contains all the instructions to run the project, explanations of how it works, API information, and contribution guidelines, all in one neat document. Let me know if you need any further adjustments!
