function showAddArticle() {
    $('#addNewArticle').modal('show')
}

function addArticle() {
    $('#article').append(`
    <div class="card" id="leftCol">
        <h2>${$('#newName').val()}</h2>
        <h5>${$('#newDate').val()}</h5>
        <div class="fakeimg">Image</div>
        <p>Image Description</p>
        <p>${$('#newDescription').val()}</p>
    </div>
    `)
}