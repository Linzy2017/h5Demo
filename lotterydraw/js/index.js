$(function () {
    var row1 = new Row({
        obj: $('.word_warp'),
        inputWord: '请问日体育于是打开车门下啊',
        seletIndex: 1,
        wordHeight: 50
    })
    var row2 = new Row({
        obj: $('.word_warp2'),
        inputWord: '请问日体育于是打开车门下啊',
        seletIndex: 1,
        wordHeight: 50
    })
    row1.init()
    row2.init()
    $('.btn_ok').click(function () {
        if (!row1.gameSwitch && ! row1.isRow) {
            row1.animateRowStart()
        }
    })
    $('.btn_stop').click(function () {
        row1.gameSwitch = false
    })
})
class Row{
    constructor(params){
        this.obj = params.obj
        this.inputWord = params.inputWord
        this.gameSwitch = false
        this.isRow = false
        this.childClass = params.childClass || 'word'
        this.allWordLength = null
        this.wordHeight = params.wordHeight || 50
        this.seletIndex = params.seletIndex || 0
    }
    init () {
        var _this = this
        var wordArr = this.inputWord.split('')
        for (var i = 0 ;i< 2; i++) {
            wordArr.forEach(function (val, index) {
                _this.obj.append(`<div class='${_this.childClass}'>${val}</div>`)
            })
        }
        this.allWordLength = this.obj.find('.'+ this.childClass).length
    }
    animateRowStart() {
        var _this = this
        this.gameSwitch = true
        this.isRow = true
        this.obj.animate({
            top: - this.wordHeight * this.allWordLength
        },{
            duration: 3000,
            easing: "easeInCirc",
            complete: function(){
                _this.obj.css({'top': 0})
                _this.animateRowMid()
            }
        });
    }
    animateRowMid() {
        var _this = this
        this.obj.animate({
            top: - this.wordHeight * this.allWordLength
        },{
            duration: 200,
            complete: function(){
                _this.obj.css({'top': 0})
                if (_this.gameSwitch) {
                    _this.animateRowMid()
                } else {
                    _this.animateRowEnd()
                }
            }
        });
    }
    animateRowEnd() {
        var _this = this
        console.log(this.seletIndex)
        this.obj.animate({
            top: - this.wordHeight * (this.seletIndex + this.allWordLength / 2 )
        },{
            duration: 3000 + (this.seletIndex * 200),
            easing: "easeOutCirc",
            complete: function(){
                console.log('end')
                _this.isRow = false
            }
        });
    }
}







// var inputWord = '请问日体育于是打开车门下啊'
// var wordArr = inputWord.split('')
// for (var i = 0 ;i< 2; i++) {
//     wordArr.forEach(function (val, index) {
//         $('.word_warp').append('<div class="word">' + val + '</div>')
//     })
// }
// var allWordLength = $('.word_warp .word').length
// var wordHeight =  $('.word_warp .word').height()
// var gameSwitch = false
// var isRow = false
// function animateRowStart() {
//     gameSwitch = true
//     isRow = true
//     $('.word_warp').animate({
//         top: - wordHeight * allWordLength
//     },{
//         duration: 3000,
//         easing: "easeInCirc",
//         complete: function(){
//             $('.word_warp').css({'top': 0})
//             animateRowMid()
//         }
//     });
// }
//
// function animateRowMid() {
//     $('.word_warp').animate({
//         top: - wordHeight * allWordLength
//     },{
//         duration: 200,
//         complete: function(){
//             $('.word_warp').css({'top': 0})
//             if (gameSwitch) {
//                 animateRowMid()
//             } else {
//                 animateRowEnd()
//             }
//         }
//     });
// }
//
// function animateRowEnd() {
//     var selectIndex = getWordIndex()
//     $('.word_warp').animate({
//         top: - wordHeight * allWordLength /2
//     },{
//         duration: 3000,
//         easing: "easeOutCirc",
//         complete: function(){
//             console.log('end')
//             isRow = false
//         }
//     });
// }