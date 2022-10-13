import { gitUser } from "./gitUser"

export default interface avatarCard{
    classNameImage:string, 
    classNameText: string,
    gitUser: gitUser | null
}