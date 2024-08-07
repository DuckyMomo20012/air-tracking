<div align="center">

  <h1>Air Tracking</h1>

  <p>
    Atmospheric monitoring system dashboard
  </p>

<!-- Badges -->
<p>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-✨)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

  <a href="">
    <img src="https://img.shields.io/github/last-commit/DuckyMomo20012/air-tracking" alt="last update" />
  </a>
  <a href="https://github.com/DuckyMomo20012/air-tracking/network/members">
    <img src="https://img.shields.io/github/forks/DuckyMomo20012/air-tracking" alt="forks" />
  </a>
  <a href="https://github.com/DuckyMomo20012/air-tracking/stargazers">
    <img src="https://img.shields.io/github/stars/DuckyMomo20012/air-tracking" alt="stars" />
  </a>
  <a href="https://github.com/DuckyMomo20012/air-tracking/issues/">
    <img src="https://img.shields.io/github/issues/DuckyMomo20012/air-tracking" alt="open issues" />
  </a>
  <a href="https://github.com/DuckyMomo20012/air-tracking/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/DuckyMomo20012/air-tracking.svg" alt="license" />
  </a>
</p>

<h4>
    <a href="https://github.com/DuckyMomo20012/air-tracking/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/air-tracking">Documentation</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/air-tracking/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/air-tracking/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Features](#dart-features)
  - [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Usage](#eyes-usage)
  - [Access Node-RED editor](#fast_forward-access-node-red-editor)
  - [Import flow](#inbox_tray-import-flow)
  - [Node-RED dashboard first setups](#one-node-red-dashboard-first-setups)
  - [Deploy flow](#rocket-deploy-flow)
  - [Value range](#1234-value-range)
  - [MQTT JSON Schema](#memo-mqtt-json-schema)
  - [Connect IFTTT](#electric_plug-connect-ifttt)
- [Roadmap](#compass-roadmap)
- [Contributing](#sparkles-contributors)
  - [Code of Conduct](#scroll-code-of-conduct)
- [FAQ](#grey_question-faq)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<div align="center">
  <img src="https://user-images.githubusercontent.com/64480713/177510391-5c11aadc-96b7-4c52-8ab9-ce5fed195ad6.png" alt="screenshot" />
</div>

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.javascript.com/">Javascript</a></li>
    <li><a href="https://nodered.org/">Node-RED</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://fastify.dev/">fastify</a></li>
  </ul>
</details>

<!-- Features -->

### :dart: Features

- Show average measured data:
  - Dust density.
  - Air quality.
  - Temperature.
  - Humidity.
- Show the data chart for a specific date.
- Locate all devices.
- Show and turn on/off device status.
- Send device danger warning to mobile.

<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to
your `.env` file:

- **Node-RED configs:**

  `NODERED_USERNAME`: Username to log in to Node-RED editor.

  `NODERED_PASSWORD`: Password to login to Node-RED editor.

- **ThingSpeak configs:**

  `THINGSPEAK_CHANNEL_ID`: ThingSpeak channel ID to read data from.

  `THINGSPEAK_WRITE_KEY`: ThingSpeak write key to write data to.

  `THINGSPEAK_READ_KEY`: ThingSpeak read key to read data from.

- **IFTTT configs:**

  `IFTTT_URL`: IFFTT URL to send a notification to.

E.g:

```
# .env
NODERED_USERNAME=admin
NODERED_PASSWORD=password

THINGSPEAK_CHANNEL_ID=1461192
THINGSPEAK_WRITE_KEY=RRFDXXCAA6DSDP84
THINGSPEAK_READ_KEY=V348J6XADWL2NUB60

IFTTT_URL=https://maker.ifttt.com/trigger/{event}/with/key/crMzTDLXl...
```

> **Note**: `NODERED_USERNAME` and `NODERED_PASSWORD` is **used for admin
> user**. You can add other users in the file `bin/www`.

Read more about customizing users and other ways to generate passwords:
[Securing Node-RED](https://nodered.org/docs/user-guide/runtime/securing-node-red#editor--admin-api-security).

> **Note**: You change tweak Node-RED settings in file `bin/www`.

You can also check out the file `.env.example` to see all required environment
variables.

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

- A **MQTT** broker service.

- This project uses [pnpm](https://pnpm.io/) as package manager:

  ```bash
  npm install --global pnpm
  ```

<!-- Run Locally -->

### :running: Run Locally

Clone the project:

```bash
git clone https://github.com/DuckyMomo20012/air-tracking.git
```

Go to the project directory:

```bash
cd air-tracking
```

Install dependencies:

```bash
yarn
```

Start the server:

```bash
yarn start
```

OR:

Run with `nodemon`:

```bash
yarn test
```

---

Access server:

The server will run on: http://localhost:3000/red/

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project on Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

<!-- Usage -->

## :eyes: Usage

<!-- Customize Node-RED -->

### :gear: Customize Node-RED

- You can custom your Node-RED configuration in file `bin/www`.

  - `httpAdminRoot`: the root URL for the editor UI. If set to false, all admin
    endpoints are disabled. This includes both API endpoints and the editor UI. To
    disable just the editor UI, see the disableEditor property below. Default:
    `/`.

  - `httpNodeRoot`: the root URL for nodes that provide HTTP endpoints. If set to
    false, all node-based HTTP endpoints are disabled. Default: `/`.

  - `userDir`: the directory to store all user data, such as flow and credential
    files and all library data. Default: `$HOME/.node-red`.

  - `flowFile`: the file used to store the flows. Default:
    `flows_<hostname>.json`.

  - `functionGlobalContext`: Function Nodes - a collection of objects to attach
    to the global function context. For example,

    ```javascript
    functionGlobalContext: {
      osModule: require('os');
    }
    ```

    can be accessed in a function node as:

    ```javascript
    var myos = global.get('osModule');
    ```

  - `adminAuth`: enables user-level security in the editor and admin API. See
    [Securing
    Node-RED](https://nodered.org/docs/user-guide/runtime/securing-node-red) for
    more information.

- This project configure these settings:

  ```javascript
  // bin/www
  const settings = {
    httpAdminRoot: '/red',
    httpNodeRoot: '/air-tracking',
    userDir: './.node-red/',
    flowFile: 'flows.json',
    functionGlobalContext: {
      THINGSPEAK_CHANNEL_ID: process.env.THINGSPEAK_CHANNEL_ID,
      THINGSPEAK_WRITE_KEY: process.env.THINGSPEAK_WRITE_KEY,
      THINGSPEAK_READ_KEY: process.env.THINGSPEAK_READ_KEY,
      IFTTT_URL: process.env.IFTTT_URL,
    }, // enables global context
    adminAuth: {
      type: 'credentials',
      users: [
        // This is admin user credentials
        {
          username: process.env.NODERED_USERNAME,
          password: bcryptjs.hashSync(process.env.NODERED_PASSWORD, 8),
          permissions: '*',
        },
      ],
    },
  };
  ```

> **Note**: Read more about Node-RED configuration: [Runtime
> Configuration](https://nodered.org/docs/user-guide/runtime/configuration).

<!-- Access Node-RED editor -->

### :fast_forward: Access Node-RED editor

- Go to `http://localhost:3000/red/` to view the Node-RED editor.

- Go to `http://localhost:3000/air-tracking/ui/` to view web UI (from
  node-red-dashboard node).

- Go to `http://localhost:3000/air-tracking/worldmap/` to view world map (from
  node-red-contrib-web-worldmap node).

> **Note**: Remember to deploy your flow before accessing node routes.

<!-- Import flow -->

### :inbox_tray: Import flow

- Go to the hamburger button on the top right of the editor.
- Click the `Import` button.
- Then import file `flows.json` from folder `data`.

<!-- Node-RED dashboard first setups -->

### :one: Node-RED dashboard first setups

- In Node-RED editor go to each MQTT node to edit server URL, topics...
- Change the web title in the `dashboard/site` tab (on the right-side panel).
- Change the web main color theme in the `dashboard/theme` tab.
- If you don't have MQTT, you can connect node `MQTT emulator` (in Node-RED
  editor) to inject sample data:

  ![MQTT emulator node](https://user-images.githubusercontent.com/64480713/170508485-fbb7128b-c0d4-4ebf-97a5-1fbfb8151d4e.png)

  OR:

  You can use [MQTT explorer](http://mqtt-explorer.com/) to inject a sample MQTT
  data:

  ![MQTT explorer example](https://user-images.githubusercontent.com/64480713/170509148-d8d65312-feff-488d-a076-c61dd0fb3b0b.png)

  _Example image from MQTT explorer website_

<!-- Deploy flow -->

### :rocket: Deploy flow

- Click the `Deploy` button in the Node-RED editor to deploy flow.
- After deploying, your flow will be saved in the `.node-red` folder.

> **Note**: File `flow.json` in the `.node-red` folder will be loaded for the
> next server run. So you can push this `.node-red` folder to your repo to save
> your work, instead of importing the file `flow.json` manually.

<!-- Value range -->

### :1234: Value range

- **Humidity(%)**:
  - `0 - 20`: Uncomfortably dry.
  - `20 - 60`: Normal.
  - `60 - 100`: Uncomfortably wet.
- **Temperature(℃)**:
  - `0 - 20`: Temperature is too cold.
  - `20 - 35`: Normal.
  - `35 - 50`: Temperature is too hot.
- **Dust density (mg/m3)**:
  - `0 - 3`: Normal
  - `3 - 10`: Normal
  - `10 - 50`: Dust density is too high.
- **Air quality**:

  - `0 - 190`: Normal.
  - `190 - 300`: Normal.
  - `300 - 500`: Air quality is too poor.

<!-- MQTT JSON Schema -->

### :memo: MQTT JSON Schema:

Your MQTT broker service should send data with this schema:

<details>
<summary>JSON Schema</summary>

```json
{
  "type": "object",
  "required": [],
  "properties": {
    "devices": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [],
        "properties": {
          "id": {
            "type": "string"
          },
          "air_quality": {
            "type": "number"
          },
          "dust_density": {
            "type": "number"
          },
          "humidity": {
            "type": "number"
          },
          "latitude": {
            "type": "number"
          },
          "longitude": {
            "type": "number"
          },
          "name": {
            "type": "string"
          },
          "status": {
            "type": "string"
          },
          "temperature": {
            "type": "number"
          },
          "working": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

</details>

> **Note**: You can see sample MQTT data in folder `data`. File
> `dangerous-data.json` and `normal-data.json`.

<!-- Connect IFTTT -->

### :electric_plug: Connect IFTTT

Follow [this tutorial](https://morioh.com/p/aa88d6059a8a) to create an IFTTT applet and test.

<details>
<summary>Webhook service configuration</summary>

![webhook configuration](https://user-images.githubusercontent.com/64480713/177544844-4d8cc0e9-ed5e-4993-90c4-c0b0f293d675.png)

</details>

<details>
<summary>Notification service configuration</summary>

![notification configuration](https://user-images.githubusercontent.com/64480713/177545025-4dd75e01-82d4-426a-88d4-8f4bd12869c6.png)

</details>

> **Note**: `Value1` is required.

<!-- Roadmap -->

## :compass: Roadmap

- [ ] Update dashboard UI.

<!-- Contributing -->

## :sparkles: Contributors

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

<!-- Code of Conduct -->

### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/DuckyMomo20012/air-tracking/blob/main/CODE_OF_CONDUCT.md).

<!-- FAQ -->

## :grey_question: FAQ

- Is this project still maintained?

  - Yes, but we will only update UI, docs, or dependencies. New features won't
    be added frequently.

- Can I add Express routes to this project?

  - Yes, you can. This project is adoption from Node-RED official example to
    embed Node-RED to Express application.

    Read more: [Embedding into an existing app](https://nodered.org/docs/user-guide/runtime/embedding)

- How can I configure my Node-RED application?

  - Go to file `bin/www`, then configure `settings` variable.

    Read more: [Configuration](https://nodered.org/docs/user-guide/runtime/configuration)

<!-- License -->

## :warning: License

Distributed under MIT license. See
[LICENSE](https://github.com/DuckyMomo20012/air-tracking/blob/main/LICENSE) for
more information.

<!-- Contact -->

## :handshake: Contact

Duong Vinh - [@duckymomo20012](https://twitter.com/duckymomo20012) -
tienvinh.duong4@gmail.com

Project Link: [https://github.com/DuckyMomo20012/air-tracking](https://github.com/DuckyMomo20012/air-tracking).

<!-- Acknowledgments -->

## :gem: Acknowledgements

Here are useful resources and libraries that we have used in our projects:

- [Node-RED](https://nodered.org/): A powerful tool to build IoT applications.
- [Awesome Readme Template](https://github.com/Louis3797/awesome-readme-template):
  A detailed template to bootstrap your README file quickly.
