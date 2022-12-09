const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

const GAME_PIX_W = 1024;
const GAME_PIX_H = 768;
const TILE_SIZE_GAME_PIX = 1024 / 16;

c.width = GAME_PIX_W;
c.height = GAME_PIX_H;

for (let y = 0; y < (GAME_PIX_H / TILE_SIZE_GAME_PIX); y ++){
	for (let x = 0; x < (GAME_PIX_W / TILE_SIZE_GAME_PIX); x++){
		ctx.beginPath();
		ctx.rect(
			x * TILE_SIZE_GAME_PIX,
			y * TILE_SIZE_GAME_PIX, 
			TILE_SIZE_GAME_PIX,
			TILE_SIZE_GAME_PIX
		);
		ctx.fillStyle = colorForTile(x, y);
		ctx.fill();
	}
}

function colorForTile(tileX, tileY){
	const colorIdx = ((tileY % 2 == 0) ? tileX : (tileX + 1)) % 2;
	return ["red", "blue"][colorIdx]
}
