const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-3x");
const colorsArray = ["maroon", "orange", "blue", "purple", "indigo"]
updateRating(0);
starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", ()=>{
        updateRating(index);
    });
});

function updateRating(index){
    starsEl.forEach((starEl, idx)=>{
        if (idx < index + 1){
            starEl.classList.add("active");

        }else{
            starEl.classList.remove("active");
        }
    });
    emojisEl.forEach(emojiEl=>{
        emojiEl.style.transform = `translateX(-${index * 46}px)`;
    emojiEl.style.color = colorsArray[index]
    });
}