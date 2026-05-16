function setup() {
    // This function MUST return the following attributes:
    return {
        function: `console.log('Example code.')`,
        name: 'com.example', // Technically, it could be named anything. It is recommended to use the same name for everything (name when submitting and this)        
        events: ['fetch'] // See: https://github.com/mercuryworkshop/workerware for the event types you can use. (Also typed if you are using typescript)
    }
}

//This can be named anything. However, it's recommended to use `entryFunc` (with types, the naming IS enforced)
self.entryFunc = setup; //DO NOT call the function here. Only assign the reference otherwise, it will error.
//Name this whatever.
function example() {
    //You MUST return the following
    return {
        host: "example.com", //The host to match (so if the user visits example.com it will inject the html below.
        html: "<script>console.log('Example')</script>", //Must return a string (and be valid HTML or your plugin will break). How you get that string is up to you
        injectTo: "head" // Can be "head" or "body"
    }
}

// Technically, this could be named anything, it is recommended to call it `entryFunc`
self.entryFunc = example; //DO NOT run the function here. That will cause errors. Only assign the reference to the function here.
