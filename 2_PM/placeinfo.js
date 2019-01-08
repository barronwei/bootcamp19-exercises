/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const {googleMapsClient} = require('./google_api.js');

googleMapsClient.findPlace({
    input: process.argv[2],
    inputtype: 'textquery',
  }).asPromise().then(response => {
      const placeID = response.json.candidates[0].place_id
      googleMapsClient.place({placeid: placeID}).asPromise().then((response) => {
        if (response) {
            const result = response.json.result
            console.log(`${process.argv[2]} is located at coordinates ${result.geometry.location.lat} latitude ${result.geometry.location.lng} longitude, at the address ${result.formatted_address}.`);
        }
      }).catch((err) => {
        console.log(err);
    });
  }).catch((err) => {
    console.log(err);
});
