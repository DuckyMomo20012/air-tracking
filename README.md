# Air Tracking
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Atmospheric monitoring system dashboard

Project idea & description: [Wiki](https://github.com/DuckyMomo20012/air-tracking/wiki)

## Getting Started

First, install dependencies:

```bash
yarn
```

> If you have error: "node" is incompatible... Then add flag:
> `--ignore-engines`. E.g: `yarn add --ignore-engines PACKAGE_NAME`

## Run server:

Run the development server:

```bash
yarn dev
```

## First setup:

- First, create an `.env` file from `.env.example` and edit values.

OR

- You can copy from here:

```text
# ThingSpeak channel ID to read data from
THINGSPEAK_CHANNEL_ID=
# ThingSpeak write key to write data to
THINGSPEAK_WRITE_KEY=
# ThingSpeak read key to read data from
THINGSPEAK_READ_KEY=
# IFFTT URL to send notification to
IFTTT_URL=
# Username to login to Node-RED editor
NODERED_USERNAME=
# Password to login to Node-RED editor
NODERED_PASSWORD=
```

> NOTE: NODERED_PASSWORD no longer requires a hash string, just normal string.
> E.g: `password`.

- `NODERED_USERNAME` and `NODERED_PASSWORD` is **used for default user** (admin).
- You can add another users in file `bin/www`.

Read more about customizing user and other ways to generate password: [Securing Node-RED](https://nodered.org/docs/user-guide/runtime/securing-node-red#editor--admin-api-security)

- Then, you can run server:
```bash
yarn dev
```

> NOTE: You change tweak Node-RED settings in file `bin/www`

## Access Node-RED editor:

- Go to `http://127.0.0.1:1880/red/` to view Node-RED editor.

<details>
<summary>Customizing Node-RED editor route</summary>

```javascript
// bin/www
const settings = {
  httpAdminRoot: '/editor',
  ...
};
```

</details>

> NOTE: Remember to deploy flow before accessing these routes

- Go to `http://127.0.0.1:1880/api/ui/` to view web UI (from
  node-red-dashboard node).

<details>
<summary>Customizing Node-RED node route</summary>

```javascript
// bin/www
const settings = {
  httpNodeRoot: '/',
  ...
};
```

</details>

- Go to `http://127.0.0.1:1880/api/worldmap/` to view world map (from
  node-red-contrib-web-worldmap node).

## Import flow:

- Go to hamburger button on top right of editor.
- Click `Import` button.
- Then import file `flows.json` from folder `data`.

## First setups:

- In Node-RED editor go to each MQTT nodes to edit server URL, topics...
- Change web title in `dashboard/site` tab (on the right side panel).
- Change web main color theme in `dashboard/theme` tab.
- If you don't have MQTT, you can connect node `MQTT emulator` (in Node-RED editor) to inject
  sample data.

  ![MQTT emulator node](https://user-images.githubusercontent.com/64480713/170508485-fbb7128b-c0d4-4ebf-97a5-1fbfb8151d4e.png)

OR
- You can use [MQTT explorer](http://mqtt-explorer.com/) to inject sample
  data.

  ![MQTT explorer example](https://user-images.githubusercontent.com/64480713/170509148-d8d65312-feff-488d-a076-c61dd0fb3b0b.png)

  *Example image from MQTT explorer website*

> NOTE: You can see sample data in folder `data`.


## Deploy flow:

- Click `Deploy` button in Node-RED editor to deploy flow.
- After deploying, your flow will be saved in `.node-red` folder.

> File `flow.json` in `.node-red` folder will be loaded for next server run. So
> you can push this `.node-red` folder to your repo to saved your work, instead
> of import file `flow.json` manually.

<details>
<summary>Customizing Node-RED user directory</summary>

```javascript
// bin/www
const settings = {
  userDir: './.node-red-store', // relative to root folder, default $HOME/.node-red
  ...
};
```

</details>

## Deploy to Heroku:

- User will be created by default:

```
username: admin
password: password
```

But **you can change it while deploying!**. Stay focus 👀.

You can change these defaults in file `app.json`.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## About project:

This is an adoption from Node-RED official example.
Read more: [Embedding into an existing app](https://nodered.org/docs/user-guide/runtime/embedding)

Read more about configurations for settings object: [Configuration](https://nodered.org/docs/user-guide/runtime/configuration)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/DuckyMomo20012"><img src="https://avatars.githubusercontent.com/u/64480713?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dương Tiến Vinh</b></sub></a><br /><a href="https://github.com/DuckyMomo20012/air-tracking/commits?author=DuckyMomo20012" title="Code">💻</a> <a href="https://github.com/DuckyMomo20012/air-tracking/commits?author=DuckyMomo20012" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.instagram.com/tusva_16/"><img src="https://avatars.githubusercontent.com/u/70436051?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Le Nguyen Tu Van</b></sub></a><br /><a href="#design-lntvan166" title="Design">🎨</a> <a href="#video-lntvan166" title="Videos">📹</a> <a href="https://github.com/DuckyMomo20012/air-tracking/commits?author=lntvan166" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Qhope"><img src="https://avatars.githubusercontent.com/u/68414039?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Qhope</b></sub></a><br /><a href="https://github.com/DuckyMomo20012/air-tracking/commits?author=Qhope" title="Code">💻</a> <a href="#design-Qhope" title="Design">🎨</a> <a href="https://github.com/DuckyMomo20012/air-tracking/commits?author=Qhope" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!