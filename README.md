
<div >
    <img src="https://regsosek-sepakat.bappenas.go.id/uploads/settings/logo.png" width="400" alt="" >
    <br/>
    <span class="footlogo-r1">
    <a href="https://www.bappenas.go.id/">
        <img src="https://regsosek-sepakat.bappenas.go.id/assets/images/resources/footer/footicon1.png" width="120" alt="">
    </a>
    <a href="https://www.ekon.go.id/">
        <img src="https://regsosek-sepakat.bappenas.go.id/assets/images/resources/footer/footicon1.1.png" width="120" alt="">
    </a>
    </span>
    <a href="https://www.kemendagri.go.id/">
    <img src="https://regsosek-sepakat.bappenas.go.id/assets/images/resources/footer/footicon2.png" width="40" alt="">
    </a>
    <a href="https://www.kemenkeu.go.id/home">
    <img src="https://regsosek-sepakat.bappenas.go.id/assets/images/resources/footer/footicon3.png" width="40" alt="">
    </a>
    <a href="https://www.kominfo.go.id/">
    <img src="https://regsosek-sepakat.bappenas.go.id/assets/images/resources/footer/footicon4.png" width="40" alt="">
    </a>
    <a href="https://www.kemendesa.go.id/">
    <img src="https://regsosek-sepakat.bappenas.go.id/assets/images/resources/footer/footicon5.png" width="40" alt="">
    </a>
    <a href="https://www.bps.go.id/">
    <img src="https://regsosek-sepakat.bappenas.go.id/assets/images/resources/footer/footicon6.png" width="40" alt="">
    </a>
    <br/>
</div>



# SEPAKAT - Modul Integrasi: Integrasi Data Regsosek, sebagai Informasi Dasar Individu, dengan Data Terkait menggunakan Pendekatan Resolusi Entitas

<!-- *** -->

