
function showPopup(type) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    
    let content = '';
    switch (type) {
        case 'admin':
            content = `
                <h2>Admin Dashboard</h2>
                <p>Manage student data, results, and departmental settings.</p>
                <a href="/admin_dashboard" class="btn-primary">Go to Admin</a>
            `;
            break;
        case 'student':
            content = `x
                <h2>Student Dashboard</h2>
                <p>Access personal information, academic details, and results.</p>
                <a href="/student_dashboard" class="btn-primary">Go to Student</a>
            `;
            break;
        case 'results':
            content = `
                <h2>Results</h2>
                <p>View and download semester-wise results.</p>
                <a href="/results" class="btn-primary">View Results</a>
            `;
            break;
        case 'notifications':
            content = `
                <h2>Notifications</h2>
                <p>Stay updated with the latest announcements and news.</p>
                <a href="/notifications" class="btn-primary">View Notifications</a>
            `;
            break;
        default:
            content = `<p>Invalid section.</p>`;
    }

    popupText.innerHTML = content;
    popup.style.display = 'flex';
}


function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}