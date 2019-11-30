const request = (url, setting) => {
    if (setting) {
        return fetch(url, {
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
        return fetch(url, {
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
