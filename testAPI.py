import json
import requests
# There is nothing here but regret. See you on March 32
address = "http://62.113.105.120:5500/"

def GetCardsMunchkin():
   response = requests.get(f"{address}munchkin-card/Classic").json()
   cards = []
   for line in response:
      card = list()
      card.append(line["typeMunchkin"])
      card.append(line["cardType"])
      card.append(line["cardNameEng"])
      card.append(line["cardNameRus"])
      card.append(line["cardDescription"])
      cards.append(card)
   return cards
      
def SaveCards(filePath, fileName = "Cards backup.txt"):
   with open(f"{filePath}\{fileName}", "w+") as file:
      response = requests.get(f"{address}munchkin-card/Classic").json()
      json.dump(response, file, ensure_ascii=False)