 var app = new Vue({
            el: '#main',
            data: {
             graficos: {
              UNIRIO: {
                posgraduacao: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Proporção de egressos de pós-graduação que são sócios por programa",
                    numeros: [
                    68.12,
          					57.4194,
          					48.7179,
          					30.0578,
          					25.6098,
          					24.0000,
          					22.9167,
          					20.5479,
          					19.6429,
          					18.2796,
          					17.8947,
          					16.6667,
          					16.5468,
          					15.3846,
          					15.3846,
          					13.9831,
          					12.6263,
          					12.1547,
          					11.5385,
          					11.1111,
          					10.6383,
          					9.4595,
          					8.0460,
          					7.2464,
          					6.6176,


                    ],
                    categorias: [
                    "MEDICINA",
          					"NEUROLOGIA",
          					"INFECÇÃO HIV/AIDS",
          					"INFORMÁTICA",
          					"DIREITO",
          					"ARTES CÊNICAS",
          					"ENFERMAGEM E BIOCIÊNCIAS",
          					"ENSINO DAS PRÁTICAS MUSICAIS",
          					"ENSINO DE ARTES CÊNICAS",
          					"MÚSICA",
          					"SAÚDE E TECNOLOGIA NO ESPAÇO HOSPITALAR",
          					"ECOTURISMO E CONSERVAÇÃO",
          					"MUSEOLOGIA E PATRIMÖNIO",
          					"EDUCAÇÃO",
          					"ENSINO DE HISTÓRIA",
          					"MEMÓRIA SOCIAL",
          					"ENFERMAGEM",
          					"HISTORIA",
          					"ENSINO DE FÍSICA - PROFIS",
          					"BIOLOGIA MOLECULAR E CELULAR",
          					"MATEMÁTICA EM REDE NACIONAL",
          					"ALIMENTOS E NUTRIÇÃO",
          					"CIÊNCIAS BIOLÓGICAS",
          					"GESTÃO DE DOCUMENTOS E ARQUIVOS",
          					"BIBLIOTECONOMIA",


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
                                labelString: 'Programas de pós-graduação'
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
