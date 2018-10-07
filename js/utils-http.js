function generateBasicAuthString(user, password)
{
    var token = user + ":" + password;

    // Base64 Encoding -> btoa
    var hash = btoa(token);

    return "Basic " + hash;
}
