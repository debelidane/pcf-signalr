module.exports = function (context, req) {
    let groupName = req.query?.groupName
    //process.env.AzureSignalRConnectionString för att accessa config
    const message = req.body;
    if (req.headers && req.headers['x-ms-client-principal-name']) {
        message.sender = req.headers['x-ms-client-principal-name'];
    }
    
    let signalRMessage = {
        "target": "newMessage",
        "arguments": [ message ]
    }

    if(groupName){
        signalRMessage.groupName = groupName
    }
    
    context.bindings.signalRMessages = [signalRMessage];

    context.done();
};