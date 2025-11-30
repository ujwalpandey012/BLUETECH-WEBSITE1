/* =======================================================
   BLUE TECH IT SOLUTION - GLOBAL JAVASCRIPT
   Handles:
   ✔ Contact Form (Web3Forms)
   ✔ Job Apply Form (Web3Forms + CV Upload)
   ✔ FAQ Accordion
   ✔ Job Auto-fill Logic
   ✔ Smooth UI Feedback
   ======================================================= */

/* --------------------------
   CONTACT FORM
--------------------------- */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const result = document.getElementById("result");
        result.style.color = "#22dfff";
        result.innerHTML = "Sending...";

        let formData = new FormData(contactForm);

        let response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        let data = await response.json();

        if (data.success) {
            result.style.color = "#00ffcc";
            result.innerHTML = "Message sent successfully!";
            contactForm.reset();
        } else {
            result.style.color = "red";
            result.innerHTML = "Failed to send message. Try again.";
        }
    });
}

/* --------------------------
   APPLY FORM (Web3Forms + CV)
--------------------------- */
const applyForm = document.getElementById("applyForm");

if (applyForm) {
    applyForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const result = document.getElementById("result");
        result.style.color = "#22dfff";
        result.innerHTML = "Uploading CV & Sending Application...";

        let formData = new FormData(applyForm);

        let response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        let data = await response.json();

        if (data.success) {
            result.style.color = "#00ffcc";
            result.innerHTML = "Application submitted successfully!";
            applyForm.reset();
        } else {
            result.style.color = "red";
            result.innerHTML = "Submission failed. Please try again.";
        }
    });
}

/* --------------------------
   AUTO FILL JOB TITLE
--------------------------- */
const jobField = document.getElementById("jobField");

if (jobField) {
    const params = new URLSearchParams(window.location.search);
    const job = params.get("job");
    jobField.value = job ? job : "General Application";
}

/* --------------------------
   FAQ ACCORDION
--------------------------- */
document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;

        btn.classList.toggle("active");

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

