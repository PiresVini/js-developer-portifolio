async function getProfileData() {
    const url = 'https://raw.githubusercontent.com/PiresVini/js-developer-portifolio/new/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json() 
}

console.log(getProfileData())
