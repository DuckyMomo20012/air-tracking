import http from 'node:http';
import bcryptjs from 'bcryptjs';
import express from 'express';
import Fastify from 'fastify';
import RED from 'node-red';

const app = express();
const server = http.createServer(app);

RED.init(server, {
  httpAdminRoot: '/red',
  httpNodeRoot: '/air-tracking',
  userDir: './.node-red/',
  flowFile: 'flows.json',
  functionGlobalContext: {
    THINGSPEAK_CHANNEL_ID: process.env.THINGSPEAK_CHANNEL_ID,
    THINGSPEAK_WRITE_KEY: process.env.THINGSPEAK_WRITE_KEY,
    THINGSPEAK_READ_KEY: process.env.THINGSPEAK_READ_KEY,
    IFTTT_URL: process.env.IFTTT_URL,
  }, // enables global context
  adminAuth: {
    type: 'credentials',
    users: [
      {
        username: process.env.NODERED_USERNAME || 'admin',
        password: bcryptjs.hashSync(
          process.env.NODERED_PASSWORD || 'password',
          8,
        ),
        permissions: '*',
      },
    ],
  },
});

app.use('/red', RED.httpAdmin);
RED.start();

const fastify = Fastify({
  serverFactory: () => {
    return server;
  },
  logger: true,
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
