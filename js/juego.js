let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
const FPS = 50

let anchoCanvas = 400
let altoCanvas = 680

canvas.width =  anchoCanvas
canvas.height =  altoCanvas


let anchoTablero = 10
let altoTablero = 21

let margenSuperior = 4

let anchoFicha = 40
let altoFicha = 40

let tablero = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let tableroCopia = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let rojo = '#FF0000'
let morado = '#800080'
let naranja = '#FF8C00'
let amarillo = '#FFD700'
let verde = '#008000'
let cyan = '#00CED1'
let azul = '#0000CD'

let fichaGrafico = [
    [
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0]
        ],
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0]
        ]
    ],
    [
        [
            [0,0,0,0],
            [0,0,3,3],
            [0,3,3,0],
            [0,0,0,0]
        ],
        [
            [0,0,3,0],
            [0,0,3,3],
            [0,0,0,3],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,0,3,3],
            [0,3,3,0],
            [0,0,0,0]
        ],
        [
            [0,0,3,0],
            [0,0,3,3],
            [0,0,0,3],
            [0,0,0,0]
        ]
    ],
    [
        [
            [0,0,0,0],
            [0,4,4,0],
            [0,0,4,4],
            [0,0,0,0]
        ],
        [
            [0,0,0,4],
            [0,0,4,4],
            [0,0,4,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,4,4,0],
            [0,0,4,4],
            [0,0,0,0]
        ],
        [
            [0,0,0,4],
            [0,0,4,4],
            [0,0,4,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [0,0,0,0],
            [0,5,5,5],
            [0,5,0,0],
            [0,0,0,0]
        ],
        [
            [0,5,5,0],
            [0,0,5,0],
            [0,0,5,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,5],
            [0,5,5,5],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,5,0],
            [0,0,5,0],
            [0,0,5,5],
            [0,0,0,0]
        ]
    ],
    [
        [
            [0,0,0,0],
            [0,6,6,6],
            [0,0,0,6],
            [0,0,0,0]
        ],
        [
            [0,0,6,0],
            [0,0,6,0],
            [0,6,6,0],
            [0,0,0,0]
        ],
        [
            [0,6,0,0],
            [0,6,6,6],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,6,6],
            [0,0,6,0],
            [0,0,6,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [0,0,0,0],
            [0,7,7,7],
            [0,0,7,0],
            [0,0,0,0]
        ],
        [
            [0,0,7,0],
            [0,7,7,0],
            [0,0,7,0],
            [0,0,0,0]
        ],
        [
            [0,0,7,0],
            [0,7,7,7],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,7,0],
            [0,0,7,7],
            [0,0,7,0],
            [0,0,0,0]
        ]
    ],
]

function gameOver() {

    tablero = tableroCopia
    console.log('game over');
}



