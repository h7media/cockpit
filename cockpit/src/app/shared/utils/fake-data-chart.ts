import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';


export const lineChartData: ChartConfiguration['data'] = {
    datasets: [
        {
            data: [9500, 8500, 6500, 12000],
            backgroundColor: '#fff',
            borderColor: '#7549FF',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        }
    ],
    labels: ['Alcance', 'Engajamento', 'Conversão', 'Retenção']
};

export const lineChartOptions: ChartConfiguration['options'] = {
    elements: {
        line: {
            tension: 0.5
        }
    },
    scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        x: {},
        'y-axis-0':
        {
            position: 'left',
        },
        'y-axis-1': {
            position: 'right',
            grid: {
                color: '#ccc',
            },
            ticks: {
                color: '#ccc'
            }
        }
    },
    plugins: {
        legend: { display: false },
        // annotation: {
        //   annotations: [
        //     {
        //       type: 'line',
        //       scaleID: 'x',
        //       value: 'March',
        //       borderColor: 'orange',
        //       borderWidth: 2,
        //       label: {
        //         display: true,
        //         position: 'center',
        //         color: 'orange',
        //         content: 'LineAnno',
        //         font: {
        //           weight: 'bold'
        //         }
        //       }
        //     },
        //   ],
        // }
    }
};

export const lineChartType: ChartType = 'line';