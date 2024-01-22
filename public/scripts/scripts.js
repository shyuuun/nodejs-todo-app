// date
setInterval(()=>{
    const date = new Date()
document.getElementById('date').textContent = date.getHours() + ":" + date.getMinutes();
}, 1000);


deleteTask = async(taskId) => {
    const delbtn = document.querySelector(`a.delete[data-id="${taskId}"]`);
        
    const listItem = document.querySelector('li');
    listItem.parentNode.removeChild(listItem);    
    
    const reqInfo = `/todo/delete-task/${taskId}`;

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
showInput = taskId => {
    const editInput = document.querySelector(`.edit-input[data-id="${taskId}"]`);
    if (window.getComputedStyle(editInput).display == 'none') {
        editInput.style.display = 'block'; 
    } else {
        editInput.style.display = 'none'; 
    }
}

// updating task
updateTask = async taskId => {
    const editForm = document.querySelector(`input[name="${taskId}"]`);
    const reqInfo = `/todo/update-task/${taskId}`;
    const data = {
        tasks: editForm.value
    };

    try {
        const response = await fetch(reqInfo, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();

        if(result.status === 200){
            window.location.href = '/';
        }
    } catch(err) {
        console.log(err);
    }
}

updateCheckTask = async taskId => {
    const editCheckBox = document.querySelector(`input[name="${taskId}"][type="checkbox"]`);
    const reqInfo = `/todo/update-task/${taskId}`;
    let data;
    if(editCheckBox.checked == true){
        data = {
            isCompleted: true
        }
    } else {
        data = {
            isCompleted: false
        }
    }
    try {
        const response = await fetch(reqInfo, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();

        if(result.status === 200){
            window.location.href = '/';
        }
    } catch(err) {
        console.log(err);
    }
}


