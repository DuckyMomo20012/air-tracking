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

## Import flow:

- Go to hamburger button on top right.
- Click `Import`.
- Then import file `flows.json` from folder `data`.

## First setup:

- First, edit values in node `Load environment variables`
- Second, go to each MQTT nodes to edit server URL, topics...
- Change colors, web title in `dashboard`
- If you don't have MQTT, you can connect node `MQTT emulator` to inject
  sample data.
- You can see sample data in folder `data`.

## Access dashboard:

- Go to `http://127.0.0.1:1880/red/` to view admin dashboard.

NOTE: Remember to deploy flow before accessing these routes
- Go to `http://127.0.0.1:1880/api/ui/` to view web UI.
- Go to `http://127.0.0.1:1880/api/worldmap/` to view world map.

