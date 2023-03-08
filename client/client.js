const grpc = require("grpc");
const { ConverterClient } = require("./convert_grpc_pb")
const { Currency } = require("./convert_pb")

const client = new ConverterClient('localhost:32000', grpc.credentials.createInsecure());

const amount = new Currency().setAmount(10);
client.convertUSD(amount, (err, response) => {
  console.log(response.getAmount())
})