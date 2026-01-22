# Implementation for pxt-common-packages

This document contains the code that should be added to the `microsoft/pxt-common-packages` repository to implement the `scene.cameraUnfollowSprite()` function.

## Background

Users were creating "ghost sprites" or relying on undocumented workarounds (passing `null` to `cameraFollowSprite()`) because there was no explicit way to stop camera following. This new function provides a clear, discoverable API for unfollowing sprites.

## Location

The code should be added to the **scene** namespace in pxt-common-packages, likely in:
- `libs/game/camera.ts` (if it exists)
- OR the appropriate file where `scene.cameraFollowSprite()` is currently defined

## Code to Add

```typescript
/**
 * Stop the camera from following any sprite.
 * This is equivalent to calling scene.cameraFollowSprite(null).
 */
//% blockId=scene_camera_unfollow_sprite
//% block="camera stop following sprite"
//% group="Camera"
//% weight=90
//% help=scene/camera-unfollow-sprite
export function cameraUnfollowSprite() {
    scene.cameraFollowSprite(null);
}
```

## Alternative Implementation (if needed)

If you want to avoid the dependency on calling `cameraFollowSprite(null)` and implement it directly, you would need to access the internal camera following state. However, the wrapper approach above is simpler and maintains consistency.

## Block Configuration

- **Block ID**: `scene_camera_unfollow_sprite`
- **Block Text**: "camera stop following sprite"
- **Group**: Camera
- **Weight**: 90 (same priority as other camera functions)
- **Help Reference**: `scene/camera-unfollow-sprite`

## Usage Example

```typescript
let mySprite = sprites.create(img`
    . . . . . 5 5 5 5 . . . . .
    . . . . 5 5 5 5 5 5 . . . .
    . . . . 5 5 5 5 5 5 . . . .
    . . . . . 5 5 5 5 . . . . .
    `, SpriteKind.Player)

controller.moveSprite(mySprite)

// Make the camera follow the sprite
scene.cameraFollowSprite(mySprite)

// Later, when you want to stop following:
scene.cameraUnfollowSprite()
```

## Testing

After implementation, the function should:
1. Stop the camera from following any currently followed sprite
2. Allow the camera to remain at its current position
3. Be available in both the TypeScript API and the block editor
4. Appear in the Camera group of the Scene category

## Documentation

Consider adding documentation that explains:
- When to use `cameraUnfollowSprite()` vs `cameraFollowSprite(null)`
- Use cases for stopping camera following (e.g., cutscenes, transitions between areas)
- That this is a convenience function that makes the API more discoverable

## Notes

- This implementation is cross-target compatible and should work for all MakeCode targets that use the game library
- The function name follows the naming convention of other camera functions
- The block text is concise and clear for block-based users
