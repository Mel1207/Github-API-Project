
export class Github {
    constructor() {
        this.client_id = 'edd2e1bb4b5f5d6f9266';
        this.client_secret = '92db0db704c79e64fee71965733f78de1fecccf5';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_=id${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        return{
            profile
        }
    }
}

export class UI {
    constructor () {
        this.profile = document.querySelector('#profile');
    }

    showProfile (user) {
        // console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-primary">Follower: ${user.followers}</span>
                <span class="badge badge-secondary">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repost</h3>
    <div id="repos"></div>`;
    
    }

    // Show alert message
    showAlert(message, className) {
        // Clear any remaining alerts
        this.clearAlert();
        // Create a Div
        const div = document.createElement('div');
        // Add class
        div.className = className;
        // Add Text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert Alert
        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 2000)
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}



















