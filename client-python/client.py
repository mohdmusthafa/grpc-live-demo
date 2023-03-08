import grpc
import convert_pb2_grpc
import convert_pb2

with grpc.insecure_channel('localhost:32000') as channel:
    client = convert_pb2_grpc.ConverterStub(channel)

    amount = convert_pb2.Currency(amount=10)
    converted = client.convertUSD(amount)

    print(converted)