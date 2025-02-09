import "dotenv/config";
import { connection } from "./redpanda/consumer.js";

async function start() {
  const hostIp = process.env.HOST_IP || 'localhost';
  connection(hostIp);
}

start();