import React, { Component } from 'react';

class Hello extends Component {
    
    
    render() {
        
        var _ = require('underscore')
        
        var baseKeys = [
            [
                {'English': '~',  'Shahmukhi': '؏', 'Size':1},
                {'English': '1', 'Shahmukhi': '۱', 'Size':1},
                {'English': '2', 'Shahmukhi': '۲', 'Size':1},
                {'English': '3', 'Shahmukhi': '۳', 'Size':1},
                {'English': '4', 'Shahmukhi': '۴', 'Size':1},
                {'English': '5', 'Shahmukhi': '۵', 'Size':1},
                {'English': '6', 'Shahmukhi': '۶', 'Size':1},
                {'English': '7', 'Shahmukhi': '۷', 'Size':1},
                {'English': '8', 'Shahmukhi': '۸', 'Size':1},
                {'English': '9', 'Shahmukhi': '۹', 'Size':1},
                {'English': '0', 'Shahmukhi': '۰', 'Size':1},
                {'English': '-', 'Shahmukhi': '-', 'Size':1},
                {'English': '=', 'Shahmukhi': '=', 'Size':1},
                {'English': 'BKSPC', 'Shahmukhi': ' ', 'Size':2}
            ],
            [
                {'English': 'TAB',  'Shahmukhi': ' ', 'Size':2},
                {'English': 'Q', 'Shahmukhi': 'ق', 'Size':1},
                {'English': 'W', 'Shahmukhi': 'و', 'Size':1},
                {'English': 'E', 'Shahmukhi': 'ع', 'Size':1},
                {'English': 'R', 'Shahmukhi': 'ر', 'Size':1},
                {'English': 'T', 'Shahmukhi': 'ت', 'Size':1},
                {'English': 'Y', 'Shahmukhi': 'ے', 'Size':1},
                {'English': 'U', 'Shahmukhi': 'ء', 'Size':1},
                {'English': 'I', 'Shahmukhi': 'ی', 'Size':1},
                {'English': 'O', 'Shahmukhi': 'ہ', 'Size':1},
                {'English': 'P', 'Shahmukhi': 'پ', 'Size':1},
                {'English': '{', 'Shahmukhi': '', 'Size':1},
                {'English': '}', 'Shahmukhi': 'ﷲ', 'Size':1},
                {'English': '\\', 'Shahmukhi': '÷', 'Size':1}
            ],
            [
                {'English': 'CAPS',  'Shahmukhi': ' ', 'Size':2},
                {'English': 'A', 'Shahmukhi': 'ا', 'Size':1},
                {'English': 'S', 'Shahmukhi': 'س', 'Size':1},
                {'English': 'D', 'Shahmukhi': 'د', 'Size':1},
                {'English': 'F', 'Shahmukhi': 'ف', 'Size':1},
                {'English': 'G', 'Shahmukhi': 'گ', 'Size':1},
                {'English': 'H', 'Shahmukhi': 'ح', 'Size':1},
                {'English': 'J', 'Shahmukhi': 'ج', 'Size':1},
                {'English': 'K', 'Shahmukhi': 'ک', 'Size':1},
                {'English': 'L', 'Shahmukhi': 'ل', 'Size':1},
                {'English': ':', 'Shahmukhi': '؛', 'Size':1},
                {'English': '"', 'Shahmukhi': '', 'Size':1},
                {'English': 'ENTR', 'Shahmukhi': ' ', 'Size':3}
            ],
            [
                {'English': 'SHFT',  'Shahmukhi': ' ', 'Size':2.9},
                {'English': 'Z', 'Shahmukhi': 'ز', 'Size':1},
                {'English': 'X', 'Shahmukhi': 'ش', 'Size':1},
                {'English': 'C', 'Shahmukhi': 'چ', 'Size':1},
                {'English': 'V', 'Shahmukhi': 'ط', 'Size':1},
                {'English': 'B', 'Shahmukhi': 'ب', 'Size':1},
                {'English': 'N', 'Shahmukhi': 'ن', 'Size':1},
                {'English': 'M', 'Shahmukhi': 'م', 'Size':1},
                {'English': '<', 'Shahmukhi': '،', 'Size':1},
                {'English': '>', 'Shahmukhi': '۔', 'Size':1},
                {'English': '?', 'Shahmukhi': '/', 'Size':1},
                {'English': 'SHFT', 'Shahmukhi': ' ', 'Size':4}
            ]
        ];
        
        var baseWidth = 25;
        
        let keyboardFrame = {
            background: '#D2D7DD',
            display: 'block',
            padding: 1,
            fontSize: 12,
            fontFamily: 'Arial',
            margin: 'auto',
            boxSizing: 'content-box'
        };
        
        let button = {
            border: '1px solid #BABBBD', 
            background: '#FEFEFF', 
            color: '#606060',
            display: 'inline-block',
            borderRadius: 5,
            padding: 10,
            margin: 1,
            boxSizing: 'content-box'
        };
        
        let buttonTextLower = {
            position: 'relative',
            left: 6,
            top: 8,
            fontSize: 18,
            width: 10,
            height: 10,
            display: 'inline'
        };
        
        keyboardFrame.width = baseWidth * 28.5;
        
        var keys = [];
        
        for(let i=0; i < baseKeys.length; i++){
            let keysLine = [];
            for(let j=0; j < baseKeys[i].length; j++){
                let localButtonStyle = _.clone(button);
                localButtonStyle.width = baseWidth * baseKeys[i][j].Size;
                //console.info(button.width)
                keysLine.push(
                    <div style={localButtonStyle}>
                        {baseKeys[i][j].English}<div style={buttonTextLower}>{baseKeys[i][j].Shahmukhi}</div>
                    </div>
                );
            }
            keys.push(keysLine);
        }
        
    return (
        <div>
            <div style={keyboardFrame}>
                {keys[0]}
            </div>
            <div style={keyboardFrame}>
                {keys[1]}
            </div>
            <div style={keyboardFrame}>
                {keys[2]}
            </div>
            <div style={keyboardFrame}>
                {keys[3]}
            </div>
         </div>
        )
    }
}

React.render(<Hello />, document.getElementById('root'));