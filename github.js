class Github  {
    constructor() {
        this.client_id = '4ebb81fd826cf373a4bb';
        this.client_secret = '31329f53210544c13dc092a2fbd28861c06feaf9';
    }
    
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client-secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}