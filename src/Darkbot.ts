import { Client } from 'discord.js'
import { ChannelLog } from './ChannelLog'
import { Configuration } from './interfaces'

export class Darkbot {

    client: Client
    config: Configuration

    channelLog: ChannelLog

    constructor() {
        this.client = new Client();
        this.config = require('../config.json')
        this.channelLog = new ChannelLog(this.client, this.config.log)
    }

    start() {
        this.client.login(this.config.token)
    }

    stop() : Promise<void> {
        return this.client.destroy()
    }

}