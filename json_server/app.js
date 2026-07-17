var courseApi = 'http://localhost:3000/course';

fetch(courseApi)
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Lỗi HTTP: ' + response.status);
        }

        return response.json();
    })
    .then(function (courses) {
        console.log(courses);
    })
    .catch(function (error) {
        console.error('Không lấy được courses:', error);
    });