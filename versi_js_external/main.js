// variable isi berbagai negara
var negara = [
    { "name": "Afghanistan", "code": "AF" },
    { "name": "Åland Islands", "code": "AX" },
    { "name": "Albania", "code": "AL" },
    { "name": "Algeria", "code": "DZ" },
    { "name": "American Samoa", "code": "AS" },
    { "name": "AndorrA", "code": "AD" },
    { "name": "Angola", "code": "AO" },
    { "name": "Anguilla", "code": "AI" },
    { "name": "Antarctica", "code": "AQ" },
    { "name": "Antigua and Barbuda", "code": "AG" },
    { "name": "Argentina", "code": "AR" },
    { "name": "Armenia", "code": "AM" },
    { "name": "Aruba", "code": "AW" },
    { "name": "Australia", "code": "AU" },
    { "name": "Austria", "code": "AT" },
    { "name": "Azerbaijan", "code": "AZ" },
    { "name": "Bahamas", "code": "BS" },
    { "name": "Bahrain", "code": "BH" },
    { "name": "Bangladesh", "code": "BD" },
    { "name": "Barbados", "code": "BB" },
    { "name": "Belarus", "code": "BY" },
    { "name": "Belgium", "code": "BE" },
    { "name": "Belize", "code": "BZ" },
    { "name": "Benin", "code": "BJ" },
    { "name": "Bermuda", "code": "BM" },
    { "name": "Bhutan", "code": "BT" },
    { "name": "Bolivia", "code": "BO" },
    { "name": "Bosnia and Herzegovina", "code": "BA" },
    { "name": "Botswana", "code": "BW" },
    { "name": "Bouvet Island", "code": "BV" },
    { "name": "Brazil", "code": "BR" },
    { "name": "British Indian Ocean Territory", "code": "IO" },
    { "name": "Brunei Darussalam", "code": "BN" },
    { "name": "Bulgaria", "code": "BG" },
    { "name": "Burkina Faso", "code": "BF" },
    { "name": "Burundi", "code": "BI" },
    { "name": "Cambodia", "code": "KH" },
    { "name": "Cameroon", "code": "CM" },
    { "name": "Canada", "code": "CA" },
    { "name": "Cape Verde", "code": "CV" },
    { "name": "Cayman Islands", "code": "KY" },
    { "name": "Central African Republic", "code": "CF" },
    { "name": "Chad", "code": "TD" },
    { "name": "Chile", "code": "CL" },
    { "name": "China", "code": "CN" },
    { "name": "Christmas Island", "code": "CX" },
    { "name": "Cocos (Keeling) Islands", "code": "CC" },
    { "name": "Colombia", "code": "CO" },
    { "name": "Comoros", "code": "KM" },
    { "name": "Congo", "code": "CG" },
    { "name": "Congo, The Democratic Republic of the", "code": "CD" },
    { "name": "Cook Islands", "code": "CK" },
    { "name": "Costa Rica", "code": "CR" },
    { "name": "Cote D'Ivoire", "code": "CI" },
    { "name": "Croatia", "code": "HR" },
    { "name": "Cuba", "code": "CU" },
    { "name": "Cyprus", "code": "CY" },
    { "name": "Czech Republic", "code": "CZ" },
    { "name": "Denmark", "code": "DK" },
    { "name": "Djibouti", "code": "DJ" },
    { "name": "Dominica", "code": "DM" },
    { "name": "Dominican Republic", "code": "DO" },
    { "name": "Ecuador", "code": "EC" },
    { "name": "Egypt", "code": "EG" },
    { "name": "El Salvador", "code": "SV" },
    { "name": "Equatorial Guinea", "code": "GQ" },
    { "name": "Eritrea", "code": "ER" },
    { "name": "Estonia", "code": "EE" },
    { "name": "Ethiopia", "code": "ET" },
    { "name": "Falkland Islands (Malvinas)", "code": "FK" },
    { "name": "Faroe Islands", "code": "FO" },
    { "name": "Fiji", "code": "FJ" },
    { "name": "Finland", "code": "FI" },
    { "name": "France", "code": "FR" },
    { "name": "French Guiana", "code": "GF" },
    { "name": "French Polynesia", "code": "PF" },
    { "name": "French Southern Territories", "code": "TF" },
    { "name": "Gabon", "code": "GA" },
    { "name": "Gambia", "code": "GM" },
    { "name": "Georgia", "code": "GE" },
    { "name": "Germany", "code": "DE" },
    { "name": "Ghana", "code": "GH" },
    { "name": "Gibraltar", "code": "GI" },
    { "name": "Greece", "code": "GR" },
    { "name": "Greenland", "code": "GL" },
    { "name": "Grenada", "code": "GD" },
    { "name": "Guadeloupe", "code": "GP" },
    { "name": "Guam", "code": "GU" },
    { "name": "Guatemala", "code": "GT" },
    { "name": "Guernsey", "code": "GG" },
    { "name": "Guinea", "code": "GN" },
    { "name": "Guinea-Bissau", "code": "GW" },
    { "name": "Guyana", "code": "GY" },
    { "name": "Haiti", "code": "HT" },
    { "name": "Heard Island and Mcdonald Islands", "code": "HM" },
    { "name": "Holy See (Vatican City State)", "code": "VA" },
    { "name": "Honduras", "code": "HN" },
    { "name": "Hong Kong", "code": "HK" },
    { "name": "Hungary", "code": "HU" },
    { "name": "Iceland", "code": "IS" },
    { "name": "India", "code": "IN" },
    { "name": "Indonesia", "code": "ID" },
    { "name": "Iran, Islamic Republic Of", "code": "IR" },
    { "name": "Iraq", "code": "IQ" },
    { "name": "Ireland", "code": "IE" },
    { "name": "Isle of Man", "code": "IM" },
    { "name": "Israel", "code": "IL" },
    { "name": "Italy", "code": "IT" },
    { "name": "Jamaica", "code": "JM" },
    { "name": "Japan", "code": "JP" },
    { "name": "Jersey", "code": "JE" },
    { "name": "Jordan", "code": "JO" },
    { "name": "Kazakhstan", "code": "KZ" },
    { "name": "Kenya", "code": "KE" },
    { "name": "Kiribati", "code": "KI" },
    { "name": "Korea, Democratic People'S Republic of", "code": "KP" },
    { "name": "Korea, Republic of", "code": "KR" },
    { "name": "Kuwait", "code": "KW" },
    { "name": "Kyrgyzstan", "code": "KG" },
    { "name": "Lao People'S Democratic Republic", "code": "LA" },
    { "name": "Latvia", "code": "LV" },
    { "name": "Lebanon", "code": "LB" },
    { "name": "Lesotho", "code": "LS" },
    { "name": "Liberia", "code": "LR" },
    { "name": "Libyan Arab Jamahiriya", "code": "LY" },
    { "name": "Liechtenstein", "code": "LI" },
    { "name": "Lithuania", "code": "LT" },
    { "name": "Luxembourg", "code": "LU" },
    { "name": "Macao", "code": "MO" },
    { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" },
    { "name": "Madagascar", "code": "MG" },
    { "name": "Malawi", "code": "MW" },
    { "name": "Malaysia", "code": "MY" },
    { "name": "Maldives", "code": "MV" },
    { "name": "Mali", "code": "ML" },
    { "name": "Malta", "code": "MT" },
    { "name": "Marshall Islands", "code": "MH" },
    { "name": "Martinique", "code": "MQ" },
    { "name": "Mauritania", "code": "MR" },
    { "name": "Mauritius", "code": "MU" },
    { "name": "Mayotte", "code": "YT" },
    { "name": "Mexico", "code": "MX" },
    { "name": "Micronesia, Federated States of", "code": "FM" },
    { "name": "Moldova, Republic of", "code": "MD" },
    { "name": "Monaco", "code": "MC" },
    { "name": "Mongolia", "code": "MN" },
    { "name": "Montserrat", "code": "MS" },
    { "name": "Morocco", "code": "MA" },
    { "name": "Mozambique", "code": "MZ" },
    { "name": "Myanmar", "code": "MM" },
    { "name": "Namibia", "code": "NA" },
    { "name": "Nauru", "code": "NR" },
    { "name": "Nepal", "code": "NP" },
    { "name": "Netherlands", "code": "NL" },
    { "name": "Netherlands Antilles", "code": "AN" },
    { "name": "New Caledonia", "code": "NC" },
    { "name": "New Zealand", "code": "NZ" },
    { "name": "Nicaragua", "code": "NI" },
    { "name": "Niger", "code": "NE" },
    { "name": "Nigeria", "code": "NG" },
    { "name": "Niue", "code": "NU" },
    { "name": "Norfolk Island", "code": "NF" },
    { "name": "Northern Mariana Islands", "code": "MP" },
    { "name": "Norway", "code": "NO" },
    { "name": "Oman", "code": "OM" },
    { "name": "Pakistan", "code": "PK" },
    { "name": "Palau", "code": "PW" },
    { "name": "Palestinian Territory, Occupied", "code": "PS" },
    { "name": "Panama", "code": "PA" },
    { "name": "Papua New Guinea", "code": "PG" },
    { "name": "Paraguay", "code": "PY" },
    { "name": "Peru", "code": "PE" },
    { "name": "Philippines", "code": "PH" },
    { "name": "Pitcairn", "code": "PN" },
    { "name": "Poland", "code": "PL" },
    { "name": "Portugal", "code": "PT" },
    { "name": "Puerto Rico", "code": "PR" },
    { "name": "Qatar", "code": "QA" },
    { "name": "Reunion", "code": "RE" },
    { "name": "Romania", "code": "RO" },
    { "name": "Russian Federation", "code": "RU" },
    { "name": "RWANDA", "code": "RW" },
    { "name": "Saint Helena", "code": "SH" },
    { "name": "Saint Kitts and Nevis", "code": "KN" },
    { "name": "Saint Lucia", "code": "LC" },
    { "name": "Saint Pierre and Miquelon", "code": "PM" },
    { "name": "Saint Vincent and the Grenadines", "code": "VC" },
    { "name": "Samoa", "code": "WS" },
    { "name": "San Marino", "code": "SM" },
    { "name": "Sao Tome and Principe", "code": "ST" },
    { "name": "Saudi Arabia", "code": "SA" },
    { "name": "Senegal", "code": "SN" },
    { "name": "Serbia and Montenegro", "code": "CS" },
    { "name": "Seychelles", "code": "SC" },
    { "name": "Sierra Leone", "code": "SL" },
    { "name": "Singapore", "code": "SG" },
    { "name": "Slovakia", "code": "SK" },
    { "name": "Slovenia", "code": "SI" },
    { "name": "Solomon Islands", "code": "SB" },
    { "name": "Somalia", "code": "SO" },
    { "name": "South Africa", "code": "ZA" },
    { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
    { "name": "Spain", "code": "ES" },
    { "name": "Sri Lanka", "code": "LK" },
    { "name": "Sudan", "code": "SD" },
    { "name": "Suriname", "code": "SR" },
    { "name": "Svalbard and Jan Mayen", "code": "SJ" },
    { "name": "Swaziland", "code": "SZ" },
    { "name": "Sweden", "code": "SE" },
    { "name": "Switzerland", "code": "CH" },
    { "name": "Syrian Arab Republic", "code": "SY" },
    { "name": "Taiwan, Province of China", "code": "TW" },
    { "name": "Tajikistan", "code": "TJ" },
    { "name": "Tanzania, United Republic of", "code": "TZ" },
    { "name": "Thailand", "code": "TH" },
    { "name": "Timor-Leste", "code": "TL" },
    { "name": "Togo", "code": "TG" },
    { "name": "Tokelau", "code": "TK" },
    { "name": "Tonga", "code": "TO" },
    { "name": "Trinidad and Tobago", "code": "TT" },
    { "name": "Tunisia", "code": "TN" },
    { "name": "Turkey", "code": "TR" },
    { "name": "Turkmenistan", "code": "TM" },
    { "name": "Turks and Caicos Islands", "code": "TC" },
    { "name": "Tuvalu", "code": "TV" },
    { "name": "Uganda", "code": "UG" },
    { "name": "Ukraine", "code": "UA" },
    { "name": "United Arab Emirates", "code": "AE" },
    { "name": "United Kingdom", "code": "GB" },
    { "name": "United States", "code": "US" },
    { "name": "United States Minor Outlying Islands", "code": "UM" },
    { "name": "Uruguay", "code": "UY" },
    { "name": "Uzbekistan", "code": "UZ" },
    { "name": "Vanuatu", "code": "VU" },
    { "name": "Venezuela", "code": "VE" },
    { "name": "Viet Nam", "code": "VN" },
    { "name": "Virgin Islands, British", "code": "VG" },
    { "name": "Virgin Islands, U.S.", "code": "VI" },
    { "name": "Wallis and Futuna", "code": "WF" },
    { "name": "Western Sahara", "code": "EH" },
    { "name": "Yemen", "code": "YE" },
    { "name": "Zambia", "code": "ZM" },
    { "name": "Zimbabwe", "code": "ZW" }
];

// function/fungsi yang d jalankan ketika browser di load
function loadPertamaKali() {
    // jalankan function/fungsi menampilkan data semua negara dan menu alphabet
    tampilkanDataNegara();
    tampilkanMenuAlphabet();
}

function tampilkanDataNegara(){
    // sortir data negara lalu urutkan berdasarkan alphabet (A - Z)
    var sorted = negara.sort((a, b) => a.name > b.name ? 1 : -1);

    // data yang sudah di sortir di groupkan berdasarkan huruf awalan negara
    var grouped = sorted.reduce((groups, namaNegara) => {
        var letter = namaNegara.name.charAt(0);

        groups[letter] = groups[letter] || [];
        groups[letter].push(namaNegara);

        return groups;
    }, {});

    // hasil grouping lalu di simpan di variable dataNegara
    var dataNegara = Object.keys(grouped).map(key => ({ key, data: grouped[key] }));

    var isNegara = '';

    // looping data negara yang sudah di sortir dan di grouping by alphabet
    dataNegara.forEach(function (data, index) {
        isNegara += '<div class="badge badge-primary pb-1 pt-1">' + data.key + '</div>' +
            '<div class="row">';
        data.data.forEach(function (item, i) {
            // jika data negara berdasarkan alphabet kurang dari 7
            if (data.data.length < 7) {
                isNegara += '<div class="col-12">' + item.name + '</div>';

            // jika data negara berdasarkan alphabet tidak kurang dari 7 atau lebih dari 6
            } else {
                isNegara += '<div class="col-6 col-md-4">' + item.name + '</div>';
            }
        });
        isNegara += '</div><br/>';
    });

    // hasil loopingan tampilkan pada tag html dengan properti id="negara"
    document.getElementById('negara').innerHTML = isNegara;
}

// function/fungsi untuk mencari data negara di jalankan oleh event oninput pada properti tag input di html
function cariData() {

    // hasil inputan pada form search di simpan pada variable cari
    var cari = document.getElementById('cari').value;

    // jika inputan form search tidak kosong
    if (cari != '' || cari != undefined) {

        // filter data negara berdasarkan inputan pada form search
        var temp = negara.filter(function (data) {
            return data.name.toLowerCase().indexOf(cari.toLowerCase()) > -1;
        });

        // sortir data negara berdasarkan inputan form search lalu urutkan berdasarkan alphabet (A - Z)
        var sorted = temp.sort((a, b) => a.name > b.name ? 1 : -1);

        // data yang sudah di sortir di groupkan berdasarkan huruf awalan negara
        var grouped = sorted.reduce((groups, namaNegara) => {
            var letter = namaNegara.name.charAt(0);

            groups[letter] = groups[letter] || [];
            groups[letter].push(namaNegara);

            return groups;
        }, {});

        // hasil grouping lalu di simpan di variable dataNegara
        var dataNegara = Object.keys(grouped).map(key => ({ key, data: grouped[key] }));

        var isNegara = '';

        // jika data hasil cari tidak ada
        if(dataNegara.length == 0){
            isNegara += '<div class="text-center text-danger">Data dengan kata kunci <strong>'+cari+' </strong>tidak ada euyyyyy</div>';

        // jika data hasil cari ada
        }else{
            // looping data negara yang sudah di sortir dan di grouping by alphabet
            dataNegara.forEach(function (data, index) {
                isNegara += '<div class="badge badge-primary pb-1 pt-1">' + data.key + '</div>' +
                    '<div class="row">';
                data.data.forEach(function (item, i) {
                    // jika data negara berdasarkan alphabet kurang dari 7
                    if (data.data.length < 7) {
                        isNegara += '<div class="col-12">' + item.name + '</div>';

                    // jika data negara berdasarkan alphabet tidak kurang dari 7 atau lebih dari 6
                    } else {
                        isNegara += '<div class="col-6 col-md-4">' + item.name + '</div>';
                    }
                });
                isNegara += '</div><br/>';
            });
        }

        // hasil loopingan tampilkan pada tag html dengan properti id="negara"
        document.getElementById('negara').innerHTML = isNegara;

        // jika inputan form search kosong
    } else {

        // load function/fungsi yang d jalankan ketika browser di load
        tampilkanDataNegara();
    }
}

// buat function untuk looping menu alphabet A - Z
function tampilkanMenuAlphabet(){
    // variable array data alphabet A - Z
    var alphabet = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var kutip = "'";
    var isAlphabet = '';
    // looping data alphabet yang ada pada variable alphabet
    alphabet.forEach(function(data, index){
        isAlphabet += '<a style="font-size: 16px;margin-bottom: 5px;" href="#" id="by" class="badge badge-info" onclick="negaraByAlphabet('+kutip+data+kutip+')">'+data+'</a>&nbsp;&nbsp;&nbsp;';
    });
    // suntikkan isi variable isAlphabet ke dalam tag html dengan properti id="alphabet"
    document.getElementById('alphabet').innerHTML = isAlphabet;
}

// cari data negara berdasarkan huruf awalan
function negaraByAlphabet(by){
    // jika alphabet yang di pilih #
    if(by == '#'){
        tampilkanDataNegara();
    
    // jika alphabet yang di pilih bukan #
    }else{
        var results = [];
        var dataNegara = '';
        negara.forEach(function(data, index){
            if(data.name.indexOf(by) == 0) results.push(data);
        });
        // sortir data negara berdasarkan huruf awalan yang di pilih lalu urutkan berdasarkan alphabet (A - Z)
        var sorted = results.sort((a, b) => a.name > b.name ? 1 : -1);

        // data yang sudah di sortir di groupkan berdasarkan huruf awalan negara
        var grouped = sorted.reduce((groups, namaNegara) => {
            var letter = namaNegara.name.charAt(0);

            groups[letter] = groups[letter] || [];
            groups[letter].push(namaNegara);

            return groups;
        }, {});

        // hasil grouping lalu di simpan di variable dataNegara
        var dataNegara = Object.keys(grouped).map(key => ({ key, data: grouped[key] }));

        var isNegara = '';

        // jika data berdasarkan huruf awalan ada
        if(dataNegara.length == 0){
            isNegara += '<div class="text-center text-danger">Data dengan huruf awalan <strong>'+by+' </strong>tidak ada euyyyyy</div>';

        // jika data berdasarkan huruf awalan tidak ada
        }else{
            // looping data negara yang sudah di sortir dan di grouping by alphabet
            dataNegara.forEach(function (data, index) {
                isNegara += '<div class="badge badge-primary pb-1 pt-1">' + data.key + '</div>' +
                    '<div class="row">';
                data.data.forEach(function (item, i) {
                    // jika data negara berdasarkan alphabet kurang dari 7
                    if (data.data.length < 7) {
                        isNegara += '<div class="col-12">' + item.name + '</div>';

                    // jika data negara berdasarkan alphabet tidak kurang dari 7 atau lebih dari 6
                    } else {
                        isNegara += '<div class="col-6 col-md-4">' + item.name + '</div>';
                    }
                });
                isNegara += '</div><br/>';
            });
        }

        // hasil loopingan tampilkan pada tag html dengan properti id="negara"
        document.getElementById('negara').innerHTML = isNegara;
    }
}