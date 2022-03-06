import moment from "moment";

const getTime = (time) => {
    const dateObj = new Date(time * 1000);
    const now = new Date();
    const seconds = (now.getTime() - dateObj.getTime()) / 1000;
    const finalTime = moment().subtract(seconds, 'seconds').calendar();
    return finalTime;
};

export default getTime;