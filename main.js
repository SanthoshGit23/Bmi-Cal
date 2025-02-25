document.getElementById('btn').addEventListener('click', function() {
    var weight = parseFloat(document.getElementById('weight-input').value);
    var height = parseFloat(document.getElementById('height-input').value) / 100; // Convert cm to m
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }
    var bmi = weight / (height * height);
    document.getElementById('bmi-output').value = bmi.toFixed(2);
});

document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('weight-input').value = '';
    document.getElementById('height-input').value = '';
    document.getElementById('bmi-output').value = '';
});