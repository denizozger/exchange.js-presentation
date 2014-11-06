Exchange.js Presentation
========================

The Socket.IO application that I used in my presentation at http://www.exchangejs.com/, and some notes.

## Outline
- Simple chat application demo
- Chat application code walkthrough
- https://medium.com/@denizozger/finding-the-right-node-js-websocket-implementation-b63bfca0539

## Before web sockets
- http://en.wikipedia.org/wiki/Comet_(programming)
- Long-polling

## Usages
- Real-time analytics 
- Chat (This app)
- Streaming (audio, video)
- Collobration (Trello) (Drawing, whiteboards)

## Popular frameworks
- Socket.io (most popular)
- Sock.js (trending)
- Primus (ability to switch frameworks)
- Engine.io (Socket.io is built on -abstraction of- Engine.io)
- ws (fastest)

## Important features to look for
- Support for rooms
- Fallback if websockets are not supported (http://caniuse.com/#feat=websockets)
- Performance
- Ease of scalability
- Auto-reconnecting after disconnect