let objetoPieza = function() {
    this.x = 0
    this.y = 0

    this.angulo = 0
    this.tipo = 2

    this.retraso = 50
    this.fotograma = 0

    this.nueva= function() {
        this.tipo = Math.floor(Math.random()*7)
        this.x = 4
        this.y = 1
    }

    this.dibuja = function() {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if(fichaGrafico[this.tipo][this.angulo][y][x] != 0) {

                    if(fichaGrafico[this.tipo][this.angulo][y][x] == 1) {
                        ctx.fillStyle = rojo
                    }
                    if(fichaGrafico[this.tipo][this.angulo][y][x] == 2) {
                        ctx.fillStyle = morado
                    }
                    if(fichaGrafico[this.tipo][this.angulo][y][x] == 3) {
                        ctx.fillStyle = naranja
                    }
                    if(fichaGrafico[this.tipo][this.angulo][y][x] == 4) {
                        ctx.fillStyle = amarillo
                    }
                    if(fichaGrafico[this.tipo][this.angulo][y][x] == 5) {
                        ctx.fillStyle = verde
                    }
                    if(fichaGrafico[this.tipo][this.angulo][y][x] == 6) {
                        ctx.fillStyle = cyan
                    }
                    if(fichaGrafico[this.tipo][this.angulo][y][x] == 7) {
                        ctx.fillStyle = azul
                    }
                    ctx.fillRect((this.x + x - 1) * anchoFicha, (this.y + y - margenSuperior) * altoFicha, anchoFicha, altoFicha)
                }
            }
        }
    }

    this.CompruebaGameOver = function() {
        let pierde = false
        for (let x = 1; x < anchoTablero + 1; x++) {
            if (tablero[2][x] > 0) {
                pierde = true
            }
        }
        return pierde
    }

    this.limpiaFilas = function() {
        let filaCompleta

        for (let y = margenSuperior; y < altoTablero; y++) {
            filaCompleta = true

            for (let x = 1; x < anchoTablero + 1; x++) {
                if (tablero[y][x] == 0) {
                    filaCompleta = false
                }
            }

            if (filaCompleta) {
                for (let x = 1; x < anchoTablero  + 1; x++) {
                    tablero[y][x] = 0
                }

                setTimeout(function() {
                    borrarFila(y)
                }, 650)
                /* tablero.splice(y, 1)

                tablero.unshift([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]) */
            }
        }
    }

    this.colision =function(anguloNuevo, yNueva, xNueva) {
        let resultado = false

        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (fichaGrafico[this.tipo][anguloNuevo][y][x] > 0) {
                    if (tablero[yNueva + y][xNueva + x] > 0) {
                        resultado = true
                    }
                }
            }
        }

        return resultado
    }


    this.caer = function() {
        if (this.fotograma < this.retraso) {
            this.fotograma++
        } else {
            if (this.colision(this.angulo, this.y + 1, this.x) == false) {
                this.y++
                
            } else {
                this.fijar()
                this.limpiaFilas()
                this.nueva()

                if(this.CompruebaGameOver() == true) {
                    gameOver()
                }
            }
            this.fotograma = 0
        }
    }

    this.fijar =  function() {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (fichaGrafico[this.tipo][this.angulo][y][x] > 0) {
                    tablero[this.y + y][this.x + x] = fichaGrafico[this.tipo][this.angulo][y][x]
                }
            }
        }
    }

    this.rotar = function() {
        let anguloNuevo = this.angulo

        if(anguloNuevo < 3) {
            anguloNuevo++
        } else {
            anguloNuevo = 0
        }

        if (this.colision(anguloNuevo, this.y, this.x) == false) {
            this.angulo = anguloNuevo
            console.log('rotar');
        }

    }

    this.abajo = function() {
        if (this.colision(this.angulo, this.y + 1, this.x) == false) {
            this.y++
            console.log('abajo');
        }
    }

    this.derecha = function() {
        if (this.colision(this.angulo, this.y, this.x + 1) == false) {
            this.x++
            console.log('derecha');
        }
    }

    this.izquierda = function() {
        if (this.colision(this.angulo, this.y, this.x - 1) == false) {
            this.x--
            console.log('izquierda');
        }
    }

    this.nueva()

}


function dibujaTablero() {
    for (let y = margenSuperior; y < altoTablero; y++) {
        for (let x = 1; x < anchoTablero + 1; x++) {
            if(tablero[y][x] != 0) {

                if(tablero[y][x] == 1) {
                    ctx.fillStyle = rojo
                }
                if(tablero[y][x] == 2) {
                    ctx.fillStyle = morado
                }
                if(tablero[y][x] == 3) {
                    ctx.fillStyle = naranja
                }
                if(tablero[y][x] == 4) {
                    ctx.fillStyle = amarillo
                }
                if(tablero[y][x] == 5) {
                    ctx.fillStyle = verde
                }
                if(tablero[y][x] == 6) {
                    ctx.fillStyle = cyan
                }
                if(tablero[y][x] == 7) {
                    ctx.fillStyle = azul
                }

                ctx.fillRect((x - 1) * anchoFicha, (y - margenSuperior) * altoFicha, anchoFicha, altoFicha)
            }
        }
    }
}


function inicializaTeclado() {
    //Lectura del teclado
    document.addEventListener('keydown', function(tecla) {
        //ARRIBA
        if (tecla.key == 'ArrowUp') {
            pieza.rotar()
        }

        //ABAJO
        if (tecla.key == 'ArrowDown') {
            pieza.abajo()
        }

        //IZQUIERDA
        if (tecla.key == 'ArrowLeft') {
            pieza.izquierda()
        }

        //DERECHA
        if (tecla.key == 'ArrowRight') {
            pieza.derecha()
        }
    })
}



////////////////////////////////////////////////////////////////////////


let pieza = new objetoPieza()

inicializaTeclado()

setInterval(function() {
    principal()
}, 1000/FPS)

function borrarFila(y) {
    if (y > 0) {
        for (x = 1; x <= anchoTablero + 1; x++) {
            tablero[y][x] = tablero[y - 1][x];
        }
        borrarFila(y-1);
    } 
}

function borraCanvas() {
    canvas.width =  anchoCanvas
    canvas.height =  altoCanvas
}

function principal() {
    borraCanvas()
    dibujaTablero()
    pieza.caer()
    pieza.dibuja()
    
}

