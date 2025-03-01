// console.log('Completed One')

document.getElementById('completed-six').addEventListener('click',function(){
    console.log('completed-six')
    alert('Board Update Successfully')
    alert('Congrates!!! You have completed the current task')


    const nameOfTask = getTextById('task-name-six')
     console.log(nameOfTask) ;

    let date = new Date();
    let todayDate = date.toLocaleString()
    console.log(todayDate)

    const totalNumber = getById('total-number')
    console.log(totalNumber)

    const toatalTask = getById('task-assigned')
    console.log(toatalTask)

    const assignedTask = toatalTask-1
    document.getElementById('task-assigned').innerText = assignedTask

    const  number = totalNumber + 1
    document.getElementById('total-number').innerText = number

    const active = document.getElementById('activity')
    const div = document.createElement('div')
    div.innerHTML = `<div class='bg-[#F4F7FF] p-2 rounded-lg  mt-2'>You have completed the task ${nameOfTask} at ${todayDate}</div>`
    active.appendChild(div)
})

document.getElementById('completed-six').addEventListener('click',function(){
    document.getElementById("completed-six").disabled = true;
})

document.getElementById('activity-delete').addEventListener('click',function(){
    const allInfo=document.getElementById('activity')
    allInfo.remove();
})