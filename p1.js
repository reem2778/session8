const fetchRandomUserData = async function (){
    try{
        const response = await fetch('https://randomuser.me/api');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
        
    }
    catch(error){
        console.error(error);
    }
    
}

const p = document.getElementById('p');

const displayUserData =  async function (){
    try{ const data = await fetchRandomUserData();
        const email = data.results[0].email;
        const nameObject = data.results[0].name;
        const name = `${nameObject.title} ${nameObject.first} ${nameObject.last}`

        p.innerText = `Name: ${name}
        Email: ${email}`
    }
    catch(error){
        console.error(error);
    }
}
