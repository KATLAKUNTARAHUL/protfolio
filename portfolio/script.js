// Fade-in animation
window.addEventListener("load", () => {
    document.querySelectorAll(".fade").forEach(el => {
        el.style.opacity = 1;
    });

    // Animate skill bars
    document.querySelectorAll(".bar").forEach(bar => {
        const level = bar.getAttribute("data-level");
        bar.style.setProperty("--level", level + "%");
        bar.querySelector("::after");
        bar.style.setProperty("width", "100%");
        bar.style.setProperty("--fill", level);
        bar.style.setProperty("position", "relative");
        bar.style.setProperty("overflow", "hidden");
        bar.style.setProperty("background", "#ddd");

        bar.innerHTML = `<div style="height:6px;width:${level}%;background:orange;"></div>`;
    });
});

// Click LinkedIn
document.getElementById("linkedin").onclick = () => {
    window.open(
        "https://www.linkedin.com/in/katlakunta-rahul-ab9009329",
        "_blank"
    );
};

// Click Phone
document.getElementById("phone").onclick = () => {
    alert("Call: 8121631312");
};