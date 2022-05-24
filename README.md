# Air Tracking

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
## Access Node-RED editor:

- First, create an `.env` file from `.env.example` and edit values.
- Run server.
- Go to `http://127.0.0.1:1880/red/` to view Node-RED editor.

NOTE: Remember to deploy flow before accessing these routes
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
