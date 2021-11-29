
# idsMED
idsMED Group is one of the largest integrated solutions providers of medical equipment, supplies and services in Asia. idsMED Group has an extensive distribution network covering various healthcare institutions including government and private hospitals, day surgery centres, specialist and primary care clinics, laboratories and nursing homes. In line with its expansion program in the region, idsMED Group now successfully operates in nine markets: Singapore, Malaysia, Indonesia, Hong Kong, Philippines, Thailand, China, Taiwan and Vietnam.
In order to achieve better delivery of products and services to the existing and future markets, idsMED has engaged Websight Sdn. Bhd. to design, develop and implement mobile and web applications for Financial Product Solution module (enhancement to Funnel Management & Performance Module).
This project was approved by the idsMED’s Board of Directors and Management respectively to upgrade the existing Microsoft Dynamics CRM 2013 to Microsoft Dynamics 365 Customer Engagement (hereinafter “D365”).

## Prerequisites
Before you begin, make sure your development environment includes `git`, `Node.js®` and an `npm` package manager.

#### Git
https://git-scm.com/downloads

#### Node.js
Angular 12 requires `Node.js` version 12.x or later.

- To check your version, run `node -v` in a terminal/console window.
- To get `Node.js`, go to [nodejs.org](https://nodejs.org/).

#### Angular CLI
Install the Angular CLI globally using a terminal/console window.
```bash
npm install -g @angular/cli
```

## Installation
Clone / Download like:
```
git clone https://github.com/LajwardCo/iDSMED-frontend.git
```
Go into app's directory:
```
cd iDSMED-frontend
```
Install app's dependencies:
```
npm install
```

## Usage (running)
Virtually-Host with hot-reload (at `localhost:4200`), like:
```
ng serve
```

## Deploy
Build for production with minification, like:
```
npm run build
```

## Deploy Documentation
The documentation for the App is auto-generated, like:
```
npm run build-docs
```
>Creates `documentation` directory, open `index.html` file (from generated dir).

## What's included

Within the download you'll find the following directories and files, logically grouping common assets. You'll see something like this:

```
iDSMED-frontend/
├── e2e/
├── src/
│   ├── app/
|   |   ├── dms/
│   |   └── ...
│   ├── assets/
│   ├── environments/
│   ├── scss/
│   ├── index.html
│   └── ...
├── .angular-cli.json
├── ...
├── package.json
└── ...
```
