module.exports = async function (context, req) {
    context.bindings.signalRGroupActions = [{
        "userId": req.query?.userId,
        "groupName": req.query?.groupName,
        "action": "remove"
    }];
};