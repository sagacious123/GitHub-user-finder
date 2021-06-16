class UI {
    constructor() {
        this.proflie = document.getElementById("profile");
    }
    showProfile(user) {
        this.proflie.innerHTML = `
            <div class="container">
                <div class="card card-body mb3">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${user.avatar_url}" class="img-fluid mb-4" alt="img">
                            <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block mb-4">Veiw Profile</a>
                        </div>
                        <div class="col-md-9">
                            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                            <span class="badge badge-success">Followers: ${user.followers}</span>
                            <span class="badge badge-info">Following: ${user.following}</span>
                            <br><br>
                            <ul class="list-group">
                                <li class="list-group-item">Username: ${user.login}</li>
                                <li class="list-group-item">Company: ${user.company}</li>
                                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                <li class="list-group-item">Location: ${user.location}</li>
                                <li class="list-group-item">Member Since: ${user.created_at}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
            }

    clearProfile() {
        this.proflie.innerHTML = '';
    }
}