var ResponseState;
(function (ResponseState) {
    ResponseState[ResponseState["No"] = 0] = "No";
    ResponseState[ResponseState["Yes"] = 1] = "Yes";
})(ResponseState || (ResponseState = {}));
function respond(recipient, message) {
    console.log(recipient, "ResponseState:", message);
}
respond("Princess Caroline", ResponseState.Yes);
