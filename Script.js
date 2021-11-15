
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#moc-search");

const button = document.querySelector("#getMoc");

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



searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  removeBuild();
  let set_num = searchInput.value;
  console.log(searchInput.value);
  fetchBuilds(set_num);
})





const mocOptions = document.querySelector("#mocOptions");
const displayMoc = document.createElement("div")
displayMoc.className = "display-moc"
mocOptions.appendChild(displayMoc)

function showBuildList(builds) {
  builds.forEach(build => {
    const miniDiv = document.createElement("div")
    miniDiv.className = "mini-div"
    const buildImg = document.createElement("img")
    buildImg.src = build.moc_img_url;
    miniDiv.appendChild(buildImg);
    const buildTitle = document.createElement("h4")
    buildTitle.className = "title"
    buildTitle.innerText = `${build.name}, by ${build.designer_name}`
    miniDiv.appendChild(buildTitle)
    const buildLink = document.createElement("h4")
    buildLink.className = "build-link"
    buildLink.innerHTML = `<a href='${build.moc_url}' target='_blank'>Click Here for Moc Build</a>`
    miniDiv.appendChild(buildLink)
    displayMoc.appendChild(miniDiv)
  })

}


function removeBuild() {
  const removeElement = document.querySelector(".display-moc")
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}

