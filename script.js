document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const studentName = document.getElementById('studentName').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;

    // Create a new row in the attendance table
    const table = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const statusCell = newRow.insertCell(1);

    nameCell.textContent = studentName;
    statusCell.textContent = attendanceStatus;

    // Clear the form
    document.getElementById('attendanceForm').reset();
});