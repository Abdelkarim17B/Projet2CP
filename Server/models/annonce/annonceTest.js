const { client } = require('pg');

const { createAnnonce } = require('./createAnnonce');
const { deleteAnnonce } = require('./deleteAnnonce');
const { updateAnnonce } = require('./updateAnnonce');
const { getAnnonce } = require('./getAnnonce');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');


/* Annonce Test */
const annonceObject = {
    id: 4,
    titre: 'Best bank in Algeria !',
    sous_titre: 'Here is a description of the bank',
    image: 'https://i.postimg.cc/WzrZ8xry/haick.jpg',
}

async function AnnonceTest(annonceObject, test_type) {
    const client = await connectDB()
    try {
        console.log('The client in try', client);
        switch (test_type) {
            case 'create':
                console.log('The client in create', client);
                await createAnnonce(client, annonceObject);
                console.log('Annonce created! with id : ', annonceObject.id);
                break;

            case 'delete':
                await deleteAnnonce(client, annonceObject.id);
                console.log('Annonce deleted!');
                break;

            case 'update':
                await updateAnnonce(client, annonceObject);
                console.log('Annonce updated! with id : ', annonceObject.id);
                break;

            case 'get':
                const resultAnnonce = await getAnnonce(client, annonceObject.id);
                if (resultAnnonce == null) {
                    console.log('Annonce does not exist');
                }
                else {
                    console.log('Annonce exists :', resultAnnonce);
                }
                break;
        }
    }
    catch (err) {
        console.error('Error Testing Annonce', err);
    }
    finally {
        console.log('The client in finally', client);
        await disconnectDB(client)
        console.log("Done Testing Annonce");
    }
}

AnnonceTest(annonceObject, 'create');