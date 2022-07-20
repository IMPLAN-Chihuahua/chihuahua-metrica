import { LensTwoTone } from "@mui/icons-material";

const monthNumbers = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const toLocaleDateString = (date) => {
    const dateOptions = date.split(' ');

    let monthNumber = (monthNumbers.findIndex(month => month === dateOptions[2]));

    if (monthNumber < 10) {
        monthNumber = `0${monthNumber}`;
    }

    const monthDay = dateOptions[1];

    const year = dateOptions[3];

    const formatedDate = `${monthDay}/${monthNumber}/${year}`;

    return formatedDate;
}

export { toLocaleDateString };