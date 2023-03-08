const grpc = require('grpc');
const { Currency } = require('./convert_pb');
const { ConverterService } = require('./convert_grpc_pb');

function convertUSD(call, callback) {
  const amount = call.request.getAmount();
  const convertedCurrency = new Currency().setAmount(amount * 85);
  callback(null, convertedCurrency);
}

const server = new grpc.Server();

server.addService(ConverterService, {
  convertUSD: convertUSD
})

server.bind('0.0.0.0:32000', grpc.ServerCredentials.createInsecure())
server.start();