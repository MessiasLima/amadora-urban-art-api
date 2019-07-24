# Amadora Urbar Art API
An easy way to appreciate an get infos about urban artists from Amadora

## Installing and running
- Clone the repo
- Enter in the repo folder
- run on terminal: `npm i`
- run on terminal: `node src/`

## Data source
All available data is from [Open data portal from Portugal](http://dados.gov.pt):
- [Amadora Street Art](https://dados.gov.pt/pt/reuses/amadora-street-art-open-source/)

## API Documentation

### Get art list
- URI: `/api/art`
- Method: `GET`
- Response: 
```
[
    {
        "PartitionKey": "Folha1",
        "ID": "15",
        "name": "Sem título",
        "Autoria": "NoMen",
        "Localizacao": "Troço IC17/Cril",
        "Freguesia": "Encosta do Sol",
        "Data": "2010",
        "Tipologia": "Muro",
        "pic_url": "http://geoportal.cm-amadora.pt/files_site_internet/links/pcultural/id15.jpg",
        "Latitude": "38.75954692",
        "Longitude": "-9.202011757",
        "Descricao": "NoMen (2010). “Estou há 25 anos a pintar e nunca mais parei.”"
    },
    ...
]
```
- Obs.: You can filter results passing a parameter in query params
    - Example: `/api/art?Autoria=NoMen`

### Get artists list
- URI: `/api/artist`
- Method: `GET`
- Response: 
```
[
    "Odeith",
    "Dzenhart",
    "GVS Crew",
    "Smile",
    ...
]
```
### Get neighborhood list
- URI: `/api/neighborhood`
- Method: `GET`
- Response: 
```
[
    "Falagueira-Venda Nova",
    "Encosta do Sol",
    "Águas Livres",
    "Mina de Água",
    "Venteira"
]
```

## License
MIT License

Copyright (c) 2019 Messias Lima

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