## Kontributor
- [Ignatius Aditya Setyadi](https://www.linkedin.com/in/adityasetyadi/) *BPS - Statistics Indonesia*
- [Amanda Pratama Putra]() *Tokopedia*
- [Waiz Al Qorni]() *BPS - Statistics Indonesia*

## Tujuan
Tujuan utama dari proposal ini adalah untuk menyediakan solusi modul pemrosesan integrasi data Regsosek dengan berbagai sumber data terkait, terutama pada level individu, baik terhadap data terdahulu maupun sebagai persiapan integrasi dengan pendataan mendatang. Secara lebih rinci tujuan lainnya adalah sebagai berikut:

Dengan metode pendataan menyeluruh (sensus), solusi modul pemrosesan integrasi ini bertujuan untuk mempertahankan Regsosek sebagai informasi dasar acuan untuk data lainnya, yang menghasilkan data tunggal individu yang konsisten.
* Mempersiapkan wadah perluasan data dan informasi Regsosek, sebagai informasi dasar acuan, hasil integrasi dan sinkronisasi dengan sumber data lain, dengan turut mempertahankan keutuhan koheren data tunggal individu yang konsisten.
* Menyediakan modul Integrasi bagi SEPAKAT yang dapat memperkaya modul yang telah ada saat ini yaitu modul Analisis, Perencanaan, Penganggaran, Monitor, dan Evaluasi.
* Menyediakan modul Integrasi bagi SEPAKAT yang mampu beradaptasi dengan pemrosesan bersama data besar berskala nasional.
* Memastikan one single ID untuk setiap individu hasil pemrosesan integrasi dengan Regsosek sebagai informasi dasar acuan.
* Merumuskan formulasi kombinasi atribut penentu tautan individu antar data.

## Manfaat
Secara garis besar, manfaat dari solusi yang diusulkan adalah untuk menjadi support system yang terhubung dengan platform SEPAKAT, dengan fungsi utama sebagai high scalable integrator system berbasis vector database yang memudahkan proses integrasi data Regsosek dengan berbagai sumber data lainnya seperti DTKS dan P3KE menggunakan pendekatan probabilistic record linkage. 

Dengan demikian, modul ini dapat bermanfaat untuk membantu pemrosesan integrasi data Regsosek secara modern dan robust untuk selanjutnya dapat digunakan oleh platform SEPAKAT sebagai dasar pembuatan analisis dan perencanaan anggaran, memungkinkan analis dan pemangku kepentingan untuk melihat data dari berbagai sudut pandang dan menemukan pola atau hubungan antar data yang mungkin tidak terlihat jika data tersebut tetap terpisah. Hal ini dapat membantu dalam merumuskan keputusan yang lebih tepat dan bermanfaat. Selain itu, integrasi data juga dapat membantu dalam mengelola data secara lebih efisien karena data yang terintegrasi dapat diakses dengan mudah dan cepat. 

## Ide Gagasan
Aplikasi yang diusulkan merupakan sebuah aplikasi pemrosesan data yang dapat digunakan untuk mengintegrasikan data dari berbagai sumber. Aplikasi ini dapat menampilkan data-data yang saling terkait dari berbagai sumber data lintas instansi, kementerian/lembaga secara akurat dan komprehensif. Aplikasi ini sangat bermanfaat untuk kepentingan perencanaan program nasional, yang memiliki unit sasaran pelaksanaan pada tingkat kabupaten, desa, keluarga, hingga individu.

Data yang digunakan dalam perencanaan suatu kebijakan atau penyusunan program, sedianya dikumpulkan dari berbagai macam sumber, dan memiliki struktur serta konsep dan definisi yang berbeda. Di sisi lain, Untuk menetapkan suatu kebijakan atau melaksanakan suatu program, data yang akurat dan komprehensif diperlukan sebagai dasar pertimbangan. Oleh karena itu kami mengusulkan aplikasi untuk pengintegrasian data yang memiliki fitur berupa :

* Pemrosesan pembersihan data dari duplikasi (Deduplikasi)

    Fitur ini berguna untuk mengetahui potensi duplikasi record dari data-data yang tersedia. Pengguna dapat menginputkan wilayah yang akan diteliti, kemudian aplikasi akan menampilkan daftar record yang berpotensi menjadi duplikat dari record-record data pada wilayah tersebut. Selanjutnya, berdasarkan data tersebut, pengguna dapat melakukan konfirmasi atau rekonsiliasi agar duplikasi data dapat dihindari.

* Pentautan (linkage) dari data satu ke data-data lainnya.

    Fitur ini berfungsi untuk menampilkan record data menurut wilayah, dan tautannya (linkage) dengan data-data lain. Hal ini sangat bermanfaat untuk melihat data secara komprehensif, bukan dari satu data saja namun variabel-variabel lain pada data-data yang tersedia. Pengguna dapat memilih data dasar sebagai basis pencarian, kemudian aplikasi akan menyajikan tautan (linkage) dari semua data yang tersedia berdasarkan data dasar yang dipilih tersebut.

* Pemeriksaan dan kontrol kualitas terhadap single ID yang digunakan saat ini (NIK).

    Pengguna dapat melakukan pencarian menggunakan NIK pada semua data yang tersedia, kemudian aplikasi akan menampilkan record-record yang memiliki NIK tersebut. Setelah itu, akan ditampilkan pula skor linkage record-record tersebut. Apabila score tersebut tinggi maka dapat disimpulkan pencarian dengan NIK sudah konsisten diantara data-data yang tersedia, sebaliknya, jika rendah maka ada potensi kesalahan konten pada record data tersebut. Jika skor linkage rendah, aplikasi akan menampilkan data dengan skor linkage yang paling baik dengan data tersebut.

* Pencarian secara realtime data komprehensif dari individu.

    Pada fitur ini pengguna dapat melakukan pencarian secara realtime data individu dengan menginputkan nama, umur, jenis kelamin, dan nama kepala keluarga nya. Kemudian aplikasi akan melakukan pencarian dan menampilkan hasilnya kepada pengguna. Data yang ditampilkan bersumber dari semua data yang telah terindex di dalam sistem.


## Potensi Pengembangan
* Penambahan karakteristik dalam pembentukan embedding/vector representation setiap individu dengan menggunakan bio-characteristic seperti fingerprint, retina, atau face recognition sehingga menghasilkan integrasi data yang lebih berkualitas.
* Linkage data dapat dikembangkan dan dilakukan secara lintas waktu, contohnya untuk data regsosek 2022 dengan data Sensus Penduduk 2020 ataupun data Sensus Penduduk 2010 yang diintegrasikan dengan data geospasial/kewilayahan untuk melihat dinamika migrasi penduduk dan proyeksi jumlah penduduk.
* Linkage data dapat dilakukan secara berkesinambungan dalam skala besar dengan berbagai sumber data lainnya termasuk dari sektor privat, sesuai dengan rancangan arsitektur sistem aplikasi integrasi data yang dirancang secara terklusterisasi sehingga memiliki kapasitas upscaling secara horizontal.
* Linkage di level keluarga/rumah tangga dapat mendeteksi dan mengantisipasi pemberian bantuan atau program yang kurang tepat sasaran/redundan di dalam lingkup keluarga/rumah tangga.
* Mendukung penyediaan satu data Indonesia yang berkualitas dan one single ID yang bebas redundansi melalui mekanisme deduplikasi menggunakan metode probabilistic linkage.
* Terbukanya peluang analisis dan estimasi data berdasarkan data terintegrasi.
* Integrasi data dapat dilakukan antara data dasar Regsosek dengan data berbasis survei sampling sehingga dapat digunakan untuk meningkatkan kualitas estimasi survei menggunakan metode post calibration.

## Batasan
* Belum ada ketersediaan data yang real untuk dilakukan analisis dan experiment skala besar.
* Kualitas integrasi data bergantung pada ketersediaan karakteristik dari setiap data beserta tingkat ketersediaannya.



## Tentang repositori

### Struktur repo
    .
    ├── aplikasi
    │   └── [...]
    │           SEPAKAT platform, dibangun dengan SolidJS
    │
    ├── dokumen
    │   ├── HACKATHON_REGSOSEK2022_MUFAKAT.pdf
    │   └── [...]
    │
    └── notebook
        ├── 01_Negative_Sampling.ipynb
        └── 02_NIK_Pairs_Prediction.ipynb
                The Jupyter Notebooks yang dibuat untuk pengolahan data Regsosek


## Daftar Pustaka
> Zhu, Ying, et al. "When to conduct probabilistic linkage vs. deterministic linkage? A simulation study." Journal of biomedical informatics 56 (2015): 80-86. https://doi.org/10.1016/j.jbi.2015.05.012   

> Li, Yuliang, et al. "Deep entity matching with pre-trained language models." arXiv preprint arXiv:2004.00584 (2020). https://arxiv.org/pdf/2004.00584.pdf  

> amazon.com. “What is a data lake?” Diakses pada tanggal 13 Desember 2022, dari https://aws.amazon.com/id/big-data/what-is-a-data-lake/

> tibco.com. “What are Microservices?” Diakses pada tanggal 13 Desember 2022, dari https://www.tibco.com/reference-center/what-are-microservices 

> Wilie, Bryan et. al. “IndoNLU: Benchmark and Resources for Evaluating Indonesian Natural Language Understanding” arXiv:2009.05387 (2020). https://arxiv.org/pdf/2009.05387.pdf 

> Park, Suzi and Hyopil Shin. “KR-SBERT: A Pre-trained Korean-specific Sentence-BERT model”. Github (2021). Diakses pada tanggal 14 Desember 2022, dari https://github.com/snunlp/KR-SBERT 

> milvus.io. “What is milvus?” Diakses pada tanggal 14 Desember 2022, dari https://milvus.io/docs/v1.1.1/overview.md 



