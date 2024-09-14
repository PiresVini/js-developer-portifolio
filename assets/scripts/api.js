async function getProfileData() {
    const url = '/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json() 
}

console.log(getProfileData())