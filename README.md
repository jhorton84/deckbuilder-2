This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Magic: The Gathering Deckbuilder
This project is a remake of my first `ReactJs` project during my time in a coding bootcamp. After a year of learning `ReactJs`, `JavaScript`, and `NodeJs` I decided to rewrite the project to see how I could improve upon the original. [Magic DeckBuilder](https://github.com/jhorton84/MTG-deckbuilder).

### How The Application Works
This application makes an external GET request from the scryfall API and renders the card images as a list for the user to see. This list can then be filtered using a set of inputs to narrow down the cards to specific cases. Cards can be filtered by their:
<br />
	• name 
<br />
	• flavor text
<br />
	• type (Land, Creature, Sorcery, Planeswalker)
<br />
	• color 
	
<br />
Each image can then be selected and then added to the users "card list" allowing them to customize a collection into their own personalized deck. Once the user has determined all the cards they want to use in their personalized deck they are able to save these cards in the database under a customized deck name.

### Credit
All the images in this application belong to [Wizards of the Coast](https://magic.wizards.com/en) including the gif/video that plays on the landing page. The card images come from the [scryfall API](https://scryfall.com/docs/api). I couldn't have built this without either of these sources and would like to personally thank all the individuals who put in so much hard work to make these sources available.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
