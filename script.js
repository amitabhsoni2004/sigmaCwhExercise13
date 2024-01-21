function createCard(title, cName, views, monthsOld, duration, tumbnail) {

    let viewStr;
    if (views < 1000) {
        viewStr = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }

    let html = ` <div class="card">
    <div class="image">
        <img src="${tumbnail}"
            alt="tumbnail">
            <div class="capsule">
               ${duration}
            </div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} month ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    createCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ");
});
