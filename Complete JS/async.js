// async function example
async function fetchData() {
    return "Hamza is learning async/await 🚀";
}

// using await
async function showData() {
    let message = await fetchData();
    console.log(message);
}

showData();
