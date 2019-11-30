const API = {
    production: 'http://dwyapi.connectyoume.top',
    development: 'http://dwyapi.connectyoume.top'
};
const request = (url, setting) => {
    let URL = API[process.env.NODE_ENV] + url;
    if (setting) {
        return fetch(URL, {
            method: setting.method,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    Promise.reject(res);
                }
            })
            .then(res => {
                Promise.resolve(res);
            })
            .catch(err => {
                Promise.reject(err);
            });
    } else {
        return fetch(URL, {
            method: 'post',
        }).then(res => {
            if (res.ok) {
                return Promise.resolve(res.json());
            } else {
                return Promise.reject(res);
            }
        });
        // .catch(err => {
        //     console.log(err);
        // });
    }
};
export default request;
