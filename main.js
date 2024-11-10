// Function to update resume preview dynamically
function updateResume() {
    // Get values from form inputs
    const name = document.getElementById("name").value || "John Doe";
    const email = document.getElementById("email").value || "john.doe@example.com";
    const phone = document.getElementById("phone").value || "+1 234 567 890";
    const education = document.getElementById("education").value || "Bachelor's in Computer Science";
    const work = document.getElementById("work").value || "Software Developer at XYZ Corp.";
    const skills = document.getElementById("skills").value || "JavaScript, HTML, CSS";

    // Update preview
    document.getElementById("previewName").textContent = name;
    document.getElementById("previewEmail").textContent = email;
    document.getElementById("previewPhone").textContent = phone;
    document.getElementById("previewEducation").textContent = education;
    document.getElementById("previewWork").textContent = work;
    document.getElementById("previewSkills").textContent = skills;
}
