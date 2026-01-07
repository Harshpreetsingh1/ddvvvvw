let count = 0;

const decBtn = document.getElementById("dec-btn");

function increment() {
    count++;
    document.getElementById("count").innerText = count;

    // Enable the decrement button if count > 0
    if(count > 0){
        decBtn.disabled = false;
    }
}

function decrement() {
    if(count > 0){
        count--;
        document.getElementById("count").innerText = count;
    }

    // Disable the decrement button at 0
    if(count === 0){
        decBtn.disabled = true;
    }
}

// Initially disable the decrement button
decBtn.disabled = true;