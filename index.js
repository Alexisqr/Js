import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	 getText(){return <div>текст</div>};
	 getNum1() {return 1};
	  getNum2() {return 2};
	render() {
    const text = 'текст';
    const text2 = <p>текст</p>;
    const text_1 = <p>текст1</p>;
    const text_2 = <p>текст2</p>;
    const attr = 'block';
    const str = 'block';
    const css = {color: 'green', fontSize: '30px'};
    var r = '1';
    const show = true;
		
		if (show) {
			r ='текст1';
		} else {
			r = 'текст2';
		}

    const arr = ['a', 'b', 'c', 'd', 'e'];

    const list = arr.map(function(item, index) {
    	var g = String(item);
	return <li value = {g} key={index}>{item}</li>;
    });

  


	const c = this.getText();

		return (
			<div>

			<h3>1</h3>
			<div>текст</div>

            <h3>2</h3>
            <div>{text}</div>

            <h3>3</h3>
            <div>{text2}</div>

            <h3>4</h3>
            <div>
            {text_1}
            <p>!!!</p>
            {text_2}
            </div>
            
            <h3>5</h3>
            <div id={attr}>
	        текст
            </div>

            <h3>6</h3>
            <div className={str}>
	        текст
            </div>

            <h3>7</h3>
            <div style={css}>текст</div>

            <h3>8</h3>
            <div>{r}</div>

            <h3>9</h3>
            <ul>
			{list}
		    </ul>
            
            <h3>10</h3>
           {c}

           <h3>11</h3>
           {this.getNum1()+this.getNum2()}
            </div>


        
			);
		
	}
}

ReactDOM.render(<App/>,document.getElementById('root'));
