/******************************************
    Student List Filtering and Pagination
    By Jonathon Cisneros
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
const page = document.querySelector('.page');
const studentList = document.querySelector('.student-list');
const student = document.querySelectorAll('.student-item');
const pagination = document.createElement('div');
const pagUL = document.createElement('ul');

/***
    Appends search dynamically
    For exceeds
***/
/******************************************************
const pageHeader = document.querySelector('.page-header');
const search = document.createElement('input'); search.className = 'student-search';
search.placeholder = 'Search for students...';
 pageHeader.appendChild(search);
******************************************************/



/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.
   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/


/***
    Hides all students
***/
for (let i = 0; i < student.length; i++) {
    student[i].classList.add('hidden');
}

/***
    Shows 10 students depending on
    which page user is on
***/
function showPage (page) {
    let limit = (page * 10) - 1;
    let i = limit - 9;
    for (i; i <= limit; i++) {
        student[i].classList.remove('hidden');
    }
}

showPage(1); //Page number should be passed through here


/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
function appendPageLinks () {

}




// Remember to delete the comments that came with this file, and replace them with your own code comments.
