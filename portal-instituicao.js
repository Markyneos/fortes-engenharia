document.addEventListener('DOMContentLoaded', () => {
    const detailsElements = document.querySelectorAll('tbody details');

    detailsElements.forEach(details => {
        details.addEventListener('toggle', () => {
            if (details.open) {
                detailsElements.forEach(otherDetails => {
                    if (otherDetails !== details && otherDetails.open) {
                        otherDetails.open = false;
                    }
                });
            }
        });
    });
});

document.querySelectorAll('button[data-url]').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = button.getAttribute('data-url');
    });
});