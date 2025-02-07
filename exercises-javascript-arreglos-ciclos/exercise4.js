let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourses = (courses1, courses2) => {
    for(let course of courses1){
        if(courses2.includes(course)){
            console.log(course);
        }
    }
};

commonCourses(student1Courses, student2Courses);