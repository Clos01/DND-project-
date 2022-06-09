const dayjs = require('dayjs');

module.exports = (
    timeStamp => {
        return dayjs(timeStamp).format('MM/DD/YYYY h:mm A')
    }
);