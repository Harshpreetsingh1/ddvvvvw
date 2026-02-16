
let circles = [];
let currentColor = '#2196F3';


const svgCanvas = document.getElementById('svgCanvas');
const colorPicker = document.getElementById('colorPicker');
const undoBtn = document.getElementById('undoBtn');
const circleCount = document.getElementById('circleCount');

function init() {
    setupEventListeners();
    
    updateUI();
}
function setupEventListeners() {
    svgCanvas.addEventListener('click', handleCanvasClick);
    
    colorPicker.addEventListener('change', handleColorChange);
    
    // Undo button click event
    undoBtn.addEventListener('click', handleUndo);
    
    // Mouse move event for visual feedback (optional)
    svgCanvas.addEventListener('mouseenter', () => {
        svgCanvas.style.cursor = 'crosshair';
    });
}

// Handle canvas click to draw circle
function handleCanvasClick(event) {
    // Get the SVG canvas bounding rectangle
    const svgRect = svgCanvas.getBoundingClientRect();
    
    // Get viewBox dimensions
    const viewBox = svgCanvas.viewBox.baseVal;
    const viewBoxWidth = viewBox.width;
    const viewBoxHeight = viewBox.height;
    
    // Calculate the click position relative to the SVG canvas
    const x = ((event.clientX - svgRect.left) / svgRect.width) * viewBoxWidth;
    const y = ((event.clientY - svgRect.top) / svgRect.height) * viewBoxHeight;
    
    // Create and add circle
    createCircle(x, y, currentColor);
}

// Create a circle at the specified position
function createCircle(x, y, color) {
    // Create circle element
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    
    // Set circle attributes
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', 10); // radius of 10 units
    circle.setAttribute('fill', color);
    circle.setAttribute('class', 'new-circle');
    
    // Add circle to SVG canvas
    svgCanvas.appendChild(circle);
    
    // Store circle data
    circles.push({
        element: circle,
        x: x,
        y: y,
        color: color
    });
    
    // Update UI
    updateUI();
    
    // Remove animation class after animation completes
    setTimeout(() => {
        circle.classList.remove('new-circle');
    }, 300);
}

// Handle color change
function handleColorChange(event) {
    currentColor = event.target.value;
}

// Handle undo action
function handleUndo() {
    if (circles.length === 0) {
        return;
    }
    
    // Get the last circle
    const lastCircle = circles.pop();
    
    // Remove from SVG canvas with fade-out effect
    lastCircle.element.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';
    lastCircle.element.style.opacity = '0';
    lastCircle.element.style.transform = 'scale(0)';
    
    setTimeout(() => {
        svgCanvas.removeChild(lastCircle.element);
    }, 200);
    
    // Update UI
    updateUI();
}

// Update UI elements
function updateUI() {
    // Update circle count
    circleCount.textContent = circles.length;
    
    // Enable/disable undo button based on circles array
    if (circles.length === 0) {
        undoBtn.disabled = true;
    } else {
        undoBtn.disabled = false;
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    // Undo with Ctrl+Z or Cmd+Z
    if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
        event.preventDefault();
        handleUndo();
    }
});

// Initialize the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
