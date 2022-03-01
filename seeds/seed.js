const db = require('../config/connection');
const { Physician, Schedule } = require('../models');

const physicianData = [
  {
    "_id": "61f84b8fa20e8b1a30f442c3",
    "name": "Dr. John Doe",
    "email": "johndoe@gmail.com"
    
  },
  {
      "_id": "61f84b8fa20e8b1a30f442c4",
    "name": "Dr. John Smith",
    "email": "johnsmith@hotmail.com"
  }
];

const scheduleData = [
  {
    "name": "Paul Kane",
    "time": "8:00 AM",
    "kind": "New Appointment",
    "physician": "61f84b8fa20e8b1a30f442c3"
  },
  {
      "name": "Adam Apple",
      "time": "9:00 AM",
      "kind": "Followup",
      "physician": "61f84b8fa20e8b1a30f442c3"
    },
    {
      "name": "Eva Dean",
      "time": "10:00 AM",
      "kind": "New Appointment",
      "physician": "61f84b8fa20e8b1a30f442c4"
    },
    {
      "name": "Gina Wang",
      "time": "10:00 AM",
      "kind": "Checkup",
      "physician": "61f84b8fa20e8b1a30f442c4"
    }
];

db.once('open', async () => {
  await Physician.deleteMany({});
  const physicians = await Physician.insertMany(physicianData);

  await Schedule.deleteMany({});
  const schedules = await Schedule.insertMany(scheduleData);

  console.log('seeded!');
  process.exit(0);
});
