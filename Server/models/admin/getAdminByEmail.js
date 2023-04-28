const { Client } = require('pg');

async function getAdminByEmail(client, email) {
    try {
        const query = {
            text: 'SELECT * FROM admin WHERE email = $1',
            values: [email]
        };
        const result = await client.query(query);
        console.log('Admin fetched!');
        return result.rows[0];
    } catch (err) {
        console.error('Error fetching admin', err);
    }
}

module.exports = { getAdminByEmail };