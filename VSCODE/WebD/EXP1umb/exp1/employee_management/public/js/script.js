(function() {
    
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

const EmployeeManagement = {
    
    confirmDelete: function(employeeName) {
        return confirm(`Are you sure you want to delete "${employeeName}"? This action cannot be undone.`);
    },

    
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

    
    validateEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    
    validatePhone: function(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    },

    
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

    
    scempIdToTop: function() {
        window.scempIdTo({
            top: 0,
            behavior: 'smooth'
        });
    },

    
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

document.addEventListener('DOMContentLoaded', function() {
    
    EmployeeManagement.autoDismissAlerts();
    
    
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

if (typeof module !== 'undefined' && module.exports) {
    module.exports = EmployeeManagement;
}
