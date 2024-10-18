import requests

for i in range(100) :
    requests.get('http://localhost:4000')

print("process completed !")