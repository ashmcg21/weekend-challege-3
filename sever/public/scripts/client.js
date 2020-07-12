$(document).ready(onReady);

const list = [];

function onReady() {
    console.log('JQ is up and running!');
    $('#js-TODOlist').on('submit', runTasks);
    render();
}



function runTasks(event) {
    event.preventDefault();
    const listedItems = {
        task: $('#js-todo').val()
    }


    $('#js-todo').val('');
        list.push(listedItems);
        console.table(list);

    render();
}



function render() {
    $('#js-table-body').empty();

    for (let listedItems of list){
        $('#js-table-body').append(` 
    <tr>
        <td>${listedItems.task}</td>
        <td><button class="js-btn-delete">X</button></td>
    </tr>
        `);
    }
}