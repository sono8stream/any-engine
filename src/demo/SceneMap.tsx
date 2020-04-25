import React, { useContext, useEffect, useState } from 'react';
import * as THREE from 'three';
import SceneContext from '../context/sceneContext';

const SceneMap: React.FC = () => {
  const context = useContext(SceneContext);

  const load = async () => {
    const mapResponse = await fetch('./resources/map.json');
    const tileResponse = await fetch('./resources/tile.json');
    const mapInfo = await mapResponse.json();
    const tileInfo = await tileResponse.json();
    let loadCnt = 0;
    const baseTilePath = './resources/' + tileInfo.baseTilePath;
    const mapchips = new Image();
    const autochips: HTMLImageElement[] = [];
    mapchips.onload = () => {
      loadCnt++;
      console.log(loadCnt);
      if (loadCnt === 16) {
        generateSprite(mapInfo, tileInfo, mapchips, autochips);
      }
    };
    mapchips.src = baseTilePath;

    for (let autoTilePath of tileInfo.autoTilePathList) {
      autoTilePath = './resources/' + autoTilePath;
      const autochip = new Image();
      autochip.onload = () => {
        loadCnt++;
        console.log(loadCnt);
        if (loadCnt === 16) {
          generateSprite(mapInfo, tileInfo, mapchips, autochips);
        }
      };
      autochip.src = autoTilePath;
      autochips.push(autochip);
    }
  };
  load();

  const generateSprite = (
    mapInfo: any,
    tileInfo: any,
    mapchips: HTMLImageElement,
    autochips: HTMLImageElement[]
  ) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const unit = 16;
    canvas.width = mapInfo.width * unit;
    canvas.height = mapInfo.height * unit;
    if (ctx) {
      ctx.fillStyle = 'rgb(0,0,0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < mapInfo.height; i++) {
        for (let j = 0; j < mapInfo.width; j++) {
          for (let k = 1; k <= 3; k++) {
            const chipInfo = mapInfo[`layer${k}`].chips[i][j];
            const xd = j * unit;
            const yd = i * unit;
            if (chipInfo.isAutoTile) {
              const tileId = Math.floor(chipInfo.value / 100000) - 2;
              if (tileId >= 0) {
                const autoTile = autochips[tileId];
                if (autoTile) {
                  ctx.drawImage(autoTile, xd, yd, unit, unit);
                }
              }
            } else {
              const xs = (chipInfo.value % 8) * unit;
              const ys = Math.floor(chipInfo.value / 8) * unit;
              ctx.drawImage(mapchips, xs, ys, unit, unit, xd, yd, unit, unit);
            }
          }
        }
      }
    }
    const texture = new THREE.CanvasTexture(ctx ? ctx.canvas : canvas);
    const material = new THREE.SpriteMaterial({
      map: texture,
      color: 0xffffff
    });
    const sprite = new THREE.Sprite(material);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    sprite.center.set(0.5, 0.5);
    sprite.scale.set(mapInfo.width * unit, mapInfo.height * unit, 1);
    sprite.position.set(0, 0, 1);
    context.addObject(sprite);
  };

  return null;
};

export default SceneMap;
