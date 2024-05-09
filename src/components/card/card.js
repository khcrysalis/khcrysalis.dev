function setProfile(imageUrl, name, username) {
    document.getElementById('profileImage').src = imageUrl;
    document.getElementById('profileName').textContent = name;
    document.getElementById('profileUsername').textContent = `${username}`;
}

// Example usage
setProfile(
    'https://github.com/ssalggnikool.png',
    'samara',
    'ssalggnikool • she / they'
);