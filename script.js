const ctx = document.getElementById('myChart').getContext('2d');

let data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Vendas de calçados',
        data: [30, 85, 50, 40, 60, 70],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

let myChart = new Chart(ctx, {
    type: 'bar', // tipo de gráfico
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Função para atualizar os dados do gráfico
document.getElementById('updateData').addEventListener('click', () => {
    // Novos dados
    const newData = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];

    myChart.data.datasets[0].data = newData;
    myChart.update();
});
