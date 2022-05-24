# Air Tracking
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Atmospheric monitoring system dashboard

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
## Secure Node-RED editor:

To access Node-RED editor, you have to provide `username` and `password`.
Create admin user by setting `NODERED_USERNAME` and `NODERED_PASSWORD`.
> NOTE: To generate password, you can run command in terminal:
```bash
node-red admin hash-pw
```
You can add another users in file `bin/www`.
Read more: [Securing Node-RED](https://nodered.org/docs/user-guide/runtime/securing-node-red#editor--admin-api-security)

## Access Node-RED editor:

- First, create an `.env` file from `.env.example` and edit values.
- Run server.
- Go to `http://127.0.0.1:1880/red/` to view Node-RED editor.

> NOTE: Remember to deploy flow before accessing these routes
- Go to `http://127.0.0.1:1880/api/ui/` to view web UI.
- Go to `http://127.0.0.1:1880/api/worldmap/` to view world map.

## Import flow:

- Go to hamburger button on top right.
- Click `Import` button.
- Then import file `flows.json` from folder `data`.

## First setup:

- Second, in Node-RED editor go to each MQTT nodes to edit server URL, topics...
- Change web title in `dashboard/site` tab (on the right side panel).
- Change web main color theme in `dashboard/theme` tab.
- If you don't have MQTT, you can connect node `MQTT emulator` (in Node-RED editor) to inject
  sample data.
- OR you can use [MQTT explorer](http://mqtt-explorer.com/) to inject sample data.
- You can see sample data in folder `data`.
- You change tweak Node-RED settings in file `bin/www`

## Deploy flow:

- Click `Deploy` button in Node-RED editor to deploy flow.
- After deploying, your flow will be saved in `.node-red` folder.
> File `flow.json` in `.node-red` folder will be loaded for next server run. So
> you can push this `.node-red` folder to your repo to saved your work, instead
> of import file `flow.json` manually.

## About embedding Node-RED to Express:

This is an adaption from Node-RED example.
Read more: [Embedding into an existing app](https://nodered.org/docs/user-guide/runtime/embedding)

You can set Node-RED settings in `bin/www`. Read more: [Configuration](https://nodered.org/docs/user-guide/runtime/configuration)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/DuckyMomo20012"><img src="https://avatars.githubusercontent.com/u/64480713?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dương Tiến Vinh</b></sub></a><br /><a href="https://github.com/DuckyMomo20012/air-tracking/commits?author=DuckyMomo20012" title="Code">💻</a> <a href="https://github.com/DuckyMomo20012/air-tracking/commits?author=DuckyMomo20012" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.instagram.com/tusva_16/"><img src="https://avatars.githubusercontent.com/u/70436051?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Le Nguyen Tu Van</b></sub></a><br /><a href="#design-lntvan166" title="Design">🎨</a> <a href="#video-lntvan166" title="Videos">📹</a> <a href="https://github.com/DuckyMomo20012/air-tracking/commits?author=lntvan166" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!