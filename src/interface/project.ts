interface project {
    id: number,
    projectName: string,
    company: string,
    startDate: string,
    description: string
}

export default interface ProjectCard{
    project: project,
    isDarkMode: boolean | undefined
}