
import requests
# There is nothing here but regret. See you on March 32
response = requests.get("http://localhost:9000/api/v1/tests")
print(response.json()["message"])