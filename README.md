# Auto-complete API

## Prerequisites
* Node
* Yarn

### Instalation and Start
yarn
yarn start

App will start on local host 8080
Uses data from https://github.com/dwyl/english-words/blob/master/

Transforms that data on start up to an object with keys of the first three letters of each word for faster filtering.

Returns an array of up to 10 words for use in autocomplete (most users won't look past the first few words if they don't see theirs they will keep typing)

Example:
localhost:8080/autoComplete/tur
returns [
    "turacin",
    "turaco",
    "turacos",
    "turacou",
    "turacous",
    "turacoverdin",
    "turacus",
    "turakoo",
    "turanian",
    "turanianism"
]

Ideals for improvement:
Get a frequency attribute to the words and then use that to sort the words so they more relevent.
