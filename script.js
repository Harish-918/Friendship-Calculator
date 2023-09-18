function calculateFriendship(){
    
    const name1 = document.getElementById("name1").value.trim()
    const name2 = document.getElementById("name2").value.trim()

    if(name1==="" || name2===""){
        alert("Please enter both names.")
    }else{
        const friendshipPercentage = Math.floor(Math.random() * 101)

    const result = document.getElementById("result")
    
    result.innerHTML = `${name1} and ${name2} 's Friendship Percentage is ${friendshipPercentage}%`

    if(friendshipPercentage < 30){
        result.innerHTML += "<br> Not a Great one"
    }else if(friendshipPercentage >= 30 && friendshipPercentage < 70){
        result.innerHTML += "<br> Good Buddies"
    }else{
        result.innerHTML += "<br> Best Friendship"
    }
    }
    
}