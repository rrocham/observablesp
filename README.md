# Introduction

This project provides the back-end for a [Observable](https://observablehq.com/) notebook implemented using Azure Functions.

# Configuration

## SharePoint

In order to get the app working register a new app in SharePoint. Follow this [guide](https://github.com/SharePoint/PnP-JS-Core/wiki/Testing-Against-SharePoint) for more instructions.

## Azure Function

Based on the information of the SharePoint App registration set the following Application settings in your Azure Function App
 - spId
 - spSecret
 - spTenantUrl

## Observable

If your API is configured to require an access code make sure to use Observable's [secrets](https://observablehq.com/@observablehq/secrets).