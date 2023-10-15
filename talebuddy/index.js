// render navbar
document.addEventListener("DOMContentLoaded", function () {
    // Load the navbar content
    fetch("./components/navbar.html")
        .then(response => response.text())
        .then(navbarHtml => {
            document.getElementById("navbar").innerHTML = navbarHtml;
        });


    // fetchAllCards
    async function fetchAllcards() {
        await fetch("./allStories.json")
            .then(responce => responce.json())
            .then(data => {
                // console.log(data.chapter_data_paths)
                for (let i = 0; i < data.story_paths.length; i++) {
                    console.log("card path : ", data.story_paths[i])
                    rendercard(`.${data.story_paths[i]}`)
                }
                // let allchapter = JSON.parse(data)
            })
    }

    //render Cards
    async function rendercard(path) {

        console.log(path)
        let carddata;
        await fetch(path)
            .then(response => response.json())
            .then(cardData => {
                console.log("cardData : ", cardData)
                carddata = cardData

            });

        await fetch("./components/card.html")
            .then(responce => responce.text())
            .then((componentHTML) => {
                const cardsContainer = document.getElementById("Allcards")

                // const type = typeof componentHTML 
                // console.log(type) // string

                const FinalCardComponent = componentHTML
                    .replace(/{{Cardtitle}}/g, carddata.title)
                    .replace(/{{CardDescription}}/g, carddata.about_story);

                cardsContainer.innerHTML += FinalCardComponent

            })
    }

    fetchAllcards()

});
