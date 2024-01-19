const delbtn = document.querySelector('a.delete');

delbtn.addEventListener('click', async(e)=>{
    const reqInfo = `/todo/delete-task/${delbtn.dataset.id}`;
    try {
        const res = await fetch(reqInfo, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        window.location.href = data.redirect;
    } catch(err){
        console.log(err)
    }
});


