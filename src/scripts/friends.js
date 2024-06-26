const githubProfiles = [
  "https://github.com/asdfugil",
  "https://github.com/HAHALOSAH",
  "https://github.com/dhinakg",
  "https://github.com/llsc12",
  "https://github.com/voidlovescats",
  "https://github.com/vendicated",
  "https://github.com/kok3shidoll",
  "https://github.com/fawni",
  "https://github.com/overestimate",
  "https://github.com/qtlunya",
  "https://github.com/roootthefox",
  "https://github.com/adachireii",
];

function generateGithubAvatarLink(profileUrl) {
  const username = profileUrl.split('/').pop();
  return `https://github.com/${username}.png`;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const imageContainer = document.getElementById("imageLinks");
const shuffledProfiles = shuffleArray(githubProfiles);

shuffledProfiles.forEach(profileUrl => {
  const anchor = document.createElement("a");
  anchor.href = profileUrl;

  const image = document.createElement("img");
  const imageUrl = generateGithubAvatarLink(profileUrl);
  image.src = imageUrl;
  image.alt = "GitHub Avatar";

  image.style.width = "22px";
  image.style.height = "22px";
  image.style.marginLeft = "12px";
  image.style.marginBottom = "12px";
  image.style.borderRadius = "50%";
  image.style.borderColor = "#545454";
  image.style.borderStyle = "solid";
  image.style.borderWidth = "0.7px";
  image.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)";
  anchor.appendChild(image);
  imageContainer.appendChild(anchor);
});
