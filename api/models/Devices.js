/**
* Devices.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type:"string",
      required: true
    },
    room: {
      type: "string",
      required: true
    },
    house: {
      type: "string",
      required: true
    },
    owner: {
      type: "string",
      required: true
    },
    image: {
      type: "string",
      required: true
    },
    watts: {
      type: "string",
      required: true
    },
    trigger: {
      type: "string",
      required: true
    }
  }
};

