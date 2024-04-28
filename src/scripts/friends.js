  const githubProfiles = [
    "https://github.com/asdfugil",
    "https://github.com/HAHALOSAH",
    "https://github.com/MicrowavedToast21",
    "https://github.com/RoootTheFox",
    "https://github.com/dhinakg",
    "https://github.com/llsc12",
    "https://github.com/voidlovescats",
    "https://github.com/vendicated",
    
    "https://github.com/fawni"
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
    image.src = generateGithubAvatarLink(profileUrl);
    image.alt = "GitHub Avatar";
    image.style.width = "50px";
    image.style.height = "50px";
    image.style.margin = "6px";
    anchor.appendChild(image);
    imageContainer.appendChild(anchor);
  });