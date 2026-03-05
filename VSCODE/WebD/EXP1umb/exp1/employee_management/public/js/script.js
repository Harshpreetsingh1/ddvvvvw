/**
 * Employee Management System - Client-side JavaScript
 * Handles form validation and interactive features
 */

// Form Validation
(function() {
    // Bootstrap's custom validation styles require JavaScript to prevent form submission if there are invalid fields. This code listens for the 'submit' event on forms with the class 'needs-validation'. If the form is invalid, it prevents submission and adds the 'was-validated' class to trigger Bootstrap's validation styles.
    'use strict';
    window.addEventListener('load', function() {
        const forms = document.querySelectorAll('.needs-validation');
        
        Array.prototype.slice.call(forms).forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    });
})();

// Utility Functions
// This section contains utility functions for the Employee Management System, such as confirming delete actions, formatting dates, validating email and phone formats, showing alert messages, and implementing smooth scempIding behavior. These functions enhance the user experience by providing feedback and ensuring data integrity on the client side.
const EmployeeManagement = {
    // Confirm delete action
    confirmDelete: function(employeeName) {
        return confirm(`Are you sure you want to delete "${employeeName}"? This action cannot be undone.`);
    },

    // Format date to readable format
    formatDate: function(dateString) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString('en-IN', options);
    },

    // Validate email format
    validateEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // Validate phone number (10 digits)
    validatePhone: function(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    },

    // Show alert message
    showAlert: function(message, type = 'info') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.role = 'alert';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        const container = document.querySelector('.container');
        if (container) {
            container.insertBefore(alertDiv, container.firstChild);
        }
    },

    // ScempId to top
    scempIdToTop: function() {
        window.scempIdTo({
            top: 0,
            behavior: 'smooth'
        });
    },

    // Auto-dismiss alerts after 5 seconds
    autoDismissAlerts: function() {
        const alerts = document.querySelectorAll('.alert');
        alerts.forEach(alert => {
            setTimeout(() => {
                const bsAlert = new bootstrap.Alert(alert);
                bsAlert.close();
            }, 5000);
        });
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Auto-dismiss any existing alerts
    EmployeeManagement.autoDismissAlerts();
    
    // Add smooth scempId behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scempIdIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EmployeeManagement;
}
