//1 call polyfill
// var name = 'hhh'
// function foo(age) {
//     console.log(`i am ${this.name}, my age is ${age}`)
// }

// let obj1 = { name: 'tushar' }
// foo.call(null, 28)


// if (!Function.prototype.myCall) {
//     Function.prototype.myCall = function (context, ...args) {
//         // Step 1: if context is null/undefined, use global object
//         context = context ?? globalThis;

//         // Step 2: ensure context is an object
//         context = Object(context);

//         // Step 3: create a unique temporary property
//         const fnKey = Symbol("fn");

//         // Step 4: assign function to context
//         context[fnKey] = this;

//         // Step 5: invoke function
//         const result = context[fnKey](...args);

//         // Step 6: clean up
//         delete context[fnKey];

//         return result;
//     }
// }

// foo.myCall(null, 28) // for window object i get, i am hhh, my age is 28
// foo.myCall(obj1, 28) // for window object i get, i am tushar, my age is 28

// function show() {
//     console.log(this);
// }
// show.myCall("hello"); //if this line not present context = Object(context);
//then brek in line context[fnKey] = this;
//because "Primitives cannot have properties, so this will fail:""





//2
//--------------------------------------------------------------------------------------------\
if (!Function.prototype.myBind) {
    Function.prototype.myBind = function (context, ...bindArgs) {
        if (typeof this !== "function") {
            throw new TypeError("Bind must be called on a function");
        }

        const originalFn = this;

        function boundFn(...callArgs) {
            // If function is called with `new`
            const isNew = this instanceof boundFn;
            return originalFn.apply(
                isNew ? this : context,
                [...bindArgs, ...callArgs]
            );
        }

        // Maintain prototype chain
        boundFn.prototype = Object.create(originalFn.prototype);

        return boundFn;
    };
}