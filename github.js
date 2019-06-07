class Github{

    constructor(){
    

 this.client_id ='dbeac7307ba843c3c5ac';
 this.client_secret="d78df16f6123051b21b41c89777a8eb6479e8549";
    }

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();

        return{
            profile
        }
     
    }

    
}