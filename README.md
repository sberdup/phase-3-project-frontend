# Hyrule Compendium API with Locations
The HC Tracker app features three routes for accessing information about creatures and things from *The Legend of Zelda: Breath of the Wild*.
The information built into the backend API draws from the [Hyrule Compendium API](https://gadhagod.github.io/Hyrule-Compendium-API/#/) and builds some new associations.

## Main Page
The landing page of the app shows all entries from the game after a short loading period. There is a menu bar to allow for filtering by category type and a search bar to dynamically display matches by name. This filter and search function are also available on the rest of the site for a better user experience. Upon clicking an **entity card**, it will expand to display any additional information available for that creature/non-creature. At minimum, an entry will display a name, id#, description, and category.

## Log/Delete Page
In *Breath of the Wild*, there is an in-game Hyrule Compendium that allows the player to track which of the game's many beings they've encountered. In HC Tracker, when you click an entry in Edit mode on this route, you can click a button to identity whether or not you've seen this entity already. After a short delay, you may click the button again to reset the log status of the entity. All changes are persisted to the API database.

Additionally, you have access to a delete button when an entity is selected. Pressing this button will remove the selection from the database backend and display a confirmation on the frontend.

## Finder Page
Inspired by my time playing BOTW, the Finder section in this app allows you to select an entity and get a list of which locations your selected entity can be found in. Your selected cards are displayed at the top with the relevant information on them. The reason you can select multiples is so that the finder can return a list of locations where *all* your selections can be found at once. This is a great help to anyone looking to cut down on resource gathering in game or just wanting to see the ecological zones for various entities.

### Thank You
I hope HC Tracker has been useful and informative, I have many additional features in mind, some of which I plan to add in the future.