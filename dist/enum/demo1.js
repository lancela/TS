"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Response;
(function (Response) {
    Response[Response["No"] = 0] = "No";
    Response[Response["Yes"] = 1] = "Yes";
})(Response || (Response = {}));
function respond(recipient, message) {
    console.log(recipient + ' responded with ' + message);
}
respond('Princess Caroline', Response.Yes);
let dir = 1;
console.log(dir);
