const url = "https://jsonplaceholder.typicode.com/posts/1";
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

async function fetchData(callback) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        callback(data.title);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.getElementById('btn').addEventListener('click', () => {
    const outputDiv = document.getElementById('output');
    
    // Call the fetchData function with a callback
    fetchData((title) => {
        outputDiv.textContent = `Title: ${title}`;
    });
});

//your JS code here. If required.
