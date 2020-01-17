// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardMaker(obj){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const authImg = document.createElement('img')
    const authName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('img-container')

    card.append(headline)
    card.append(author)
    author.append(imgCont)
    imgCont.append(authImg)
    author.append(authName)

    headline.textContent = obj[0]
    authImg.src = obj[1]
    authName.textContent = obj[2]

    return card;
    
}

const cardSection = document.querySelector('.cards-container')

//We need the: headline, authors image, and authors name

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res => {
    //   console.log(res.data.articles)
    var articleTopics = [];
    // var authorUrl = [];
     const topics = Object.values(res.data.articles)
    //  console.log(topics)
    //   topics.forEach(item =>{
    //      let headTops = Object.values(topics)
    //      console.log(headTops)
    //   })
    
    // console.log(res.data.articles.javascript)

    const js = Object.values(res.data.articles.javascript)

     js.forEach(item => {
         let newArt = Object.values(item)
        //  console.log(newArt)
     })

    const allArts = Object.values(res.data.articles)
    // console.log(allArts)

    allArts.forEach(item => {
        item.forEach(data =>{
            let artInfo = Object.values(data)
            // console.log(artInfo)
            articleTopics.push(artInfo)
        })
    })

    // var artAuthors =[];
    // console.log(articleTopics)
    articleTopics.forEach(data => {
        const newArts = [];
        newArts.push(data[0], data[1], data[2])
        cardSection.append(cardMaker(newArts))
        // console.log(newArts)
    })
})
