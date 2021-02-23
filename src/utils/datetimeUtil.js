import { format, parseISO } from "date-fns"

export const toDate = (text) => {
    return format(parseISO(text,), "dd/MM/yyy")
}

export const toDateTime = (text) => {
    return format(parseISO(text,), "hh:mm dd/MM/yyy")
}