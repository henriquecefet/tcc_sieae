 var app = new Vue({
            el: '#main',
            data: {
             graficos: {
              UNIRIO: {
                CLA: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Empregabilidade do CLA por curso",
                    numeros: [
                      33.69,
                      24.39,
                      21.43,
                      9.09,
                      65.12,
                      61.76,
                      14.29,
                      33.33,
                      51.85,
                      39.23,
                      46.08,
                      45.22


                    ],
                    categorias: [
                    "Artes Cênicas",
                    "Atuação Cênica - Bacharelado ",
                    "Cenografia e Indumentária ",
                    "Direção Teatral - Bacharelado",
                    "Educação Artística - Artes Cênicas",
                    "Educação Artística - Música",
                    "Estética e Teoria do Teatro",
                    "Letras - Bacharelado",
                    "Letras - Licenciatura",
                    "Música",
                    "Música - Licenciatura ",
                    "Teatro - Licenciatura (V/N)"

                    ]
                  },
                   grafico2: {
                    id: "grafico2",
                    titulo: "Renda Média do CLA por curso",
                    numeros: [
                        2026.46, 
                        2202.36, 
                        1348.40, 
                        5170.62, 
                        6043.36, 
                        5021.37, 
                        5278.99, 
                        2580.56, 
                        4138.52, 
                        3694.32, 


                    ],
                    categorias: [
                    "Atuação Cênica - Bacharelado ",
                    "Cenografia e Indumentária ",
                    "Direção Teatral - Bacharelado",
                    "Educação Artística - Artes Cênicas",
                    "Educação Artística - Música",
                    "Estética e Teoria do Teatro",
                    "Letras - Bacharelado",
                    "Letras - Licenciatura",
                    "Música - Licenciatura ",
                    "Teatro - Licenciatura (V/N)"

                    ]
                  },



               }


              }
             },


             graficoPizza: function(id, numeros, categorias, titulo) {
                var chart = new Chart(id, {
                type: "pie",
                data: {
                  labels: categorias,
                  datasets: [{
                    backgroundColor: this.barColors,
                    data: numeros
                  }]
                },
                options: {
                  title: {
                    display: true,
                    text: titulo
                  }
                }

              });
        },
        graficoBarra: function(id, numeros, categorias, titulo) {
                var chart = new Chart(id, {
                type: "bar",
                data: {
                  labels: categorias,
                  datasets: [{
                    backgroundColor: this.barColors,
                    data: numeros
                  }]
                },
                options: {
                  legend: {display: false},
                  title: {
                    display: true,
                    text: titulo
                  },
                   scales: {
                    xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                    
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                max: 100
                            }
                        }]
                }
               }
            });
        },
        graficoBarraSemLimite: function(id, numeros, categorias, titulo) {
                var chart = new Chart(id, {
                type: "bar",
                data: {
                  labels: categorias,
                  datasets: [{
                    backgroundColor: this.barColors,
                    data: numeros
                  }]
                },
                options: {
                  legend: {display: false},
                  title: {
                    display: true,
                    text: titulo
                  },
               }
            });
        },
        barColors: [
          "#b91d47",
          "#00aba9",
          "#2b5797",
          "#e8c3b9",
          "#1e7145",
          "#a91d47",
          "#04aba9",
          "#2b57c7",
          "#ecc3b9",
          "#1e7145",
          "#b91647",
          "#00a1a9",
          "#2d5797",
          "#e8c3bf",
          "#1a7145",
          "#b91d77",
          "#08aba9",
          "#ab5797",
          "#e8c3b9",
          "#147145",
          "#b91d4f",
          "#ffaba9",
          "#2b52a7",
          "#e8a3b9",
          "#1e71f5"
        ]


              }
          });
