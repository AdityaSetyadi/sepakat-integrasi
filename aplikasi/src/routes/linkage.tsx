import { A } from "solid-start";
import Counter from "~/components/Counter";
import $ from "jquery";

import DataTable from "datatables.net";
import 'datatables.net-dt/css/jquery.dataTables.css';
import { createEffect, createSignal, Show } from "solid-js";

// @ts-ignore
import pairs_nik from "../data/skor_linkage.csv";

export default function Home() {
  
  var datas = pairs_nik;
  createEffect( () => {

    let datax : any[] = [];
    pairs_nik.forEach((e:any) => {
      if(e._score>=15){
      let nama_pes_ = e.base_source.split('[COL]')[1].split('[VAL]')[1];
      let nama_krt_pes_ = e.base_source.split('[COL]')[2].split('[VAL]')[1];
      let umur_pes_ = e.base_source.split('[COL]')[3].split('[VAL]')[1];
      let jenis_kelamin_pes_ = e.base_source.split('[COL]')[4].split('[VAL]')[1];

      let nama_sp_ = e._source.split('[COL]')[1].split('[VAL]')[1];
      let nama_krt_sp_ = e._source.split('[COL]')[2].split('[VAL]')[1];
      let umur_sp_ = e._source.split('[COL]')[3].split('[VAL]')[1];
      let jenis_kelamin_sp_ = e._source.split('[COL]')[4].split('[VAL]')[1];

        datax.push({
            nik_pes: e.base_source_NIK,
            nik_sp: e._source_NIK,
            nama_pes: nama_pes_,
            nama_krt_pes: nama_krt_pes_,
            jk_pes: jenis_kelamin_pes_,
            umur_pes: umur_pes_,
            nama_sp: nama_sp_,
            nama_krt_sp: nama_krt_sp_,
            jk_sp: jenis_kelamin_sp_,
            umur_sp: umur_sp_,
            proba: (e.proba*1).toFixed(2),
          })
      }
      
    })
    let table = new DataTable('#dt', {
      retrieve: true,
      paging: true,
      data: datax,
      columnDefs : [
        {width : "8%", target : 0},
        {width : "11%", target : 1},
        {width : "11%", target : 2},
        {width : "8%", target : 3},
        {width : "8%", target : 4},
        {width : "8%", target : 5},
        {width : "11%", target : 6},
        {width : "11%", target : 7},
        {width : "8%", target : 8},
        {width : "8%", target : 9},
        {width : "8%", target : 10},
      ],    
      columns: [
        { title : "NIK Regsosek", data: "nik_pes", className : "bg-green-100" },
        { title : "Nama Regsosek", data: "nama_pes", className : "bg-green-100" },
        { title : "Nama KK Regsosek", data: "nama_krt_pes" },
        { title : "Jenis Kelamin Regsosek", data: "jk_pes" },
        { title : "Umur Regsosek", data: "umur_pes" },
        { title : "NIK DTKS", data: "nik_sp", className : "bg-green-100" },
        { title : "Nama DTKS", data: "nama_sp", className : "bg-green-100" },
        { title : "Nama KK DTKS", data: "nama_krt_sp" },
        { title : "Jenis Kelamin DTKS", data: "jk_sp" },
        { title : "Umur DTKS", data: "umur_sp" },
        { title : "Score Kemiripan", data: "proba", className : "bg-orange-100" , render: function (data, type, row, meta) { 
            if(data>=80){
              return '<span class="bg-green-500 text-white px-4 rounded-full font-light">'+data+' % </span>'
            }
            else{
              return '<span class="bg-red-500 text-white px-4 rounded-full font-light">'+data+' % </span>'
            }
             
          }},
      ],
      dom: '<"px-6"<"top"Qfrtip>>rt',
    });
  })
  
  return (
    <>
      
      <main class="text-center mx-auto text-gray-700 py-4 px-8">

        {/* linkage */}
        <table id="dt" class="display px-8 pb-8 pt-2 w-screen"></table>
      </main>
    </>
  );
}
