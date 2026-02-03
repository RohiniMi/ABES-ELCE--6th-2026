const div = document.getElementById("products");
const btn = document.getElementById("btn");

const getData = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        return data;
    } catch (error) {
        return "unable to fetch data";
    }
}
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = await getData();
    data.map((d) => {
        const insideDiv = document.createElement("div");
        insideDiv.innerHTML = d.title;
        div.appendChild(insideDiv);
    })
})

