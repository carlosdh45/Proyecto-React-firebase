import React, { useState, useEffect } from "react";
import { Doughnut,Chart } from "react-chartjs-2";
import axios from "axios";
import '../App.css';
var porcentaje=0;
var porcentaje2=0;
var porcentaje3=0;
var porcentaje4=0;

Chart.pluginService.register({
  beforeDraw: function(chart) {
    if (chart.config.options.elements.center) {
      // Get ctx from string
      var ctx = chart.chart.ctx;

      // Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var maxFontSize = centerConfig.maxFontSize || 75;
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
      // Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (chart.innerRadius * 2);

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
      var minFontSize = centerConfig.minFontSize;
      var lineHeight = centerConfig.lineHeight || 25;
      var wrapText = false;

      if (minFontSize === undefined) {
        minFontSize = 20;
      }

      if (minFontSize && fontSizeToUse < minFontSize) {
        fontSizeToUse = minFontSize;
        wrapText = true;
      }

      // Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      if (!wrapText) {
        ctx.fillText(txt, centerX, centerY);
        return;
      }

      var words = txt.split(' ');
      var line = '';
      var lines = [];

      // Break words up into multiple lines if necessary
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > elementWidth && n > 0) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }

      // Move the center up depending on line height and number of lines
      centerY -= (lines.length / 2) * lineHeight;

      for (var n = 0; n < lines.length; n++) {
        ctx.fillText(lines[n], centerX, centerY);
        centerY += lineHeight;
      }
      //Draw text in center
      ctx.fillText(line, centerX, centerY);
    }
  }
});
const Dankmemes = () => {
  const [chartData, setChartData] = useState({});
  const [chartData2, setChartData2] = useState({});
  const [chartData3, setChartData3] = useState({});
  const [chartData4, setChartData4] = useState({});

  const chart = () => {

    const empAge = [];
   
    axios
      .get("https://react-crud-fc782.firebaseio.com/tareas/recursos-humanos.json")
      .then(res => {
        console.log(res);
        for (let dataObj in res.data) {
  
          empAge.push(res.data[dataObj].status);
        }
      
  
      
        const result = empAge.reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map());
console.log(result);
const label=[];
const datas=[];

const totalTareas=0;
var totalExitoso=[];
for (let [key, value] of result) {

  label.push( key);
  datas.push(value);
  if(key=="Exitoso"){
    totalExitoso.push(value);
  }
  
}
porcentaje=(totalExitoso/empAge.length)*100

console.log(totalExitoso);
console.log(porcentaje);
console.log(label,datas);
        setChartData({
          labels: label,
          datasets: [
            {
              label: "level of thiccness",
              data: datas,
              backgroundColor:
               ["rgba(75, 192, 192, 0.6)",
                "rgba(0, 0, 255, 0.51)",
                "rgba(30, 221, 255, 1)",
                " rgba(47, 158, 148, 1)",
                "rgba(77, 29, 143, 1)",
                "rgba(150, 29, 143, 1)",
                "rgba(150, 29, 76, 1)",
                "rgba(84, 29, 30, 1)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empAge);
  };
  const chart2 = () => {

    const empAge = [];
   
    axios
      .get("https://react-crud-fc782.firebaseio.com/tareas/ventas.json")
      .then(res => {
        console.log(res);
        for (let dataObj in res.data) {
  
          empAge.push(res.data[dataObj].status);
        }
      
  
      
        const result = empAge.reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map());
console.log(result);
const label=[];
const datas=[];

const totalTareas=0;
var totalExitoso=[];
for (let [key, value] of result) {

  label.push( key);
  datas.push(value);
  if(key=="Exitoso"){
    totalExitoso.push(value);
  }
  
}
porcentaje2=(totalExitoso/empAge.length)*100

console.log(totalExitoso);
console.log(porcentaje2);
console.log(label,datas);
        setChartData2({
          labels: label,
          datasets: [
            {
              label: "level of thiccness",
              data: datas,
              backgroundColor:
               ["rgba(75, 192, 192, 0.6)",
                "rgba(0, 0, 255, 0.51)",
                "rgba(30, 221, 255, 1)",
                " rgba(47, 158, 148, 1)",
                "rgba(77, 29, 143, 1)",
                "rgba(150, 29, 143, 1)",
                "rgba(150, 29, 76, 1)",
                "rgba(84, 29, 30, 1)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empAge);
  };
  const chart3 = () => {

    const empAge = [];
   
    axios
      .get("https://react-crud-fc782.firebaseio.com/tareas/contabilidad.json")
      .then(res => {
        console.log(res);
        for (let dataObj in res.data) {
  
          empAge.push(res.data[dataObj].status);
        }
      
  
      
        const result = empAge.reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map());
console.log(result);
const label=[];
const datas=[];

const totalTareas=0;
var totalExitoso=[];
for (let [key, value] of result) {

  label.push( key);
  datas.push(value);
  if(key=="Exitoso"){
    totalExitoso.push(value);
  }
  
}
porcentaje3=(totalExitoso/empAge.length)*100

console.log(totalExitoso);
console.log(porcentaje2);
console.log(label,datas);
        setChartData3({
          labels: label,
          datasets: [
            {
              label: "level of thiccness",
              data: datas,
              backgroundColor:
               ["rgba(75, 192, 192, 0.6)",
                "rgba(0, 0, 255, 0.51)",
                "rgba(30, 221, 255, 1)",
                " rgba(47, 158, 148, 1)",
                "rgba(77, 29, 143, 1)",
                "rgba(150, 29, 143, 1)",
                "rgba(150, 29, 76, 1)",
                "rgba(84, 29, 30, 1)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empAge);
  };
  const chart4 = () => {

    const empAge = [];
   
    axios
      .get("https://react-crud-fc782.firebaseio.com/tareas/logistica.json")
      .then(res => {
        console.log(res);
        for (let dataObj in res.data) {
  
          empAge.push(res.data[dataObj].status);
        }
      
  
      
        const result = empAge.reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map());
console.log(result);
const label=[];
const datas=[];

const totalTareas=0;
var totalExitoso=[];
for (let [key, value] of result) {

  label.push( key);
  datas.push(value);
  if(key=="Exitoso"){
    totalExitoso.push(value);
  }
  
}
porcentaje4=(totalExitoso/empAge.length)*100

console.log(totalExitoso);
console.log(porcentaje2);
console.log(label,datas);
        setChartData4({
          labels: label,
          datasets: [
            {
              label: "level of thiccness",
              data: datas,
              backgroundColor:
               ["rgba(75, 192, 192, 0.6)",
                "rgba(0, 0, 255, 0.51)",
                "rgba(30, 221, 255, 1)",
                " rgba(47, 158, 148, 1)",
                "rgba(77, 29, 143, 1)",
                "rgba(150, 29, 143, 1)",
                "rgba(150, 29, 76, 1)",
                "rgba(84, 29, 30, 1)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empAge);
  };
  useEffect(() => {
    chart();
    chart2();
    chart3();
    chart4();
  }, []);
  
  return (
    <div className="App">
      <h1>Graficos</h1>
      <div className="row"> 
      <div class="column">
        <Doughnut
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Status de Tareas de Recursos Humanos" , display: true },
            elements: {
              center: {
                text: "Avance de tareas finalizadas: "+String(Math.round( porcentaje))+ "%",
                color: '#003AFF', // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            }
          
          }}
        />
        </div>
        <div class="column">
        <Doughnut
          data={chartData2}
          options={{
            responsive: true,
            title: { text: "Status de Tareas de Ventas" , display: true },
            elements: {
              center: {
                text: "Avance de tareas finalizadas: "+String(Math.round( porcentaje2))+ "%",
                color: '#003AFF', // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            }
          
          }}
        />
        </div>
      </div>
      <div className="row"> 
      <div class="column">
        <Doughnut
          data={chartData3}
          options={{
            responsive: true,
            title: { text: "Status de Tareas de Contabilidad" , display: true },
            elements: {
              center: {
                text: "Avance de tareas finalizadas: "+String(Math.round( porcentaje3))+ "%",
                color: '#003AFF', // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            }
          
          }}
        />
        </div>
        <div class="column">
        <Doughnut
          data={chartData4}
          options={{
            responsive: true,
            title: { text: "Status de Tareas de Logistica" , display: true },
            elements: {
              center: {
                text: "Avance de tareas finalizadas: "+String(Math.round( porcentaje4))+ "%",
                color: '#003AFF', // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            }
          
          }}
        />
        </div>
      </div>
    </div>
  );
};

export default Dankmemes;