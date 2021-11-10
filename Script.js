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
    if (res.data.results) {
      const bricksData = res.data.results
      showBuildList(bricksData)
      console.log(bricksData)
    }
  } catch (error) {
    console.log(error)
  }
}

// fetchBuilds("75936-1")


// need an event listener on the button
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  removeBuild();
  let set_num = searchInput.value;
  console.log(searchInput.value);
  fetchBuilds(set_num);
})


// need event listened to delete previous search


const mocOptions = document.querySelector("#mocOptions");
const displayMoc = document.createElement("div")
displayMoc.className = "display-moc"
mocOptions.appendChild(displayMoc)

function showBuildList(builds) {
  builds.forEach(build => {
    //create mini div
    const miniDiv = document.createElement("div")
    miniDiv.className = "mini-div"
    const buildImg = document.createElement("img")
    buildImg.src = build.moc_img_url;
    miniDiv.appendChild(buildImg);
    const buildTitle = document.createElement("h4")
    buildTitle.innerText = `${build.name}, by ${build.designer_name}`
    miniDiv.appendChild(buildTitle)
    const buildLink = document.createElement("h4")
    buildLink.className = "build-link"
    buildLink.innerHTML = `<a href='${build.moc_url}' target='_blank'>Click Here for Moc Build</a>`
    miniDiv.appendChild(buildLink)
    displayMoc.appendChild(miniDiv)
  })
  // create and append img for builds
  // create the inner text
  // display build name
  // display build link
  // make sure link is clickable! or that you can add a copy paste window
  // make sure to console log everything so that you know if it's working
}


function removeBuild() {
  const removeElement = document.querySelector(".display-moc")
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}