# TailorMadeBoston

webstite for [tailormadeboston.com](https://tailormadeboston.com/)

## Installation

```bash
git clone https://github.com/sfrunza/tailor-app.git
cd tailor-app
npm install -g firebase-tools
npm install
cd functions && npm install
firebase login  #in the root directory
```

## Secrets

create a **.env** file in the root directory.\
get firebase configs from **firebase->project settings->config**

```js
tailor-app/.env

REACT_APP_API_KEY=XXXXXXXXXXXXXXXX
REACT_APP_AUTH_DOMAIN=XXXXXXXXXXXXXXXX
REACT_APP_PROJECT_ID=XXXXXXXXXXXXXXXX
REACT_APP_STORAGE_BUCKET=XXXXXXXXXXXXXXXX
REACT_APP_MESSAGING_SENDER_ID=XXXXXXXXXXXXXXXX
REACT_APP_APPID=XXXXXXXXXXXXXXXX
REACT_APP_MEASUREMENT_ID=XXXXXXXXXXXXXXXX
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
