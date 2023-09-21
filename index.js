const { AoiClient, LoadCommands } = require("aoi.js");
const bot = new AoiClient({
    token: "TOKEN",
    prefix: "+",
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
    name: "Swift. BETA",
     type: "PLAYING",
    status: "dnd",
    time: 12
});

bot.variables({
});
