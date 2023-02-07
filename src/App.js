import Chart from 'react-apexcharts';
import Graph from './Graph';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Chart
      type='bar'
      width={600}
      height={600}
      series={[
        {
          name:'Company1',
          data:[100,200,232,132,422,132]
        },
        {
          name:'Company2',
          data:[150,230,332,110,259,132]
        },
        {
          name:'Company3',
          data:[300,200,232,132,422,182]
        },
        {
          name:'Company4',
          data:[350,330,332,110,209,242]
        }
      ]}

      options={{
        theme:{
         mode:'dark' 
        },
chart:{
  stacked:true
},
tooltip:{
  followCursor:true
},
dataLabels:{
  formatter:(val)=>{
    return `$${val}`
  },
  style:{
    colors:['#ff0000','#fff'],
    fontSize:16
  }
},
xaxis:{
categories:['Jan','Feb','Mar','Apr','May','Jun'],
title:{
  text:'MONTHS',
  style:{
    color:'#0f0'
  }
},
tickPlacement:'on'
},
yaxis:{
labels:{
  formatter:(val)=>{
    return `$${val}`
  },
  style:{
    colors:['#ff0']
  }
},
  title:{
    text:'AMOUNT',
    style:{
      color:'#0f0'
    }
  }
},
title:{
  text:'Bar Chart',
  style:{
    fontSize:30
  }
},
subtitle:{
  text:'This chart shows revenue data of companies by month.',
  style:{
color:'#f0f'
  }
},
legend:{
show:true,
position:'bottom'
},
grid:{
borderColor:'#ff0000',
xaxis:{
  lines:{
    show:false
  }
}
}, 
      }}
 >
</Chart>
<Graph></Graph>
<h1>Gross Margin%</h1>
<Chart
type='radialBar'
width={600}
height={600}
series={[42]}
options={{
chart:{
offsetY:-10
},
plotOptions: {
  radialBar: {
    startAngle: -135,
    endAngle: 135,
    dataLabels: {
      name: {
        fontSize: '16px',
        color: undefined,
        offsetY: 120
      },
      value: {
        offsetY: 76,
        fontSize: '22px',
        color: undefined,
        formatter: function (val) {
          return val + "%";
        }
      }
    }
  }
},
fill: {
  type: 'gradient',
  gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
  },
},
stroke: {
  dashArray: 4
},
labels: ['Gross Margin'],
}}
>

</Chart>
      </header>
    </div>
  );
}

export default App;
