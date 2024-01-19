const delbtn = document.querySelector('a.delete');

delbtn.addEventListener('click', async(e)=>{
    const listItem = document.querySelector('li');
    listItem.parentNode.removeChild(listItem);
    
    const reqInfo = `/todo/delete-task/${delbtn.dataset.id}`;

    try {
        const res = await fetch(reqInfo, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        console.log(data.status);

    } catch(err){
        console.log(err)
    }
});


