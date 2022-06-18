 var app = new Vue({
            el: '#main',             
            data: {
             graficos: {
              UNIRIO: {
                posgraduacao: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Proporção de egressos de pós-graduação que são MEIs",
                    numeros: [111, 2879],
                    categorias: ["MEIs", "Não MEIs"]
                  },
                  grafico2: {
                    id: "grafico2",
                    titulo: "Quantidade de egressos de pós-graduação que são MEIs por programa",
                    numeros: [
                      9.8266,
                      8.0882,
                      7.6923,
                      7.4468,
                      5.7971,
                      5.4945,
                      5.4795,
                      5.0360,
                      4.2105,
                      3.5354,
                      3.5000,
                      2.9661,
                      2.5806,
                      2.5641,
                      2.4691,
                      2.0833,
                      1.7857,
                      1.6575,
                      1.3514,
                      1.0811,
                      0,
                      0,
                      0,
                      0,
                      0


                    ],
                    categorias: [
                      "INFORMÁTICA",
                      "BIBLIOTECONOMIA",
                      "ENSINO DE HISTÓRIA",
                      "MATEMÁTICA EM REDE NACIONAL",
                      "GESTÃO DE DOCUMENTOS E ARQUIVOS",
                      "EDUCAÇÃO",
                      "ENSINO DAS PRÁTICAS MUSICAIS",
                      "MUSEOLOGIA E PATRIMÖNIO",
                      "SAÚDE E TECNOLOGIA NO ESPAÇO HOSPITALAR",
                      "ENFERMAGEM",
                      "ARTES CÊNICAS",
                      "MEMÓRIA SOCIAL",
                      "NEUROLOGIA",
                      "INFECÇÃO HIV/AIDS",
                      "DIREITO",
                      "ENFERMAGEM E BIOCIÊNCIAS",
                      "ENSINO DE ARTES CÊNICAS",
                      "HISTORIA",
                      "ALIMENTOS E NUTRIÇÃO",
                      "MÚSICA",
                      "BIOLOGIA MOLECULAR E CELULAR",
                      "CIÊNCIAS BIOLÓGICAS",
                      "ECOTURISMO E CONSERVAÇÃO",
                      "ENSINO DE FÍSICA - PROFIS",
                      "MEDICINA"


                    ]
                  },
                  grafico3:{
                    id: "grafico3",
                    titulo: "Proporção de egressos de pós-graduação que são MEIs por grau acadêmmico",
                    numeros: [2.0833, 2.0833, 4.3839, 3.8985],
                    categorias: [
                      "DOUTORADO",
                      "MESTRADO",
                      "MESTRADO PROFISSIONAL",
                      "MESTRADO/DOUTORADO"
                      ]
                  },
                  grafico4:{
                    id: "grafico4",
                    titulo: "Scatter Plot MEI x Sócios por curso",
                    numeros: [
                    {
                      x: 1.3514,
                      y: 9.4595
                    },
                     {
                      x: 3.5000,
                      y: 24.0000,
                     },
                     {
                      x: 8.0882,
                      y: 6.6176
                     },
                     {
                      x: 0,
                      y: 11.1111
                    },
                     {
                      x: 0,
                      y: 8.0460
                    },
                     {
                      x: 2.4691,
                      y: 25.6098
                    },
                     {
                      x: 0,
                      y: 16.6667
                    },
                     {
                      x: 5.4945,
                      y: 15.3846
                    },
                     {
                      x: 2.0833,
                      y: 22.9167
                    },
                     {
                      x: 3.5354,
                      y: 12.6263
                    },
                     {
                      x: 5.4795,
                      y: 20.5479
                    },
                     {
                      x: 1.7857,
                      y: 19.6429
                    },
                     {
                      x: 0,
                      y: 11.5385
                    },
                     {
                      x: 7.6923,
                      y: 15.3846
                    },
                     {
                      x: 5.7971,
                      y: 7.2464
                    },
                     {
                      x: 1.6575,
                      y: 12.1547
                    },
                     {
                      x: 2.5641,
                      y: 48.7179
                    },
                     {
                      x: 9.8266,
                      y: 30.0578
                    },
                     {
                      x: 7.4468,
                      y: 30.0578
                    },
                     {
                      x: 7.4468,
                      y: 10.6383
                    },
                     {
                      x: 0,
                      y: 89.5522
                    },
                     {
                      x: 2.9661,
                      y: 13.9831
                    },
                     {
                      x: 5.0360,
                      y: 16.5468
                    },
                     {
                      x: 1.0811,
                      y: 18.2796
                    },
                     {
                      x: 2.5806,
                      y: 57.4194
                    },
                      {
                      x: 4.2105,
                      y: 17.8947
                    }
                    ],
                    categorias: [
                       "ALIMENTOS E NUTRIÇÃO",
                       "ARTES CÊNICAS",
                       "BIBLIOTECONOMIA",
                       "BIOLOGIA MOLECULAR E CELULAR",
                       "CIÊNCIAS BIOLÓGICAS (BIODIVERSIDADE NEOTROPICAL)",
                       "DIREITO",
                       "ECOTURISMO E CONSERVAÇÃO",
                       "EDUCAÇÃO",
                       "ENFERMAGEM E BIOCIÊNCIAS",
                       "ENFERMAGEM",
                       "ENSINO DAS PRÁTICAS MUSICAIS",
                       "ENSINO DE ARTES CÊNICAS",
                       "ENSINO DE FÍSICA - PROFIS",
                       "ENSINO DE HISTÓRIA",
                       "GESTÃO DE DOCUMENTOS E ARQUIVOS",
                       "HISTORIA",
                       "INFECÇÃO HIV/AIDS E HEPATITES VIRAIS",
                       "INFORMÁTICA",
                       "MATEMÁTICA EM REDE NACIONAL",
                       "MEDICINA",
                       "MEMÓRIA SOCIAL",
                       "MUSEOLOGIA E PATRIMÖNIO",
                       "MÚSICA",
                       "NEUROLOGIA",
                       "SAÚDE E TECNOLOGIA NO ESPAÇO HOSPITALAR",
                       

                      ]
                  }
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
                                max: 10
                            }
                        }]
                }
               }
            });
        },
        graficoScatter: function(id, numeros, categorias, titulo){
        new Chart(id, {
          type: "scatter",
          data: {
            labels: categorias,
            datasets: [{
              pointRadius: 4,
              pointBackgroundColor: "rgba(0,0,255,1)",
              data: numeros
            }]
          },
            options: {
                  title: {
                    display: true,
                    text: titulo
                  },
                  tooltips: {
                   callbacks: {
                      label: function(tooltipItem, data) {
                         var label = data.labels[tooltipItem.index];
                         return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
                      }
                   }
                }
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
