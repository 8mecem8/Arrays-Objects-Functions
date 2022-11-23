const main =  async()=>
{
    async function  getData() 
    {
        source = await fetch("https://jsonplaceholder.typicode.com/users")
        data = await source.json()
        return data 
    }
   
   
   let users = await getData()


    //We no longer want to be responsible for the users’ phone numbers. Please create a function that will loop through the array and set the phone numbers = null. Call the function.
    sfunc = (() =>{users.forEach(arg => arg.phone = null);})()
    
    //Make a function called getUserInfo that returns the user object found using the email passed as a parameter
    getUserInfo = (emailToMatch/* email must be string */) =>{return users.filter(arg => arg.email == emailToMatch)}

    //Kurtis Weissnat (Telly.Hoeger@billy.biz)  just submitted a request to change his username to “Eren Yeager”. We want to be able to change people’s usernames easily. 
    //Make a function that takes 2 parameters “email” and “newUsername”
    //The function should change the username of the user with that email
    changeUsername = (emailToMatch/* email must be string */,nameToChange/* name must be a string */) =>
    {
        user = getUserInfo(emailToMatch), user instanceof Array ? user[0].name = nameToChange : user instanceof Object ? user.name = nameToChange : console.error('Please check the data')
    
    }

    //Pass your arguments changeUsername("Telly.Hoeger@billy.biz", “Eren Yeager”)
    changeUsername("Telly.Hoeger@billy.biz", "Eren Yeager")

    //We just started a points program and have a list of how many points each user gets each month based on their subscription. [50, 20, 40, 33, 60, 20, 90, 110, 15, 30] 
    //The array is ordered so that arr[0] ‘50’ is for the first user, etc.
    //Make a function that will Iterate through this array, grab the data, and create new properties on the objects called monthlyPoints and set it equal to the data
    //For example to first user should have a property monthlyPoints: 50
    setMonthlyPoints = (() =>{Points = [50, 20, 40, 33, 60, 20, 90, 110, 15, 30], users.forEach((arg, i) => arg.monthlyPoints = Points[i]);})()


    //Make a variable months and set it equal to a number
    setMonths = (() =>{users.forEach(arg => arg.months = Math.ceil(Math.random() * 12) /* 12 months in a year */)})()
    
    //Make a function that For every month, add points to the users’ account.
    setMonthlyPoints = (() =>{users.forEach(arg => arg.monthlyPoints += arg.months * 5  /* each month gets 5 points  */)})()
    
    //This month is special! We are going to add an additional 10% to everyone’s point totals! Create a function to do this (example: if someone has 200 points, we will bump it up to 220)
    setSpecialPoints = (() =>{users.forEach(arg => arg.monthlyPoints = Math.floor((arg.monthlyPoints + (arg.months * 5))*1.10))})()

    //The user with email Chaim_McDermott@dana.io has submitted a request to delete her account. Make a function that will remove her from the array (taking the email as a parameter).
    deleteUser = ((email= 'Chaim_McDermott@dana.io' /* email must be string */) =>{return users = users.filter(arg => arg.email !== email)})()


    console.log(users)
}
main()