from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests

vegan_foods = ["vegan", "tofu", "vegan cheese", "vegan milk", "vegan butter", "vegan yogurt", "vegan ice cream", "vegan"]
non_veg_foods = ["chicken", "steak", "burrito", "beef", "cheese", "meat", "tacos", "pork"]


@api_view(['POST'])
def getData(data):
    request = data.data;
    latitude = str(request.get('latitude'));
    longitude = str(request.get('longitude'));
    cusine = request.get('cusine');
    print(latitude, longitude, cusine);
    # Create a global variable preference
    global preference
    preference = request.get('preference')
    radius = request.get('radius');
    API_KEY = "AIzaSyD2oxyuU0hsOl3g54KNT3rhYO8dqX35HYM";
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+"%2C"+longitude+"&radius="+radius+"&type=restaurant&keyword="+cusine+"&key="+API_KEY;
    response = requests.get(url);
    data = response.json();
    data = processData(data);
    return Response(data)

def processData(data):
    response = {};
    response["status"] = data['status'];
    response["restraunts"] = [];
    for i in data['results']:
        rest = {};
        rest['name'] = i['business_status'];
        rest['latitude'] = i['geometry']['location']['lat'];
        rest['longitude'] = i['geometry']['location']['lng'];
        rest['icon'] = i['icon'];
        rest['icon_background_color'] = i['icon_background_color'];
        rest['icon_mask_base_uri'] = i['icon_mask_base_uri'];
        rest['name'] = i['name'];
        rest['open_now'] = i['opening_hours']['open_now'];
        rest['place_id'] = i['place_id'];
        rest['address'] = i['vicinity'];
        rest['rating'] = i['rating'];
        getPlaceDetails(rest['place_id'], rest);
        response["restraunts"].append(rest);
    return response;

def getPlaceDetails(place_id, rest):
    API_KEY = "AIzaSyD2oxyuU0hsOl3g54KNT3rhYO8dqX35HYM";
    url = "https://maps.googleapis.com/maps/api/place/details/json?place_id="+place_id+"&fields=name%2Crating%2Ceditorial_summary%2Creviews%2Cserves_vegetarian_food%2Creviews&key=AIzaSyD2oxyuU0hsOl3g54KNT3rhYO8dqX35HYM"
    response = requests.get(url);
    data = response.json();
    interested_keys = ['editorial_summary', 'reviews', 'serves_vegetarian_food', 'reviews']
    text = "";
    for k in interested_keys:
        # # Check if key exists in data[result]
        # if k not in data['result']:
        #     continue;
        # rest[k] = data['result'][k];
        if k == 'reviews':
            for i in data['result'][k]:
                text += i['text'];
                text += " ";
    # print(text)
    # split text into words
    words = process_text(text);
   
    # find if the words are in vegan_foods

    # "restaurant_description": "string",
    #         "preferred_meal_type": "vegan"
    #         "has_preferred_meal_types": boolean,
    #         "comments_that_mention_preferred_meal_types":["This place had vegan tofu, I liked it",
    #         "I liked the vegan cheese and onions".
    #           ]
    if 'editorial_summary' in data['result']:
        rest['restaurant_description'] = data['result']['editorial_summary']['overview'];
        words.append(process_text(rest['restaurant_description']))
        words.append(process_text(rest['name']))
    else:
        rest['restaurant_description'] = "";
    preferred_meal_type = True;
    if preference == "vegan":
        preferred_meal_type = False;
        for word in words:
            if word in vegan_foods:
                preferred_meal_type = True;
                break;
    if preference == "vegetarian":
        preferred_meal_type = False;
        
        # check serves_vegetarian_food is present in data['result]
        if 'serves_vegetarian_food' in data['result']:
            if data['result']['serves_vegetarian_food']:
                preferred_meal_type = True;
    if preference == "no-preference":
        preferred_meal_type = True;

    rest['preferred_meal_type'] = preference;
    rest['has_preferred_meal_types'] = preferred_meal_type;
    if 'reviews' in data['result']:
        rest['reviews'] = []
        for review in data['result']['reviews']:
            # Check review length less than 100 characters
            processed_text = process_text(review['text']);
            for word in processed_text:
                # print(word)
                if preference == "vegan":
                    if word in vegan_foods:
                        rest['reviews'].append(review['text']);
                        break;
                elif preference == "vegetarian":
                    rest['reviews'].append(review['text']);
                    break;
                elif preference == "no-preference":
                    rest['reviews'].append(review['text']);
                    break;
            if(len(rest['reviews'])==2):
                break;
    else:
        rest['reviews'] = [];


def process_text(text):
    words = text.split(" ");
    # remove empty strings
    words = list(filter(None, words));
    # remove punctuation
    words = [word.replace(".", "") for word in words];
    words = [word.replace(",", "") for word in words];
    words = [word.replace("!", "") for word in words];
    words = [word.replace("?", "") for word in words];
    # convert to lowercase
    words = [word.lower() for word in words];
    # remove duplicates
    words = list(set(words));
    return words;