// create variables that are being listened to
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#moc-search");
//create button variable
const button = document.querySelector("#getMoc");

// need a fetchData function with axios
// remember async await needs a try and a catch
async function fetchBuilds(set_num) {
  try {
    const url = `https://rebrickable.com/api/v3/lego/sets/${set_num}/alternates/?key=430949585e7e48d558a057f45e6f437f`;
    const res = await axios.get(url);
    // const bricksData = res.data.results
    console.log(res.data.results)
  } catch (error) {
    console.log(error)
  }
}

fetchBuilds("75936-1")


// // need an event listener on the button
// searchForm.addEventListener("submit", () => {
//   let set_num = searchInput.value;
//   console.log(searchInput);
//   fetchBuilds(searchInput);
// })


// need event listened to delete previous search
// create and append img for builds
// create the inner text
// display build name
// display build link
// make sure link is clickable! or that you can add a copy paste window
// make sure to console log everything so that you know if it's working
