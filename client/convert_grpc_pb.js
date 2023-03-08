// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var convert_pb = require('./convert_pb.js');

function serialize_Currency(arg) {
  if (!(arg instanceof convert_pb.Currency)) {
    throw new Error('Expected argument of type Currency');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Currency(buffer_arg) {
  return convert_pb.Currency.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConverterService = exports.ConverterService = {
  convertUSD: {
    path: '/Converter/convertUSD',
    requestStream: false,
    responseStream: false,
    requestType: convert_pb.Currency,
    responseType: convert_pb.Currency,
    requestSerialize: serialize_Currency,
    requestDeserialize: deserialize_Currency,
    responseSerialize: serialize_Currency,
    responseDeserialize: deserialize_Currency,
  },
};

exports.ConverterClient = grpc.makeGenericClientConstructor(ConverterService);
