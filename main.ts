controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    d += 1
    if (d == 5) {
        d = 0
    }
    tiles.placeOnTile(mySprite, list[d])
})
let list: tiles.Location[] = []
let d = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 8 8 8 8 8 8 8 8 8 8 2 . . 
    . . 2 8 8 8 8 8 8 8 8 8 8 2 . . 
    . . 2 8 8 8 8 8 8 8 8 8 8 2 . . 
    . . 2 8 8 8 8 8 8 8 8 8 8 2 . . 
    . . 2 8 8 8 8 8 8 8 8 8 8 2 . . 
    . . 2 8 8 8 8 8 8 8 8 8 8 2 . . 
    . . 2 8 8 8 8 8 8 8 8 8 8 2 . . 
    . . 2 8 8 8 8 8 8 8 8 8 8 2 . . 
    . . 2 8 8 8 8 8 8 8 8 8 8 2 . . 
    . . 2 8 8 8 8 8 8 8 8 8 8 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
d = -1
list = [
tiles.getTileLocation(2, 2),
tiles.getTileLocation(14, 2),
tiles.getTileLocation(10, 6),
tiles.getTileLocation(3, 13),
tiles.getTileLocation(14, 11)
]
scene.cameraFollowSprite(mySprite)
