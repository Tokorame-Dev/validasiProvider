"# validasiProvider" 

# Tujuan Modul

Untuk Mengecek Nama Operator Dari Nomor Yang Diinput

# Demo
   [https://demo-provider.vercel.app/](https://demo-provider.vercel.app/)

# Cara Install

`npm install validasi-provider`

Penggunaan...

```

import { isProvider } from 'validasi-provider';

isProvider("0851********")

output => Telkomsel

```

## Macam - Macam Validasi Yang Ada Didalam Module

* Hanya Untuk Nomor SIM Indonesia
* Jumlah Digit Minimal Adalah 11
* Jumlah Digit Maximal Adalah 13