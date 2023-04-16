
        let uDetails = [];
        const addDetails = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let user_detail = {
                Full_Name: document.getElementById("Uname").value,
                phoneNumber: document.getElementById("input_ph").value,
                email: document.getElementById("input_email").value,
                dob: document.getElementById("dob").value,
                password: document.getElementById("Pass").value,
            }
            uDetails.push(user_detail);
            

           p= localStorage.setItem('MyMovieList', JSON.stringify(uDetails) );
           console.log(uDetails);
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addDetails);
        });


        //  --------------- for log-in -------------------------------
        let loginDetails = [];
        const addLoginDetails = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let getLogin = {
                Full_Name: document.getElementById("Uname").value,            
                password: document.getElementById("Pass").value,
            }
            loginDetails.push(getLogin);            
            q= localStorage.setItem('User Login details', JSON.stringify(loginDetails) );
            console.log(loginDetails);
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('lgnBtn').addEventListener('click', addLoginDetails);
        });
        //  --------------- for log-in -------------------------------
        





