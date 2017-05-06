import axios from 'axios';
import { FETCH_PHOTO_SUCCESS, FETCH_DATA_SUCCESS, FETCH_MY_PHOTO_SUCCESS } from './constants'

export const fetchPhotoSuccess = (photos) => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: photos
})

export const fetchPhoto = () => {
  var rand = Math.floor(Math.random() * 999)
  return (dispatch) => {
    fetch(`https://api.500px.com/v1/photos?feature=popular&page=${rand}&image_size=600&consumer_key=0zqsxtvn1mA4DSgF6MUjmuAqHpSh1BUO3sYeKElF`)
    .then(res => res.json())
    .then(data => dispatch(fetchPhotoSuccess(data.photos)));
  }
}

export const fetchMyDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
})

export const fetchMyData = () => {
  return (dispatch) => {
    fetch('https://api.500px.com/v1/users/show?username=laksonosuryadi&consumer_key=0zqsxtvn1mA4DSgF6MUjmuAqHpSh1BUO3sYeKElF')
    .then(res => res.json())
    .then(data => dispatch(fetchMyDataSuccess(data.user)));
  }
}

export const fetchMyPhotoSuccess = (myphotos) => ({
  type: FETCH_MY_PHOTO_SUCCESS,
  payload: myphotos
})

export const fetchMyPhoto = () => {
  return (dispatch) => {
    fetch('https://api.500px.com/v1/photos/search?user_id=22075069&image_size=600&consumer_key=0zqsxtvn1mA4DSgF6MUjmuAqHpSh1BUO3sYeKElF')
    .then(res => res.json())
    .then(data => dispatch(fetchMyPhotoSuccess(data.photos)));
  }
}


//https://api.500px.com/v1/photos/search?user_id=22075069&consumer_key=0zqsxtvn1mA4DSgF6MUjmuAqHpSh1BUO3sYeKElF
