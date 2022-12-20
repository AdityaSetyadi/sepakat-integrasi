import { createEffect } from "solid-js";
import Chart from 'chart.js/auto';

export default function Home() {
  
  createEffect( () => {
    
      
  //LINKAGE PROBABILITY
  const labelLinkage = [
    'Berdasarkan NIK',
    'Berdasarkan Karakteristik',
    'Tidak Match',
  ];        

  const dataLinkage = {
    labels: labelLinkage,
    datasets: [
      {
        label: 'Persentase',
        data: [88,8,4],
        backgroundColor: ['MediumSeaGreen', 'Orange', 'Crimson', ],
      }
    ]
  };

  const LinkageCanvas = document.querySelector("#linkageCanvas") as HTMLCanvasElement;
  new Chart(
    LinkageCanvas,
    {
      type: 'doughnut',
      data: dataLinkage,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Hasil Pentautan Data',
            color: 'DimGray',
            font: {
              size: 20,
              weight: 'bold',
            },
          },
          subtitle: {
            display: true,
            text: 'Hasil Pentautan Data Berdasarkan Jenis Karakteristik Matching',
            color: 'DimGray',
            font: {
              size: 16,
              lineHeight: 1.5,
            },
          },
          legend: {
              labels: {
                  font: {
                      size: 14
                  }
              }
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        }
      }
    }
  );

    //DUPLIKASI
      const labelDuplikasi = [
        'Regsosek',
        'DTKS',
      ];        

      const dataDuplikasi = {
        labels: labelDuplikasi,
        datasets: [
          {
            label: 'Data Tunggal',
            data: [9940,9940],
            backgroundColor: 'Gainsboro'
          },
          {
            label: 'Data Duplikat',
            data: [10,12],
            backgroundColor: 'Crimson'
          },
        ]
      };

      const duplikasiCanvas = document.querySelector("#duplikasiCanvas") as HTMLCanvasElement;
      new Chart(
        duplikasiCanvas,
        {
          type: 'bar',
          data: dataDuplikasi,
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Perbandingan Deduplikasi antar Data',
                color: 'DimGray',
                font: {
                  size: 20,
                  weight: 'bold',
                },
              },
              subtitle: {
                display: true,
                text: 'Hasil perbandingan antara Data Tunggal dan Duplikat',
                color: 'DimGray',
                font: {
                  size: 16,
                  lineHeight: 1.5,
                },
              },
              legend: {
                  labels: {
                      font: {
                          size: 14
                      }
                  }
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            }
          }
        }
      );
      

    //NIK PROBLEMATIK
      const labelNikProblematik = [
        'Regsosek',
        'DTKS',
      ];        

      const dataNikProblematik = {
        labels: labelNikProblematik,
        datasets: [
          {
            label: 'NIK Valid',
            data: [120,220],
            backgroundColor: 'Gainsboro'
          },
          {
            label: 'NIK Bermasalah',
            data: [25,19],
            backgroundColor: 'Crimson'
          },
        ]
      };

      const nikProblematikCanvas = document.querySelector("#nikProblematikCanvas") as HTMLCanvasElement;
      new Chart(
        nikProblematikCanvas,
        {
          type: 'bar',
          data: dataNikProblematik,
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Perbandingan NIK bermasalah antar Data',
                color: 'DimGray',
                font: {
                  size: 20,
                  weight: 'bold',
                },
              },
              subtitle: {
                display: true,
                text: 'NIK Bermasalah adalah NIK yang digunakan dua atau lebih orang berbeda, dan konsisten disetiap data',
                color: 'DimGray',
                font: {
                  size: 16,
                  lineHeight: 1.5,
                },
              },
              legend: {
                  labels: {
                      font: {
                          size: 14
                      }
                  }
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            }
          }
        }
      );
      
  //LINKAGE PROBABILITY
    const labelLinkageProbability = [
      'Jumlah Linkage',
      'Hanya di Regsosek',
      'Hanya di DTKS',
      'Hanya di P3KE',
    ];        

    const dataLinkageProbability = {
      labels: labelLinkageProbability,
      datasets: [
        {
          label: 'NIK Valid',
          data: [120,20,12,21],
          backgroundColor: ['WhiteSmoke','deeppink', 'indigo', 'Snow', ]
        }
      ]
    };

    const LinkageProbabilityCanvas = document.querySelector("#linkageProbCanvas") as HTMLCanvasElement;
    new Chart(
      LinkageProbabilityCanvas,
      {
        type: 'doughnut',
        data: dataLinkageProbability,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Linkage Probalistic'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          }
        }
      }
    );

  })
  
  return (
    <>
      <main class="">

        <div class="w-full grid grid-cols-2 " >
          <canvas id="linkageCanvas" class="w-full h-full px-12 pb-12 pt-6 " />
          <div class="w-full grid grid-rows-2 " >
            <canvas id="duplikasiCanvas" class="w-full h-full px-12 pb-12 pt-6 " />
            <canvas id="nikProblematikCanvas" class="w-full h-full px-12 pb-12 pt-6 " />
          </div>
          <canvas id="linkageProbCanvas" class="w-full h-full p-12 hidden " />
        </div>

      </main>
    </>
  );
}
