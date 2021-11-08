// create variables that are being listened to
const searchBar = document.querySelector("#search-bar");
const searchInput = document.querySelector("#moc-search");

// need a fetchData function with axios
// remember async await needs a try and a catch
async function fetchBuilds() {
  try {
    const url = `https://rebrickable.com/api/v3/lego/sets/{set_num}/alternates/?key=430949585e7e48d558a057f45e6f437f`
    const res = await axios.get(url)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
// need an event listener on the button
searchBar.addEventListener("submit", () => {
  const set_num = searchInput;
  console.log(searchInput)
})
// need event listened to delete previous search
// create and append img for builds
// create the inner text
// display build name
// display build link
// make sure link is clickable! or that you can add a copy paste window
// make sure to console log everything so that you know if it's working

//