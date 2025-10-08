
var students = [
    {
        name: 'Karan',
        rollNumber: 5031,
        DBMS: 98,
        TOC: 85,
        NM: 89,
        EM: 90,
    },
    {
        name: 'Omkar',
        rollNumber: 5052,
        DBMS: 89,
        TOC: 95,
        NM: 79,
        EM: 83,
    },
    {
        name: 'Hansket',
        rollNumber: 113,
        DBMS: 90,
        TOC: 88,
        NM: 80,
        EM: 79,
    }
]
var main = document.getElementById('main')
var searched = document.getElementById("search")
function add() {
    for (var i = 0; i < students.length; i++) {
        main.innerHTML += `
<tr>
<td>${[i + 1]}</td>
<td>${students[i].name}</td>
<td>${students[i].rollNumber}</td>
<td>${students[i].DBMS}</td>
<td>${students[i].TOC}</td>
<td>${students[i].NM}</td>
<td>${students[i].EM}</td>
<td>${students[i].DBMS + students[i].TOC + students[i].NM + students[i].EM}</td>
<td>${((students[i].DBMS + students[i].TOC + students[i].NM + students[i].EM ) * 100 / 400).toFixed(2)}%</td>
<td><input type="button" value="Delete" class="delBtn" onclick="deleteRow(this)"></td>
<tr>
`};
}
add();
function search() {
    var found = false;
    for (i = 0; i < students.length; i++) {
        if (searched.value.toLowerCase() == students[i].name.toLowerCase()) {
            found = true;
            Swal.fire({
                // title: `Student Found!`,
                title: `Name: ${students[i].name}`,
                text: ` Database System: ${students[i].DBMS} | Theory of Computation: ${students[i].TOC} | Numerical Method: ${students[i].NM} | Environmental Management ${students[i].EM}} | Total: ${students[i].DBMS + students[i].TOC + students[i].NM + students[i].EM} | Percentage: ${((students[i].DBMS + students[i].TOC + students[i].NM + students[i].EM) * 100 / 400).toFixed(2)}%`,
                icon: 'success',
                confirmButtonText: 'Done'
            });
            searched.value = ""
        }
    }            
    if (found === false) {
        Swal.fire({
            icon: 'error',
            title: 'Error Finding Student',
            text: searched.value + ' Is Not In This List',
        })
        searched.value = ""
    }
}
function newStudent() {
    Swal.fire({
      title: 'Enter Student Details',
      html:
      '<input id="swal-input1" class="swal2-input" placeholder="Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Roll Number">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Database System">' +
        '<input id="swal-input4" class="swal2-input" placeholder="Theory of Computation">' +
        '<input id="swal-input5" class="swal2-input" placeholder="Numerical Method">' +
        '<input id="swal-input6" class="swal2-input" placeholder="Environmental management">', 
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('swal-input1').value;
        const rollNumber = document.getElementById('swal-input2').value;
        const math = parseInt(document.getElementById('swal-input3').value);
        const eng = parseInt(document.getElementById('swal-input4').value);
        const urd = parseInt(document.getElementById('swal-input5').value);
        const sci = parseInt(document.getElementById('swal-input6').value);
  
        if (isNaN(DBMS) || isNaN(TOC) || isNaN(NM) || isNaN(EM)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please enter numeric values for DBMS, TOC, NM, EM.',
          })
          return false; 
        }
  
        return [name, rollNumber, DBMS,TOC,NM,EM];
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const formValues = result.value;
  
        const student = {
          name: formValues[0],
          rollNumber: parseInt(formValues[1]),
          math: parseInt(formValues[2]),
          eng: parseInt(formValues[3]),
          urd: parseInt(formValues[4]),
          sci: parseInt(formValues[5]),
        };
  
        students.push(student);
        const index = students.length - 1;
        main.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.DBMS}</td>
            <td>${student.TOC}</td>
            <td>${student.NM}</td>
            <td>${student.EM}</td>
            <td>${student.DBMS + student.TOC + student.NM + student.EM}</td>
            <td>${((student.DBMS + student.TOC + student.NM + student.EM) * 100 / 400).toFixed(2)}%</td>
            <td><input type="button" class="delBtn" value="Delete" onclick="deleteRow(this)"></td>
          </tr>
        `;
      }
    });
  }

  
function deleteRow(r) {
  if (confirm('Are you sure to delete this record ?')) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}}