import * as React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

export default function Autocomp() {
  let quraaIds = {
    "محمد صديق المنشاوي": 1,
    "عبدالباسط عبدالصمد": 2,
    "ياسر الدوسري": 3,
    "محمد رفعت": 4,
    "حسن صالح": 5,
    "ناصر القطامي": 6,
    "محمود علي البنا": 7,
    'مشاري راشد':8,
    'خالد الخليل':9,
    'محمود خليل الحصري':10,
    'محمد نورين صديق':11,
    'عبد الرحمن السديس':12,
    'سعود الشريم':13,
    'محمد البراك':14,
    'عبد الله بصفر':15,
    'إدريس أبكر':16,
    'محمد الطبلاوي':17,
    'محمد المحيسني':18,
    'عبد الله المطرود':19,
    'سعد الغامدي':20,
    'محمد اللحيدان':21,
    'مصطفى إسماعيل':22,
    'عبدالله الكندري':23,
    'علي جابر':24,
    'إبراهيم الأخضر':25,
    'ماهر المعيقلي':26,
    'أحمد العجمي':27,
    'عمر القزابري':28,
    'عبد الله خياط':29,
  };
  

  const top100Films = [
    { label: "محمد صديق المنشاوي"},
    { label: "عبدالباسط عبدالصمد"},
    { label: "ياسر الدوسري"},
    { label: "محمد رفعت"},
    { label: "حسن صالح"},
    { label:"ناصر القطامي"},
    { label:"محمود علي البنا"},
    {label:"مشاري راشد"},
    {label:"خالد الخليل"},
    {label:"محمود خليل الحصري"},
    {label:"محمد نورين صديق"},
    {label:"عبد الرحمن السديس"},
    {label:"سعود الشريم"},
    {label:"محمد البراك"},
    {label:"عبد الله بصفر"},
    {label:"إدريس أبكر"},
    {label:"محمد الطبلاوي"},
    {label:"محمد المحيسني"},
    {label:"عبد الله المطرود"},
    {label:"سعد الغامدي"},
    {label:"محمد اللحيدان"},
    {label:"مصطفى إسماعيل"},
    {label:"عبدالله الكندري"},
    {label:"علي جابر"},
    {label:"إبراهيم الأخضر"},
    {label:"ماهر المعيقلي"},
    {label:"أحمد العجمي"},
    {label:"عمر القزابري"},
    {label:"عبد الله خياط"},

  ];
  const navigate = useNavigate();

  function selectFun(e){
    window.scrollTo(0,0)
    let target=e.target.value;
    let id=quraaIds[target]
    if(id){
    navigate(`/${id}`)
  }
  }


  return (
    <Autocomplete
      sx={{ marginTop: '-40px' }}
      freeSolo
      options={top100Films.map((option) => option.label)}
      renderInput={(params) => (
        
        <TextField
          {...params}
          placeholder="أسم القارئ..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <SearchIcon style={{ color: 'white' }} />
            ),
            style: { color: 'white' }
          }}
        />
      )}
      onSelect={selectFun}
      ListboxProps={{
        style: { background: '#222222', color: 'white' }
      }}
      
    />
  );
}
