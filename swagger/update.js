const fs = require('fs');
const axios = require('axios');

const pageId = '5996545';
const url = `https://tosky.atlassian.net/wiki/rest/api/content/${pageId}`;
const yaml = require('js-yaml');

!async function () {
    try {
        const email = 'groove2u@tosky.co.kr';
        const apiToken = '3vPnV1qjUu1wryaGjNKz5F12';
        const auth = Buffer.from(`${email}:${apiToken}`).toString('base64');
        const config = {
            headers: {
                Authorization: 'Basic ' + auth,
                'Content-Type': 'application/json',
            },
        };

        // info: 기존 데이터 가져오기
        const response = await axios.get(`${url}?expand=body,storage,version`, config);
        const { type, title, version, body } = response.data;

        const value = body.storage.value;
        const startValue = value.indexOf('<![CDATA[');
        const endValue = value.indexOf('</ac:plain-text-body>');

        // info: 새 데이터 업데이트하기

        const swaggerYml = await yaml.load(fs.readFileSync(path.join(__dirname, '../build/swagger.yaml'), 'utf8'));

        const swaggerJson = await fs.readFileSync('./swagger.json').toString();
        const updatedValue = `${value.slice(0, startValue)}<![CDATA[${swaggerJson}]]>${value.slice(endValue)}`;

        const data = {
            type,
            title,
            body: {
                storage: {
                    value: updatedValue,
                    representation: 'storage',
                },
            },
            version: {
                number: version.number + 1,
            },
        };

        await axios.put(url, data, config);

        console.log('success');
    } catch (error) {
        console.log(error);
    }
}();