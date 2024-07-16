const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// การตั้งค่าสำหรับเวอร์ชัน 1
const optionsV1 = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API V1',
            version: '1.0.0',
            description: 'A simple Express API V1'
        },
        servers: [
            {
                url: 'http://localhost:3000/api/'
            }
        ]
    },
    apis: ['./src/authenticate/*.js','./src/v1/**/*.js','./src/v2/**/*.js'] // Path to the API docs for V1
};

const specsV1 = swaggerJsDoc(optionsV1);

module.exports = {
    swaggerUi,
    specsV1
};
