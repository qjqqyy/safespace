const { Telegraf, Extra } = require('telegraf')
const alex = require('alex')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('text', (ctx) => {
    const violations = alex.text(ctx.message.text).messages.map(o => o.message).join(",\n")
    if (violations)
        return ctx.reply("Whoa there, you can't say that!\n" + violations + ".", Extra.inReplyTo(ctx.message.message_id))
})

/* AWS Lambda handler function */
exports.handler = (event, context, callback) => {
    const tmp = JSON.parse(event.body); // get data passed to us
    bot.handleUpdate(tmp); // make Telegraf process that data
    return callback(null, { // return something for webhook, so it doesn't try to send same stuff again
        statusCode: 200,
        body: '',
    });
};
