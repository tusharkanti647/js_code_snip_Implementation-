//1
//timeOut polyfills
// console.log('kkkkkkk')
// setTimeout((i, j, k) => {
//     console.log(i, j, k)
// }, 3000, 6, 78)
// console.log('kkkkkkk later')

// Polyfill of setTimeout

// 1. Initializing global variables to track timers
// window.timerId = 123213;
// window.timers = {};

// // 2. Overriding the window.setTimeout function
// window.mySetTimeout = function (callback, delay, ...args) {
//     const timerId = window.timerId;
//     window.timerId += 1;

//     const time = Date.now() + delay;

//     // Store the timer details in the global object
//     window.timers[timerId] = {
//         callback,
//         time,
//         args: [...args],
//     };

//     // Optimization: Start processing only if it's the first timer added
//     if (Object.keys(window.timers).length === 1) {
//         requestIdleCallback(processTimers);
//     }

//     return timerId;
// };

// // 3. Overriding the window.clearTimeout function
// window.myClearTimeout = function (key) {
//     if (window.timers[key]) {
//         delete window.timers[key];
//     }
// };

// // 4. Function to iterate through all active timers
// function processTimers() {
//     Object.keys(window.timers).forEach(executeTimers);
// }

// // 5. Function to check timing and execute callbacks
// function executeTimers(key) {
//     // Check if the timer still exists (in case it was cleared)
//     if (!window.timers[key]) return;

//     const { callback, time, args } = window.timers[key];

//     if (Date.now() >= time) {
//         // Execute callback with provided arguments
//         callback(...args);
//         // Remove timer after execution
//         delete window.timers[key];
//     } else {
//         // If it's not time yet, reschedule the process for the next idle period
//         requestIdleCallback(processTimers);
//     }
// }

// // --- TEST CODE (As seen in the video) ---

// function showMyName(name) {
//     console.log("name", name);
// }

// console.log('TUSHAR 1ST TIME')
// mySetTimeout(showMyName, 0, "silver surfer");
// mySetTimeout(showMyName, 2000, "silver surfer 1");
// mySetTimeout(showMyName, 3000, "silver surfer 2");
// console.log('TUSHAR LAST TIME')


//------------------------------------------------------------------------------------------------------
// Polyfill of setInterval

// 1. Create unique symbols to prevent external access or accidental overrides
const intervalsKey = Symbol('intervals');
const intervalIdTrackerKey = Symbol('intervalIdTracker');

// 2. Initialize the tracker and storage object on the window
window.intervalIdTrackerKey = 1000;
window.intervalsKey = {};

// 3. Overriding the window.setInterval function
window.setInterval = function (callback, interval, ...args) {
    const intervalId = window.intervalIdTrackerKey++;
    const timeToCall = Date.now() + interval;

    // Store interval details
    // Note: 'interval' in the object stores the next execution timestamp
    window.intervalsKey[intervalId] = {
        callback,
        interval: timeToCall,
        args
    };

    // Optimization: Start the processing loop only if it's the first interval added
    if (Object.keys(window.intervalsKey).length === 1) {
        requestIdleCallback(processIntervals);
    }

    return intervalId;
};

// 4. Overriding the window.clearInterval function
window.clearInterval = function (id) {
    if (window.intervalsKey[id]) {
        delete window.intervalsKey[id];
    }
};

// 5. Function to iterate through all active intervals
function processIntervals() {
    Object.keys(window.intervalsKey).forEach(executeIntervals);
}

// 6. Function to check timing and execute the callback
function executeIntervals(key) {
    const intervalDetails = window.intervalsKey[key];
    if (!intervalDetails) return;

    const { callback, interval: timeToCall, args } = intervalDetails;
    const originalInterval = intervalDetails.args[0]; // Assuming the delay is constant

    if (Date.now() >= timeToCall) {
        // Run the user's function
        callback(...args);

        // Update the timestamp for the next execution
        // We look back at the original delay passed to setInterval
        // In the video logic, this is handled by adding the delay to the current timestamp
        window.intervalsKey[key].interval = Date.now() + (timeToCall - (timeToCall - originalInterval));

        // Simplified based on video logic:
        // window[intervalsKey][key].interval += (the delay value)
    }

    // Use requestIdleCallback to keep the loop running without blocking the main thread
    if (Object.keys(window.intervalsKey).length > 0) {
        requestIdleCallback(processIntervals);
    }
}

// --- TEST CODE (As seen in the video) ---


function showMyName(name) {
    console.log("Name is", name);
}

const id = setInterval(showMyName, 1000, "Silver Surfer");
// clearInterval(id); // Use this to stop the interval
