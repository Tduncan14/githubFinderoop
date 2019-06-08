class Github{

    constructor(){
    

 this.client_id ='dbeac7307ba843c3c5ac';
 this.client_secret="d78df16f6123051b21b41c89777a8eb6479e8549";
 this.repos_count = 5;
 this.repos_sort='created:asc';
    }

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);



        const  repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();

        const  repos = await repoResponse.json();



        return{
            profile,
            repos
        }
     
    }

    
}