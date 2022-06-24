const account = {};  
  
function empty(obj) {  
    for (let test in obj) {  
        if (obj.hasOwnProperty(test)) {  
            return false;  
        }  
    }  
    return true;  
}  
empty(account); 