// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function validateInput(username, password) {  
    return username !== "" && password !== "";
    
}
function checkCredentials(username, password) {  
    // Dummy check: In a real app, you'd compare with a database  return username === "admin" && password === "1234";
    
}
function login(username, password) {  
    if (validateInput(username, password)) {   
        if (checkCredentials(username, password)) {      
            console.log("Login successful!");    
            
        } else 
        {      console.log("Invalid credentials.");    
            
        }  
        
    } 
    else {   
        console.log("Username or password cannot be empty.");  
        
    }
    
}
login("admin", "1234");