const fs = require("fs");
module.exports.config = {
	name: "valobasa",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("khangki") || react.includes("magi") || react.includes("cudi")) {
		var msg = {
				body: "চুপ কর সালা/সালি😡😡মেয়ে হলে বস SK SHAKIL(TOM)এর ইন এ জা🥵"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	   }
