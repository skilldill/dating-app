import { Meeting } from "../../shared/models";
import { MEETING_STATUSES } from "../../shared/constants";

export const mockMeetings: Meeting[] = [
    { 
        id: "1", 
        date: "18-06-2020", 
        time: "12:00", 
        partnerId: "3",
        description: "Встретимся у ресепшена",
        status: MEETING_STATUSES.CONFIRMED
    },
    { 
        id: "2", 
        date: "18-06-2020", 
        time: "13:00", 
        partnerId: "3",
        description: "В кафе на Пушкина",
        status: MEETING_STATUSES.CONFIRMED
    },
    { 
        id: "3", 
        date: "22-06-2020", 
        time: "12:00", 
        partnerId: "3",
        description: "Пригласи Лукаса, у меня для него новости",
        status: MEETING_STATUSES.CONFIRMED
    },
    { 
        id: "4", 
        date: "20-06-2020", 
        time: "12:00", 
        partnerId: "3",
        status: MEETING_STATUSES.CONFIRMED
    },
    { 
        id: "32", 
        date: "22-06-2020", 
        time: "12:00", 
        partnerId: "3",
        description: "Пригласи Лукаса, у меня для него новости",
        status: MEETING_STATUSES.CONFIRMED
    },
    { 
        id: "4w", 
        date: "26-06-2020", 
        time: "12:00", 
        partnerId: "3",
        status: MEETING_STATUSES.AWAITING
    },
    { 
        id: "3d", 
        date: "22-06-2020", 
        time: "12:00", 
        partnerId: "3",
        description: "Пригласи Лукаса, у меня для него новости",
        status: MEETING_STATUSES.AWAITING
    },
    { 
        id: "12", 
        date: "20-06-2020", 
        time: "12:00", 
        partnerId: "3",
        status: MEETING_STATUSES.AWAITING
    }
]