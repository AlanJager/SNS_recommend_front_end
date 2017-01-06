import { Bar } from 'vue-chartjs'

export default Bar.extend({
  mounted () {
    this.renderChart({
      labels: ['Hits@10','f_Hits@10','Hit@1','f_Hit@1', 'mrr', 'f_mrr'],
      datasets: [
        {
          label: 'left',
          backgroundColor: '#f87979',
          data: [0.234, 0.668, 0.000, 0.004, 0.076, 0.227]
        },
        {
          label: 'right',
          backgroundColor: '#000000',
          data: [0.218, 0.674, 0.000, 0.004, 0.076, 0.235]
        },
        {
          label: 'mean',
          backgroundColor: '#aaaaaa',
          data: [0.226, 0.671, 0.000, 0.004, 0.076, 0.231]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
