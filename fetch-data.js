async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById('api-data')

    try{
    const response = await fetch(apiUrl)
    if(!response.ok)return;
    const users = await response.json()
    dataContainer.innerHTML = ''
    const userList = document.createElement("ul")
    users.forEach((user)=> {
       const li = document.createElement("li")
       li.textContent = user.name;
       
       userList.append(li)
    })
    dataContainer.append(userList)

    }catch(error){
        dataContainer.innerHTML = 'Failed to load user data.'
        console.error(error)
    }
} 

document.addEventListener("DOMContentLoaded",fetchUserData)