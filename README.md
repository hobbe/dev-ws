# Development Web Server #

## Description ##

Simple web server for development purpose.

## Usage ##

1. Install [Node.js](http://nodejs.org/).

2. Download [this project as zip](https://github.com/hobbe/dev-ws/archive/master.zip)
and unzip to your preferred location.

3. In the project folder, install package and dependencies:

		npm install

4. Copy your web site pages to `/public` folder.

5. Run:

		npm start

6. Visit [http://localhost:8008](http://localhost:8008/) on your Web browser.

## Configuration ##

### config.json

The file `config.json` contains the web server configuration.

```
{
    "server": {
        "port": 8008,
        "location": "public"
    }
}
```

#### server ####

This section includes the web server configuration:
* **port**: HTTP port used by the HTTP server
* **location**: relative path to the folder containing the files that the HTTP server should serve

