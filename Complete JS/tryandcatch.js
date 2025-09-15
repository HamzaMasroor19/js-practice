fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => {
    console.log("✅ Got response:", res.status);
    return res.json();
})
.then(data => {
    console.log("✅ First post:", data[0]);
})
.catch(err => console.log("❌ Error:", err));
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {
  try {
    console.log(data[500].title);
  } catch (err) {
    console.log(" Error in processing data:", err.message);
  }
})
.catch(err => console.log(" Fetch error:", err));
