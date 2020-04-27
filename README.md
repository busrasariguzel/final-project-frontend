# `Busra's Dashboard`

Busra's Dashboard is a full stack project which is combined of a backend and frontend apps. In the app, you can : 

- Display daily currencies
- Checkout the COVID-19 data of the world, each country, and each USA states
- Keep a journal of your blessings

----
## `Motivation`

My motivation for doing this project is both to learn more about React, and to make a project that is useful for many people. Since we are going through hard times as a whole world due to the pandemic, I thought sharing Coronavirus data would be beneficial to many people. 
Currency section of the app is also useful for many people as it displays the recent currency rates. 
My motivation for the gratitude journal is to make people realize how many blessings they have in their lives. According to studies, keeping a gratitude journal would make people happier compare to ones who do not. I wanted to impact people's lives while learning about react.


---

## `Screenshots`
 ###  `Here are some examples of my code from the app:`

### `Journal Routes:`

![journal model](/public/images/Screen%20Shot%202020-04-27%20at%2010.31.36%20AM.png)


### `Getting the USD to Euro rate:`

![ejs header](/public/images/Screen%20Shot%202020-04-27%20at%2010.34.38%20AM.png)

### `Converting the given amount to selected currency:`

![calories model](/public/images/Screen%20Shot%202020-04-27%20at%2010.35.38%20AM.png)

### `Api call for COVID-19  data:`

![update profile routes](/public/images/Screen%20Shot%202020-04-27%20at%2010.36.25%20AM.png)

### `API call to backend and 3rd API call for Coronavirus cases worldwide:`

![ejs header](/public/images/Screen%20Shot%202020-04-27%20at%2010.36.38%20AM.png)

### `Api call for currency rates:`

![calories model](/public/images/Screen%20Shot%202020-04-27%20at%2010.37.53%20AM.png)

### `Api call for COVID-19  data by USA states:`

![calories model](/public/images/Screen%20Shot%202020-04-27%20at%2010.38.26%20AM.png)
### `Displaying the Covid-19 data for each country:`

![calories model](/public/images/Screen%20Shot%202020-04-27%20at%2010.38.55%20AM.png)

### `Displaying the worldwide Covid-19 data:`

![calories model](/public/images/Screen%20Shot%202020-04-27%20at%2010.39.36%20AM.png)



---
## `Contributing`

You can easily contribute to Busra's fitness app.
All you have to do is:
1. Fork this repo.
2. Clone it to your computer
3. Edit and contribute as you want!
---

## `API Reference`

`Below is the list of API's that are used in this project`

To get the Turkish Lira to USD currency rate:

https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=TRY&amount=1

To get the Euro to USD currency rate:

https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=EUR&amount=1

To get the USD to Chinese Yuan currency rate:

https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=CNY&amount=1

To get the Coronavirus data by countries and the total:

https://covid-193.p.rapidapi.com/statistics

To get the Coronavirus data by USA states:

https://covid19-data.p.rapidapi.com/us

---
## `How to Install?` 

#### `Clone`
You can clone my repository as below:

```
git clone https://github.com/busrasariguzel/final-project-frontend
git clone https://github.com/busrasariguzel/final-project-backend
```



#### `Setup`

After you clone the repository, you can setup  the app by:

```
npm install 
cd final-project-frontend
npm start
```

```
npm install 
cd final-project-backend
npm run dev
```
---

## `How to use?`
After you install the app, you can go to your browser and start using Busra's Dashboard App!
Here are the steps:
1. You can put http://localhost:3000 to your browser to enjoy desktop version of the app!
2. Don't forget to install and run both frontend and backend projects to get them working.


---
## `Routes`
You can find important routes for backend app below:

#### `Journal routes`

- /journal/:id - Gets a single journal entry with an id
- /journals - Gets all the journals



## `License`

Busra Tech ©

---