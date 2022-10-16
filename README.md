<br />
<div align="center">

  <h3 align="center">Curriculum vitae</h3>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#folder-structure">Folder Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project represents my curriculum vitae. It is composed by two routes, where the first represents "Login" (public route) and the second represents my details (private route). Both avatar image and repository list in details page are filled using github api. Redux is used to store the information, and context is used to control darkmode. 
This project was deploy using github pages (<a href="http://Masomcunha.github.io/masomcunhacv/">my cv</a>).



<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* ReactJs
* TypeScript
* Redux
* HTML
* CSS
* React Icons


### Folder Structure

<p>src</p>
    <p>|-- components</p>
    <p>|-- hooks</p>
    <p>|-- interface</p>
    <p>|-- pages</p>
    <p>|-- redux</p>
    <p>|-- routes</p>
    <p>|-- style</p>
    <p>|-- utils</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

To run this application you need to have node v16.15.1 and npm v6.14.8.
To verify your versions just open cmd and run node -v to node version and npm -v to npm version
Run application in Chrome

### Installation

1. Download the project to your computer
2. Inside the project folder open the terminal and run npm install
3. After installation completed run npm start inside the terminal
4. Once the application is running, access http://localhost:3000/ using Chrome

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The application will open in "login" page. This page is wrapped by a header and footer components. In these both two components, a button is present to control dark mode. You can access details page by clicking in the github icon. In the detail page you can see the avatar image from github, and a list of links from my repositories. In projects list a timer is present that shows how long ago each project started. To finish, you can "logout" the application by clickimg in the logout button within the header.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] Create two pages
- [X] Create Privates and Public Routes
- [X] Create Footer and Header components
- [X] Context to control theme
- [X] Component to switch theme
- [X] Add redux
- [X] Control routes using store
- [X] Use gitHub api to get user
- [X] Add Tecnologies
- [X] Add Repository list
- [X] Add other projects list 
- [X] Add button to "logout"
- [X] Add function to calculate end date in projects
- [X] Responsive
- [X] Deploy with github pages


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Manuel Cunha - manuelasomc@gmail.com

Project Link: [https://github.com/MasomCunha/masomcunhacv]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

