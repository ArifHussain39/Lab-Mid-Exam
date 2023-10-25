function formData(){


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("contact").value;
    var description = document.getElementById("Description").value;
    var address = document.getElementById("Address").value;

   
        if(name !== "" && email !== "" && phone !== "" && description !== "" && address !== ""){
            console.log(name);
            console.log(email);
            console.log(phone);
            console.log(description);
            console.log(address);
            // submit the form
        } else {
            alert("Please fill in all the fields.");
        }
    
}