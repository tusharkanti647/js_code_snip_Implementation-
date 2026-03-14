/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
    // throw 'Not implemented!';

    let result = "";

    const generat = (arr) => {
        for (let i = 0; i < arr.length; i++) {

            console.log(typeof arr[i] === "string", typeof arr[i])
            if (typeof arr[i] === "string") {
                result += " " + arr[i];
            }

            if (Array.isArray(arr[i])) {
                generat(arr[i]);
            }

            if (typeof arr[i] === 'object' && !Array.isArray(arr[i])) {
                Object.keys(arr[i]).map((key) => {
                    if (arr[i][key]) {
                        result += " " + key;
                    }
                });
            }

            console.log(result)
        }
    };

    generat(args);

    return result.trim();
}

//link https://www.greatfrontend.com/questions/javascript/classnames?language=js&tab=coding