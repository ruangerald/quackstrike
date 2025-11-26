class Game {
    constructor(x,y,h,w,a,ducks,image,bullets,score,time,isGameOver) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.a = a;
        this.ducks = ducks || [];
        this.image = image;
        this.bullets = bullets;
        this.score = score || 0;
        this.time = time;
        this.isGameOver = isGameOver;
    }

    drawBackground(canva){
        if (this.image) {
            let img = new Image();
            img.src = this.image;
            canva.drawImage(img, this.x, this.y, this.w, this.h);
        }
    }
    mov_background(speedX, speedY){
        this.x += speedX;
        this.y += speedY;
    }

    drawText(canva, text, x, y, font, color) {
        canva.font = font;
        canva.fillStyle = color;
        canva.fillText(text, x, y);
    }

    drawRectangle(canva, x, y, width, height, color, opacity) {
        canva.save(); // Salva o estado atual do canvas
        canva.globalAlpha = opacity; // Define a opacidade
        canva.fillStyle = color; // Define a cor
        canva.fillRect(x, y, width, height); // Desenha o retângulo
        canva.restore(); // Restaura o estado do canvas
    }
}

class Ducks extends Game {
    speedX = 0;
    speedY = 0;

    duck_reset(tiro) {
        if (tiro === true) {
            this.y = Math.floor(Math.random() * (712 - 100 + 1)) + 100; // Gera um valor entre 100 e 712
            this.x = -Math.floor(Math.random() * 201);
        }
    }

    hasPassedScreen() {
        // Verifica se o pato passou da tela
        return this.x >= 1152;
    }

    mov_duck(speedX, speedY) {
        this.x += speedX;
        this.y += speedY;
    }

    drawDuck(canva) {
        if (this.image) {
            let img = new Image();
            img.src = this.image;
            canva.drawImage(img, this.x, this.y, this.w, this.h);
        }
    }
}

class Bullet extends Game {
    constructor(x, y, h, w, a, ducks, image, bullets, score, time, isGameOver) {
        super(x, y, h, w, a, ducks, image, bullets, score, time, isGameOver);
        this.weaponImage = null; // Armazena a imagem carregada
        this.speed = 0; // Corrigido: Adicionado `this` e ponto-e-vírgula
        this.isActive = false; // Corrigido: Adicionado `this` e ponto-e-vírgula
    }

        
        checarArma(arma){
            if(arma == 1){
                return this.bullets = ['bullet1', 'bullet2', 'bullet3', 'bullet4', 'bullet5'];
            }
            else if(arma == 2){
                return this.bullets = ['bullet1', 'bullet2', 'bullet3', 'bullet4', 'bullet5', 'bullet6', 'bullet7', 'bullet8', 'bullet9', 'bullet10'];
            }
            else if(arma == 3){
                return this.bullets = ['bullet1', 'bullet2', 'bullet3', 'bullet4', 'bullet5', 'bullet6', 'bullet7', 'bullet8', 'bullet9', 'bullet10', 'bullet11', 'bullet12', 'bullet13', 'bullet14', 'bullet15'];
            }
        }
        
        drawArma(canva){
            if (!this.weaponImage) {
                this.weaponImage = new Image();
                this.weaponImage.src = this.image;
            }
            
            // Desenha a imagem da arma equipada
            this.weaponImage.onload = () => {
                canva.drawImage(this.weaponImage, 50, 900, 100, 100); // Ajuste a posição conforme necessário
            };
            
            // Se a imagem já estiver carregada, desenhe diretamente
            if (this.weaponImage.complete) {
                canva.drawImage(this.weaponImage, 50, 900, 100, 100);
            }
    }
}

class Scream extends Game{
    gameOverDraw(){

    }
    faseScreenDraw(){
    
    }
    homeScreenDraw(){

    }
    storeScreenDraw(){

    }

}