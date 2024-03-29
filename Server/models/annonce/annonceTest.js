const { client } = require('../client');

const { createAnnonce } = require('./createAnnonce');
const { deleteAnnonce } = require('./deleteAnnonce');
const { updateAnnonce } = require('./updateAnnonce');
const { getAnnonce } = require('./getAnnonce');


/* Annonce Test */
const annonceObject = {
    id: 4,
    title: 'Best bank in Algeria !',
    subTitle: 'Here is a description of the bank',
    image: 'https://i.postimg.cc/WzrZ8xry/haick.jpg',
}

//console.log(client);

async function AnnonceTest(client, annonceObject, test_type) {
    try {
        switch (test_type) {
            case 'create':
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
        console.log("Done Testing Annonce");
    }
}

AnnonceTest(client, annonceObject, 'create');