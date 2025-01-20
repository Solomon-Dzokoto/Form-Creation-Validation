async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById('api-data')

    try{
    const response = await fetch(apiUrl)
    const users = await response.json()
    dataContainer.innerHTML = ''
    const userList = document.createElement("ul")

    users.forEach( function (user){
      li = document.createElement("li")
      li.textContent = user.name

       userList.append( li )
    })
    dataContainer.append(userList)
    }catch(error){
        dataContainer.innerHTML = ''
        dataContainer.innerHTML = 'Failed to load user data.'
        console.error(error)
    }
} 

document.addEventListener("DOMContentLoaded",fetchUserData)