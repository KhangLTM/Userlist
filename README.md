<div align="center">
  <h3 align="center">USER LIST WITH VUE 3</h3>
  <p align="center">
     Simple minimalist and responsive user list made with VUE 3 and TAILWIND !
  </p>
</div>
<img src='https://i.imgur.com/5UIudWU.png' >

## About The Project

**Why I choose VUE 3 ?**

* In Vue 3, the way to create components was changed, with the introduction of Composition API. It allows you to divide the parts of the component to separate files, to then be re-used.

**And Why Tailwind CSS ?**

* Faster UI building process
* It is a utility-first CSS framework so we can build custom designs without writing CSS as in traditional approach. 

**I built a Vue.js front-end User Application in that:**
- List out all the users in the data table.
- We can create, retrieve, update, delete Users. 
- There is a Search bar for finding Users by their name.
- We can filter out the users'data into ascending or descending order.

### Built With

* [Vue.js 3](https://vuejs.org/)
* [Tailwind 2.2.17](https://tailwindcss.com)
* [Vue-router 4](https://next.router.vuejs.org)

## Getting Started

### Installation

1.  API endpoint  at [https://reqres.in/api/users](https://reqres.in/api/users)

2. Clone the repo
    ```
   git clone https://github.com/KhangLTM/Userlist.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Compiles and hot-reloads for development
   ```sh
      npm run serve
   ```
## Usage

### Project Structure
<img src='https://i.imgur.com/ENCGPYo.png'>

**Let me explain:**
- UserApi.js initializes axios with HTTP base Url and headers.
- To have a CRUD of users I will use a Composition API thing called composable,which is a separate file that will contain all the methods we need
-There are 2 main components: UserIndex to display main content of the app and UserForm to Create or Update user's information 






