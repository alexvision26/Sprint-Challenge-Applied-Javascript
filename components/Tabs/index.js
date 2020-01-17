// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabMaker(obj){
    const newTopic = document.createElement('div')

    newTopic.classList.add('tab')

    newTopic.textContent = obj
}

const tabs = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(res =>{
    console.log(res)
    const newArray = Object.values(res.data.topics)
    console.log(newArray)
    newArray.forEach(item =>{
        tabs.append(tabMaker(newArray))
    })

 })

     










 //     const topicTabs = res.data.topics
//    res.data.topics.forEach(data =>{
//         const newTopic = document.createElement('div')
//         newTopic.classList.add('tab')
//         newTopic.textContent = res.data.topics[data]
//         tabs.append(newTopic)
//      //    console.log(newTopic.textContent)
//      console.log(res.data.topics[data])
//     })