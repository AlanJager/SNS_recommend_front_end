import { Bar } from 'vue-chartjs'

export default Bar.extend({
  mounted () {
    this.renderChart({
      labels: ['mr', 'f_mr'],
      datasets: [
        {
          label: 'left',
          backgroundColor: '#f87979',
          data: [43585.670, 43580.532]
        },
        {
          label: 'right',
          backgroundColor: '#000000',
          data: [31331.042, 31168.048]
        },
        {
          label: 'mean',
          backgroundColor: '#aaaaaa',
          data: [37458.356, 37374.290]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
