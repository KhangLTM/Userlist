<div align="center">
  <h3 align="center">USER LIST WITH VUE 3</h3>
  <p align="center">
     Simple , minimalist and responsive User list made with VUE 3 and TAILWIND !
  </p>
</div>

<p float="left">
  <img src='https://i.imgur.com/5UIudWU.png'>
<p>


**LINK DEMO** : https://userlist-khangltm.netlify.app 

**SOURCE CODE** : https://github.com/KhangLTM/Userlist 
  
## About The Project

**Why I choose VUE 3 ?**

* In Vue 3, the way to create components was changed, with the introduction of Composition API. It allows us to divide the parts of the component to separate files, to then be re-used , make code readable and easy to maintain .

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
<div align='center'>
  <img src='https://i.imgur.com/ENCGPYo.png'>
</div>

**Let me explain:**
- UserApi.js initializes axios with HTTP base Url and headers.
- To have a CRUD of users I will use a Composition API thing called composable,which is a separate file that will contain all the methods we need 
- There are 2 main components: ListUser.vue to display main content of the app and UserForm.vue to Create or Update user's information .
- In addition to the search and filter function , I create Modal(Edit and Crate) for resposive and mobile-friendly design.
 <div align="center">
 <img src='https://i.imgur.com/mQRZdWk.png' >
</div>

### Two Problems that i find very challenging to deal with 

1. **Filter Entire User's List** 

In order to be able to filter out the users'data into ascending or descending order or search for users, we must take all the user data.

###### Inside Users.js I create a function that takes all user information through the Paginated API by recursion . ######

```javascript
  const getEntireUserList = async (pageNo=1)=>{
        let res = await getPageData({page:pageNo}); // I get the data from the current page.
        if (res.length > 0) {
          EntireUserList.value= EntireUserList.value.concat(res) //Push the page's data to EntireUserList
          res.concat(await getEntireUserList(pageNo+1));//Run back the function till the last page.  
        } else { 
            return 
        }
        return res
      }
```
After that,we need to create the filter data function with two dependencies, **filteredData**-where data is stored after filtering and **EntrireUserList**-contain all user's data we mentioned above. 

###### Inside ListUser.vue , I create a function to filter data filtered according to our filtering options  . ######

```javascript
 
 const filterData = (data) => {
            isFilter.value = true
            switch (data) {
                case 'asc':
                    filteredData.value = Array.from(EntireUserList.value).sort((a, b) => {
                        if (a.first_name < b.first_name) return -1
                        return a.first_name > b.first_name ? 1 : 0 })
                    break;
                case 'des':
                    filteredData.value = Array.from(EntireUserList.value).sort((a, b) => {
                        if (a.first_name > b.first_name) return -1
                        return a.first_name < b.first_name ? 1 : 0 })
                    break;
                default:
                    isFilter.value = false
            }
        }
```
After the filtering process is completed , we must retrieve the filtered list and divide it by each page and display users data based on the list we just filtered in ascending or descending order .

###### I use computed to detect changes when the user navigates the page to redisplay the list corresponding to the current page. ######
```javascript
 const filterbyPage = computed(() => {
            return filteredData.value.slice(entries.value, entries.value + data.value.per_page)
     })
```
2. **Search for user** 

Similar to the filter function we also take all user information and display the results according to the keyword the user enters .

```javascript
 //Inside SearchUser.vue
   const searchedList = computed(() => {
            return EntireUserList.value.filter(user =>
                `${user.first_name} ${user.last_name}`.toLowerCase().includes(search.value.toLowerCase())
            )
        })
```
<div align="center">
 <img src='https://i.imgur.com/ELCIzUZ.png' >
</div>

## Contact

Ngo Vi Khang 

[My facebook](https://www.facebook.com/khang.ngovi.18)

vngo5419@gmail.com

## Acknowledgments
* [Tailwind Components](https://tailwindcomponents.com)
* [Google Icons](https://fonts.google.com/icons) 
* [Google Font](https://fonts.google.com)
