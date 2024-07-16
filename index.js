require('rootpath')();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { swaggerUi, specsV1 } = require('./swagger.js');
const errorHandler = require('./src/_helpers/error-handler');
const cors = require('cors');

const app = express();

// Middleware เพื่อ parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler);

// Swagger setup สำหรับเวอร์ชัน 1
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specsV1));


// ตั้งค่าเส้นทางสำหรับแต่ละเวอร์ชัน
app.use('/api/v1', require('./src/v1'));
app.use('/api/v2', require('./src/v2'));

const authenticateRoutes = require('./src/authenticate/routes');
app.use('/auth', authenticateRoutes);

const PORT = process.env.NODE_ENV === 'production' ? 80 : 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs for V1 are available at http://localhost:${PORT}/api-docs/v1`);
    console.log(`Swagger docs for V2 are available at http://localhost:${PORT}/api-docs/v2`);
});
