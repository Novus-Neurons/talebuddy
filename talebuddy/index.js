// Render navbar and load story data
document.addEventListener("DOMContentLoaded", function () {
    // Load the navbar content
    fetch("./components/navbar.html")
        .then(response => response.text())
        .then(navbarHtml => {
            document.getElementById("navbar").innerHTML = navbarHtml;
        });

    // Load and display the story data
    fetch("./telebuddy/stories/HACK_OCT.json")
        .then(response => response.json()) // Parse JSON data
        .then(storyData => {
            // Access story details
            const storyTitle = storyData.title;
            const storyPages = storyData.pages;

            // Display the story title and pages in the HTML
            const storyTitleElement = document.getElementById("story-title");
            const storyPagesElement = document.getElementById("story-pages");

            storyTitleElement.innerText = storyTitle;
            storyPagesElement.innerText = `Number of Pages: ${storyPages.length}`;

            // Display the individual pages of the story
            const storyContentElement = document.getElementById("story-content");
            storyContentElement.innerHTML = ""; // Clear previous content

            storyPages.forEach(page => {
                const pageTitle = page.page_title;
                const pageContent = page.page_content;

                const pageElement = document.createElement("div");
                pageElement.innerHTML = `<h2>${pageTitle}</h2>`;

                pageContent.forEach(paragraph => {
                    const paragraphElement = document.createElement("p");
                    paragraphElement.innerText = paragraph;
                    pageElement.appendChild(paragraphElement);
                });

                storyContentElement.appendChild(pageElement);
            });
        });
});
