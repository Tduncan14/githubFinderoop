// document.getElementById('searchUser').addEventListener('keyup', getUser);




// function getUser(e){

//     console.log(e.target.value);

// }

 const github =new Github();

 const ui = new UI();

const searchUser = document.getElementById('searchUser');


searchUser.addEventListener('keyup',(e) =>{
 // get input text

const userText = e.target.value;

// Make http call
if(userText !== ''){
    console.log(userText)
    github.getUser(userText)
    .then(data =>{
        if(data.profile.message === 'Not Found'){
            //   alert('the user is not found');

            ui.showAlert('User not found','alert alert-danger');
        }

        else{
            //show profile
            console.log('repos',data.repos)
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }

      
    })
}
else{
    // clears the profile
    ui.clearProfile();
}

});