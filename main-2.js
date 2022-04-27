// short-term solution

let liked_ids = JSON.parse(localStorage.getItem("liked_ids"));
if (liked_ids === null) liked_ids = [];

for (let i = 0; i < liked_ids.length; i++) {
    document.querySelector(
        `[data-like-id='${liked_ids[i]}']`
    ).style.backgroundColor = "#4bb1b1";
}

function set_like(liked_id) {
    const liked_el = document.querySelector(`[data-like-id='${liked_id}']`);

    liked_el.addEventListener("click", () => {
        const ind = liked_ids.indexOf(liked_id);
        if (ind === -1) {
            liked_ids.push(liked_id);

            liked_el.style.backgroundColor = "#4bb1b1";
        } else {
            liked_ids.splice(ind, 1);

            liked_el.style.backgroundColor = "#8e8c8c";
        }

        localStorage.setItem("liked_ids", JSON.stringify(liked_ids));
    });
}

document.querySelectorAll("[data-like-id]").forEach((el) => {
    set_like(el.dataset.likeId);
});
