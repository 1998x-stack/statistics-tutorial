#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const sum=a=>a.reduce((x,y)=>x+y,0),mean=a=>sum(a)/a.length,median=a=>{let x=[...a].sort((x,y)=>x-y);return x.length%2?x[(x.length-1)/2]:(x[x.length/2-1]+x[x.length/2])/2},variance=a=>sum(a.map(x=>(x-mean(a))**2))/(a.length-1);
const x=[2,3,3,4,8],y=[2,3,3,4,18];
assert.equal(mean(x),4);assert.equal(median(x),3);assert.equal(variance(x),5.5);assert.equal(sum(x.map(v=>(v-4)**2)),22);assert.equal(22/5,4.4);assert.equal(mean(y),6);assert.equal(median(y),3);assert.equal(variance(y),45.5);assert.equal(9/12,0.75);assert.equal(12/20,0.6);assert.equal(10/10,1);assert.equal(mean([12,35,20,25]),23);
console.log('worked numeric examples checked');
