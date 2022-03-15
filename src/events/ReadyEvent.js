const { ActivityType, PresenceUpdateStatus } = require('discord-api-types/v9');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		if (client.user) {
			console.log(`Ready! Logged in as ${client.user.tag}`);

			// set bot rich presence on servers
			client.user.setPresence({
				status: PresenceUpdateStatus.Online,
				afk: false,
				activities: [{name: '/d20', type: ActivityType.Listening}]
			})
		} else {
			console.log(`${user} on ${client} was null`)
		}
	},
};