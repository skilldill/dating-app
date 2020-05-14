export type Settings = {
    theme: "ligth" | "dark",
    notification: boolean
}

export interface Profile {
    name: string,
    surname: string,
    age: number,
    phone: string,
    avatar: string,
    socials?: string[],
    gallery?: any[] 
}

export type Partner = {
    id: string,
    name: string,
    age: number,
    avatar: any,
    gender: "male" | "female",
    state: "like" | "dislike" | "skip" | null,
    gallery?: any[],
    surname?: string,
    phone?: string,
    selectMe?: boolean
}