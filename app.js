const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = ""


panel.addEventListener("click", (e)=> {
    if(e.target.parentNode.classList.contains("rating") || e.target.classList.contains("rating")){
        ratings.forEach(item => {
            item.classList.remove("active");
        })
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
})

sendBtn.addEventListener("click",(e)=>{
    panel.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/1839/1839377.png" />
    <strong>Thank You ! </strong>
    </br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support </p>
    `
})