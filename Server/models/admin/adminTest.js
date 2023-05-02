const {client} = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

const {createAdmin} = require('./createAdmin');
const {deleteAdmin} = require('./deleteAdmin');
const {updateAdmin} = require('./updateAdmin');
const {getAdmin} = require('./getAdmin');

/* Admin Test */
const adminObject = {
    id_admin: 15,
    nom: 'brouthen',
    prenom: 'kamel',
    email: 'lk_brouthen@esi.dz',
    mot_de_passe: 'projet2cp',
    cle_speciale: '2020',
    occupation: 'alger'
}

async function adminTest(client, adminObject, test_type){
    try{
        await connectDB(client);
        switch(test_type){
            case 'create':
                await createAdmin(client, adminObject);
                console.log('Admin created! with id : ', adminObject.id_admin);
                break;

            case 'delete':
                await deleteAdmin(client, adminObject.id_admin);
                console.log('Admin deleted!');
                break;

            case 'update':
                await updateAdmin(client, adminObject);
                console.log('Admin updated! with id : ', adminObject.id_admin);
                break;
            
            case 'get':
                const resultAdmin = await getAdmin(client, adminObject.id_admin);
                if(resultAdmin == null){
                    console.log('Admin does not exist');
                }
                else{
                    console.log('Admin exists :', resultAdmin);
                }
                break;
        }
    }
    catch(err){
        console.error('Error Testing admin', err);
    }
    finally{
        await disconnectDB(client);
    }
}

adminTest(client, adminObject, 'get');