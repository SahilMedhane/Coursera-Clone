document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category');
    const levelSelect = document.getElementById('level');
    const courses = document.querySelectorAll('.course');

    categorySelect.addEventListener('change', filterCourses);
    levelSelect.addEventListener('change', filterCourses);

    function filterCourses() {
        const selectedCategory = categorySelect.value;
        const selectedLevel = levelSelect.value;

        courses.forEach(course => {
            const category = course.getAttribute('data-category');
            const level = course.getAttribute('data-level');

            if ((selectedCategory === 'all' || category === selectedCategory) &&
                (selectedLevel === 'all' || level === selectedLevel)) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    }
});
