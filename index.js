const { AoiClient, LoadCommands } = require("aoi.js");
const bot = new AoiClient({
    token: "MTE0MzU3NzUwMjEwMzY1MDQxNQ.G1pStt.cC_rE-ASghNGCg1_Ap7ksYeukqBnnP7FtlYmaM",
    prefix: ".",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./Commands/") //you can change this to any directory you want

 
bot.status({
    text: "Roblox | Beta 01",
    type: "PLAYING",
    status: "dnd",
    time: 12
});