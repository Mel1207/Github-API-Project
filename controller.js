import {Github, UI} from './model.js';

// init Github
const github = new Github();
// Init UI
const ui = new UI();

// Search input
const searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== '') {
        // console.log(userText);
        github.getUser(userText)
        .then(data => {
            console.log(data);
            if(data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User not Found', 'alert alert-danger');
                ui.clearProfile();

            } else {
                // Show profile
                ui.showProfile(data.profile);
            }
        });
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});