import React from "react"; // first step

const UserContext = React.createContext() // second step

export default UserContext; // third step after 3rd step we need to create a Provider. 
//The React Redux Provider is like a special container that wraps around your entire React application. 
//Its main job is to make the global state (managed by Redux) available to all the components 
//inside your app.