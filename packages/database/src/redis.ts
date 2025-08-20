import IORedis from "ioredis";



export const redis = new IORedis({
  host: "localhost", // redis host
  port: 6379, //port
  maxLoadingRetryTime: undefined, // no retry
  maxRetriesPerRequest: undefined, // no retry
});

