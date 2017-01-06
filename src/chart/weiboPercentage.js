import { Bar } from 'vue-chartjs'

export default Bar.extend({
  mounted () {
    this.renderChart({
      labels: ['Hits@10','f_Hits@10','Hit@1','f_Hit@1','mrr', 'f_mrr'],
      datasets: [
        {
          label: 'left',
          backgroundColor: '#f87979',
          data: [0.032, 0.044, 0.000, 0.008, 0.011, 0.021]
        },
        {
          label: 'right',
          backgroundColor: '#000000',
          data: [0.008, 0.010, 0.000, 0.002, 0.004, 0.007]
        },
        {
          label: 'mean',
          backgroundColor: '#aaaaaa',
          data: [0.020, 0.027, 0.000, 0.005, 0.007, 0.014]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
