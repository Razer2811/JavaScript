var listCoursesBlock = document.querySelector('#list-courses');
var coursesAPI = 'http://localhost:3000/course';
var editingCourseId = null;

function start() {
    getCourses(renderCourses);
    handleCreateForm();
    handleUpdateForm();
}

start();

function getCourses(callback) {
    fetch(coursesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
        .catch(function (error) {
            console.error(error);
        });
}

function renderCourses(courses) {
    var htmls = courses.map(function (course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description || course.decription}</p>
                <button onclick="handleDeleteCourses('${course.id}')">Xóa</button>
                <button onclick="handleUpdateCourses('${course.id}')">Sửa</button>
            </li>
        `;
    });

    listCoursesBlock.innerHTML = htmls.join('');
}

function createCoureses(data, callback){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(coursesAPI, options)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function handleDeleteCourses(id){
        var options = {
            method : 'DELETE'
        }
    fetch(coursesAPI + '/' + id,  options)
        .then(function(response){
            response.json();
        })
        .then(function(){

        })
}

function handleUpdateCourses(id) {
    fetch(coursesAPI + '/' + id)
        .then(function (response) {
            return response.json();
        })
        .then(function (course) {
            editingCourseId = id;
            document.querySelector('input[name="name"]').value = course.name;
            document.querySelector('input[name="decription"]').value =
                course.decription || course.description || '';

            document.querySelector('#create').style.display = 'none';
            document.querySelector('#update').style.display = 'inline-block';
        });
}

function updateCourse(id, data, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(coursesAPI + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function handleCreateForm(){
    var createBtn = document.querySelector("#create");
    createBtn.onclick = function(){
       var name = document.querySelector('input[name="name"]').value;
       var decription = document.querySelector('input[name="decription"]').value;
       
        var formData = {
            name : name,
            decription : decription 
        }
        createCoureses(formData, function () {
            getCourses(renderCourses);
        });
    };
}

function handleUpdateForm() {
    var updateBtn = document.querySelector('#update');

    updateBtn.onclick = function () {
        if (!editingCourseId) return;

        var formData = {
            name: document.querySelector('input[name="name"]').value,
            decription: document.querySelector('input[name="decription"]').value
        };

        updateCourse(editingCourseId, formData, function () {
            editingCourseId = null;
            document.querySelector('#create').style.display = 'inline-block';
            updateBtn.style.display = 'none';
            document.querySelector('input[name="name"]').value = '';
            document.querySelector('input[name="decription"]').value = '';
            getCourses(renderCourses);
        });
    };
}

