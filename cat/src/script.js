api_key = process.env.API_KEY;



async function getData(){
    try{

        fetch('https://api.thecatapi.com/v1/images/search', {

            method: 'GET',
            headers: {
                'x-api-key' : `$(api_key)`
            }
        })

        .then(response => response.json())
        .then(data => {
            console.log(data);

            const image = document.getElementById('image-element');

            image.src = data[0].url;
            image.style.display = "block";
        });
    }

    catch(error){
        console.error(error);
    }

    document.querySelector('.hidden').classList.remove('hidden')
}

