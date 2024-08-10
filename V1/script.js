document.addEventListener('DOMContentLoaded', () => {
    const roleText = document.getElementById('role-text');
    const roles = [
        { text: 'UI/UX Designer', className: 'role-text-1' },
        { text: 'Student', className: 'role-text-2' },
        { text: 'Developer', className: 'role-text-3' },
        { text: 'Discord Bot Developer', className: 'role-text-4' },
    ];

    let index = 0;

    function updateRoleText() {
        roleText.classList.remove(roles[index].className);
        index = (index + 1) % roles.length;
        roleText.textContent = roles[index].text;
        roleText.classList.add(roles[index].className);
    }

    setInterval(updateRoleText, 2000); // Changement toutes les 2 secondes
});
