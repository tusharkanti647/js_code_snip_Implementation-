//question link
//https://www.greatfrontend.com/questions/javascript/map-async-limit?language=js&tab=coding

export default function mapAsyncLimit(iterable, callbackFn, size) {
    size = size ?? iterable.length;

    const results = new Array(iterable.length);
    let index = 0;

    function worker() {
        function next() {
            if (index >= iterable.length) {
                return Promise.resolve();
            }

            const currentIndex = index++;

            return Promise.resolve(callbackFn(iterable[currentIndex]))
                .then((res) => {
                    results[currentIndex] = res;
                    return next();
                });
        }

        return next();
    }

    const workers = [];
    const workerCount = Math.min(size, iterable.length);

    for (let i = 0; i < workerCount; i++) {
        workers.push(worker());
    }

    return Promise.all(workers).then(() => results);
}

//used exampel 1
async function fetchUser(id) {
    const res = await fetch(`https://api.example.com/users/${id}`);
    return res.json();
}

const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const users = await mapAsyncLimit(userIds, fetchUser, 5);

console.log(users);


//used exampel 2
import fs from "fs/promises";

async function readFile(file) {
    const data = await fs.readFile(file, "utf8");
    return data.length;
}

const files = ["a.txt", "b.txt", "c.txt", "d.txt"];

const result = await mapAsyncLimit(files, readFile, 2);

console.log(result);