document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultSection = document.getElementById('result-section');
    const bmiValueElement = document.getElementById('bmi-value');
    const bmiCategoryElement = document.getElementById('bmi-category');
    const nutritionContent = document.getElementById('nutrition-content');

    calculateBtn.addEventListener('click', calculateBMI);

    function calculateBMI() {
        const weightInput = parseFloat(document.getElementById('weight').value);
        const weightUnit = document.getElementById('weight-unit').value;
        const heightInput = parseFloat(document.getElementById('height').value);
        const heightUnit = document.getElementById('height-unit').value;

        if (isNaN(weightInput) || isNaN(heightInput) || weightInput <= 0 || heightInput <= 0) {
            alert('Please enter valid positive numbers for weight and height.');
            return;
        }

        let weightKg = weightInput;
        let heightM = heightInput;

        // Convert to standard units (kg and meters)
        if (weightUnit === 'lbs') {
            weightKg = weightInput * 0.453592;
        }

        if (heightUnit === 'cm') {
            heightM = heightInput / 100;
        } else if (heightUnit === 'ft') {
            heightM = heightInput * 0.3048;
        }

        const bmi = weightKg / (heightM * heightM);
        const bmiRounded = bmi.toFixed(1);

        displayResult(bmiRounded);
    }

    function displayResult(bmi) {
        let category = '';
        let className = '';
        let plan = [];

        if (bmi < 18.5) {
            category = 'Underweight';
            className = 'underweight';
            plan = [
                'Increase calorie intake with nutrient-rich foods.',
                'Include more protein (eggs, meat, beans) to build muscle.',
                'Eat more frequent meals (5-6 small meals a day).',
                'Incorporate healthy fats like avocados, nuts, and olive oil.',
                'Strength training can help build muscle mass.'
            ];
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal Weight';
            className = 'normal';
            plan = [
                'Maintain a balanced diet rich in fruits, vegetables, and whole grains.',
                'Keep physically active with at least 150 minutes of moderate exercise per week.',
                'Drink plenty of water and stay hydrated.',
                'Limit processed foods and sugary drinks.',
                'Regular check-ups to monitor overall health.'
            ];
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            className = 'overweight';
            plan = [
                'Aim for a moderate calorie deficit to lose weight gradually.',
                'Increase physical activity, aiming for 30 minutes daily.',
                'Focus on portion control and mindful eating.',
                'Replace refined carbs with whole grains and fiber-rich foods.',
                'Avoid late-night snacking and processed sugars.'
            ];
        } else {
            category = 'Obese';
            className = 'obese';
            plan = [
                'Consult a healthcare provider for a personalized weight loss plan.',
                'Focus on low-calorie, high-volume foods like vegetables.',
                'Avoid high-sugar and high-fat foods completely.',
                'Start with low-impact exercises like walking or swimming.',
                'Monitor progress regularly and seek support if needed.'
            ];
        }

        bmiValueElement.textContent = bmi;
        bmiCategoryElement.textContent = category;
        
        // Reset classes
        bmiValueElement.className = '';
        bmiCategoryElement.className = '';
        
        // Add specific color class
        bmiValueElement.classList.add(className);
        bmiCategoryElement.classList.add(className);

        // Render Nutrition Plan
        let planHTML = '<ul class="nutrition-list">';
        plan.forEach(item => {
            planHTML += `<li>${item}</li>`;
        });
        planHTML += '</ul>';
        nutritionContent.innerHTML = planHTML;

        // Show result section
        resultSection.classList.remove('hidden');
        
        // Scroll to result
        resultSection.scrollIntoView({ behavior: 'smooth' });
    }
});
