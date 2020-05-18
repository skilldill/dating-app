import { MEETING_STATUSES } from "../constants";

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
    messages?: Message[],
    gallery?: any[],
    surname?: string,
    phone?: string,
    selectMe?: boolean
}

export interface Meeting {
    id: string,
    date: string,
    time: string,
    partnerId: string,
    status: MEETING_STATUSES,
    description?: string
}

export interface Message {
    id: string,
    date: string,
    text: string,
    myself?: boolean
}