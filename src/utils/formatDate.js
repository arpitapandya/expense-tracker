const formatDate = (date) => {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`;
    const day = `${d.getDate()}`;
    const year = d.getFullYear();

    if(month.length < 2) {
        month = `0${month}`
    }

    if(month.length < 2) {
        day = `0${day}`
    }

    return [year, month, day].join('-');
}

export default formatDate;