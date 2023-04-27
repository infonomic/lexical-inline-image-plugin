# lexical-inline-image-plugin

An example inline-image plugin for (Lexical)[https://lexical.dev/]

![screenshot of Lexical editor inline image plugin](https://github.com/infonomic/lexical-inline-image-plugin/blob/main/screenshot.png?raw=true)

## Setup
`npm install`

`npm run dev`

## Notes

This is a complete copy of the [Lexical Playground](https://github.com/facebook/lexical/tree/main/packages/lexical-playground) project with quite a few nodes and plugins removed.

The [InlineImagePlugin](https://github.com/infonomic/lexical-inline-image-plugin/tree/main/src/plugins/InlineImagePlugin) was based initially on the Playground [ImagesPlugin](https://github.com/facebook/lexical/tree/main/packages/lexical-playground/src/plugins/ImagesPlugin) - and then adapted accordingly.

The UI and modals for the InlineImage plugin are a bit of a hack (Checkbox and Select in particular) since the actual UI of the editor would likely be set in the admin interface of the host application.

The img src is base64 encoded (as in the Playground example). A 'real' implementation would add one or more sources from the host application, likely as part of a responsive image strategy.

Enjoy!
