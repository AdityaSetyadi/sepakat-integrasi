import { A } from "solid-start";
import Counter from "~/components/Counter";
import $ from "jquery";

import DataTable from "datatables.net";
import 'datatables.net-dt/css/jquery.dataTables.css';
import { createEffect, createSignal, Show } from "solid-js";

// @ts-ignore
import pairs_nik from "../data/skor_pasangan_nik_sugesti.csv";

export default function Home() {
  
  const [modalSesuai, setModalSesuai] = createSignal(false);
  const  format = (d:any) => {
    // `d` is the original data object for the row
    let txt = d.nama_sugesti.split('[')[0];
    if(txt === ''){
        txt = 'Tidak Ditemukan';
    }
    return (
        '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Rekomendasi Individu:</td>' +
        '<td>' +
        txt +
        '</td>' +
        '</tr>' +
        '</table>'
    );
  }
  

  createEffect( () => {

    let datax : any[] = [];
    pairs_nik.forEach((e:any) => {
        datax.push({
            id: e.id,
            blok_pes: e.blok_pes,
            nik_pes: e.nik_pes,
            nama_pes: e.nama_pes,
            nama_krt_pes: e.nama_krt_pes,
            jk_pes: e.jk_pes,
            umur_pes: e.umur_pes,
            blok_sp: e.blok_sp,
            nik_sp: e.nik_sp,
            nama_sp: e.nama_sp,
            nama_krt_sp: e.nama_krt_sp,
            jk_sp: e.jk_sp,
            umur_sp: e.umur_sp,
            label: e.label,
            pred: e.pred,
            proba: e.proba,
            conf: e.conf,
            exact: e.exact,
            nama_sugesti : e.nama_sugesti,
            skor : {
              nik_pes : e.nik_pes,
              nik_sp : e.nik_sp,
              blok_pes : e.blok_pes,
              blok_sp : e.blok_sp,
              proba : e.proba,
            }
          })
      

    })

    let table = new DataTable('#dt', {
      // options
      retrieve: true,
      paging: true,
      data: datax,
      columnDefs : [
        {width : "5%", target : 0},
        {width : "5%", target : 1},
        {width : "5%", target : 2},
        {width : "15%", target : 3},
        {width : "10%", target : 4},
        {width : "5%", target : 5},
        {width : "5%", target : 6},
        {width : "5%", target : 7},
        {width : "5%", target : 8},
        {width : "15%", target : 9},
        {width : "10%", target : 10},
        {width : "5%", target : 11},
        {width : "5%", target : 12},
        {width : "5%", target : 13},
      ],    
      columns: [
        {
            className: "dt-control",
            orderable: false,
            data: null,
            defaultContent: '',
        },
        { title : "Wilayah Regsosek", data: "blok_pes", className : "bg-green-100" },
        { title : "NIK Regsosek", data: "nik_pes" , className : "bg-orange-100"},
        { title : "Nama Regsosek", data: "nama_pes" },
        { title : "Nama KK Regsosek", data: "nama_krt_pes" },
        { title : "Jenis Kelamin Regsosek", data: "jk_pes" },
        { title : "Umur Regsosek", data: "umur_pes" },
        { title : "Wilayah DTKS", data: "blok_sp" , className : "bg-green-100"},
        { title : "NIK DTKS", data: "nik_sp" , className : "bg-orange-100"},
        { title : "Nama DTKS", data: "nama_sp" },
        { title : "Nama KK DTKS", data: "nama_krt_sp" },
        { title : "Jenis Kelamin DTKS", data: "jk_sp" },
        { title : "Umur DTKS", data: "umur_sp" },
        { title : "Score Kemiripan", data: "proba", className : "bg-orange-100" , render: function (data, type, row, meta) { 
            if(data>=99){
              return '<span class="bg-green-500 text-white px-4 rounded-full font-light">'+data+'</span>'
            }
            else{
              return '<span class="bg-red-500 text-white px-4 rounded-full font-light">'+data+'</span>'
            }
             
          }},
      ],
      dom: '<"px-6"<"top"Qfrtip>>rt',
    });
    
    $('#dt tbody').on('click', 'td.dt-control', function () {
      console.log('aewtqw');
      var tr = $(this).closest('tr');
      var row = table.row(tr);

      if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
      } else {
          // Open this row
          // @ts-ignore
          row.child(format(row.data())).show();
          tr.addClass('shown');
      }
  });
    
  })

  return (
    <>
      
      <main class="text-center mx-auto text-gray-700 ">
        
        <div class="py-6">
          <table id="dt" class="display px-8 pb-8 pt-2 w-screen"></table>
        </div>
      </main>
    </>
  );
}
