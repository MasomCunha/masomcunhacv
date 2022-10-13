export interface gitRepository {
    html_url: string,
}

export interface gitRepositoryState{
    gitRepository: gitRepository[] | []
}

export interface getGitRepositoryAction {
    type: string,
    payload: gitRepository[]
}