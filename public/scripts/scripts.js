const delbtn = document.querySelector('a.delete');

if(delbtn) {
    delbtn.addEventListener('click', async()=>{
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
    
            const result = await res.json();
            
            if(result.status === 200){
                window.location.href = '/';
            }
    
        } catch(err){
            console.log(err)
        }
    });
}


const add_task = document.getElementById('add-task');

add_task.addEventListener('keydown', async (e) => {
    const reqInfo = '/todo/add-task/'
    const data = {
        tasks: add_task.value,
        isCompleted: false
    }
    try{
        if(e.code === 'Enter'){
            
            const response = await fetch(reqInfo, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if(result.status === 200){
                window.location.href = '/';
            }

        }
    } catch (err) {
        console.log(err);
    }
});




// click edit in every task
showInput = (taskId) => {
    const editInput = document.querySelector(`.edit-input[data-id="${taskId}"]`);
    if (window.getComputedStyle(editInput).display == 'none') {
        editInput.style.display = 'block'; 
    } else {
        editInput.style.display = 'none'; 
    }
}

// updating task
const editTask = document.getElementById('edit-task');

editTask.addEventListener('keydown', async (e)=> {
    const reqInfo = `/update-task/${editTask.getAttribute("name")}`
    // tangina?
    console.log(reqInfo);
});


