import { Bar } from 'vue-chartjs'

export default Bar.extend({
  mounted () {
    this.renderChart({
      labels: ['Hits@10','f_Hits@10','Hit@1','f_Hit@1','mrr', 'f_mrr'],
      datasets: [
        {
          label: 'left',
          backgroundColor: '#f87979',
          data: [0.424,0.606,0.096,0.180,0.197,0.324]
        },
        {
          label: 'right',
          backgroundColor: '#000000',
          data: [0.556,0.730,0.174,0.284,0.297,0.436]
        },
        {
          label: 'mean',
          backgroundColor: '#aaaaaa',
          data: [0.490,0.668,0.135,0.232,0.247,0.380]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
