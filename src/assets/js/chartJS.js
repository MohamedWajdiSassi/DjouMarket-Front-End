
      app.ready(function() {


        // ==============================================
        // Line chart 1
        //
        new Chart($("#chart-line-1"), {
          type: 'line',

          // Data
          //
          data: {
            labels: ["January", "February", "March", "April"],
            datasets: [
              {
                label: "Revenue",
                fill: false,
                borderWidth: 3,
                pointRadius: 0,
                data: [30, 25, 35, 23]
              }
            ]
          },

          // Options
          //
          options: {
            legend: {
              display: false
            },
          }
        });





        // ==============================================
        // Line chart 2
        //
        new Chart($("#chart-line-2"), {
          type: 'line',

          // Data
          //
          data: {
            labels: ["January", "February", "March", "April"],
            datasets: [
              {
                label: "Revenue",
                fill: false,
                borderWidth: 3,
                pointRadius: 5,
                borderColor: "#9966ff",
                pointBackgroundColor: "#9966ff",
                pointBorderColor: "#9966ff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#9966ff",
                data: [30, 25, 35, 23]
              }
            ]
          },

          // Options
          //
          options: {
            legend: {
              display: false
            },
          }
        });







        // ==============================================
        // Line chart 3
        //
        new Chart($("#chart-line-3"), {
          type: 'line',

          // Data
          //
          data: {
            labels: ["January", "February", "March", "April"],
            datasets: [
              {
                label: "Income",
                fill: false,
                backgroundColor: "#36a2eb",
                borderColor: "#36a2eb",
                borderWidth: 3,
                pointRadius: 0,
                data: [30, 25, 35, 23]
              },
              {
                label: "Expense",
                fill: false,
                borderColor: "#ff6384",
                backgroundColor: "#ff6384",
                borderWidth: 3,
                pointRadius: 0,
                data: [23, 29, 30, 33]
              }
            ]
          },

          // Options
          //
          options: {}
        });






        // ==============================================
        // Line chart 4
        //
        new Chart($("#chart-line-4"), {
          type: 'line',

          // Data
          //
          data: {
            labels: ["January", "February", "March", "April"],
            datasets: [
              {
                label: "Income",
                fill: false,
                borderWidth: 3,
                pointRadius: 4,
                borderColor: "#36a2eb",
                backgroundColor: "#36a2eb",
                pointBackgroundColor: "#36a2eb",
                pointBorderColor: "#36a2eb",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#36a2eb",
                data: [30, 25, 35, 23]
              },
              {
                label: "Expense",
                fill: false,
                borderWidth: 3,
                pointRadius: 4,
                borderColor: "#ff6384",
                backgroundColor: "#ff6384",
                pointBackgroundColor: "#ff6384",
                pointBorderColor: "#ff6384",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#ff6384",
                data: [23, 29, 30, 33]
              }
            ]
          },

          // Options
          //
          options: {}
        });








        // ==============================================
        // Area chart 1
        //
        new Chart($("#chart-area-1"), {
          type: 'line',

          // Data
          //
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "Revenue",
                backgroundColor: "rgba(51,202,185,0.5)",
                borderWidth: 0,
                borderColor: "rgba(0,0,0,0)",
                data: [0, 59, 80, 58, 20, 55, 40]
              }
            ]
          },

          // Options
          //
          options: {
            legend: {
              display: false
            },
          }
        });






        // ==============================================
        // Area chart 2
        //
        new Chart($("#chart-area-2"), {
          type: 'line',

          // Data
          //
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "Income",
                backgroundColor: "rgba(51,202,185,0.5)",
                borderColor: "rgba(0,0,0,0)",
                pointBackgroundColor: "rgba(51,202,185,0.5)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(51,202,185,0.5)",
                data: [0, 59, 80, 58, 20, 55, 40]
              },
              {
                label: "Expenses",
                backgroundColor: "rgba(243,245,246,0.8)",
                borderColor: "rgba(0,0,0,0)",
                pointBackgroundColor: "rgba(243,245,246,0.8)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(243,245,246,0.8)",
                data: [28, 48, 40, 19, 86, 27, 90]
              }
            ]
          },

          // Options
          //
          options: {}
        });





        // ==============================================
        // Vertical bar chart 1
        //
        new Chart($("#chart-vbar-1"), {
          type: 'bar',

          // Data
          //
          data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "Income",
                backgroundColor: "rgba(51,202,185,0.5)",
                borderColor: "rgba(0,0,0,0)",
                hoverBackgroundColor: "rgba(51,202,185,0.7)",
                hoverBorderColor: "rgba(0,0,0,0)",
                data: [10, 59, 80, 58, 20, 55, 40]
              }
            ]
          },

          // Options
          //
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });





        // ==============================================
        // Vertical bar chart 2
        //
        new Chart($("#chart-vbar-2"), {
          type: 'bar',

          // Data
          //
          data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "Income",
                backgroundColor: "rgba(51,202,185,0.5)",
                borderColor: "rgba(0,0,0,0)",
                hoverBackgroundColor: "rgba(51,202,185,0.7)",
                hoverBorderColor: "rgba(0,0,0,0)",
                data: [10, 59, 80, 58, 20, 55, 40]
              },
              {
                label: "Expenses",
                backgroundColor: "rgba(243,245,246,0.8)",
                borderColor: "rgba(0,0,0,0)",
                hoverBackgroundColor: "rgba(238,239,240,1)",
                hoverBorderColor: "rgba(0,0,0,0)",
                data: [28, 48, 40, 19, 86, 27, 90]
              }
            ]
          },

          // Options
          //
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });







        // ==============================================
        // Horizontal bar chart 1
        //
        new Chart($("#chart-hbar-1"), {
          type: 'horizontalBar',

          // Data
          //
          data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "Income",
                backgroundColor: "rgba(51,202,185,0.5)",
                borderColor: "rgba(0,0,0,0)",
                hoverBackgroundColor: "rgba(51,202,185,0.7)",
                hoverBorderColor: "rgba(0,0,0,0)",
                data: [10, 59, 80, 58, 20, 55, 40]
              }
            ]
          },

          // Options
          //
          options: {
            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });





        // ==============================================
        // Horizontal bar chart 2
        //
        new Chart($("#chart-hbar-2"), {
          type: 'horizontalBar',

          // Data
          //
          data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "Income",
                backgroundColor: "rgba(51,202,185,0.5)",
                borderColor: "rgba(0,0,0,0)",
                hoverBackgroundColor: "rgba(51,202,185,0.7)",
                hoverBorderColor: "rgba(0,0,0,0)",
                data: [10, 59, 80, 58, 20, 55, 40]
              },
              {
                label: "Expenses",
                backgroundColor: "rgba(243,245,246,0.8)",
                borderColor: "rgba(0,0,0,0)",
                hoverBackgroundColor: "rgba(238,239,240,1)",
                hoverBorderColor: "rgba(0,0,0,0)",
                data: [28, 48, 40, 19, 86, 27, 90]
              }
            ]
          },

          // Options
          //
          options: {
            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });





        // ==============================================
        // Radar chart
        //
        new Chart($("#chart-radar"), {
          type: 'radar',

          // Data
          //
          data: {
          labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
              {
                label: "Person 1",
                backgroundColor: "rgba(51,202,185,0.7)",
                borderColor: "rgba(0,0,0,0)",
                pointBackgroundColor: "rgba(51,202,185,0.7)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(51,202,185,0.7)",
                data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                label: "Person 2",
                backgroundColor: "rgba(72,176,247,0.7)",
                borderColor: "rgba(0,0,0,0)",
                pointBackgroundColor: "rgba(72,176,247,0.7)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(72,176,247,0.7)",
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]
          },

          // Options
          //
          options: {
            responsive: false,
            legend: {
              display: false
            }
          }
        });






        // ==============================================
        // Polar area chart
        //
        new Chart($("#chart-polar"), {
          type: 'polarArea',

          // Data
          //
          data: {
            datasets: [{
              data: [
                11,
                16,
                7,
                3,
                14
              ],
              backgroundColor: [
                'rgba(255,99,132,0.95)',
                'rgba(75, 192, 192, 0.95)',
                'rgba(255, 159, 64, 0.95)',
                'rgba(231, 233, 237, 0.95)',
                'rgba(54, 162, 235, 0.95)'
              ],
              label: 'My dataset' // for legend
            }],
            labels: [
              "Red",
              "Green",
              "Orange",
              "Grey",
              "Blue"
            ]
          },

          // Options
          //
          options: {
            responsive: false,
            legend: {
              display: false
            }
          }
        });





        // ==============================================
        // Pie chart
        //
        new Chart($("#chart-pie"), {
          type: 'pie',

          // Data
          //
          data: {
            labels: [
              "Red",
              "Blue",
              "Orange"
            ],
            datasets: [
              {
                data: [300, 50, 100],
                backgroundColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
                ]
              }]
          },

          // Options
          //
          options: {
            responsive: false
          }
        });





        // ==============================================
        // Doughnut chart
        //
        new Chart($("#chart-doughnut"), {
          type: 'doughnut',

          // Data
          //
          data: {
            labels: [
              "Red",
              "Blue",
              "Orange"
            ],
            datasets: [
              {
                data: [300, 50, 100],
                backgroundColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
                ]
              }]
          },

          // Options
          //
          options: {
            responsive: false
          }
        });






        // ==============================================
        // Bubble chart
        //
        new Chart($("#chart-bubble"), {
          type: 'bubble',

          // Data
          //
          data: {
            datasets: [
              {
                label: 'Pink',
                data: [
                  {
                    x: 8,
                    y: 24,
                    r: 18
                  },
                  {
                    x: 20,
                    y: 30,
                    r: 15
                  },
                  {
                    x: 40,
                    y: 10,
                    r: 10
                  }
                ],
                backgroundColor:"#ff6384",
                hoverBackgroundColor: "#ff6384",
              },
              {
                label: 'Blue',
                data: [
                  {
                    x: 10,
                    y: 35,
                    r: 5
                  },
                  {
                    x: 5,
                    y: 5,
                    r: 20
                  },
                  {
                    x: 30,
                    y: 15,
                    r: 10
                  }
                ],
                backgroundColor:"#36a2eb",
                hoverBackgroundColor: "#36a2eb",
              },
              {
                label: 'Yellow',
                data: [
                  {
                    x: 17,
                    y: 21,
                    r: 8
                  },
                  {
                    x: 25,
                    y: 15,
                    r: 12
                  },
                  {
                    x: 12,
                    y: 31,
                    r: 16
                  }
                ],
                backgroundColor:"#ffce56",
                hoverBackgroundColor: "#ffce56",
              },
            ]
          },

          // Options
          //
          options: {
            legend: {
              display: false
            },

            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });

      });
