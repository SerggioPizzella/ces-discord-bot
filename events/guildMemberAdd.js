const { logChannelId } = require('../config.json');
const updateMemberCountChannel = require('../functions/updateMemberCountChannel');

module.exports = {
    name: 'guildMemberAdd',
    execute(guildMember, client) {
        console.log(`${guildMember.user.username} joined server: ${guildMember.guild.name}`);
        
        let logChannel = client.channels.cache.find(channel => channel.id == logChannelId);

        logChannel.send(`
        New member: ${guildMember}
        Username: ${guildMember.user.username}
        ID: ${guildMember.user.id}
        Account created: ${guildMember.user.createdAt}
        Joined server: ${guildMember.joinedAt}
        Member count: ${guildMember.guild.memberCount}`);

        updateMemberCountChannel.execute(client);
    },
};