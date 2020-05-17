import { MEETING_STATUSES } from "../../../../shared/constants";

export interface MeetingsFilterProps {
    onChangeStatuses?: (status: MEETING_STATUSES | null) => void;
    onSearch?: (value: string) => void;
}