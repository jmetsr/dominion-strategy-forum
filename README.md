This is a forum I made were people can discuss strategy for the game dominion.

It was inspired by [this website](http://forum.dominionstrategy.com/) which is basicly an example of a forum made by Simple Machines Forum software.

I created an API in rails for the forum.
The API uses jbuilder to render json views of all the boards, topics and replies.
The rails app uses the Kamanari gem to facilitate search functionality.
The rails app also takes care of user authentication using BCrypt to store password digests securely.

On top of the API is a frontend layer to the app designed in Backbone.js
The frontend includes css for responsize layout
Check out the live demo [here](http://www.dominion-strategy-forum.com/)
 