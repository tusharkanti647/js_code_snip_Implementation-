//1
// polyfilli of Promise.all
//----------------------------------------------------------------------------------------------------
if (!Promise.myAll) {
    Promise.myAll = function (promises) {
        return new Promise((resolve, reject) => {

            if (!Array.isArray(promises)) {
                return reject(new TypeError("Argument must be an array"));
            }

            const results = [];
            let completed = 0;

            if (promises.length === 0) {
                return resolve([]);
            }

            promises.forEach((promise, index) => {

                Promise.resolve(promise)
                    .then(value => {
                        results[index] = value;
                        completed++;

                        if (completed === promises.length) {
                            resolve(results);
                        }
                    })
                    .catch(reject);

            });

        });
    };
}

//2
// polyfilli of Promise.allSattled
//----------------------------------------------------------------------------------------------------
if (!Promise.myAllSettled) {
    Promise.myAllSettled = function (promises) {

        return new Promise((resolve) => {

            const results = [];
            let completed = 0;

            if (promises.length === 0) {
                resolve([]);
            }

            promises.forEach((promise, index) => {

                Promise.resolve(promise)
                    .then(value => {
                        results[index] = {
                            status: "fulfilled",
                            value: value
                        };
                    })
                    .catch(reason => {
                        results[index] = {
                            status: "rejected",
                            reason: reason
                        };
                    })
                    .finally(() => {
                        completed++;

                        if (completed === promises.length) {
                            resolve(results);
                        }
                    });

            });

        });

    };
}

//3
// polyfilli of Promise.ras
//----------------------------------------------------------------------------------------------------
if (!Promise.myRace) {
    Promise.myRace = function (promises) {
        return new Promise((resolve, reject) => {

            if (!Array.isArray(promises)) {
                return reject(new TypeError("Argument must be iterable"));
            }

            for (let i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i])
                    .then(resolve)
                    .catch(reject);
            }

        });
    };
}

//--------------------------------------------------------------------------------------------------------------
//Promise polyfiill
(function (global) {

    function MyPromise(executor) {
        const self = this;

        self.state = "pending";   // pending | fulfilled | rejected
        self.value = undefined;
        self.handlers = [];

        function resolve(value) {
            if (self.state !== "pending") return;

            self.state = "fulfilled";
            self.value = value;

            self.handlers.forEach(handle);
            self.handlers = [];
        }

        function reject(error) {
            if (self.state !== "pending") return;

            self.state = "rejected";
            self.value = error;

            self.handlers.forEach(handle);
            self.handlers = [];
        }

        function handle(handler) {
            if (self.state === "pending") {
                self.handlers.push(handler);
                return;
            }

            setTimeout(() => {
                if (self.state === "fulfilled") {
                    if (!handler.onFulfilled) {
                        handler.resolve(self.value);
                    } else {
                        try {
                            const result = handler.onFulfilled(self.value);
                            handler.resolve(result);
                        } catch (err) {
                            handler.reject(err);
                        }
                    }
                }

                if (self.state === "rejected") {
                    if (!handler.onRejected) {
                        handler.reject(self.value);
                    } else {
                        try {
                            const result = handler.onRejected(self.value);
                            handler.resolve(result);
                        } catch (err) {
                            handler.reject(err);
                        }
                    }
                }
            }, 0);
        }

        self.then = function (onFulfilled, onRejected) {
            return new MyPromise((resolve, reject) => {
                handle({
                    onFulfilled,
                    onRejected,
                    resolve,
                    reject
                });
            });
        };

        self.catch = function (onRejected) {
            return self.then(null, onRejected);
        };

        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    global.MyPromise = MyPromise;

})(this);



///used of Promise polyfill
const p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Promise");
    }, 1000);
});

p.then(res => {
    console.log(res);
    return "Next value";
})
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });