<div align="center">
  <h3 align="center">USER LIST WITH VUE 3</h3>
  <p align="center">
     Simple minimalist and responsive user list made with VUE 3 and TAILWIND !
  </p>
</div>

<img src='https://i.imgur.com/5UIudWU.png'>
<img src='https://i.imgur.com/1X1dU0G.png'>


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
<img src='https://i.imgur.com/ENCGPYo.png'>

**Let me explain:**
- UserApi.js initializes axios with HTTP base Url and headers.
- To have a CRUD of users I will use a Composition API thing called composable,which is a separate file that will contain all the methods we need
- There are 2 main components: ListUser to display main content of the app and UserForm to Create or Update user's information .
- In addition to the search and filter function , i create Modal(Edit and Crate) for resposive design and it's mobile-friendly


### Problems that i find very challenging to deal with 

**Filter Entire User's List ** 

In order to be able to filter out the users'data into ascending or descending order or search for users, we must take all the user data.

###### Inside Users.js I create a function that takes all user information through the Paginated API by recursion . ######

```javascript
  const getEntireUserList = async (pageNo=1)=>{
        let res = await getPageData({page:pageNo}); // I get the data from the current page.
        if (res.length > 0) {
          EntireUserList.value= EntireUserList.value.concat(res) //Push the page's data to EntireUserList
          res.concat(await getEntireUserList(pageNo+1));//Run back the function for the next page till the last page.  
        } else { 
            return 
        }
        return res
      }
```

The list will be filtered according to our filtering options , we exceute the filter data function with 
two dependencies, **filteredData**-where data is stored after filtering and **EntrireUserList**-cotain all user's data we mentioned above. 

```javascript
 //Inside ListUser.vue
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
After the filtering process is completed , we must retrieve the filtered list and divide it by each page and display users data based on the list we just filtered in ascending or descending order
```javascript
 const filterbyPage = computed(() => {
            return filteredData.value.slice(entries.value, entries.value + 6)
     })
```
**Search for user** 
Similar to the filter function we also take all user information and display the results by user's name according to the keyword the user enters .
```javascirpt
   //Inside SearchUser.vue
   const searchedList = computed(() => {
            return EntireUserList.value.filter(user =>
                `${user.first_name} ${user.last_name}`.toLowerCase().includes(search.value.toLowerCase())
            )
        })
```



