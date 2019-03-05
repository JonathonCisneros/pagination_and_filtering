/******************************************
    Student List Filtering and Pagination
    By Jonathon Cisneros
******************************************/
let page = document.querySelector('.page');
let studentList = document.querySelector('.student-list');
let student = document.querySelectorAll('.student-item');

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
function appendPageLinks () {
    const maxPageNum = Math.ceil(student.length / 10);
    let div = document.createElement('div');
    div.className = 'pagination';
    let ul  = '<ul>';
    for (let i = 1; i <= maxPageNum; i++) {
        ul += '<li><a href="#" class="paginationLink">' + i + '</a></li>';
    }
    ul += '</ul>'; // Close ul tag
    div.innerHTML = ul;
    page.appendChild(div); // Appends div to .page
} // End appendPageLinks

/***
    Hides all students
***/
function hideStudents() {
    for (let i = 0; i < student.length; i++) {
        student[i].classList.add('hidden'); // Added .hidden to design.css
    }
}

/***
    Shows 10 students depending on
    which page user is on
***/
function showPage (page) {

    hideStudents(); // Calls hideStudents function before displaying appropriate list

    let paginationLink = document.querySelectorAll('.paginationLink');

    // Removes .active from inappropriate paginationLink
    if (!page - 1) {
        for (let i = 0; i < paginationLink.length; i++) {
            paginationLink[i].classList.remove('active');
        }
    }
    
    paginationLink[page - 1].classList.add('active'); // Adds .active to paginationLink
    let limit = (page * 10) - 1;
    let i = limit - 9;
    for (i; i <= limit; i++) {
        student[i].classList.remove('hidden');
    }

    paginationFunc();

} // End showPage()

appendPageLinks();
showPage(1); // Starts program with first page

function paginationFunc () {
    let paginationLink = document.querySelectorAll('.paginationLink');
    for (let i = 0; i < paginationLink.length; i++) {
        paginationLink[i].addEventListener('click', () => {
            showPage(paginationLink[i].innerHTML); // Changes 'page'
        });
    }
}
