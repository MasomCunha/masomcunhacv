export interface gitUser {
    login: string,
    avatar_url: string,
    html_url: string,
    repos_url: string
}

export interface gitUserState{
    gitUser: gitUser | null
}

export interface getGitUserAction {
    type: string,
    payload: gitUser
}