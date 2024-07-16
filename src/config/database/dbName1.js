const sql = require('mssql');

// ตั้งค่าการเชื่อมต่อ
const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server',
    database: 'your_database',
    options: {
        encrypt: true, // ถ้าคุณใช้ Azure SQL ต้องตั้งค่าเป็น true
        trustServerCertificate: true // ถ้าเชื่อมต่อกับ SQL Server ที่รันในโหมด self-signed certificate
    }
};

// สร้าง pool การเชื่อมต่อ
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
    sql, poolPromise
};
