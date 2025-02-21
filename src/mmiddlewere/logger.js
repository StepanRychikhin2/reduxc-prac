export const logger = (store) => (next) => (action) => {
console.log("діспачінг",action)
console.log("awd",next)
console.log("before", store.getState())
let result = next(action)
console.log("after", store.getState())
alert("middlewere тут")
// fetch(
//     `https://api.giphy.com/v1/gifs/search?api_key=O5KMbEo8sOzB4NTZ5vD04vSkLbiA75To&q=${
//         document.getElementById('namefind').value
//     }&limit=20`
// )
//     .then((data) => data.json())
//     .then((data) => this.setState({ giftList: data }))
//     .catch((error) => console.error(error))
// }
return result

}