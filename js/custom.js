// There are two things related with functions

// 2. Function calling/invoking and call/invoke
getMyName();
getmyname();

// 1. Function defination is one time process
function getmyname() { // The function name is not as per the camelCase standard
    // Function body
    console.log("Kartik"); //Statement = Instructions
}

// 1. Function defination is one time process
function getMyName() { // The function name is as per the camelCase standard
    // Function body
    // Inside the function body I can write many statements
    console.log("Dinesh"); //Statement = Instructions
}


//2. Function calling
getMyCompany("New Delhi");

// 1. Function Defination 
function getMyCompany(myplace) {

    console.log(myplace);
}

