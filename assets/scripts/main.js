const dados = document.getElementById('header')
const idiomas = document.getElementById('lista-idioma')
const icons = document.getElementById('icons')
const listHabilities = document.getElementById('lista-habilidades')
const portifolio = document.getElementById('li-port')
const experienciaProfissional = document.getElementById('div-experiencia')

async function getDados() {
    let textJson = await getProfileData()
    let resPhoto = textJson.photo
    let resName = textJson.name
    let resLocation = textJson.location
    let resPhone = textJson.phone
    let resMail = textJson.email
    return dados.innerHTML += `<img class="foto-perfil" src="${resPhoto}" alt="Foto de perfil do portifolio">
    <h1 class="titulo">Olá, eu sou ${resName}</h1>
    <div class="informacoes">
                <p class="local">${resLocation}</p>
                <p class="fone">
                    <a href="tel:${resPhone}">${resPhone}</a>
                </p>
                <p class="mail">
                    <a href="mailto:${resMail}">${resMail}</a>
                </p> 
    </div>`
}

getDados ()

async function getIdioma() {
    let textJson = await getProfileData()
    let res = textJson.languages
    res.forEach(idioma => {
        idiomas.innerHTML += `<li>${idioma}</li>`
    })

}

getIdioma()

async function getHardSkills() {

    let textJson = await getProfileData()
    let res = textJson.skills
    let hard = res.hardSkills
    let logoSkill = hard.map(skill => skill.logo)
    logoSkill.forEach(img => {
        icons.innerHTML += `<img class="icon-hability" src="${img}" alt="icone hard skill">`

    })
}
getHardSkills()

async function getSoftSkills() {
    let textJson = await getProfileData()
    let res = textJson.skills
    let soft = res.softSkills
    soft.forEach(name => {
        listHabilities.innerHTML += `<li>${name}</li>`
    })

}

getSoftSkills()

async function getPortifolio() {
    let textJson = await getProfileData()
    let port = textJson.portfolio
    port.forEach(element => {
        portifolio.innerHTML += `<li class="prog">${element.name}</li>
        <a class="a-link" href="${element.url}" target="_blank">${element.url}</a>`
    });
}

getPortifolio()

async function getExperiencia () {
    let textJson = await getProfileData()
    let prof = textJson.professionalExperience
    prof.forEach(element => {
        experienciaProfissional.innerHTML += `<div class="exp">
        <h2 class="exp-h2">${element.name}</h2>
        <ul class="lista-exp">
            <img src="https://raw.githubusercontent.com/PiresVini/js-developer-portifolio/new/assets/images/calendar-icon.svg" alt="icone calendario">
            <li class="exp-li">${element.period}</li>
        </ul>
        <p class="exp-p">${element.description}</p>
    </div>`
    });
}

getExperiencia()
