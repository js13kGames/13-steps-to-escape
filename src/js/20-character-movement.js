// Handle keyboard input for character movement
function handleGameKeydown(key) {
  if (key && !keyStack.includes(key)) {
    keyStack.push(key);
  }
}

function handleGameKeyup(key) {
  console.log('keyup', key, event.key);
  if (key) {
    const index = keyStack.indexOf(key);
    if (index !== -1) {
      keyStack.splice(index, 1); // Remove the key from the stack
    }
  }

  // R to reset the level
  if (key === 'r') {
    resetLevel();
  }
  // E to undo the last action
  if (key === 'e') {
    undoLastAction();
  }

  hasPlayedWallSoundDuringKeyHold = false;
}

// Map keys to movement directions
function mapKeyToDirection(key) {
  switch (key) {
    case 'ArrowUp':
    case 'z':
    case 'w':
      return 'up';
    case 'ArrowDown':
    case 's':
      return 'down';
    case 'ArrowLeft':
    case 'q':
    case 'a':
      return 'left';
    case 'ArrowRight':
    case 'd':
      return 'right';
    default:
      return key;
  }
}
