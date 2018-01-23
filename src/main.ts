import { Darkbot } from "./Darkbot";


const darkbot = new Darkbot()

process.on('SIGINT', () => {
    console.log("\nAttempting graceful shutdown.")
    darkbot.stop().then(() => {
        console.log("Goodbye.")
        process.exit()
    }).catch(error => {
        console.log(`Something went wrong: ${error.message}`)
        console.log("Terminating forcefully.")
        process.exit(-1)
    })
})

darkbot.start()