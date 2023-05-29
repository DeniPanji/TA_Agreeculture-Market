/* eslint-disable no-console */
const { Kafka }  = require('kafkajs');

const kafka = new Kafka({
  clientId: 'agreeculture-market',
  brokers: ['localhost:9092', 'localhost:9092']
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  await producer.send({
    topic: 'offer',
    messages: [
      { value: 'Hello consumer, we are connected through kafka' }
    ],
  });
  console.log('Message sent successfully');
};

module.exports = run;
