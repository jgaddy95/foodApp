import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer YXK2wh8Y_RdcEqV11SlVIdpNwbcmQLuyCYV0rHA24q3xJ5fLRgfjFWO21MXbb8aCEdj1ff9yQIYJTFHKq1gpQiuOqAWQ5HB5oSGR4mnCd6Ysik3Le-XqdaF9O9b7XXYx'
  }
});
