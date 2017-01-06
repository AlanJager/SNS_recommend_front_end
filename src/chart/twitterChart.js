import { Bar } from 'vue-chartjs'

export default Bar.extend({
  mounted () {
    this.renderChart({
      labels: ['mr', 'f_mr'],
      datasets: [
        {
          label: 'left',
          backgroundColor: '#f87979',
          data: [43.122, 13.638]
        },
        {
          label: 'right',
          backgroundColor: '#000000',
          data: [36.532, 12.776]
        },
        {
          label: 'mean',
          backgroundColor: '#aaaaaa',
          data: [39.827, 13.207]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
