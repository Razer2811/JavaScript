var listCoursesBlock = document.querySelector('#list-courses');
var coursesAPI = 'http://localhost:3000/course';

function start() {
    getCourses(renderCourses);
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
            </li>
        `;
    });

    listCoursesBlock.innerHTML = htmls.join('');
}