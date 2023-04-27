# lexical-inline-image-plugin

An example inline-image plugin for (Lexical)[https://lexical.dev/]

## Setup
`npm install`

`npm run dev`

## Notes

The core is a complete copy of the Lexical Playground project, with quite a few nodes and plugins removed.

The UI and modals for the InlineImage plugin is a bit of a 'hack' (Checkbox and Select in particular) since the actual UI of the editor would be set in the admin interface of the host application.

Image src is base64 encoded (as in the Playground example). A 'real' implementation would add one or more sources from the host system - likely also a responsive image strategy.

Enjoy!
