#Employee Project#
Deskripsi Singkat
Proyek "Employee" adalah aplikasi manajemen data karyawan yang menyimpan informasi seperti “username”, “firstName”, “lastName”, “email”, “birthDate”, “basicSalary”, “status”, “group”, dan “description”.

*Fitur-fitur Utama*
Form Login: Pengguna dapat login menggunakan username "admin" dan password "admin" (tanpa tanda petik).
Jika data login salah, pengguna tidak bisa masuk.
Jika login berhasil, pengguna akan diarahkan ke menu utama.
Button Signup: Hanya tampilan pemanis, belum berfungsi.

*Menu Utama:*
Search: Untuk mencari data karyawan dapat memasukkan nama / username yang di inginkan.

Add Employee: Menambahkan data karyawan baru.

Logout: Keluar dari aplikasi.

Darkmode hanya penggembira, belum berfungsi

Tabel Data Karyawan: Menampilkan data karyawan dengan kolom “username”, “firstName”, “lastName”, “email”, “birthDate”, “basicSalary”, “status”, “group”, dan “description”.
Kolom “username”, “firstName”, dapat diurutkan dari A-Z / Z-A dan “basicSalary” dapat diurutkan dari yang terkecil hingga terbesar, dengan mengklik judul kolom tersebut.

Detail karyawan: klik kolom karyawan untuk menapilkan detail.

Delete: Klik tombol "Delete" pada kolom "Action" data karyawan untuk menghapus data yg tidak di inginkan.

Edit: Klik tombol "Edit" pada kolom "Action" data karyawan untuk mengedit informasi.

Pagination: Gunakan tombol navigasi halaman di bagian bawah tabel untuk berpindah halaman.

*Cara Instalasi*
Clone Repository: Clone repository proyek dari GitHub.
open terminal cmd/bash
Copy code
git clone https://github.com/SitumorangIran/employee.git
Navigasi ke Direktori Proyek: Pindah ke direktori proyek yang telah di-clone.
bash
Copy code
cd employee
Instalasi Dependencies: Install dependencies proyek menggunakan npm.
bash
Copy code
npm install
Jalankan Aplikasi: Jalankan aplikasi Angular.
bash
Copy code
ng serve
Akses Aplikasi: Buka browser dan akses aplikasi di http://localhost:4200.

#Cara Penggunaan#
Login:

Buka aplikasi di browser.
Masukkan username (admin) dan password (admin) yang benar, tanpa tanda ().
Klik tombol login. Jika data benar, Anda akan diarahkan ke menu utama.
Menu Utama:

Search: Ketikkan kata kunci di kotak pencarian untuk mencari data karyawan.
Add Employee: Klik tombol "Add Employee" untuk menambahkan data karyawan baru. Isi form yang muncul dan simpan.
Logout: Klik tombol "Logout" di header untuk keluar dari aplikasi.
Tabel Data Karyawan:

Data karyawan akan ditampilkan dalam tabel.
Anda bisa mengurutkan data berdasarkan kolom “username”, “firstName”, dan “basicSalary” dengan mengklik header kolom dan mengklik kolom yg di inginkan untuk menmpilkan detail karyawan.

Delete: Klik tombol "Delete" pada kolom "Action" data karyawan untuk menghapus data yg tidak di inginkan.

Edit: Klik tombol "Edit" pada kolom "Action" data karyawan untuk mengedit informasi.

Pagination: Gunakan tombol navigasi halaman di bagian bawah tabel untuk berpindah halaman.

NB : Proyek ini menggunakan Angular versi 16.2. Pastikan Anda telah menginstal Angular CLI dengan versi yang sesuai.

