/* ----------------------------------
   APPLY PAGE – Autofill Job
---------------------------------- */
const jobParams = new URLSearchParams(window.location.search);
const jobName = jobParams.get("job");
const jobField = document.getElementById("jobField");

if (jobField) {
    jobField.value = jobName ? jobName : "General Application";
}

/* ----------------------------------
   FAQ Accordion
---------------------------------- */
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const isOpen = answer.style.maxHeight;

        // Close all
        document.querySelectorAll(".faq-answer").forEach(a => a.style.maxHeight = null);
        document.querySelectorAll(".faq-question").forEach(q => q.classList.remove("active"));

        // Open selected
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            button.classList.add("active");
        }
    });
});

/* ----------------------------------
   Smooth Scroll (Optional)
---------------------------------- */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
