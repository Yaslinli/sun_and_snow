var todayRaw = new Date();
var todayYY = todayRaw.getFullYear();
var todayMM = todayRaw.getMonth();
var todayDD = todayRaw.getDate();
var today = new Date(todayYY, todayMM, todayDD);
var beginning = new Date(2018, 07, 10); //YYYY, MM, DD //month counts from 00 i.e may = 04 not 05
//var today = today.getTime();        // It seems you do not need this...? //
//var incident = incident.getTime();  //                                   //

var difference = Math.round((today - beginning)/(1000*60*60*24));
document.querySelector('#days').innerHTML = difference;// JavaScript Document

