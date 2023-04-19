# Chuck Norris Jokes

![image](https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png)


A web application that displays Chuck Norris jokes based on selected categories.

[Launch Live Preview](#addLink)


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contact](#contact)


## Description

This project is a simple web application that displays random Chuck Norris jokes based on selected categories. It uses the Chuck Norris API to fetch the available categories and random jokes.

The application is built using React and makes use of the useState and useEffect hooks to manage state and fetch data from the API. The UI is styled using CSS, and the application is designed to be responsive and user-friendly.

The code snippet provided appears to be a React functional component (**`App`**) that makes use of React hooks (**`useState`** and **`useEffect`**) to fetch Chuck Norris jokes from the Chuck Norris API.

```js
function App() {

  const [buttons, setButtons] = useState([]);
  const [joke, setJoke] = useState([]);

  const getJoke = async (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setJoke(json);
    } catch (error) {
        console.log("error", error);
    }
  }

  useEffect(() => {
    const url = 'https://api.chucknorris.io/jokes/categories';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setButtons(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, []);
```
Here's a brief explanation of how the code works:

- The **`App`** component has two state variables: **`buttons`** and **`joke`**, which are managed using the **`useState`** hook.
- The **`getJoke`** function is an asynchronous function that takes a **`category`** parameter and fetches a random Chuck Norris joke from the API based on the provided category. The fetched joke is then set in the **`joke`** state using **`setJoke`** function.
- The **`useEffect`** hook is used to fetch the available categories from the API when the component mounts. It calls the **`fetchData`** function, which is an async function that fetches the categories and sets them in the **`buttons`** state using the **`setButtons`** function. The empty array **`[]`** passed as the second argument to **`useEffect`** ensures that the effect only runs on component mount and not on subsequent updates.

Note: It's assumed that the missing parts of the code (i.e., rendering JSX, handling errors, etc.) are present in the actual implementation.

Please let me know if you have any further questions or need additional information.


## Installation

To install the Chuck Norris Jokes application, follow the steps below:

1. Clone the repository to your local machine:

```js
git clone https://github.com/yourusername/chuck-norris-jokes.git
```

2. Install the dependencies:

```js
cd chuck-norris-jokes
npm install
```

3. Run the application:

```js
npm start
```

4. Open the application in your browser by navigating to http://localhost:3000.

## Usage

To use the Chuck Norris Jokes application, follow the steps below:

1. Open the application in your browser by navigating to **[http://localhost:3000](http://localhost:3000/)**.

2. Click on any of the available categories displayed on the screen. This will trigger the application to fetch a random Chuck Norris joke related to that category.

3. The joke will be displayed on the screen. To view another joke, click on a different category.

4. You can also refresh the page to display a new set of categories.

5. Enjoy the jokes!


## Technologies Used

The Chuck Norris Jokes application is built using the following technologies:

* React
* JavaScript
* HTML
* CSS
* Chuck Norris API

React is a JavaScript library used for building user interfaces, while HTML and CSS are used for creating the structure and styling of the web pages. The Chuck Norris API is used to fetch the available categories and random jokes to display in the application.



## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more information.

## Contact

You can reach me on [Twitter](https://twitter.com/23mmartins)


Feel free to send me a message if you have any questions or feedback about this project. I'll do my best to respond as soon as possible.
