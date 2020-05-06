safespace
=========

Telegram bot endpoint for [alex.js](https://alexjs.com/).

Setup
-----

* `npm install`
* make sure `env.yml` looks like this
```yaml
BOT_TOKEN: <your telegram bot token>
```
* install and configure [serverless](https://www.serverless.com/) for aws

Deploy
------

Run `serverless deploy` then
```bash
curl --request POST \
    --url https://api.telegram.org/bot${BOT_TOKEN}/setWebhook \
    --header 'content-type: application/json' \
    --data '{"url": "<url shown in serverless output>"}'
```
