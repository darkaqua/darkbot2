
export interface LogConfig {
    channel: string,
    events: Array<string>
}

export interface Configuration {
    token: string
    log: LogConfig
}