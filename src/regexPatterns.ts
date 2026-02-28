export const REGEX_PATTERNS={
    name: /^[A-Za-z ]+$/,
    password: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
    noLeadingSpace: /^\S.*$/,
    email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mobileNo : /^[6-9]\d{9}$/
}