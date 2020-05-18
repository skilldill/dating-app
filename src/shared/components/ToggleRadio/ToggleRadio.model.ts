export interface ToggleRadioProps {
    values: { name:string, value: any }[]
    onChange: (value: any) => void;
}