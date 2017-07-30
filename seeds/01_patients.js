
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "patient"; ALTER SEQUENCE patient_id_seq RESTART WITH 1')

  .then(function(){
    var patients = [{
      id: 1,
      firstName: 'Erin',
      lastName: 'Shaben',
      address: '818 S Dexter St. Apt 500',
      city: 'Denver',
      state: 'CO',
      zip: 80246,
      phone: '(585)519-5054',
      email: 'eshaben@icloud.com',
      birthdate: '1990-08-02',
      male: 'false',
      female: 'true',
      emergencyName: 'Kristine Redding',
      emergencyPhone: '(585)329-6009',
      emergencyRelationship: 'Mother',
      notes: ''
    }, {
      id: 2,
      firstName: 'Cody',
      lastName: 'Shaben',
      address: '818 S Dexter St. Apt 500',
      city: 'Denver',
      state: 'CO',
      zip: 80246,
      phone: '(585)313-2626',
      email: 'cshaben87@yahoo.com',
      birthdate: '1987-06-30',
      male: 'true',
      female: 'false',
      emergencyName: 'Kristine Redding',
      emergencyPhone: '(585)329-6009',
      emergencyRelationship: 'Mother',
      notes: ''
    }, {
      id: 3,
      firstName: 'Kiana',
      lastName: 'Redding',
      address: '162 Misty Woods Dr',
      city: 'Clover',
      state: 'SC',
      zip: 29710,
      phone: '(585)953-4537',
      email: 'kredding@icloud.com',
      birthdate: '1999-09-16',
      male: 'false',
      female: 'true',
      emergencyName: 'Kristine Redding',
      emergencyPhone: '(585)329-6009',
      emergencyRelationship: 'Mother',
      notes: ''
    }, {
      id: 4,
      firstName: 'Trevor',
      lastName: 'Redding',
      address: '162 Misty Woods Dr',
      city: 'Clover',
      state: 'SC',
      zip: 29710,
      phone: '(585)245-2222',
      email: 'tredding@icloud.com',
      birthdate: '2001-09-12',
      male: 'true',
      female: 'false',
      emergencyName: 'Kristine Redding',
      emergencyPhone: '(585)329-6009',
      emergencyRelationship: 'Mother',
      notes: ''
    }, {
      id: 5,
      firstName: 'Chloe',
      lastName: 'Shaben',
      address: '818 S Dexter St. Apt 500',
      city: 'Denver',
      state: 'CO',
      zip: 80246,
      phone: '(585)519-5054',
      email: 'chloe@icloud.com',
      birthdate: '2014-04-17',
      male: 'false',
      female: 'true',
      emergencyName: 'Erin Shaben',
      emergencyPhone: '(585)519-5054',
      emergencyRelationship: 'Fur-Mother',
      notes: 'She is a dog!'
    }]
    return knex('patient').insert(patients)
  })
};
