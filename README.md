# <u>Stockoverflow

It's opensource application that help people to manage Stock System,

Because we care about your Stock, let us take care of it. And let you do the rest

# <u>Architecture

### Back End
1. Express
2. Mongoose , MongoDB


### Front End
1. jQuery
2. Javascript

### Testing
1. Mocha
2. Chai


## Data

| Model | Description|
|-------|------------|
|stocks| item stocks

## EndPoint  

| End Point | HTTP| Description|
|-------|------------|---------|
|/api/stock | GET | List stock
|/api/stock/:id|GET|List stock base on ID
|/api/stock/|POST| Insert Stock
|/api/stock/:id|PUT|Update Stock base on ID
|/api/stock/:id|DEL|Delete Stock base on ID

## How to install

```
npm install
```

## How to use TDD

```
npm test
```
