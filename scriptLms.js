let form=document.getElementById("courseForm");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let courseName=document.getElementById("courseName").Value;
    let instructor=document.getElementById("instructorName").value;
    if(courseName===""||instructor===""){
        document.getElementById("message").innerText="Please fill all fields.";
        document.getElementById("message").style.color="red";
    }else{
        document.getElementById("message").innerText=
        courseName+"added successfully!";
        document.getElementById("message").style.color="green";
    }});
