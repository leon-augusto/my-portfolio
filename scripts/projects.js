var width_device = window.screen.width


if (width_device <= 1024){

    const projects = document.querySelectorAll('.project')
    const projectsDiv2nd = document.querySelectorAll('.goal')
    const projectsDiv3rd = document.querySelectorAll('.techs-acess')

    projects.forEach((project) => project.addEventListener('click', (openByMobile) => {

        projectsDiv2nd.forEach((projectDiv2nd) => {
            if (project.id == projectDiv2nd.parentElement.id) {
                projectDiv2nd.style.display == "block" ? projectDiv2nd.style.display = "none" : projectDiv2nd.style.display = "block"
            }
        })

        projectsDiv3rd.forEach((projectDiv3rd) => {
            if (project.id == projectDiv3rd.parentElement.id) {
                projectDiv3rd.style.display == "block" ? projectDiv3rd.style.display = "none" : projectDiv3rd.style.display = "block"
            }
        })

    }))
}