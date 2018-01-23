import { Client, TextChannel, RichEmbed, Message } from "discord.js";
import { LogConfig } from "./interfaces";


export class ChannelLog {

    client: Client
    config: LogConfig
    channel: TextChannel

    constructor(client: Client, config: LogConfig) {
        this.client = client
        this.config = config
        config.events.forEach(eventName => {
            client.on(eventName, this[eventName])
        })
    }

    channelCreate = () => {}
    channelDelete = () => {}
    channelPinsUpdate = () => {}
    channelUpdate = () => {}
    clientUserGuildSettingsUpdate = () => {}
    clientUserSettingsUpdate = () => {}
    debug = (message) => {
        console.log(`[DEBUG] ${message}`)
    }
    disconnect = () => {}
    emojiCreate = () => {}
    emojiDelete = () => {}
    emojiUpdate = () => {}
    error = () => {}
    guildBanAdd = () => {}
    guildBanRemove = () => {}
    guildCreate = () => {}
    guildDelete = () => {}
    guildMemberAdd = () => {}
    guildMemberAvailable = () => {}
    guildMemberRemove = () => {}
    guildMembersChunk = () => {}
    guildMemberSpeaking = () => {}
    guildMemberUpdate = () => {}
    guildUnavailable = () => {}
    guildUpdate = () => {}
    message = () => {}
    messageDelete = (message: Message) => {
        if(this.channel) {
            const embed = new RichEmbed()
            embed.setTitle("Message Deleted")
            embed.addField("Author", `${message.author.username}#${message.author.discriminator} (${message.author.id})`)
            embed.addField("Content", message.content)
            embed.setFooter("#" + (<TextChannel> message.channel).name)
            embed.setTimestamp(new Date())
            this.channel.send({ embed: embed })
        }
    }
    messageDeleteBulk = () => {}
    messageReactionAdd = () => {}
    messageReactionRemove = () => {}
    messageReactionRemoveAll = () => {}
    messageUpdate = () => {}
    presenceUpdate = () => {}
    ready = () => {
        console.log("READY!")

        // Find channel
        const channel = this.client.channels.find("id", this.config.channel)
        if(!channel) {
            //Channel not found
            console.error(`[ERROR] Log channel (${this.config.channel} not found.`)
        } else if(channel.type != "text") {
            //Invalid channel
            console.error(`[ERROR] Channel ${this.config.channel} is not a TextChannel.`)
        } else {
            this.channel = <TextChannel> channel
            //Send READY message to channel
            const embed = new RichEmbed()
            embed.setTitle("Connected!")
            this.channel.send({ embed: embed })
        }

    }
    reconnecting = () => {}
    resume = () => {}
    roleCreate = () => {}
    roleDelete = () => {}
    roleUpdate = () => {}
    typingStart = () => {}
    typingStop = () => {}
    userNoteUpdate = () => {}
    userUpdate = () => {}
    voiceStateUpdate = () => {}
    warn = () => {}

}