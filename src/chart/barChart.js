import { Bar } from 'vue-chartjs'

export default Bar.extend({
  mounted () {
    this.renderChart({
      labels: ['mr', 'f_mr'],
      datasets: [
        {
          label: 'left',
          backgroundColor: '#f87979',
          data: [223.862, 73.348]
        },
        {
          label: 'right',
          backgroundColor: '#000000',
          data: [93.394, 37.376]
        },
        {
          label: 'mean',
          backgroundColor: '#aaaaaa',
          data: [158.628, 55.362]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
