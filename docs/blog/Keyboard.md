---
date: 2024/01/30
draft: 存在这一行时表示在草稿箱中
title: 前端实现打字键盘
lables: 前端 dome
description: 前端实现打字键盘
---

# 前端实现打字键盘

## 引言

```vue
<template>
  <div class="Keyboard">
    <div
      class="row"
      v-for="row in keys">
      <div
        class="key"
        v-for="key in row"
        :class="{
          shrink: !key.flex,
          empty: !key.name,
          active: activeKeys[key.code],
          [key.type]: true,
        }"
        :style="{ flex: key.flex }">
        {{ key.name }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      activeKeys: {},
      keys: [
        [
          { name: '`~', code: 'Backquote' },
          { name: '1', code: 'Digit1' },
          { name: '2', code: 'Digit2' },
          { name: '3', code: 'Digit3' },
          { name: '4', code: 'Digit4' },
          { name: '5', code: 'Digit5' },
          { name: '6', code: 'Digit6' },
          { name: '7', code: 'Digit7' },
          { name: '8', code: 'Digit8' },
          { name: '9', code: 'Digit9' },
          { name: '0', code: 'Digit0' },
          { name: '-_', code: 'Minus' },
          { name: '=+', code: 'Equal' },
          { name: '⬅', code: 'Backspace', flex: '1', type: 'blue' },
        ],
        [
          { name: 'Tab', code: 'Tab', flex: '1', type: 'blue' },
          { name: 'Q', code: 'KeyQ' },
          { name: 'W', code: 'KeyW' },
          { name: 'E', code: 'KeyE' },
          { name: 'R', code: 'KeyR' },
          { name: 'T', code: 'KeyT' },
          { name: 'Y', code: 'KeyY' },
          { name: 'U', code: 'KeyU' },
          { name: 'I', code: 'KeyI' },
          { name: 'O', code: 'KeyO' },
          { name: 'P', code: 'KeyP' },
          { name: '[', code: 'BracketLeft' },
          { name: ']', code: 'BracketRight' },
          { name: '\\|', code: 'Backslash', flex: '1' },
        ],
        [
          { name: 'CapsLock', code: 'CapsLock', flex: '3', type: 'blue' },
          { name: 'A', code: 'KeyA' },
          { name: 'S', code: 'KeyS' },
          { name: 'D', code: 'KeyD' },
          { name: 'F', code: 'KeyF' },
          { name: 'G', code: 'KeyG' },
          { name: 'H', code: 'KeyH' },
          { name: 'J', code: 'KeyJ' },
          { name: 'K', code: 'KeyK' },
          { name: 'L', code: 'KeyL' },
          { name: ';:', code: 'Semicolon' },
          { name: '\'"', code: 'Quote' },
          { name: 'Enter', code: 'Enter', flex: '4', type: 'red' },
        ],
        [
          { name: 'Shift', code: 'ShiftLeft', flex: '4', type: 'blue' },
          { name: 'Z', code: 'KeyZ' },
          { name: 'X', code: 'KeyX' },
          { name: 'C', code: 'KeyC' },
          { name: 'V', code: 'KeyV' },
          { name: 'B', code: 'KeyB' },
          { name: 'N', code: 'KeyN' },
          { name: 'M', code: 'KeyM' },
          { name: ',<', code: 'Comma' },
          { name: '.>', code: 'Period' },
          { name: '/?', code: 'Slash' },
          { name: 'Shift', code: 'ShiftRight', flex: '3' },
          { name: '' },
        ],
        [
          { name: 'Ctrl', code: 'ControlLeft', type: 'blue' },
          { name: '' },
          { name: 'Alt', code: 'AltLeft', type: 'blue' },
          { name: '--', code: 'Space', flex: '1', type: 'red' },
          { name: 'Alt', code: 'AltRight', type: 'blue' },
          { name: '' },
          { name: 'Ctrl', code: 'ControlRight', type: 'blue' },
          { name: '' },
          { name: '' },
        ],
      ],
    }),
    methods: {
    },
    created() {
      document.addEventListener('visibilitychange', this.handelVisibilitychange);
      window.addEventListener('keydown', this.handelKeyDown);
      window.addEventListener('keyup', this.handelKeyUp);
      this.activeKeys = this.keys.flat().reduce((activeKeys, { code }) => {
        if (code) activeKeys[code] = false;
        return activeKeys;
      }, {});
    },
    destroyed() {
      document.removeEventListener('visibilitychange', this.handelVisibilitychange);
      window.removeEventListener('keydown', this.handelKeyDown);
      window.removeEventListener('keyup', this.handelKeyUp);
    },
  };
</script>


```
